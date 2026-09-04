import React, { useState } from 'react';
import { 
  Tv, 
  Download, 
  Globe, 
  Menu, 
  X, 
  Server, 
  Smartphone, 
  Radio, 
  ShieldCheck,
  ChevronRight,
  Github,
  ExternalLink
} from 'lucide-react';
import { CURRENT_RELEASE } from '../data/channels';

interface NavbarProps {
  onOpenDownload: () => void;
  lang: 'en' | 'bn';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload, lang, onToggleLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: lang === 'en' ? 'Features' : 'বৈশিষ্ট্য', href: '#features' },
    { name: lang === 'en' ? 'Android TV & Mobile' : 'ডিভাইস সামঞ্জস্য', href: '#devices' },
    { name: lang === 'en' ? 'Live Channels' : 'চ্যানেলসমূহ', href: '#channels' },
    { name: lang === 'en' ? 'Server Network' : 'সার্ভার নেটওয়ার্ক', href: '#servers' },
    { name: lang === 'en' ? 'Install Guide' : 'ইনস্টল গাইড', href: '#guide' },
    { name: lang === 'en' ? 'FAQ' : 'প্রশ্নোত্তর', href: '#faq' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#06080d]/85 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                  <Tv className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#090d16] animate-pulse" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-xl sm:text-2xl text-white tracking-wider font-display">
                    NRT <span className="text-cyan-400">STREAM</span>
                  </span>
                  <span className="hidden sm:inline-flex px-2 py-0.5 text-[10px] font-bold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-widest">
                    LIVE
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono tracking-tight flex items-center gap-1">
                  <Github className="w-3 h-3 text-slate-500" />
                  <span>GitHub Release {CURRENT_RELEASE.version}</span>
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-cyan-400 transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Lang Toggle + GitHub Repo + Download Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CURRENT_RELEASE.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-all"
              title="View GitHub Releases"
            >
              <Github className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline">GitHub Releases</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-all"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
            </button>

            <button
              onClick={onOpenDownload}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2 active:scale-95"
            >
              <Download className="w-4 h-4 text-black group-hover:translate-y-0.5 transition-transform" />
              <span>{lang === 'en' ? 'Download APK' : 'APK ডাউনলোড'}</span>
              <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded font-mono">
                {CURRENT_RELEASE.version}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleLang}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold"
            >
              {lang === 'en' ? 'বাং' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#090d16]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'en' ? 'Download NRT STREAM APK' : 'NRT STREAM APK ডাউনলোড'}</span>
              <span className="text-xs font-mono opacity-80">({CURRENT_RELEASE.fileSize})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
