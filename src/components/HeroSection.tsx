import React, { useState } from 'react';
import { 
  Download, 
  Wrench, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Smartphone, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Navigation,
  Sparkles
} from 'lucide-react';

interface HeroSectionProps {
  onOpenDownload: () => void;
  onOpenPartner: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenDownload,
  onOpenPartner,
}) => {
  const [activeBrandTab, setActiveBrandTab] = useState<'samsung' | 'oppo' | 'vivo' | 'xiaomi'>('samsung');

  const brandShowcases = {
    samsung: {
      brand: 'Samsung Galaxy S24 Ultra',
      issue: 'เปลี่ยนชุดหน้าจอแท้ Dynamic AMOLED',
      time: 'ช่างมารับเครื่องใน 5 นาที',
      status: 'ช่างอัครเดช รับงานแล้ว กำลังเดินทาง',
      code: 'RH-SMSG-2489',
      dist: '1.2 กม.',
      color: 'from-blue-600/30 to-indigo-600/10',
    },
    oppo: {
      brand: 'OPPO Reno 12 Pro 5G',
      issue: 'เปลี่ยนพอร์ตชาร์จ SUPERVOOC & แบตแท้',
      time: 'ช่างมารับเครื่องใน 7 นาที',
      status: 'ช่างณัฐพล อยู่ใกล้คุณ 850 เมตร',
      code: 'RH-OPPO-5120',
      dist: '0.85 กม.',
      color: 'from-emerald-600/30 to-teal-600/10',
    },
    vivo: {
      brand: 'vivo X100 Pro (ZEISS)',
      issue: 'เปลี่ยนกระจกเลนส์กล้อง & เช็กระบบโฟกัส',
      time: 'ช่างมารับเครื่องใน 4 นาที',
      status: 'ช่างปิยะพงษ์ ยืนยันพิกัดหน้าบ้านแล้ว',
      code: 'RH-VIVO-9931',
      dist: '1.1 กม.',
      color: 'from-indigo-600/30 to-blue-600/10',
    },
    xiaomi: {
      brand: 'Xiaomi 14 Ultra / HyperCharge',
      issue: 'เปลี่ยนจอ CrystalRes 1.5K & เซ็นเซอร์',
      time: 'ช่างมารับเครื่องใน 6 นาที',
      status: 'ช่างเกรียงไกร พร้อมถุงนิรภัยซีลเครื่อง',
      code: 'RH-MI-7740',
      dist: '1.4 กม.',
      color: 'from-orange-600/30 to-amber-600/10',
    },
  };

  const current = brandShowcases[activeBrandTab];

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden tech-grid-bg">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-400/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Brand Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-semibold text-cyan-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>บริการ On-Demand Doorstep Repair โฉมใหม่</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">ครอบคลุมทุกแบรนด์</span>
            </div>

            {/* Main Headline (Exact requirement) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              ซ่อมมือถือถึงบ้าน <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                ง่ายกว่าเดิม
              </span>
            </h1>

            {/* Subtext (Exact requirement) */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              ไม่ต้องเสียเวลาเดินทางไปที่ร้าน แจ้งซ่อมผ่านแอป ช่างในพื้นที่พร้อมไปรับเครื่องถึงหน้าบ้าน
            </p>

            {/* Brand support highlight */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-400">
              <span className="text-cyan-400 font-medium">รองรับทุกแบรนด์ยอดนิยม:</span>
              <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-200 border border-slate-700/60 font-semibold">Samsung</span>
              <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-200 border border-slate-700/60 font-semibold">OPPO</span>
              <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-200 border border-slate-700/60 font-semibold">vivo</span>
              <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-200 border border-slate-700/60 font-semibold">Xiaomi</span>
              <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-200 border border-slate-700/60 font-semibold">realme</span>
              <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-200 border border-slate-700/60 font-semibold">iPhone</span>
            </div>

            {/* CTA Buttons (Exact requirement) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenDownload}
                className="px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 flex items-center justify-center gap-2.5 transition-all group"
              >
                <Download className="w-5 h-5 text-slate-950 group-hover:-translate-y-0.5 transition-transform" />
                <span>ดาวน์โหลดแอปลูกค้า</span>
              </button>

              <button
                onClick={onOpenPartner}
                className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-white font-semibold rounded-xl text-base border border-slate-700 hover:border-cyan-500/60 flex items-center justify-center gap-2 transition-all"
              >
                <Wrench className="w-4 h-4 text-cyan-400" />
                <span>เข้าร่วมเป็นร้านซ่อม</span>
              </button>
            </div>

            {/* Micro Highlights & Trust markers */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300">รับประกัน 90 วัน</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300">ช่างรับเครื่องถึงบ้าน</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300">ตอบรับใน 5 นาที</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Dark Tech Mobile App & Doorstep Technician Simulation */}
          <div className="lg:col-span-5 relative">
            {/* Interactive Brand Selector for simulation */}
            <div className="mb-3 flex items-center justify-between bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 text-xs">
              <span className="text-slate-400 text-[11px] px-2 font-medium hidden sm:inline">จำลองงานซ่อม:</span>
              <div className="flex items-center gap-1 w-full sm:w-auto justify-between">
                <button
                  onClick={() => setActiveBrandTab('samsung')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    activeBrandTab === 'samsung'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Samsung
                </button>
                <button
                  onClick={() => setActiveBrandTab('oppo')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    activeBrandTab === 'oppo'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  OPPO
                </button>
                <button
                  onClick={() => setActiveBrandTab('vivo')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    activeBrandTab === 'vivo'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  vivo
                </button>
                <button
                  onClick={() => setActiveBrandTab('xiaomi')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    activeBrandTab === 'xiaomi'
                      ? 'bg-orange-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Xiaomi
                </button>
              </div>
            </div>

            {/* Smartphone Mockup Container */}
            <div className="relative mx-auto max-w-[340px] sm:max-w-[360px] bg-[#0A0D14] border-2 border-slate-700/80 rounded-[40px] p-3 shadow-2xl shadow-cyan-950/50 glow-cyan">
              {/* Speaker Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full flex items-center justify-center gap-2 z-30 border border-slate-800">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700" />
                <div className="w-8 h-1 bg-slate-700 rounded-full" />
              </div>

              {/* Screen Body */}
              <div className="relative bg-[#07090F] rounded-[32px] overflow-hidden border border-slate-800/80 p-4 pt-9 space-y-3.5">
                
                {/* App Screen Top Bar */}
                <div className="flex items-center justify-between border-b border-slate-800/60 pb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
                      R
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-white leading-none">Repair Home Service</p>
                      <p className="text-[9px] text-cyan-400">สถานะงานสด (Live Pickup)</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    ● กำลังไปรับเครื่อง
                  </span>
                </div>

                {/* Live Dispatch Map Simulation */}
                <div className="relative h-32 rounded-xl bg-slate-900 overflow-hidden border border-slate-800 flex items-center justify-center">
                  {/* Faux map routes */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="20" x2="280" y2="40" stroke="#00D2FF" strokeWidth="2" strokeDasharray="4 2" />
                    <line x1="60" y1="120" x2="240" y2="20" stroke="#38BDF8" strokeWidth="3" />
                    <circle cx="210" cy="45" r="14" fill="#0284C7" fillOpacity="0.2" />
                    <circle cx="70" cy="110" r="10" fill="#10B981" fillOpacity="0.2" />
                  </svg>
                  
                  {/* Home Pin */}
                  <div className="absolute bottom-4 left-6 flex items-center gap-1.5 bg-slate-950/90 border border-emerald-500/50 px-2 py-1 rounded-lg shadow-lg">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[10px] text-white font-medium">บ้านคุณ (จุดรับเครื่อง)</span>
                  </div>

                  {/* Technician Vehicle / Motorbike Marker */}
                  <div className="absolute top-4 right-10 flex items-center gap-1.5 bg-cyan-950/90 border border-cyan-400 px-2.5 py-1 rounded-lg shadow-lg animate-bounce">
                    <Navigation className="w-3.5 h-3.5 text-cyan-300" />
                    <span className="text-[10px] text-cyan-200 font-bold">ช่างกำลังมา ({current.dist})</span>
                  </div>
                </div>

                {/* Technician Card */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                        ช่าง
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-900" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <p className="text-xs font-bold text-white">ช่างผู้ดูแลในพื้นที่</p>
                        <span className="flex items-center text-[10px] text-amber-400 font-bold">
                          <Star className="w-2.5 h-2.5 fill-amber-400" /> 4.9
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400">{current.status}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-cyan-300 bg-cyan-950/70 border border-cyan-800/80 px-2 py-1 rounded-lg font-semibold">
                    โทรติดต่อ
                  </span>
                </div>

                {/* Active Repair Order Details */}
                <div className={`p-3 rounded-xl bg-gradient-to-br ${current.color} border border-slate-700/60 space-y-1.5`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-mono">รหัสงาน {current.code}</span>
                    <span className="text-[10px] text-emerald-400 font-medium">ตรวจสภาพก่อนซ่อม</span>
                  </div>
                  <p className="text-xs font-bold text-white">{current.brand}</p>
                  <p className="text-[11px] text-cyan-200">{current.issue}</p>
                  
                  <div className="pt-1.5 border-t border-slate-700/50 flex items-center justify-between text-[10px] text-slate-300">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-cyan-400" />
                      ถุงนิรภัยซีลรับเครื่อง
                    </span>
                    <span className="text-white font-bold">{current.time}</span>
                  </div>
                </div>

                {/* Bottom Action inside App Mockup */}
                <button
                  onClick={onOpenDownload}
                  className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 rounded-lg text-xs font-bold flex items-center justify-center gap-1 shadow-md hover:opacity-95"
                >
                  <span>เปิดดูในแอป Repair Home Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Floating Decorative Badges around Phone */}
            <div className="hidden sm:flex absolute -left-6 bottom-16 bg-[#0D1322] border border-cyan-500/30 rounded-xl p-3 shadow-xl items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-white">ยืนยันราคาก่อนเริ่มซ่อม</p>
                <p className="text-[10px] text-slate-400">ไม่มีค่าใช้จ่ายแอบแฝง</p>
              </div>
            </div>

            <div className="hidden sm:flex absolute -right-6 top-24 bg-[#0D1322] border border-blue-500/30 rounded-xl p-3 shadow-xl items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Wrench className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-white">ช่างผ่านการตรวจประวัติ</p>
                <p className="text-[10px] text-slate-400">มาตรฐานช่างมืออาชีพ 100%</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
