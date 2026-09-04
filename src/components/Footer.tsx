import React from 'react';
import { Tv, ShieldCheck, Heart, ExternalLink, Globe, Sparkles, Github } from 'lucide-react';
import { CURRENT_RELEASE } from '../data/channels';

interface FooterProps {
  onOpenDownload: () => void;
  lang: 'en' | 'bn';
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload, lang }) => {
  return (
    <footer className="bg-[#05070b] border-t border-slate-800 text-slate-400 text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & GitHub */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-black font-extrabold shadow-md shadow-cyan-500/20">
                <Tv className="w-5 h-5 text-black" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold text-white font-display">
                  NRT <span className="text-cyan-400">STREAM</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-[10px] border border-cyan-500/20 font-bold">
                  {CURRENT_RELEASE.version}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              {lang === 'en'
                ? 'NRT STREAM is a high-performance live TV and global sports broadcasting server network. Seamlessly stream 5,000+ worldwide television channels on Android TV, Google TV, Fire TV, and Android smartphones.'
                : 'NRT STREAM হচ্ছে বিশ্বমানের লাইভ টিভি ও স্পোর্টস ব্রডকাস্টিং সার্ভার প্ল্যাটফর্ম। অ্যান্ড্রয়েড টিভি এবং ফোনের জন্য সেরা নো-বাফারিং স্ট্রিমিং অভিজ্ঞতা।'
              }
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={CURRENT_RELEASE.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 font-mono text-[11px] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>abukayuum/NRT-Live-Stream-APK</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                GitHub Verified Release
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              {lang === 'en' ? 'Quick Navigation' : 'দ্রুত লিংক'}
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Features & Performance</a></li>
              <li><a href="#devices" className="hover:text-cyan-400 transition-colors">Android TV & Firestick</a></li>
              <li><a href="#channels" className="hover:text-cyan-400 transition-colors">Live Channels Catalog</a></li>
              <li><a href="#servers" className="hover:text-cyan-400 transition-colors">Server Cluster Health</a></li>
              <li><a href="#guide" className="hover:text-cyan-400 transition-colors">Downloader Code Guide</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Download Hub */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              {lang === 'en' ? 'Download Portal' : 'ডাউনলোড পোর্টাল'}
            </h4>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="text-[11px] text-slate-400">TV Downloader Code:</div>
              <div className="text-xl font-bold font-mono text-cyan-400">
                {CURRENT_RELEASE.downloaderCode}
              </div>
              <button
                onClick={onOpenDownload}
                className="w-full mt-2 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-colors shadow-sm"
              >
                {lang === 'en' ? 'Download APK Now' : 'APK নামিয়ে নিন'}
              </button>
              <a
                href={CURRENT_RELEASE.releasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-[11px] text-slate-400 hover:text-cyan-300 pt-1 transition-colors"
              >
                {lang === 'en' ? 'View all releases on GitHub →' : 'সব গিটহাব রিলিজ দেখুন →'}
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} NRT STREAM • Official Live TV & Global Sports Broadcasting Server Client.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors">DMCA Compliance</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition-colors">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition-colors">Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
