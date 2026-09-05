import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { AppRelease, GitHubReleaseItem } from '../types';
import { CURRENT_RELEASE } from '../data/channels';
import { fetchGitHubReleases } from '../services/githubService';

interface ReleaseContextType {
  currentRelease: AppRelease;
  allReleases: GitHubReleaseItem[];
  isLoading: boolean;
  isRefreshing: boolean;
  isLiveSynced: boolean;
  lastChecked: Date | null;
  totalDownloads: number;
  error: string | null;
  refreshReleases: (force?: boolean) => Promise<void>;
}

const ReleaseContext = createContext<ReleaseContextType | undefined>(undefined);

export const ReleaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRelease, setCurrentRelease] = useState<AppRelease>(CURRENT_RELEASE);
  const [allReleases, setAllReleases] = useState<GitHubReleaseItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isLiveSynced, setIsLiveSynced] = useState<boolean>(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);
  const [totalDownloads, setTotalDownloads] = useState<number>(CURRENT_RELEASE.totalDownloads || 28);
  const [error, setError] = useState<string | null>(null);

  const loadReleases = useCallback(async (force = false) => {
    if (force) {
      setIsRefreshing(true);
    }
    setError(null);

    try {
      const result = await fetchGitHubReleases(force);
      setCurrentRelease(result.latestRelease);
      setAllReleases(result.allReleases);
      setTotalDownloads(result.totalDownloads);
      setIsLiveSynced(true);
      setLastChecked(new Date());
    } catch (err: any) {
      console.error('Error in loadReleases:', err);
      setError(err?.message || 'Failed to fetch GitHub releases');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  // Initial load on mount
  useEffect(() => {
    loadReleases(false);

    // Periodic background sync every 3 minutes
    const interval = setInterval(() => {
      loadReleases(false);
    }, 3 * 60 * 1000);

    return () => clearInterval(interval);
  }, [loadReleases]);

  return (
    <ReleaseContext.Provider
      value={{
        currentRelease,
        allReleases,
        isLoading,
        isRefreshing,
        isLiveSynced,
        lastChecked,
        totalDownloads,
        error,
        refreshReleases: (force = true) => loadReleases(force)
      }}
    >
      {children}
    </ReleaseContext.Provider>
  );
};

export const useRelease = (): ReleaseContextType => {
  const context = useContext(ReleaseContext);
  if (!context) {
    throw new Error('useRelease must be used within a ReleaseProvider');
  }
  return context;
};
