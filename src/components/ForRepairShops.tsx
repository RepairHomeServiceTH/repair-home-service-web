import React, { useState } from 'react';
import { 
  Wrench, 
  Layers, 
  Users, 
  MapPin, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

interface ForRepairShopsProps {
  onOpenPartner: () => void;
}

export const ForRepairShops: React.FC<ForRepairShopsProps> = ({ onOpenPartner }) => {
  const [jobsPerDay, setJobsPerDay] = useState<number>(4);
  const avgProfitPerJob = 650; // THB net per job estimated
  const monthlyRevenue = jobsPerDay * avgProfitPerJob * 26; // 26 working days

  const features = [
    {
      id: 'receive-jobs',
      icon: Layers,
      title: 'รับงานผ่านระบบ',
      desc: 'ระบบกระจายงานซ่อมมือถือส่งตรงถึงมือถือของคุณอัตโนมัติ ตามรัศมีพื้นที่ให้บริการที่คุณสะดวก ไม่ต้องเหนื่อยทำการตลาดหาลูกค้าเอง',
      benefit: 'คิวงานสม่ำเสมอทุกวัน',
    },
    {
      id: 'manage-customers',
      icon: Users,
      title: 'จัดการลูกค้า',
      desc: 'ระบบแชท ส่งใบเสนอราคา และบันทึกประวัติการติดต่อลูกค้าอย่างเป็นมืออาชีพ ลดการสื่อสารคลาดเคลื่อน เพิ่มความน่าเชื่อถือให้กับร้านของคุณ',
      benefit: 'ระบบสื่อสารมืออาชีพ',
    },
    {
      id: 'pickup-location',
      icon: MapPin,
      title: 'ดูตำแหน่งรับเครื่อง',
      desc: 'ระบบแผนที่นำทาง GPS คำนวณเส้นทางไปรับ-ส่งเครื่องถึงหน้าบ้านลูกค้าอย่างแม่นยำ พร้อมระบบแจ้งเตือนเวลาและพิกัดแบบเรียลไทม์',
      benefit: 'แผนที่นำทางอัจฉริยะ',
    },
    {
      id: 'track-status',
      icon: BarChart3,
      title: 'ติดตามสถานะงาน',
      desc: 'Dashboard ช่าง บันทึกภาพถ่ายก่อน-หลังซ่อม จัดการสต็อกอะไหล่ และสรุปยอดรายได้โอนเข้าบัญชีทันทีเมื่อปิดงานสำเร็จ',
      benefit: 'เงินเข้าบัญชีทันใจ',
    },
  ];

  return (
    <section id="for-shops" className="py-20 bg-[#090D17] relative overflow-hidden border-t border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Exact Requirement) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Technician & Shop Partner Network
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            เพิ่มโอกาสรับลูกค้าใหม่สำหรับร้านซ่อมมือถือ
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3 font-normal max-w-2xl mx-auto">
            เข้าร่วมเครือข่าย Repair Home Service รับงานในพื้นที่ บริหารงานผ่านแอปช่าง
          </p>
        </div>

        {/* 4 Feature Pillars (Exact Requirement) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#0F1424] to-[#0A0E17] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-5 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                <div className="pt-4 mt-5 border-t border-slate-800 text-xs font-semibold text-cyan-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{feat.benefit}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technician Earnings Simulator & CTA Box */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#0E1528] to-slate-900 border border-cyan-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>จำลองรายได้เพิ่มขึ้นสำหรับร้านซ่อมพาร์ตเนอร์</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                สร้างรายได้เสริมมั่นคง ไม่ต้องรอให้ลูกค้าเดินเข้าร้าน
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                ระบบจะส่งงานซ่อมหน้าจอ แบตเตอรี่ พอร์ตชาร์จ และซ่อมบอร์ดในรัศมีร้านของคุณ ช่างสามารถเลือกกดรับงานที่สะดวก ทำเสร็จรับเงินทันที
              </p>

              {/* Interactive slider */}
              <div className="pt-2 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-semibold">จำนวนงานรับต่อวัน:</span>
                  <span className="text-cyan-400 font-bold text-sm">{jobsPerDay} งาน / วัน</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={jobsPerDay}
                  onChange={(e) => setJobsPerDay(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>1 งาน</span>
                  <span>6 งาน</span>
                  <span>12 งาน</span>
                </div>
              </div>
            </div>

            {/* Right calculated estimation */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#090D18] border border-cyan-500/40 text-center space-y-4">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                ประมาณการรายได้สุทธิเพิ่มขึ้น / เดือน
              </p>
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">
                ~ {monthlyRevenue.toLocaleString()} บาท
              </div>
              <p className="text-xs text-slate-400">
                (คิดจากค่าเฉลี่ยกำไร 650 บ./งาน x ทำงาน 26 วัน)
              </p>

              <button
                onClick={onOpenPartner}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <Wrench className="w-4 h-4 text-slate-950" />
                <span>สมัครเข้าร่วมเป็นร้านซ่อมพาร์ตเนอร์</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-slate-500">
                ✓ ฟรีค่าสมัครแรกเข้า · ตรวจสอบและเปิดระบบภายใน 24 ชม.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
