import { AppRelease, GitHubReleaseItem, GitHubReleaseAsset } from '../types';
import { CURRENT_RELEASE } from '../data/channels';

const GITHUB_OWNER = 'abukayuum';
const GITHUB_REPO = 'NRT-Live-Stream-APK';
const RELEASES_API_URL = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases`;
const CACHE_KEY = 'nrt_stream_github_releases_v2';
const CACHE_TTL_MS = 2 * 60 * 1000; // 2 minutes cache for auto-refresh

interface CachedData {
  timestamp: number;
  releases: GitHubReleaseItem[];
  latestRelease: AppRelease;
  totalDownloads: number;
}

// Helper to format byte sizes
function formatBytes(bytes: number): string {
  if (!bytes || isNaN(bytes)) return '20 MB';
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

// Helper to format date
function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return 'September 2026';
  }
}

// Extract SHA256 from digest string or release notes body
function extractSha256(digest?: string, body?: string): string {
  if (digest) {
    const match = digest.match(/sha256:([a-f0-9]{64})/i);
    if (match) return match[1];
  }
  if (body) {
    const match = body.match(/([a-f0-9]{64})/i);
    if (match) return match[1];
  }
  return CURRENT_RELEASE.sha256;
}

// Parse release changelog body
function parseChangelog(body?: string, tagName?: string): string[] {
  if (!body || body.trim().length === 0) {
    return [
      `Official NRT STREAM ${tagName || '3.0'} update released on GitHub`,
      'Performance optimizations and live streaming stability updates',
      'Multi-server low latency sync'
    ];
  }

  const lines = body
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line.length > 0 && !line.startsWith('###') && !line.startsWith('---'));

  if (lines.length === 0) {
    return [`Release ${tagName || '3.0'}: App updated and streaming performance improved`];
  }

  // Clean markdown list bullets (*, -, +)
  return lines.map(line => line.replace(/^[*+-]\s*/, '').trim());
}

export async function fetchGitHubReleases(forceRefresh = false): Promise<{
  latestRelease: AppRelease;
  allReleases: GitHubReleaseItem[];
  totalDownloads: number;
  fromCache: boolean;
}> {
  // Check local cache if not forcing refresh
  if (!forceRefresh && typeof window !== 'undefined') {
    try {
      const cachedStr = localStorage.getItem(CACHE_KEY);
      if (cachedStr) {
        const cached: CachedData = JSON.parse(cachedStr);
        const age = Date.now() - cached.timestamp;
        if (age < CACHE_TTL_MS && cached.latestRelease) {
          return {
            latestRelease: { ...cached.latestRelease, isLiveSynced: true },
            allReleases: cached.releases,
            totalDownloads: cached.totalDownloads,
            fromCache: true
          };
        }
      }
    } catch (err) {
      console.warn('Failed to read releases cache:', err);
    }
  }

  try {
    const response = await fetch(RELEASES_API_URL, {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned status: ${response.status} ${response.statusText}`);
    }

    const rawReleases = await response.json();

    if (!Array.isArray(rawReleases) || rawReleases.length === 0) {
      throw new Error('No releases found in GitHub repository');
    }

    let overallDownloads = 0;
    const parsedReleases: GitHubReleaseItem[] = [];

    for (const rel of rawReleases) {
      // Look for .apk asset
      const assets = rel.assets || [];
      const apkAssetRaw = assets.find((a: any) => a.name?.toLowerCase().endsWith('.apk')) || assets[0];

      let apkAsset: GitHubReleaseAsset | undefined = undefined;
      if (apkAssetRaw) {
        const downloads = apkAssetRaw.download_count || 0;
        overallDownloads += downloads;

        apkAsset = {
          id: apkAssetRaw.id,
          name: apkAssetRaw.name || `NRT.STREAM_${rel.tag_name}.apk`,
          size: apkAssetRaw.size || 0,
          downloadCount: downloads,
          browserDownloadUrl: apkAssetRaw.browser_download_url || rel.html_url,
          digest: apkAssetRaw.digest,
          updatedAt: apkAssetRaw.updated_at || rel.published_at
        };
      }

      parsedReleases.push({
        id: rel.id,
        tagName: rel.tag_name,
        name: rel.name || `NRT STREAM ${rel.tag_name}`,
        publishedAt: rel.published_at || rel.created_at,
        createdAt: rel.created_at,
        body: rel.body || '',
        htmlUrl: rel.html_url,
        isPrerelease: !!rel.prerelease,
        apkAsset
      });
    }

    // Determine the latest public release (skip drafts/prereleases if stable available)
    const latestRaw = parsedReleases.find(r => !r.isPrerelease) || parsedReleases[0];
    const rawTag = latestRaw.tagName || '3.0';
    const displayVersion = rawTag.startsWith('v') ? rawTag : `v${rawTag}`;
    const apkAsset = latestRaw.apkAsset;

    const dynamicLatestRelease: AppRelease = {
      version: displayVersion,
      tagName: rawTag,
      releaseDate: formatDate(latestRaw.publishedAt),
      publishedAt: latestRaw.publishedAt,
      fileSize: apkAsset ? formatBytes(apkAsset.size) : CURRENT_RELEASE.fileSize,
      fileName: apkAsset?.name || `NRT.STREAM_${rawTag}.apk`,
      minAndroid: 'Android 7.0 (Nougat) or higher',
      recommendedAndroid: 'Android 10 - Android 15+ (Smart TVs & Sticks)',
      downloaderCode: CURRENT_RELEASE.downloaderCode, // Stable downloader code
      sha256: extractSha256(apkAsset?.digest, latestRaw.body),
      githubRepo: `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`,
      releasesUrl: `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases`,
      latestReleaseUrl: `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/tag/${rawTag}`,
      directApkUrl: apkAsset?.browserDownloadUrl || `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/download/${rawTag}/NRT.STREAM_${rawTag}.apk`,
      downloadUrl: apkAsset?.browserDownloadUrl || `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/download/${rawTag}/NRT.STREAM_${rawTag}.apk`,
      totalDownloads: overallDownloads,
      changelog: parseChangelog(latestRaw.body, rawTag),
      isLiveSynced: true
    };

    // Save to cache
    if (typeof window !== 'undefined') {
      try {
        const cachePayload: CachedData = {
          timestamp: Date.now(),
          releases: parsedReleases,
          latestRelease: dynamicLatestRelease,
          totalDownloads: overallDownloads
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cachePayload));
      } catch (err) {
        console.warn('Failed to cache GitHub release data:', err);
      }
    }

    return {
      latestRelease: dynamicLatestRelease,
      allReleases: parsedReleases,
      totalDownloads: overallDownloads,
      fromCache: false
    };
  } catch (error) {
    console.error('GitHub Releases Fetch Error:', error);
    // Return baseline CURRENT_RELEASE if fetch fails
    return {
      latestRelease: { ...CURRENT_RELEASE, isLiveSynced: false },
      allReleases: [
        {
          id: 383320356,
          tagName: '3.0',
          name: 'NRT STREAM 3.0',
          publishedAt: '2026-09-05T17:35:48Z',
          createdAt: '2026-09-04T14:09:22Z',
          body: 'App Updated\r\nBug fixed',
          htmlUrl: 'https://github.com/abukayuum/NRT-Live-Stream-APK/releases/tag/3.0',
          isPrerelease: false,
          apkAsset: {
            id: 546095510,
            name: 'NRT.STREAM_3.0.apk',
            size: 20894233,
            downloadCount: 5,
            browserDownloadUrl: 'https://github.com/abukayuum/NRT-Live-Stream-APK/releases/download/3.0/NRT.STREAM_3.0.apk',
            digest: 'sha256:5bf17705c98399b2717de590418c8b3d11e189e72a63ab230234b4be47b5c888',
            updatedAt: '2026-09-05T17:35:42Z'
          }
        },
        {
          id: 382761897,
          tagName: '2.0',
          name: 'NRT STREAM 2.0',
          publishedAt: '2026-09-04T13:46:14Z',
          createdAt: '2026-09-04T13:38:08Z',
          body: 'New updated',
          htmlUrl: 'https://github.com/abukayuum/NRT-Live-Stream-APK/releases/tag/2.0',
          isPrerelease: false,
          apkAsset: {
            id: 544400642,
            name: 'NRT.STREAM_2.0.apk',
            size: 21555065,
            downloadCount: 23,
            browserDownloadUrl: 'https://github.com/abukayuum/NRT-Live-Stream-APK/releases/download/2.0/NRT.STREAM_2.0.apk',
            digest: 'sha256:0465bbb3de721762c55974e6e340cf3b381b18fe50f905567062bdf84b8313b2',
            updatedAt: '2026-09-04T13:45:06Z'
          }
        }
      ],
      totalDownloads: 28,
      fromCache: false
    };
  }
}
