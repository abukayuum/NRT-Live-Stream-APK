export interface Channel {
  id: string;
  name: string;
  category: 'sports' | 'news' | 'entertainment' | 'movies' | 'kids' | 'documentary' | 'regional';
  region: string;
  quality: '4K UHD' | '1080p 60fps' | 'FHD' | 'HD';
  badge?: string;
  icon: string;
  status: 'live' | 'upcoming';
  currentEvent?: string;
}

export interface ServerNode {
  id: string;
  name: string;
  location: string;
  regionCode: string;
  ping: number;
  load: number;
  bandwidth: string;
  status: 'online' | 'degraded' | 'maintenance';
  activeStreams: number;
}

export interface FaqItem {
  question: string;
  questionBn: string;
  answer: string;
  answerBn: string;
  category: 'general' | 'installation' | 'troubleshooting' | 'servers';
}

export interface AppRelease {
  version: string;
  releaseDate: string;
  fileSize: string;
  minAndroid: string;
  recommendedAndroid: string;
  downloaderCode: string;
  sha256: string;
  domain: string;
  downloadUrl: string;
  changelog: string[];
}
