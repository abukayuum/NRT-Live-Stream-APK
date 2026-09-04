import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../data/servers';

interface FaqSectionProps {
  lang: 'en' | 'bn';
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 bg-[#06080d] relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            {lang === 'en' ? 'Frequently Asked Questions' : 'সাধারণ জিজ্ঞাসা ও উত্তর'}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
            {lang === 'en' ? (
              <>Got Questions about <span className="text-cyan-400">NRT STREAM</span>?</>
            ) : (
              <>NRT STREAM সম্পর্কে <span className="text-cyan-400">জরুরি তথ্যাবলী</span></>
            )}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Find quick answers about device support, multi-server setup, Downloader codes, and Vercel hosting.'
              : 'ডিভাইস সামঞ্জস্য, সার্ভার বাফারিং ও ডাউনলোডার কোড সম্পর্কিত আপনার সব প্রশ্নের সহজ সমাধান।'
            }
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0d121f] border-cyan-500/40 shadow-lg shadow-cyan-950/40'
                    : 'bg-[#090d16]/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 select-none"
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {lang === 'en' ? item.question : item.questionBn}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-200 ${isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-400' : 'text-slate-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                    {lang === 'en' ? item.answer : item.answerBn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
