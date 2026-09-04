import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DeviceCompatibility } from './components/DeviceCompatibility';
import { ChannelExplorer } from './components/ChannelExplorer';
import { ServerStatus } from './components/ServerStatus';
import { FeaturesSection } from './components/FeaturesSection';
import { InstallGuide } from './components/InstallGuide';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { Download, Tv, ArrowUp } from 'lucide-react';
import { CURRENT_RELEASE } from './data/channels';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'bn'>('en');
  const [showFloatingBar, setShowFloatingBar] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for floating download bar and back to top
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 400) {
        setShowFloatingBar(true);
      } else {
        setShowFloatingBar(false);
      }

      if (scrollY > 700) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black font-sans">
      
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-cyan-950/70 via-blue-950/60 to-slate-900 border-b border-cyan-500/20 py-2 px-4 text-center text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            {lang === 'en' 
              ? `Official NRT STREAM ${CURRENT_RELEASE.version} is Live on GitHub Releases • 4K Live Sports & Global TV Server` 
              : `NRT STREAM অফিসিয়াল ${CURRENT_RELEASE.version} গিটহাবে লাইভ • ৪কে লাইভ টিভি ও স্পোর্টস সার্ভার`}
          </span>
          <button
            onClick={() => setDownloadModalOpen(true)}
            className="text-cyan-400 hover:text-cyan-300 font-bold underline ml-1"
          >
            {lang === 'en' ? 'Download APK' : 'ডাউনলোড করুন'}
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <Navbar
        onOpenDownload={() => setDownloadModalOpen(true)}
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          onOpenDownload={() => setDownloadModalOpen(true)}
          lang={lang}
        />

        <DeviceCompatibility lang={lang} />

        <ChannelExplorer
          onOpenDownload={() => setDownloadModalOpen(true)}
          lang={lang}
        />

        <ServerStatus lang={lang} />

        <FeaturesSection lang={lang} />

        <InstallGuide
          onOpenDownload={() => setDownloadModalOpen(true)}
          lang={lang}
        />

        <FaqSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        onOpenDownload={() => setDownloadModalOpen(true)}
        lang={lang}
      />

      {/* Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        lang={lang}
      />

      {/* Floating Bottom Quick-Action Bar */}
      {showFloatingBar && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 w-[92%] max-w-xl p-2.5 rounded-2xl bg-[#090d16]/95 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-black/80 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center gap-2.5 pl-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Tv className="w-4 h-4" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>NRT STREAM</span>
                <span className="text-[10px] text-cyan-400 font-mono">
                  {CURRENT_RELEASE.version}
                </span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                Code: <strong className="text-cyan-300">{CURRENT_RELEASE.downloaderCode}</strong>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDownloadModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs shadow-md shadow-cyan-500/25 transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Get APK' : 'APK ডাউনলোড'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-5 sm:bottom-6 sm:right-6 z-30 p-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
