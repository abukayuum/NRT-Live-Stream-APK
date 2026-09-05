import React from 'react';
import { 
  Server, 
  Zap, 
  Tv, 
  Radio, 
  ShieldCheck, 
  Clock, 
  Sliders, 
  Flame, 
  Layers, 
  Sparkles,
  Wifi,
  Globe2
} from 'lucide-react';
import { useRelease } from '../context/ReleaseContext';

interface FeaturesSectionProps {
  lang: 'en' | 'bn';
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ lang }) => {
  const { currentRelease } = useRelease();
  const features = [
    {
      icon: Server,
      title: lang === 'en' ? 'Multi-Server Broadcast Engine' : 'মাল্টি-সার্ভার ব্রডকাস্ট ইঞ্জিন',
      desc: lang === 'en'
        ? 'All global television and sports feeds are piped through redundant server routes. Automatic fallback ensures you never get a blank screen or interrupted stream.'
        : 'সব টিভি সার্ভার একসাথে ইন্টিগ্রেট করা। কোনো একটি সার্ভারে সমস্যা হলে স্বয়ংক্রিয়ভাবে ব্যাকআপ সার্ভারে স্যুইচ হয়ে যায়।'
    },
    {
      icon: Zap,
      title: lang === 'en' ? 'Ultra-Low Latency for Live Sports' : 'লাইভ স্পোর্টসে আল্ট্রা-লো লেটেন্সি',
      desc: lang === 'en'
        ? 'Enjoy football, cricket, Formula 1, and combat sports with under 3.2 seconds broadcast delay—faster than conventional cable and satellite dishes.'
        : 'টিভি বা স্যাটেলাইটের চেয়েও দ্রুত মাত্র ৩ সেকেন্ডের কম লাইভ লেটেন্সিতে গোল বা ছক্কার রিয়েল-টাইম আনন্দ নিন।'
    },
    {
      icon: Tv,
      title: lang === 'en' ? 'Optimized for Android TV Remote' : 'অ্যান্ড্রয়েড টিভি রিমোটের জন্য পারফেক্ট',
      desc: lang === 'en'
        ? 'Designed for 10-foot couch experience. Full D-Pad direction keys, channel number keypad jumping, and fast zapping with zero UI lag.'
        : 'টিভির রিমোট দিয়ে খুব সহজে কন্ট্রোল করা যায়। ডিরেকশন কি, চ্যানেল নম্বর চেপে দ্রুত চ্যানেল পরিবর্তন করা যায়।'
    },
    {
      icon: Layers,
      title: lang === 'en' ? '4K UHD, 1080p 60FPS & HEVC' : '৪কে আল্ট্রা এইচডি ও ৬০এফপিএস স্মুথনেস',
      desc: lang === 'en'
        ? 'Cutting-edge H.265/HEVC decoding provides crystal clear 60 frames per second motion while consuming 50% less mobile data and home bandwidth.'
        : 'উন্নত H.265 কোডেক ব্যবহারে ৬০ এফপিএস হাই-কোয়ালিটি ভিডিও প্লে হয় অথচ ডেটা খরচ হয় অর্ধেকেরও কম।'
    },
    {
      icon: Clock,
      title: lang === 'en' ? 'Integrated EPG & Catch-Up Schedule' : 'ইলেক্ট্রনিক প্রোগ্রাম গাইড (EPG)',
      desc: lang === 'en'
        ? 'See what match or show is broadcasting right now and what is coming up next across all sports and entertainment channels with full match timelines.'
        : 'কোন চ্যানেলে কখন কোন খেলা বা অনুষ্ঠান শুরু হবে তা সরাসরি স্ক্রিনে টাইমলাইন আকারে দেখতে পারবেন।'
    },
    {
      icon: ShieldCheck,
      title: lang === 'en' ? 'Clean, Safe & Ad-Track Free' : 'নিরাপদ, ক্লিন ও নো-রুট বিল্ড',
      desc: lang === 'en'
        ? `Official verified APK verified on Google Play Protect standards. Zero intrusive trackers, lightweight ${currentRelease.fileSize} size, and no root permissions required.`
        : `সম্পূর্ণ নিরাপদ এবং ${currentRelease.fileSize} লাইটওয়েট অ্যাপ। ফোনে বা টিভিতে কোনো অপ্রয়োজনীয় ব্যাকগ্রাউন্ড রিসোর্স নষ্ট করে না।`
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-20 bg-[#06080d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            {lang === 'en' ? 'Engineered for Performance' : 'উন্নত টেকনোলজি ও পাওয়ার'}
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
            {lang === 'en' ? (
              <>Why Viewers Worldwide Choose <span className="text-cyan-400">NRT STREAM</span></>
            ) : (
              <>বিশ্বব্যাপী দর্শকরা কেন <span className="text-cyan-400">NRT STREAM</span> পছন্দ করেন</>
            )}
          </h2>

          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Built from the ground up for stability, speed, and seamless cross-device adaptability across Android ecosystem.'
              : 'সব টিভি সার্ভার এবং বিশ্বের সেরা স্পোর্টস চ্যানেল এক ছাদের নিচে দেখার সবচেয়ে নির্ভরযোগ্য সমাধান।'
            }
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#090d16]/80 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300 shadow-md group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 mt-2 sm:mt-2.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
