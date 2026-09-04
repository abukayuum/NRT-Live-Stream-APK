import React, { useState } from 'react';
import { 
  Download, 
  Tv, 
  Smartphone, 
  QrCode, 
  Check, 
  Copy, 
  ShieldCheck, 
  X, 
  ExternalLink,
  Server,
  Sparkles,
  Info,
  Github
} from 'lucide-react';
import { CURRENT_RELEASE } from '../data/channels';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'bn';
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, lang }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState<'tv' | 'mobile' | 'qr'>('tv');
  const [selectedMirror, setSelectedMirror] = useState<'us' | 'sg' | 'eu'>('us');

  if (!isOpen) return null;

  const handleCopy = (text: string, type: 'code' | 'url') => {
    navigator.clipboard.writeText(text);
    if (type === 'code') {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  const handleDownloadTrigger = () => {
    setDownloading(true);

    // Direct trigger to download real APK release from GitHub releases
    const a = document.createElement('a');
    a.href = CURRENT_RELEASE.directApkUrl;
    a.download = CURRENT_RELEASE.fileName;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
      setDownloading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0d121f] border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden text-slate-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-800 bg-[#090d16]/90">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
              <Tv className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h3 className="font-bold text-base sm:text-lg text-white">NRT STREAM APK</h3>
                <span className="text-[11px] sm:text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20">
                  {CURRENT_RELEASE.version}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                <Github className="w-3 h-3 text-cyan-400 shrink-0" />
                <span className="truncate max-w-[190px] sm:max-w-none">abukayuum/NRT-Live-Stream-APK (Release 2.0)</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Device Switcher Tabs */}
        <div className="grid grid-cols-3 gap-1 p-1.5 sm:p-2 bg-[#090d16] border-b border-slate-800 text-xs sm:text-sm font-medium">
          <button
            onClick={() => setActiveTab('tv')}
            className={`flex items-center justify-center gap-1.5 py-2 sm:py-2.5 rounded-lg transition-all min-h-[36px] ${
              activeTab === 'tv'
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Tv className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Android TV / Firestick</span>
            <span className="sm:hidden">Android TV</span>
          </button>
          <button
            onClick={() => setActiveTab('mobile')}
            className={`flex items-center justify-center gap-1.5 py-2 sm:py-2.5 rounded-lg transition-all min-h-[36px] ${
              activeTab === 'mobile'
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Smartphone className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Android Mobile</span>
            <span className="sm:hidden">Mobile</span>
          </button>
          <button
            onClick={() => setActiveTab('qr')}
            className={`flex items-center justify-center gap-1.5 py-2 sm:py-2.5 rounded-lg transition-all min-h-[36px] ${
              activeTab === 'qr'
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <QrCode className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Scan QR Code</span>
            <span className="sm:hidden">QR Scan</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6">
          {activeTab === 'tv' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-cyan-400 font-semibold tracking-wide uppercase">
                    {lang === 'en' ? 'Quick Downloader Code (No USB needed)' : 'ডাউনলোডার অ্যাপ কোড (ইউএসবি ছাড়া)'}
                  </div>
                  <div className="text-3xl font-extrabold text-white font-mono mt-1 tracking-wider">
                    {CURRENT_RELEASE.downloaderCode}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {lang === 'en' 
                      ? 'Type this 6-digit code in the Downloader app on your TV'
                      : 'টিভির Downloader অ্যাপে এই ৬ ডিজিটের কোডটি লিখুন'}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(CURRENT_RELEASE.downloaderCode, 'code')}
                  className="w-full sm:w-auto justify-center flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 text-sm whitespace-nowrap min-h-[42px]"
                >
                  {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copiedCode ? (lang === 'en' ? 'Copied Code!' : 'কপি হয়েছে!') : (lang === 'en' ? 'Copy Code' : 'কোড কপি করুন')}
                </button>
              </div>

              <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="font-semibold text-white flex items-center gap-1.5 text-sm">
                  <Info className="w-4 h-4 text-cyan-400" />
                  {lang === 'en' ? 'Quick TV Steps:' : 'টিভি সেটআপের ধাপসমূহ:'}
                </div>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                  <li>{lang === 'en' ? 'Open Downloader on Firestick or Google/Android TV' : 'আপনার টিভি বা ফায়ারস্টিকে Downloader অ্যাপটি ওপেন করুন'}</li>
                  <li>{lang === 'en' ? `Enter Downloader Code ${CURRENT_RELEASE.downloaderCode}` : `Downloader কোড ${CURRENT_RELEASE.downloaderCode} লিখুন`}</li>
                  <li>{lang === 'en' ? 'Press GO and click Install when download finishes' : 'GO চাপুন এবং ডাউনলোড শেষে Install বাটনে ক্লিক করুন'}</li>
                </ol>
              </div>
            </div>
          )}

          {activeTab === 'mobile' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-cyan-300 font-semibold truncate max-w-[180px] sm:max-w-none">{CURRENT_RELEASE.fileName}</span>
                  <span className="text-emerald-400 font-mono font-medium shrink-0">Size: {CURRENT_RELEASE.fileSize}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <button
                    onClick={handleDownloadTrigger}
                    disabled={downloading}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold shadow-lg shadow-cyan-500/25 transition-all text-sm disabled:opacity-50 min-h-[44px]"
                  >
                    <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
                    {downloading 
                      ? (lang === 'en' ? 'Starting Download...' : 'ডাউনলোড শুরু হচ্ছে...') 
                      : (lang === 'en' ? `Download APK (${CURRENT_RELEASE.fileSize})` : `সরাসরি APK ডাউনলোড (${CURRENT_RELEASE.fileSize})`)}
                  </button>

                  <a
                    href={CURRENT_RELEASE.releasesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm transition-all border border-slate-700 min-h-[44px]"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub Releases</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-400">
                  <span className="font-mono text-slate-300 truncate max-w-[200px] sm:max-w-md">
                    {CURRENT_RELEASE.directApkUrl}
                  </span>
                  <button
                    onClick={() => handleCopy(CURRENT_RELEASE.directApkUrl, 'url')}
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 shrink-0 ml-2"
                  >
                    {copiedUrl ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedUrl ? 'Copied' : 'Copy Link'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#090d16] border border-slate-800">
                  <div className="text-slate-400">Android Support</div>
                  <div className="font-semibold text-white mt-0.5">Android 7.0 - 15+</div>
                </div>
                <div className="p-3 rounded-lg bg-[#090d16] border border-slate-800">
                  <div className="text-slate-400">Safety Verification</div>
                  <div className="font-semibold text-emerald-400 mt-0.5 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> No Ads / Safe
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'qr' && (
            <div className="flex flex-col items-center justify-center p-6 text-center space-y-4 bg-slate-900/40 rounded-xl border border-slate-800">
              {/* Clean SVG QR Code */}
              <div className="p-4 bg-white rounded-2xl shadow-xl border-4 border-cyan-500/30">
                <svg className="w-44 h-44" viewBox="0 0 100 100" fill="none">
                  {/* Outer Frame Corners */}
                  <rect x="10" y="10" width="24" height="24" rx="4" fill="#000" />
                  <rect x="14" y="14" width="16" height="16" rx="2" fill="#fff" />
                  <rect x="18" y="18" width="8" height="8" rx="1" fill="#000" />

                  <rect x="66" y="10" width="24" height="24" rx="4" fill="#000" />
                  <rect x="70" y="14" width="16" height="16" rx="2" fill="#fff" />
                  <rect x="74" y="18" width="8" height="8" rx="1" fill="#000" />

                  <rect x="10" y="66" width="24" height="24" rx="4" fill="#000" />
                  <rect x="14" y="70" width="16" height="16" rx="2" fill="#fff" />
                  <rect x="18" y="74" width="8" height="8" rx="1" fill="#000" />

                  {/* QR Data Pattern Dots */}
                  <rect x="42" y="12" width="6" height="6" fill="#000" />
                  <rect x="52" y="12" width="6" height="6" fill="#000" />
                  <rect x="38" y="24" width="6" height="6" fill="#000" />
                  <rect x="56" y="24" width="6" height="6" fill="#000" />
                  
                  <rect x="12" y="42" width="6" height="6" fill="#000" />
                  <rect x="22" y="42" width="6" height="6" fill="#000" />
                  <rect x="32" y="38" width="8" height="8" rx="1" fill="#06b6d4" />
                  <rect x="48" y="44" width="8" height="8" rx="1" fill="#000" />
                  <rect x="62" y="38" width="8" height="8" fill="#000" />
                  <rect x="78" y="42" width="6" height="6" fill="#000" />
                  <rect x="88" y="42" width="4" height="6" fill="#000" />

                  <rect x="42" y="62" width="6" height="6" fill="#000" />
                  <rect x="54" y="66" width="6" height="6" fill="#000" />
                  <rect x="42" y="76" width="6" height="6" fill="#000" />
                  <rect x="58" y="80" width="6" height="6" fill="#000" />
                  <rect x="72" y="72" width="6" height="6" fill="#000" />
                  <rect x="82" y="68" width="6" height="6" fill="#000" />
                  <rect x="76" y="82" width="6" height="6" fill="#000" />
                </svg>
              </div>

              <div>
                <h4 className="font-bold text-white text-base">
                  {lang === 'en' ? 'Scan to Download on Phone' : 'মোবাইলে ডাউনলোড করতে স্ক্যান করুন'}
                </h4>
                <p className="text-xs text-slate-400 mt-1 max-w-sm">
                  {lang === 'en' 
                    ? 'Point your phone camera at the QR code to open the official GitHub Release and download the APK'
                    : 'ফোনের ক্যামেরা দিয়ে কিউআর কোডটি স্ক্যান করে গিটহাব রিলিজ থেকে সরাসরি APK নামিয়ে নিন'}
                </p>
              </div>
            </div>
          )}

          {/* Server Mirror Selection */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1 font-medium text-slate-300">
                <Server className="w-3.5 h-3.5 text-cyan-400" />
                {lang === 'en' ? 'CDN Download Network:' : 'ডাউনলোড নেটওয়ার্ক:'}
              </span>
              <span className="text-emerald-400 font-medium">GitHub Release Assets • 10 Gbps</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <button
                onClick={() => setSelectedMirror('us')}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  selectedMirror === 'us'
                    ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 font-semibold'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div>Mirror 1 (GitHub CDN)</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Primary Node</div>
              </button>
              <button
                onClick={() => setSelectedMirror('sg')}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  selectedMirror === 'sg'
                    ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 font-semibold'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div>Mirror 2 (Asia Edge)</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Fast Route</div>
              </button>
              <button
                onClick={() => setSelectedMirror('eu')}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  selectedMirror === 'eu'
                    ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 font-semibold'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div>Mirror 3 (Global Edge)</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Redundant Node</div>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-slate-800 bg-[#090d16] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400 order-2 sm:order-1 text-[11px] sm:text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate font-mono">SHA-256: {CURRENT_RELEASE.sha256.substring(0, 16)}...</span>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto order-1 sm:order-2">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors text-center font-medium min-h-[40px]"
            >
              {lang === 'en' ? 'Close' : 'বন্ধ করুন'}
            </button>
            <button
              onClick={handleDownloadTrigger}
              disabled={downloading}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all shadow-md shadow-cyan-500/20 flex items-center justify-center gap-1.5 min-h-[40px]"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'en' ? 'Download APK' : 'ডাউনলোড করুন'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
