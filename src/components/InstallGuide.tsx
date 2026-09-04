import React, { useState } from 'react';
import { 
  Tv, 
  Smartphone, 
  Flame, 
  Copy, 
  Check, 
  Download, 
  HelpCircle, 
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { CURRENT_RELEASE } from '../data/channels';

interface InstallGuideProps {
  onOpenDownload: () => void;
  lang: 'en' | 'bn';
}

export const InstallGuide: React.FC<InstallGuideProps> = ({ onOpenDownload, lang }) => {
  const [activeTab, setActiveTab] = useState<'tv' | 'firestick' | 'mobile'>('tv');
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CURRENT_RELEASE.downloaderCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const stepsTv = [
    {
      step: '01',
      title: lang === 'en' ? 'Open Google Play Store on TV' : 'টিভির Google Play Store ওপেন করুন',
      desc: lang === 'en' 
        ? 'Search for the orange "Downloader by AFTVnews" app and install it on your Android TV or Google TV.' 
        : 'সার্চ বক্সে "Downloader" লিখে কমলা রঙের Downloader by AFTVnews অ্যাপটি ইন্সটল করুন।'
    },
    {
      step: '02',
      title: lang === 'en' ? `Enter Code: ${CURRENT_RELEASE.downloaderCode}` : `কোড দিন: ${CURRENT_RELEASE.downloaderCode}`,
      desc: lang === 'en' 
        ? `Open Downloader, type code ${CURRENT_RELEASE.downloaderCode} into the URL field and press GO.` 
        : `Downloader অ্যাপে গিয়ে কোড ${CURRENT_RELEASE.downloaderCode} লিখে GO চাপুন।`
    },
    {
      step: '03',
      title: lang === 'en' ? 'Allow Install & Enjoy Live TV' : 'Install বাটনে ক্লিক করে উপভোগ করুন',
      desc: lang === 'en' 
        ? 'Click "Install" when the APK download finishes. Open NRT STREAM and start streaming 5000+ channels immediately!' 
        : 'ডাউনলোড শেষ হলে Install চাপুন। ব্যাস, NRT STREAM ওপেন করে সব লাইভ টিভি চ্যানেল ফ্রিতে দেখতে থাকুন।'
    }
  ];

  const stepsFirestick = [
    {
      step: '01',
      title: lang === 'en' ? 'Enable Developer Options on Firestick' : 'Firestick-এ Unknown Sources এলাউ করুন',
      desc: lang === 'en'
        ? 'Go to Settings > My Fire TV > Developer Options and enable "Install Unknown Apps" for the Downloader app.'
        : 'Settings > My Fire TV > Developer Options-এ গিয়ে Downloader অ্যাপের জন্য Unknown Apps অপশনটি অন করুন।'
    },
    {
      step: '02',
      title: lang === 'en' ? 'Open Downloader App' : 'Downloader অ্যাপে কোড দিন',
      desc: lang === 'en'
        ? `Open Downloader, enter code ${CURRENT_RELEASE.downloaderCode} in the URL box and click GO.`
        : `Downloader অ্যাপটি ওপেন করে কোড ${CURRENT_RELEASE.downloaderCode} লিখে GO চাপুন।`
    },
    {
      step: '03',
      title: lang === 'en' ? 'Launch NRT STREAM' : 'অ্যাপ চালু করুন',
      desc: lang === 'en'
        ? 'After installation completes, click Open. You can also delete the APK file to save Firestick storage space.'
        : 'ইন্সটল সম্পন্ন হলে সরাসরি Open বাটনে চাপুন এবং মনের মতো খেলাধুলা লাইভ উপভোগ করুন।'
    }
  ];

  const stepsMobile = [
    {
      step: '01',
      title: lang === 'en' ? 'Download Official APK' : 'অফিসিয়াল APK ডাউনলোড করুন',
      desc: lang === 'en'
        ? `Click the Download APK button to save ${CURRENT_RELEASE.fileName} (${CURRENT_RELEASE.fileSize}) directly from GitHub Releases.`
        : `সরাসরি ডাউনলোড বাটনে ক্লিক করে গিটহাব রিলিজ থেকে ${CURRENT_RELEASE.fileName} ফাইলটি নামিয়ে নিন।`
    },
    {
      step: '02',
      title: lang === 'en' ? 'Allow Install from Browser' : 'Unknown Apps পারমিশন দিন',
      desc: lang === 'en'
        ? 'If prompted by Chrome or your browser, allow "Install Unknown Apps" from your device settings.'
        : 'যদি সতর্কবার্তা আসে তবে সেটিংসে গিয়ে ব্রাউজারের "Install unknown apps" পারমিশন দিন।'
    },
    {
      step: '03',
      title: lang === 'en' ? 'Tap Install & Stream' : 'ইন্সটল করে দেখা শুরু করুন',
      desc: lang === 'en'
        ? 'Tap the downloaded APK in notification bar, select Install, and enjoy live TV & sports on your smartphone!'
        : 'ডাউনলোড নোটিফিকেশনে চাপ দিয়ে Install বাটনে ক্লিক করুন। যেকোনো স্থান থেকে লাইভ স্ট্রিম উপভোগ করুন।'
    }
  ];

  const currentSteps = activeTab === 'tv' ? stepsTv : activeTab === 'firestick' ? stepsFirestick : stepsMobile;

  return (
    <section id="guide" className="py-12 sm:py-20 bg-[#07090e] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Tv className="w-3.5 h-3.5" />
            {lang === 'en' ? 'Step-by-Step Installation' : 'সহজ ইনস্টলেশন নির্দেশিকা'}
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
            {lang === 'en' ? (
              <>How to Install <span className="text-cyan-400">NRT STREAM</span> in 2 Minutes</>
            ) : (
              <>মাত্র ২ মিনিটে <span className="text-cyan-400">NRT STREAM</span> ইনস্টল করুন</>
            )}
          </h2>

          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'No pen drive, USB or PC required. Use the official Downloader code to install directly over Wi-Fi on any television or mobile device.'
              : 'কোনো পেনড্রাইভ বা কম্পিউটার ছাড়াই শুধু ওয়াইফাই ইন্টারনেট দিয়ে সরাসরি আপনার টিভিতে বা ফোনে নামিয়ে নিতে পারবেন।'
            }
          </p>
        </div>

        {/* Device Switcher Tabs */}
        <div className="flex justify-center mb-8 sm:mb-10 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg max-w-full overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('tv')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[40px] shrink-0 ${
                activeTab === 'tv'
                  ? 'bg-cyan-500 text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Tv className="w-4 h-4" />
              <span>Android TV / Google TV</span>
            </button>

            <button
              onClick={() => setActiveTab('firestick')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[40px] shrink-0 ${
                activeTab === 'firestick'
                  ? 'bg-cyan-500 text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>Amazon Firestick</span>
            </button>

            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[40px] shrink-0 ${
                activeTab === 'mobile'
                  ? 'bg-cyan-500 text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Android Mobile</span>
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {currentSteps.map((s, idx) => (
            <div
              key={idx}
              className="relative p-5 sm:p-6 rounded-2xl bg-[#090d16] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400/80 group-hover:text-cyan-300">
                    {s.step}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {s.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {s.step === '02' && (activeTab === 'tv' || activeTab === 'firestick') && (
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-300 font-bold">
                    Code: {CURRENT_RELEASE.downloaderCode}
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="text-xs px-2.5 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1 font-semibold min-h-[32px]"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedCode ? 'Copied' : 'Copy'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Downloader Banner */}
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm sm:text-base">
                {lang === 'en' ? 'Need Direct APK Download?' : 'সরাসরি APK ফাইল ডাউনলোড করতে চান?'}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {lang === 'en' 
                  ? `Download ${CURRENT_RELEASE.fileName} (${CURRENT_RELEASE.fileSize}) directly from official GitHub Releases.` 
                  : `আমাদের অফিসিয়াল গিটহাব রিলিজ থেকে যেকোনো সময় সরাসরি নতুন APK সংস্করণটি নামিয়ে নিতে পারেন।`}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap min-h-[44px]"
          >
            <Download className="w-4 h-4" />
            <span>{lang === 'en' ? 'Open Download Hub' : 'ডাউনলোড হাব খুলুন'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
