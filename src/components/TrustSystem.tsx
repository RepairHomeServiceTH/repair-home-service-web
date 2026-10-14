import React, { useState } from 'react';
import { TRUST_SYSTEMS } from '../data/repairData';
import { 
  ShieldCheck, 
  MapPin, 
  Navigation, 
  PhoneCall, 
  Camera, 
  CheckCircle2, 
  Cpu, 
  Lock,
  Layers
} from 'lucide-react';

export const TrustSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tracking');

  const systemIcons: Record<string, React.ElementType> = {
    tracking: Camera,
    geofencing: Navigation,
    fare_calc: MapPin,
    connect: PhoneCall,
  };

  const detailedViews: Record<string, {
    title: string;
    points: string[];
    techBadge: string;
    diagramLabel: string;
  }> = {
    tracking: {
      title: 'ตรวจสอบสถานะแบบโปร่งใส 100%',
      points: [
        'ถ่ายภาพสภาพเครื่องภายนอกทุกมุมก่อนบรรจุลงถุงนิรภัย',
        'บันทึกภาพถ่ายอะไหล่ใหม่แท้ก่อนทำการติดตั้งลงบอร์ด',
        'ทดสอบระบบ 20 รายการพร้อมบันทึกผลการทดสอบดิจิทัล',
        'ลูกค้าสามารถเปิดดูประวัติย้อนหลังในแอปได้ตลอดเวลา',
      ],
      techBadge: 'Real-Time Audit Trail',
      diagramLabel: 'การบันทึกภาพและสถานะ 4 ขั้นตอน',
    },
    geofencing: {
      title: 'จัดสรรงานตามพิกัดและพื้นที่ใกล้ที่สุด',
      points: [
        'ระบบ Smart Geofencing กำหนดขอบเขตบริการที่เหมาะสม',
        'ช่างในพื้นที่จะได้รับงานในรัศมี 3 - 5 กิโลเมตรเท่านั้น',
        'ลดเวลาเดินทาง ทำให้เดินทางมารับเครื่องได้เร็วเฉลี่ยใน 5 - 15 นาที',
        'ลดการปล่อยคาร์บอนและประหยัดพลังงานการเดินทาง',
      ],
      techBadge: 'GPS Hyperlocal Algorithm',
      diagramLabel: 'การกระจายงานรัศมี 3-5 กิโลเมตร',
    },
    fare_calc: {
      title: 'คำนวณค่าเดินทางยุติธรรม เที่ยงตรง',
      points: [
        'คำนวณจากระยะทางจริงด้วยระบบพิกัดดาวเทียมความแม่นยำสูง',
        'แสดงตัวเลขค่าเดินทางชัดเจนบนหน้าจอก่อนกดเรียกช่าง',
        'ไม่มีการคิดค่าบริการแอบแฝง หรือชาร์จเพิ่มตามใจชอบ',
        'มีโปรโมชั่นฟรีค่าเดินทางในพื้นที่ครอบคลุมเป็นประจำ',
      ],
      techBadge: 'Dynamic Routing Pricing',
      diagramLabel: 'คิดตามระยะทางจริง ไม่มีบวกเพิ่ม',
    },
    connect: {
      title: 'ช่องทางติดต่อปลอดภัย ไม่เปิดเผยเบอร์ส่วนตัว',
      points: [
        'โทรและแชทกับช่างผู้ดูแลเครื่องได้โดยตรงผ่านแอปพลิเคชัน',
        'ระบบปกปิดเบอร์โทรจริงเพื่อความเป็นส่วนตัวและความปลอดภัย',
        'บันทึกประวัติการสนทนาเพื่อเป็นหลักฐานความถูกต้องของงาน',
        'มีเจ้าหน้าที่ฝ่ายบริการลูกค้าส่วนกลางพร้อมช่วยเหลือ 24 ชั่วโมง',
      ],
      techBadge: 'Masked VoIP & Secure Chat',
      diagramLabel: 'เชื่อมต่อตรง พร้อมทีมสนับสนุน 24 ชม.',
    },
  };

  const activeView = detailedViews[activeTab];

  return (
    <section id="trust" className="py-20 bg-[#07090E] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Exact Requirement) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Engineering Security & Infrastructure
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            ระบบสร้างความมั่นใจ 4 ด้าน
          </h2>
          <p className="text-base text-slate-300 mt-3 font-normal max-w-2xl mx-auto">
            ขับเคลื่อนด้วยระบบเทคโนโลยีที่ออกแบบมาเพื่อคุ้มครองลูกค้า รักษาข้อมูลส่วนตัว และให้ความโปร่งใสในทุกขั้นตอน
          </p>
        </div>

        {/* 4 Systems Tab Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {TRUST_SYSTEMS.map((sys) => {
            const Icon = systemIcons[sys.id] || ShieldCheck;
            const isSelected = activeTab === sys.id;
            return (
              <button
                key={sys.id}
                onClick={() => setActiveTab(sys.id)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#111A2E] to-[#0C1220] border-cyan-500 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-500/50'
                    : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-cyan-400 font-mono">
                    {sys.stats}
                  </span>
                </div>
                <div>
                  <h3
                    className={`text-sm sm:text-base font-bold ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {sys.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                    {sys.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed System Deep Dive Container */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0D1322] to-[#080B12] border border-cyan-500/25 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
                  {activeView.techBadge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeView.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {TRUST_SYSTEMS.find((s) => s.id === activeTab)?.desc}
              </p>

              <div className="space-y-2.5 pt-2">
                {activeView.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Architecture Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-cyan-400" />
                  <span>ความปลอดภัยระดับมาตรฐาน</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">VERIFIED</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 space-y-3">
                <p className="text-xs font-semibold text-slate-300">{activeView.diagramLabel}</p>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300">
                    ✓ ถุงนิรภัย Tamper-Proof
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300">
                    ✓ บัตรประจำตัวช่าง
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300">
                    ✓ ประกันงาน 90 วัน
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300">
                    ✓ รองรับทุกแบรนด์มือถือ
                  </div>
                </div>
              </div>

              <div className="text-center pt-2">
                <p className="text-[11px] text-slate-400">
                  เครื่องทุกเครื่องได้รับการคุ้มครองตลอดระยะเวลาการรับ-ส่งและซ่อม
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
