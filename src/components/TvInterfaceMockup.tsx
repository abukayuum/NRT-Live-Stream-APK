import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Volume2, 
  Wifi, 
  Radio, 
  Cast, 
  Layers, 
  Sliders, 
  Clock, 
  Activity, 
  ShieldCheck,
  CheckCircle2,
  Tv,
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface TvInterfaceMockupProps {
  lang: 'en' | 'bn';
}

export const TvInterfaceMockup: React.FC<TvInterfaceMockupProps> = ({ lang }) => {
  const [activeChannelIdx, setActiveChannelIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [matchMinutes, setMatchMinutes] = useState(74);

  const previewChannels = [
    {
      name: 'Sky Sports Main Event UHD',
      match: 'Arsenal 2 - 1 Manchester City',
      league: 'Premier League Matchday 28',
      bitrate: '18.4 Mbps',
      fps: '60 FPS',
      resolution: '3840x2160 (4K)',
      tag: 'LIVE 4K'
    },
    {
      name: 'beIN Sports 1 English HD',
      match: 'Real Madrid 3 - 2 Bayern Munich',
      league: 'UEFA Champions League Quarterfinal',
      bitrate: '12.2 Mbps',
      fps: '60 FPS',
      resolution: '1920x1080 FHD',
      tag: 'UCL LIVE'
    },
    {
      name: 'Star Sports 1 HD / Cricket',
      match: 'IND 284/4 (44.2 ov) vs AUS',
      league: 'ICC World Championship Live',
      bitrate: '10.8 Mbps',
      fps: '60 FPS',
      resolution: '1920x1080 FHD',
      tag: 'CRICKET 60FPS'
    },
    {
      name: 'TNT Sports 1 / UFC Fight Night',
      match: 'Main Card: Lightweight Title Bout',
      league: 'Live from Las Vegas, NV',
      bitrate: '14.5 Mbps',
      fps: '60 FPS',
      resolution: '4K UHD HDR',
      tag: 'COMBAT 4K'
    }
  ];

  const currentChannel = previewChannels[activeChannelIdx];

  useEffect(() => {
    const timer = setInterval(() => {
      setMatchMinutes((prev) => (prev >= 90 ? 1 : prev + 1));
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-black/95 border border-cyan-500/30 shadow-[0_0_50px_-12px_rgba(6,182,212,0.25)]">
      {/* Ambient Glow */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-cyan-500/20 blur-3xl -z-10 pointer-events-none rounded-full" />

      {/* TV Screen Container */}
      <div className="relative rounded-2xl overflow-hidden bg-[#05070c] border border-slate-800 aspect-[16/9] flex flex-col justify-between select-none shadow-2xl">
        
        {/* Background Visual Graphic (Sports Broadcast Simulation) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-10" />
          
          {/* Pitch & Arena lights graphic */}
          <div className="w-full h-full bg-[#08131d] relative overflow-hidden flex items-center justify-center">
            {/* Field lines */}
            <div className="absolute inset-0 opacity-25">
              <div className="w-full h-1/2 border-b-2 border-emerald-400/40" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-emerald-400/40" />
              <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 border-2 border-emerald-400/20 rounded-xl" />
            </div>

            {/* Dynamic visual aura */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[90px] animate-pulse" />
            <div className="absolute right-10 top-10 w-72 h-72 rounded-full bg-blue-600/15 blur-[80px]" />
          </div>
        </div>

        {/* Top TV Bar: Brand, Time, Channel Badge, Stream Stats */}
        <div className="relative z-20 flex items-center justify-between p-4 sm:p-6 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-cyan-500/40 text-cyan-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>NRT STREAM</span>
              <span className="text-[10px] text-slate-400 font-normal ml-1">v3.8.4</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-slate-700 text-slate-300">
              <Radio className="w-3.5 h-3.5 text-cyan-400" />
              <span>Global CDN: Server #01 (14ms)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold text-[11px] flex items-center gap-1">
              <Activity className="w-3 h-3" />
              {currentChannel.tag}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold text-[11px]">
              {currentChannel.resolution}
            </span>
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-md bg-black/50 border border-slate-700 text-slate-300 font-mono text-[11px]">
              {currentChannel.fps}
            </span>
          </div>
        </div>

        {/* Center: Live Match Scoreboard & Arena Info */}
        <div className="relative z-20 px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs text-slate-300">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>{currentChannel.league} • {matchMinutes}' MIN LIVE</span>
          </div>

          <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
            {currentChannel.match}
          </h3>

          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Buffer Health: 100% (Zero Lag)</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-1.5 font-mono text-cyan-300">
              <span>Bitrate: {currentChannel.bitrate}</span>
            </div>
          </div>
        </div>

        {/* Bottom TV Bar: Channel Switcher & Android TV D-Pad Hint */}
        <div className="relative z-20 p-4 sm:p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
          <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Tv className="w-4 h-4 text-cyan-400" />
              {lang === 'en' ? 'Quick Channel Selector (Android TV Remote Ready):' : 'চ্যানেল সিলেক্টর (রিমোট কন্ট্রোল রেডি):'}
            </span>
            <span className="text-[11px] text-cyan-400/90 hidden sm:inline">
              {lang === 'en' ? 'Use D-Pad or Click to Switch' : 'ক্লিক করে চ্যানেল টেস্ট করুন'}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {previewChannels.map((chan, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChannelIdx(idx)}
                className={`p-2.5 rounded-xl text-left transition-all backdrop-blur-md flex flex-col justify-between border ${
                  activeChannelIdx === idx
                    ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/50'
                    : 'bg-black/60 border-slate-800 text-slate-400 hover:bg-slate-900/80 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-bold text-xs truncate">{chan.name}</span>
                  {activeChannelIdx === idx && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
                  )}
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-1">
                  {chan.resolution} • {chan.tag}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TV Stand Base (Optical styling) */}
      <div className="mx-auto w-36 h-3 bg-gradient-to-b from-slate-700 to-slate-900 rounded-b-md shadow-lg" />
      <div className="mx-auto w-56 h-1.5 bg-gradient-to-r from-transparent via-slate-600 to-transparent opacity-70" />
    </div>
  );
};
