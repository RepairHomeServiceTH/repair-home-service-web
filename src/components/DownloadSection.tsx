import React from 'react';
import { Download, Smartphone, Star, ShieldCheck, QrCode, CheckCircle2 } from 'lucide-react';

interface DownloadSectionProps {
  onOpenDownload: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onOpenDownload }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#07090E] via-[#0B101D] to-[#06080D] relative overflow-hidden">
      {/* Radiant glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-gradient-to-br from-[#0F1526] via-[#0A0E18] to-[#07090F] border border-cyan-500/35 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>เปิดบริการแล้วในพื้นที่ของคุณ</span>
              </div>

              {/* Exact required headline */}
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                พร้อมให้บริการแล้ววันนี้
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
                ไม่ต้องเสียเวลาเดินทางไปที่ร้าน แจ้งซ่อมผ่านแอป ช่างในพื้นที่พร้อมไปรับเครื่องถึงหน้าบ้าน ซ่อมมือถือทุกแบรนด์ Samsung, OPPO, vivo, Xiaomi, realme, iPhone
              </p>

              {/* Exact required button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenDownload}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-black rounded-xl text-base shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-3 transition-all group"
                >
                  <Download className="w-5 h-5 text-slate-950 group-hover:-translate-y-0.5 transition-transform" />
                  <span>ดาวน์โหลดแอป Repair Home Service</span>
                </button>
              </div>

              {/* App stats bar */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">50,000+</p>
                  <p className="text-xs text-slate-400">ผู้ใช้บริการ</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-cyan-400">800+</p>
                  <p className="text-xs text-slate-400">ร้านช่างในเครือข่าย</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-amber-400 flex items-center gap-1">
                    4.9 <Star className="w-4 h-4 fill-amber-400 inline" />
                  </p>
                  <p className="text-xs text-slate-400">คะแนนความพึงพอใจ</p>
                </div>
              </div>
            </div>

            {/* Right QR Code & Direct Scan Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 text-center space-y-4 max-w-xs w-full shadow-2xl">
                <div className="w-40 h-40 bg-white p-3 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                  {/* SVG QR Code */}
                  <svg className="w-full h-full text-slate-950" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm12-2h2v2h-2v-2zm4 0h2v4h-4v-2h2v-2zm-6 2h2v4h-2v-4zm4 4h4v2h-4v-2zm-2 2h2v2h-2v-2zm-6-2h2v4h-2v-4zm-4-4h2v2H6v-2zm8-2h2v2h-2v-2z" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-bold text-white flex items-center justify-center gap-1.5">
                    <QrCode className="w-4 h-4 text-cyan-400" />
                    <span>สแกนเพื่อดาวน์โหลดทันที</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    รองรับทั้ง Android (Google Play & APK) และ iOS
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-emerald-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>เวอร์ชันล่าสุด 2.4.0 ปลอดภัย 100%</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
