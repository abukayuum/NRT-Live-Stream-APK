import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Activity, 
  Wifi, 
  ShieldCheck, 
  RefreshCw, 
  Radio, 
  Zap, 
  CheckCircle2, 
  Globe2,
  Cpu,
  BarChart3
} from 'lucide-react';
import { SERVER_NODES } from '../data/servers';

interface ServerStatusProps {
  lang: 'en' | 'bn';
}

export const ServerStatus: React.FC<ServerStatusProps> = ({ lang }) => {
  const [servers, setServers] = useState(SERVER_NODES);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [totalStreams, setTotalStreams] = useState(173670);

  // Slight simulated dynamic ping & load variations for realism
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setServers((prev) =>
        prev.map((srv) => ({
          ...srv,
          ping: Math.max(12, srv.ping + (Math.floor(Math.random() * 5) - 2)),
          load: Math.min(85, Math.max(30, srv.load + (Math.floor(Math.random() * 7) - 3)))
        }))
      );
      setTotalStreams((prev) => prev + Math.floor(Math.random() * 200) - 80);
      setIsRefreshing(false);
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalStreams((prev) => prev + (Math.floor(Math.random() * 15) - 7));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="servers" className="py-20 bg-[#06080d] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Server className="w-3.5 h-3.5" />
              {lang === 'en' ? 'Live TV Server Infrastructure' : 'লাইভ টিভি সার্ভার নেটওয়ার্ক'}
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
              {lang === 'en' ? (
                <>High-Bandwidth <span className="text-cyan-400">Global Server</span> Clusters</>
              ) : (
                <>হাই-ব্যান্ডউইথ <span className="text-cyan-400">গ্লোবাল সার্ভার</span> ক্লাস্টার</>
              )}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {lang === 'en'
                ? 'NRT STREAM connects you directly to dedicated low-latency live broadcast servers with built-in multi-server failover. If one stream source experiences network jitter, your app switches seamlessly in milliseconds.'
                : 'NRT STREAM-এ যুক্ত করা হয়েছে একাধিক হাই-স্পিড সার্ভার। খেলার সময় লাখ লাখ দর্শক একসাথে দেখলেও আমাদের অটো-ফেলওভার ইঞ্জিনের কারণে কোনো বাফারিং বা ড্রপ হয় না।'
              }
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center gap-3">
            <div className="px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-right">
              <div className="text-xs text-slate-400">{lang === 'en' ? 'Active Global Viewers' : 'সক্রিয় দর্শক সংখ্যা'}</div>
              <div className="text-xl font-bold font-mono text-cyan-400">
                {totalStreams.toLocaleString()}
              </div>
            </div>
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white transition-all shadow-sm"
              title="Refresh Server Node Ping"
            >
              <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin text-cyan-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Server Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {servers.map((srv) => (
            <div
              key={srv.id}
              className="p-5 rounded-2xl bg-[#090d16]/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-lg space-y-4 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-cyan-400 font-bold text-xs font-mono">
                    {srv.regionCode}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
                      {srv.name}
                    </h3>
                    <p className="text-xs text-slate-400">{srv.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </div>
              </div>

              {/* Bandwidth & Ping Specs */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <div className="text-slate-400 text-[10px] uppercase font-semibold">Latency / Ping</div>
                  <div className="font-mono font-bold text-cyan-400 mt-0.5 flex items-center gap-1">
                    <Wifi className="w-3 h-3 text-cyan-400" />
                    {srv.ping} ms
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <div className="text-slate-400 text-[10px] uppercase font-semibold">Server Load</div>
                  <div className="font-mono font-bold text-white mt-0.5 flex items-center gap-1">
                    <Activity className="w-3 h-3 text-amber-400" />
                    {srv.load}% Capacity
                  </div>
                </div>
              </div>

              {/* Load Bar */}
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span>Bandwidth Backbone</span>
                  <span className="font-mono text-slate-300">{srv.bandwidth}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${srv.load}%` }}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Special Multi-Server Redundancy Feature Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-blue-950/30 to-slate-900/90 border border-cyan-500/30 shadow-lg flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-2">
                <Zap className="w-4 h-4" />
                {lang === 'en' ? 'Smart Failover Architecture' : 'স্মার্ট অটো-ফেলওভার সিস্টেম'}
              </div>
              <h3 className="font-extrabold text-white text-base">
                {lang === 'en' ? 'Continuous 24/7 Redundancy' : 'সার্বক্ষণিক ব্যাকআপ ব্যবস্থা'}
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {lang === 'en'
                  ? 'All major sports & premium television networks are mirrored across 3 distinct server routes. Never miss a 90th-minute goal due to a frozen stream.'
                  : 'প্রতিটি লাইভ স্পোর্টস চ্যানেল ব্যাকআপ ৩টি ভিন্ন নোড থেকে মিরর করা থাকে। কোনো কারণে আপস্ট্রিম ডাউন হলেও আপনার স্ট্রিম বন্ধ হবে না।'
                }
              </p>
            </div>

            <div className="pt-3 border-t border-cyan-500/20 flex items-center justify-between text-xs font-semibold text-cyan-300">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Anti-Freeze Protection
              </span>
              <span className="font-mono">99.99% SLA</span>
            </div>
          </div>
        </div>

        {/* Technical Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#090d16] border border-slate-800 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono text-cyan-400">
              185+
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {lang === 'en' ? 'Global CDN Relays' : 'গ্লোবাল সিডিএন এজ'}
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono text-cyan-400">
              &lt; 3.2s
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {lang === 'en' ? 'Ultra-Low Live Latency' : 'লাইভ লেটেন্সি স্পিড'}
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono text-cyan-400">
              HEVC/H.265
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {lang === 'en' ? '50% Lower Data Usage' : 'অর্ধেক ডেটা খরচ'}
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono text-cyan-400">
              100% Free
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {lang === 'en' ? 'No Subscriptions Required' : 'কোনো ফি প্রয়োজন নেই'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
