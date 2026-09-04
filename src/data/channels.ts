import { Channel, AppRelease } from '../types';

export const CURRENT_RELEASE: AppRelease = {
  version: 'v2.0',
  releaseDate: 'September 2026',
  fileSize: '20.6 MB',
  fileName: 'NRT.STREAM_2.0.apk',
  minAndroid: 'Android 7.0 (Nougat) or higher',
  recommendedAndroid: 'Android 10 - Android 15+ (incl. Android TV 14/15)',
  downloaderCode: '984210',
  sha256: '0465bbb3de721762c55974e6e340cf3b381b18fe50f905567062bdf84b8313b2',
  githubRepo: 'https://github.com/abukayuum/NRT-Live-Stream-APK',
  releasesUrl: 'https://github.com/abukayuum/NRT-Live-Stream-APK/releases',
  latestReleaseUrl: 'https://github.com/abukayuum/NRT-Live-Stream-APK/releases/latest',
  directApkUrl: 'https://github.com/abukayuum/NRT-Live-Stream-APK/releases/download/2.0/NRT.STREAM_2.0.apk',
  downloadUrl: 'https://github.com/abukayuum/NRT-Live-Stream-APK/releases/download/2.0/NRT.STREAM_2.0.apk',
  changelog: [
    'Official GitHub Release v2.0 with enhanced broadcasting stability',
    'Integrated Multi-Server Auto-Fallback engine for zero buffering',
    'Full hardware acceleration support for Android TV remote controls (D-Pad)',
    'Ultra-low latency live sports synchronization (under 3 seconds delay)',
    'Added 4K 60FPS HEVC/H.265 playback profile for high-end Smart TVs',
    'Optimized memory footprint for entry-level Android TV Sticks and 1GB RAM boxes',
    'Custom player buffer controls for high-speed & mobile 3G/4G/5G connections'
  ]
};

export const CHANNELS_DATA: Channel[] = [
  // Live Sports
  {
    id: 'ch-sp-1',
    name: 'Sky Sports Main Event',
    category: 'sports',
    region: 'UK / Global',
    quality: '4K UHD',
    badge: 'Premier League Live',
    icon: 'Trophy',
    status: 'live',
    currentEvent: 'Arsenal vs Manchester City - Matchday 28'
  },
  {
    id: 'ch-sp-2',
    name: 'beIN Sports Premium 1',
    category: 'sports',
    region: 'Middle East / International',
    quality: '1080p 60fps',
    badge: 'UCL Night',
    icon: 'Activity',
    status: 'live',
    currentEvent: 'UEFA Champions League: Real Madrid vs Bayern'
  },
  {
    id: 'ch-sp-3',
    name: 'Star Sports 1 HD / Cricket',
    category: 'sports',
    region: 'South Asia / Global',
    quality: '1080p 60fps',
    badge: 'Live Cricket',
    icon: 'Radio',
    status: 'live',
    currentEvent: 'ICC World Championship Finals - Day 3'
  },
  {
    id: 'ch-sp-4',
    name: 'TNT Sports 1 (BT)',
    category: 'sports',
    region: 'Europe / UK',
    quality: '4K UHD',
    badge: 'Champions Cup',
    icon: 'Tv',
    status: 'live',
    currentEvent: 'European Rugby Championship & UFC Fight Night'
  },
  {
    id: 'ch-sp-5',
    name: 'Willow Cricket HD',
    category: 'sports',
    region: 'USA / Canada',
    quality: '1080p 60fps',
    badge: 'T20 League',
    icon: 'Zap',
    status: 'live',
    currentEvent: 'Major League Cricket - Super Over Live'
  },
  {
    id: 'ch-sp-6',
    name: 'SuperSport Grandstand',
    category: 'sports',
    region: 'Africa / Global',
    quality: '1080p 60fps',
    badge: 'Motorsport & Golf',
    icon: 'Flame',
    status: 'live',
    currentEvent: 'Formula 1 Grand Prix - Practice & Qualifying'
  },
  {
    id: 'ch-sp-7',
    name: 'Sony Sports Ten 1 HD',
    category: 'sports',
    region: 'Asia Pacific',
    quality: '1080p 60fps',
    badge: 'WWE Raw / Smackdown',
    icon: 'Shield',
    status: 'live',
    currentEvent: 'WWE Live Worldwide Broadcast'
  },
  {
    id: 'ch-sp-8',
    name: 'ESPN / ESPN2 HD',
    category: 'sports',
    region: 'USA / Americas',
    quality: '1080p 60fps',
    badge: 'NBA & NFL',
    icon: 'Award',
    status: 'live',
    currentEvent: 'NBA Finals Game 5 - Live Studio'
  },

  // News Channels
  {
    id: 'ch-nw-1',
    name: 'BBC World News HD',
    category: 'news',
    region: 'Global / UK',
    quality: '1080p 60fps',
    badge: '24/7 Global',
    icon: 'Globe',
    status: 'live',
    currentEvent: 'Global Business & International Hourly Bulletin'
  },
  {
    id: 'ch-nw-2',
    name: 'CNN International',
    category: 'news',
    region: 'USA / Worldwide',
    quality: 'FHD',
    badge: 'Breaking News',
    icon: 'Radio',
    status: 'live',
    currentEvent: 'World Live Connect with Christiane Amanpour'
  },
  {
    id: 'ch-nw-3',
    name: 'Al Jazeera English HD',
    category: 'news',
    region: 'International',
    quality: '1080p 60fps',
    badge: 'In-Depth',
    icon: 'Compass',
    status: 'live',
    currentEvent: 'Global South Insight & Investigative Reports'
  },
  {
    id: 'ch-nw-4',
    name: 'Sky News UK HD',
    category: 'news',
    region: 'UK / Europe',
    quality: '1080p 60fps',
    badge: 'Live News',
    icon: 'Tv',
    status: 'live',
    currentEvent: 'Sky News at Ten Live from London'
  },

  // Entertainment & Movies
  {
    id: 'ch-ent-1',
    name: 'HBO Max Channel 1 HD',
    category: 'movies',
    region: 'USA / Global',
    quality: '4K UHD',
    badge: 'Blockbuster',
    icon: 'Film',
    status: 'live',
    currentEvent: 'Dune: Part Two (Dolby 5.1 Audio)'
  },
  {
    id: 'ch-ent-2',
    name: 'Star Movies Select HD',
    category: 'movies',
    region: 'Asia / Worldwide',
    quality: '1080p 60fps',
    badge: 'Premiere',
    icon: 'Clapperboard',
    status: 'live',
    currentEvent: 'Oppenheimer - High Bitrate Premiere'
  },
  {
    id: 'ch-ent-3',
    name: 'Cinemax Action HD',
    category: 'movies',
    region: 'International',
    quality: '1080p 60fps',
    badge: 'Action Marathon',
    icon: 'Video',
    status: 'live',
    currentEvent: 'John Wick: Chapter 4 4K Stream'
  },
  {
    id: 'ch-ent-4',
    name: 'Colors HD / Star Plus',
    category: 'entertainment',
    region: 'South Asia / Global',
    quality: '1080p 60fps',
    badge: 'Drama & Shows',
    icon: 'Sparkles',
    status: 'live',
    currentEvent: 'Prime Time Entertainment & Reality Show'
  },

  // Documentaries & Kids
  {
    id: 'ch-doc-1',
    name: 'National Geographic Wild HD',
    category: 'documentary',
    region: 'Worldwide',
    quality: '4K UHD',
    badge: 'Nature 4K',
    icon: 'Compass',
    status: 'live',
    currentEvent: 'Predators of the Serengeti in Ultra HD'
  },
  {
    id: 'ch-doc-2',
    name: 'Discovery Science HD',
    category: 'documentary',
    region: 'Worldwide',
    quality: '1080p 60fps',
    badge: 'Space & Tech',
    icon: 'Cpu',
    status: 'live',
    currentEvent: 'Deep Universe: James Webb Revelations'
  },
  {
    id: 'ch-kids-1',
    name: 'Cartoon Network & Boomerang HD',
    category: 'kids',
    region: 'Global',
    quality: '1080p 60fps',
    badge: 'Kids & Anime',
    icon: 'Smile',
    status: 'live',
    currentEvent: 'Ben 10 & Classic Animation Block'
  },
  {
    id: 'ch-reg-1',
    name: 'Worldwide Regional Stream Hub',
    category: 'regional',
    region: 'Multi-Region (US, UK, BD, IN, PK, AR, EU)',
    quality: '1080p 60fps',
    badge: '180+ Countries',
    icon: 'Layers',
    status: 'live',
    currentEvent: 'Seamless Geo-Routed Local Television Channels'
  }
];
