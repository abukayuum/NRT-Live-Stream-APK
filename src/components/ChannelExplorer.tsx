import React, { useState, useMemo } from 'react';
import { 
  Trophy, 
  Activity, 
  Tv, 
  Radio, 
  Globe, 
  Film, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Play, 
  Download,
  Filter
} from 'lucide-react';
import { CHANNELS_DATA } from '../data/channels';
import { Channel } from '../types';

interface ChannelExplorerProps {
  onOpenDownload: () => void;
  lang: 'en' | 'bn';
}

export const ChannelExplorer: React.FC<ChannelExplorerProps> = ({ onOpenDownload, lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All Channels' : 'সকল চ্যানেল' },
    { id: 'sports', label: lang === 'en' ? 'Live Sports Worldwide' : 'বিশ্বমানের লাইভ খেলা' },
    { id: 'news', label: lang === 'en' ? 'Global News' : 'আন্তর্জাতিক খবর' },
    { id: 'movies', label: lang === 'en' ? 'Movies & Cinema' : 'মুভি ও সিনেমা' },
    { id: 'entertainment', label: lang === 'en' ? 'Entertainment' : 'বিনোদন ও ড্রামা' },
    { id: 'documentary', label: lang === 'en' ? 'Documentaries' : 'ডকুমেন্টারি ও ওয়াইল্ড' },
    { id: 'kids', label: lang === 'en' ? 'Kids' : 'কার্টুন ও কিডস' }
  ];

  const filteredChannels = useMemo(() => {
    return CHANNELS_DATA.filter((ch) => {
      const matchesCategory = selectedCategory === 'all' || ch.category === selectedCategory;
      const matchesSearch = 
        ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (ch.currentEvent && ch.currentEvent.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="channels" className="py-12 sm:py-20 bg-[#07090e] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            {lang === 'en' ? 'Worldwide Channel Directory' : 'বিশ্বমানের লাইভ টিভি ক্যাটালগ'}
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
            {lang === 'en' ? (
              <>Stream 5,000+ <span className="text-cyan-400">Live TV & Sports</span> Channels</>
            ) : (
              <>৫,০০০+ <span className="text-cyan-400">লাইভ টিভি ও স্পোর্টস</span> চ্যানেল</>
            )}
          </h2>

          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'From top European football leagues and ICC cricket tourneys to world news, 4K Hollywood cinema, and regional broadcasts. Explore a preview of our server channel catalog.'
              : 'প্রিমিয়ার লীগ, চ্যাম্পিয়ন্স লীগ, বিশ্বকাপ ক্রিকেট, আইপিএল, বিবিসি, এইচবিও সহ পৃথিবীর সব টিভি সার্ভার ইন্টিগ্রেট করা রয়েছে আমাদের অ্যাপে।'
            }
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          
          {/* Category Tabs with horizontal swipe on mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none text-xs sm:text-sm -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 sm:px-3.5 py-2 rounded-xl whitespace-nowrap font-medium transition-all shrink-0 min-h-[38px] ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'en' ? 'Search channels, events...' : 'চ্যানেল বা খেলা খুঁজুন...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors min-h-[42px]"
            />
          </div>
        </div>

        {/* Channels Grid */}
        {filteredChannels.length === 0 ? (
          <div className="p-8 sm:p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
            <p className="text-base font-semibold text-slate-300">
              {lang === 'en' ? 'No channels matching your filter.' : 'আপনার ফিল্টারের সাথে কোনো চ্যানেল মিলছে না।'}
            </p>
            <p className="text-xs mt-1">
              {lang === 'en' ? 'Try searching for football, cricket, news, or clear filters.' : 'অন্য নাম দিয়ে সার্চ করে দেখুন।'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredChannels.map((channel) => (
              <div
                key={channel.id}
                className="p-3.5 sm:p-4 rounded-2xl bg-[#090d16]/90 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all duration-200 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {channel.quality}
                    </span>

                    <span className="flex items-center gap-1 text-[10px] font-bold text-red-400 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      LIVE
                    </span>
                  </div>

                  {/* Channel Name */}
                  <h3 className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {channel.name}
                  </h3>
                  
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <Globe className="w-3 h-3 text-slate-500 shrink-0" />
                    <span className="truncate">{channel.region}</span>
                  </div>

                  {/* Current Program Event */}
                  {channel.currentEvent && (
                    <div className="mt-2.5 p-2 rounded-lg bg-black/40 border border-slate-800/80 text-[11px] text-slate-300 flex items-start gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2 leading-tight">{channel.currentEvent}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Card Action */}
                <div className="mt-3.5 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-mono text-[10px]">
                    {channel.badge || 'H.265 60fps'}
                  </span>
                  <button
                    onClick={onOpenDownload}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 group-hover:underline min-h-[30px]"
                  >
                    <span>{lang === 'en' ? 'Watch on App' : 'অ্যাপে দেখুন'}</span>
                    <Play className="w-3 h-3 fill-current" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Promotion Card */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-slate-900 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-xl">
          <div className="space-y-1.5 sm:space-y-2 text-center md:text-left w-full md:w-auto">
            <h3 className="text-lg sm:text-2xl font-bold text-white">
              {lang === 'en' ? 'Want to Unlock All 5,000+ Worldwide Channels?' : '৫,০০০+ লাইভ চ্যানেল আনলক করতে চান?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {lang === 'en'
                ? 'Download the official NRT STREAM APK on your Android TV, Firestick or Mobile for 100% free lifetime access with high-speed server links.'
                : 'আপনার অ্যান্ড্রয়েড টিভি, ফায়ারস্টিক বা ফোনে অফিসিয়াল NRT STREAM অ্যাপটি নামিয়ে নিন এবং উপভোগ করুন আনলিমিটেড লাইভ টিভি।'
              }
            </p>
          </div>

          <button
            onClick={onOpenDownload}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0 min-h-[44px]"
          >
            <Download className="w-4 h-4" />
            <span>{lang === 'en' ? 'Get NRT STREAM APK' : 'NRT STREAM APK ডাউনলোড'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
