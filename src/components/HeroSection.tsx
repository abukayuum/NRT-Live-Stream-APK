import React, { useState } from 'react';
import { 
  Download, 
  Tv, 
  Play, 
  ShieldCheck, 
  Zap, 
  Radio, 
  Copy, 
  Check, 
  Sparkles, 
  Smartphone, 
  Globe2,
  Server,
  ArrowDown,
  Github
} from 'lucide-react';
import { useRelease } from '../context/ReleaseContext';
import { TvInterfaceMockup } from './TvInterfaceMockup';

interface HeroSectionProps {
  onOpenDownload: () => void;
  lang: 'en' | 'bn';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDownload, lang }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const { currentRelease, isLiveSynced } = useRelease();

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentRelease.downloaderCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="relative pt-4 sm:pt-8 pb-12 sm:pb-20 overflow-hidden">
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Badge & Domain Announcement */}
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md shadow-sm max-w-full flex-wrap justify-center">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[11px] sm:text-sm font-semibold text-cyan-300">
              {lang === 'en' 
                ? `Official GitHub Release • NRT STREAM ${currentRelease.version}`
                : `অফিসিয়াল গিটহাব রিলিজ • NRT STREAM ${currentRelease.version}`}
            </span>
            <span className="text-slate-500 hidden xs:inline">|</span>
            <span className="text-[10px] sm:text-xs font-mono text-emerald-400 flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified APK
            </span>
            {isLiveSynced && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-semibold">
                <Github className="w-3 h-3 text-cyan-400" />
                Live Sync
              </span>
            )}
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.1] font-display">
            {lang === 'en' ? (
              <>
                Ultra-Fast <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">Live TV & Sports</span> Worldwide Streaming Server
              </>
            ) : (
              <>
                আল্ট্রা-ফাস্ট <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">লাইভ টিভি ও খেলাধুলা</span> বিশ্বব্যাপী স্ট্রিমিং সার্ভার
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
            {lang === 'en' ? (
              <>
                <strong className="text-white font-semibold">NRT STREAM</strong> is a high-bandwidth live TV broadcasting server designed to deliver real-time 4K/FHD video streams to viewers worldwide. Works seamlessly on <span className="text-cyan-300 font-medium">Android TV, Google TV, Firestick</span>, and all Android devices up to the latest Android 15+.
              </>
            ) : (
              <>
                <strong className="text-white font-semibold">NRT STREAM</strong> হচ্ছে একটি উচ্চ-গতির লাইভ টিভি সার্ভার, যা দিয়ে বিশ্বজুড়ে যে কোনো স্থান থেকে রিয়েল-টাইম ৪কে এবং এফএইচডি লাইভ খেলাধুলা ও টিভি চ্যানেল স্ট্রিমিং করা যায়। এটি <span className="text-cyan-300 font-medium">Android TV থেকে শুরু করে লেটেস্ট অ্যান্ড্রয়েড ১৫+</span> পর্যন্ত প্রতিটি ডিভাইসে মসৃণভাবে চলে।
              </>
            )}
          </p>

          {/* CTA Buttons & Downloader Code Box */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-3">
            
            {/* Direct Download Button */}
            <button
              onClick={onOpenDownload}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black font-extrabold text-sm sm:text-base shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2.5 sm:gap-3 active:scale-95 group min-h-[48px]"
            >
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform shrink-0" />
              <span>{lang === 'en' ? 'Download APK Free' : 'ফ্রি APK ডাউনলোড করুন'}</span>
              <span className="text-xs bg-black/20 px-2 py-0.5 rounded-full font-mono font-normal">
                {currentRelease.fileSize}
              </span>
            </button>

            {/* TV Downloader Code Button */}
            <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700 hover:border-cyan-500/50 backdrop-blur-md transition-all shadow-md min-h-[48px]">
              <div className="flex items-center gap-2 text-left">
                <Tv className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">
                    {lang === 'en' ? 'TV Downloader Code' : 'টিভির ডাউনলোডার কোড'}
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-white font-mono tracking-wider">
                    {currentRelease.downloaderCode}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyCode}
                className="p-2 sm:p-2.5 rounded-lg bg-slate-800 text-cyan-300 hover:text-white hover:bg-slate-700 transition-colors"
                title="Copy Downloader Code"
              >
                {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Quick specs pill row */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 text-[11px] sm:text-xs text-slate-400 pt-2">
            <span className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              {lang === 'en' ? 'No Root Required' : 'রুট অ্যাক্সেস অপ্রয়োজনীয়'}
            </span>
            <span className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
              <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              {lang === 'en' ? 'Zero Buffering Engine' : 'নো-বাফারিং ইঞ্জিন'}
            </span>
            <span className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
              <Globe2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              {lang === 'en' ? '5,000+ Worldwide Channels' : '৫০০০+ বিশ্বমানের চ্যানেল'}
            </span>
            <span className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
              <Smartphone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              {lang === 'en' ? 'Android 7.0 to 15+' : 'অ্যান্ড্রয়েড ৭.০ থেকে ১৫+'}
            </span>
          </div>

        </div>

        {/* TV Mockup Display */}
        <div className="mt-8 sm:mt-16">
          <TvInterfaceMockup lang={lang} />
        </div>

      </div>
    </section>
  );
};
