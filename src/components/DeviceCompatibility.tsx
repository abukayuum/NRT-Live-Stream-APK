import React, { useState } from 'react';
import { 
  Tv, 
  Smartphone, 
  Flame, 
  Cast, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  Zap, 
  MonitorPlay,
  Maximize,
  Compass
} from 'lucide-react';

interface DeviceCompatibilityProps {
  lang: 'en' | 'bn';
}

export const DeviceCompatibility: React.FC<DeviceCompatibilityProps> = ({ lang }) => {
  const [selectedDevice, setSelectedDevice] = useState<'tv' | 'firetv' | 'mobile' | 'box'>('tv');

  const devices = [
    {
      id: 'tv',
      title: lang === 'en' ? 'Smart Android TVs' : 'স্মার্ট অ্যান্ড্রয়েড টিভি',
      subtitle: 'Sony, TCL, Xiaomi, Hisense, OnePlus, Vu, Philips',
      icon: Tv,
      badge: 'Native 4K HDR',
      desc: lang === 'en' 
        ? 'Fully adapted for large living room displays with 10-foot UI, D-Pad remote navigation, instant channel zapping, and hardware H.265/AV1 decoding.'
        : 'বড় স্ক্রিনের জন্য স্পেশালি ডিজাইনকৃত ইন্টারফেস। টিভির রিমোট দিয়ে অতি সহজে চ্যানেল পরিবর্তন ও ৪K আল্ট্রা এইচডি প্লেব্যাক সাপোর্ট করে।'
    },
    {
      id: 'firetv',
      title: lang === 'en' ? 'Amazon Firestick & Fire TV' : 'অ্যামাজন ফায়ারস্টিক ও কিউব',
      subtitle: 'Fire TV Stick Lite, 4K, 4K Max, Fire TV Cube',
      icon: Flame,
      badge: 'Downloader Ready',
      desc: lang === 'en'
        ? 'Quick 1-minute installation via Downloader app. Extremely lightweight APK footprint ensures no sluggishness even on budget 1GB RAM Firesticks.'
        : 'ডাউনলোডার অ্যাপ দিয়ে মাত্র ১ মিনিটে ইন্সটল। হালকা সাইজ হওয়ায় ১ জিবি র‍্যামের ফায়ারস্টিকেও স্মুথভাবে কোনো ল্যাগ ছাড়া চলে।'
    },
    {
      id: 'mobile',
      title: lang === 'en' ? 'Android Mobile & Tablets' : 'অ্যান্ড্রয়েড ফোন ও ট্যাবলেট',
      subtitle: 'Android 7.0 up to Latest Android 15+',
      icon: Smartphone,
      badge: 'Touch & PiP Mode',
      desc: lang === 'en'
        ? 'Watch on the go with responsive touch controls, gesture volume/brightness, Picture-in-Picture (PiP) multitasking, and dynamic audio switcher.'
        : 'স্মার্টফোন এবং ট্যাবলেটে ফুলস্ক্রিন ও পিকচার-ইন-পিকচার (PiP) মোডে অন্য কাজ করার পাশাপাশি ব্যাকগ্রাউন্ডে খেলা দেখা যায়।'
    },
    {
      id: 'box',
      title: lang === 'en' ? 'Android TV Boxes & Sticks' : 'টিভি বক্স ও মিডিয়া প্লেয়ার',
      subtitle: 'Nvidia Shield, Mi Box S, Formuler, Mecool, X96',
      icon: Cpu,
      badge: 'High Performance',
      desc: lang === 'en'
        ? 'Full Gigabit ethernet optimization, custom buffer cache allocation, Dolby Digital 5.1 passthrough, and zero dropped frames.'
        : 'হাই-পারফরম্যান্স স্ট্রিমিং ও গিগাবিট ল্যান সাপোর্ট। ডলবি ডিজিটাল সাউন্ড ও জিরো ফ্রেম ড্রপ সহ যেকোনো টিভি বক্সে দুর্দান্ত স্পিড।'
    }
  ];

  const compatibilityMatrix = [
    { feature: lang === 'en' ? 'D-Pad Remote Control Support' : 'রিমোট কন্ট্রোল সাপোর্ট', tv: true, firetv: true, mobile: false, box: true },
    { feature: lang === 'en' ? '4K 60FPS Hardware Acceleration' : '৪কে ৬০এফপিএস হার্ডওয়্যার স্পিড', tv: true, firetv: true, mobile: true, box: true },
    { feature: lang === 'en' ? 'Android 7.0 to Android 15+ Compatibility' : 'অ্যান্ড্রয়েড ৭.০ থেকে ১৫+ সাপোর্ট', tv: true, firetv: true, mobile: true, box: true },
    { feature: lang === 'en' ? 'Picture-in-Picture (PiP) Floating Player' : 'পিকচার-ইন-পিকচার ফ্লোটিং স্ক্রিন', tv: false, firetv: false, mobile: true, box: true },
    { feature: lang === 'en' ? 'Multi-Language Audio & Commentary Switch' : 'লাইভ অডিও ও কমেন্ট্রি পরিবর্তন', tv: true, firetv: true, mobile: true, box: true },
    { feature: lang === 'en' ? 'Downloader App Direct 1-Click Install' : 'ডাউনলোডার অ্যাপ ডিরেক্ট ইন্সটল', tv: true, firetv: true, mobile: true, box: true },
  ];

  return (
    <section id="devices" className="py-12 sm:py-20 bg-[#07090e] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            {lang === 'en' ? 'Universal Android Compatibility' : 'সর্বজনীন ডিভাইস সামঞ্জস্য'}
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
            {lang === 'en' ? (
              <>Works on <span className="text-cyan-400">Android TV</span> to Latest Android 15+</>
            ) : (
              <>অ্যান্ড্রয়েড টিভি থেকে শুরু করে <span className="text-cyan-400">লেটেস্ট অ্যান্ড্রয়েড ১৫+</span></>
            )}
          </h2>

          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Engineered with a responsive modular architecture. Whether you are holding a smartphone on 4G or sitting in front of an 85-inch 4K Android TV with a remote, NRT STREAM delivers adaptive streaming with zero setup headache.'
              : 'NRT STREAM এমনভাবে ডিজাইন করা হয়েছে যাতে এটি মোবাইল টাচ স্ক্রিন এবং বড় অ্যান্ড্রয়েড টিভি রিমোট কন্ট্রোল—উভয় ক্ষেত্রেই অনায়াসে কাজ করে।'
            }
          </p>
        </div>

        {/* Device Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {devices.map((device) => {
            const Icon = device.icon;
            const isSelected = selectedDevice === device.id;
            return (
              <div
                key={device.id}
                onClick={() => setSelectedDevice(device.id as any)}
                className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900/90 border-cyan-500/50 shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-500/30'
                    : 'bg-[#090d16]/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 sm:py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {device.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white">{device.title}</h3>
                  <div className="text-[11px] sm:text-xs font-mono text-cyan-400/90 mt-0.5">{device.subtitle}</div>

                  <p className="text-xs text-slate-400 mt-2.5 sm:mt-3 leading-relaxed">
                    {device.desc}
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-medium text-slate-300">
                  <span>{lang === 'en' ? 'Optimized' : 'অপ্টিমাইজড'}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% Tested
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Matrix */}
        <div className="rounded-2xl border border-slate-800 bg-[#090d16]/80 overflow-hidden shadow-xl">
          <div className="p-4 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-bold text-white text-base sm:text-lg">
                {lang === 'en' ? 'Hardware & OS Capability Matrix' : 'হার্ডওয়্যার ও ওএস সামঞ্জস্য তালিকা'}
              </h3>
              <p className="text-xs text-slate-400">
                {lang === 'en' ? 'Comprehensive verification across all popular media hardware' : 'সকল ডিভাইসে নির্ভুল স্ট্রিমিং ও পারফরম্যান্স যাচাইকৃত'}
              </p>
            </div>
            <span className="text-[11px] sm:text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              {lang === 'en' ? 'Broadcasting Engine v3.8' : 'ব্রডকাস্টিং ইঞ্জিন ৩.৮'}
            </span>
          </div>

          {/* Mobile Horizontal Scroll Indicator */}
          <div className="sm:hidden px-4 py-1.5 bg-cyan-950/30 border-b border-slate-800 text-[11px] text-cyan-400 flex items-center justify-between">
            <span>⇄ Swipe table horizontally</span>
            <span className="text-slate-400 text-[10px]">4 columns</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/40 text-slate-400">
                  <th className="py-3 px-4 sm:px-6 font-semibold">{lang === 'en' ? 'Platform Feature' : 'ফিচার'}</th>
                  <th className="py-3 px-3 sm:px-4 font-semibold text-center">Android TV</th>
                  <th className="py-3 px-3 sm:px-4 font-semibold text-center">Fire TV Stick</th>
                  <th className="py-3 px-3 sm:px-4 font-semibold text-center">Android Mobile</th>
                  <th className="py-3 px-3 sm:px-4 font-semibold text-center">TV Boxes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {compatibilityMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-medium text-white">{item.feature}</td>
                    <td className="py-3 px-3 sm:px-4 text-center">
                      {item.tv ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                      ) : (
                        <span className="text-slate-600">-</span>
                      )}
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-center">
                      {item.firetv ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                      ) : (
                        <span className="text-slate-600">-</span>
                      )}
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-center">
                      {item.mobile ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                      ) : (
                        <span className="text-slate-600">-</span>
                      )}
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-center">
                      {item.box ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                      ) : (
                        <span className="text-slate-600">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
