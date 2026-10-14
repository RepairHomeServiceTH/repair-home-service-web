import React from 'react';
import { 
  Home, 
  SearchCheck, 
  BadgePercent, 
  SmartphoneCharging, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  FileCheck2,
  Check
} from 'lucide-react';

export const ServiceFeatures: React.FC = () => {
  const highlights = [
    {
      id: 'doorstep',
      icon: Home,
      title: 'รับเครื่องถึงบ้าน',
      lead: 'ไม่ต้องฝ่ารถติด ไม่ต้องทนรอคิวที่ห้าง',
      description: 'เพียงแจ้งซ่อมผ่านแอป ช่างในพื้นที่จะนัดหมายและเดินทางไปรับเครื่องถึงหน้าบ้านหรือที่ทำงาน พร้อมถุงนิรภัยซีลเครื่องต่อหน้าคุณ',
      badge: 'สะดวกสบายสูงสุด',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 'diagnosis',
      icon: SearchCheck,
      title: 'ตรวจสอบอาการก่อนซ่อม',
      lead: 'เช็กละเอียดทุกฟังก์ชันด้วย Digital Checklist',
      description: 'ตรวจเช็กหน้าจอ ทัชสกรีน แบตเตอรี่ ไมค์ ลำโพง และเซ็นเซอร์ พร้อมบันทึกภาพถ่ายสภาพตัวเครื่องเดิมก่อนดำเนินการซ่อม',
      badge: 'ตรวจเช็กแม่นยำ',
      color: 'from-sky-500 to-indigo-500',
    },
    {
      id: 'transparent-price',
      icon: BadgePercent,
      title: 'แจ้งราคาและยืนยันก่อนดำเนินการ',
      lead: 'ไม่มีค่าใช้จ่ายแอบแฝง หรือบวกเพิ่มภายหลัง',
      description: 'ระบบจะออกใบเสนอราคาอย่างเป็นทางการในแอป แจ้งรายการอะไหล่และค่าแรง ลูกค้ากดยืนยันอนุมัติก่อน ช่างจึงจะเริ่มทำการซ่อม',
      badge: 'โปร่งใส 100%',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      id: 'live-tracking',
      icon: SmartphoneCharging,
      title: 'ติดตามสถานะงานผ่านแอป',
      lead: 'ดูความคืบหน้าแบบ Real-time ทุกสเต็ป',
      description: 'รับการแจ้งเตือนตั้งแต่ช่างมารับเครื่อง นำเข้าห้องแล็บซ่อม กำลังเปลี่ยนอะไหล่ ทดสอบคุณภาพ จนถึงช่างนำเครื่องส่งคืนถึงมือ',
      badge: 'อัปเดตตลอดเวลา',
      color: 'from-blue-500 to-violet-500',
    },
    {
      id: 'local-technician',
      icon: MapPin,
      title: 'มีช่างดูแลในพื้นที่',
      lead: 'เครือข่ายช่างและร้านซ่อมมืออาชีพใกล้บ้านคุณ',
      description: 'ช่างผ่านการคัดกรอง ตรวจสอบประวัติอาชญากรรม และผ่านการทดสอบทักษะฝีมือ เข้าใจปัญหามือถือแต่ละแบรนด์ พร้อมดูแลอย่างใกล้ชิด',
      badge: 'เครือข่ายทั่วประเทศ',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#07090E] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Exact Requirement) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Why Customers Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            บริการซ่อมมือถือที่คุณไว้ใจ
          </h2>
          <p className="text-base text-slate-300 mt-3 max-w-2xl mx-auto font-normal">
            ยกระดับมาตรฐานงานบริการซ่อมสมาร์ทโฟนด้วยเทคโนโลยี นำความสะดวกสบาย ความปลอดภัย และความจริงใจมามอบให้ถึงหน้าบ้านของคุณ
          </p>
        </div>

        {/* 5 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            // Center the 5th card on desktop grid
            const isLast = index === 4;
            return (
              <div
                key={item.id}
                className={`p-7 rounded-2xl bg-gradient-to-b from-[#0F1422] to-[#0A0D16] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group shadow-lg hover:shadow-cyan-950/30 flex flex-col justify-between ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-cyan-500 group-hover:to-blue-600 transition-all shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-medium text-cyan-400/90 mb-3">
                    {item.lead}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>มาตรฐาน Repair Home Service</span>
                </div>
              </div>
            );
          })}

          {/* Quick Stats Summary Card */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-[#0A0D16] border border-cyan-500/30 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2 mb-3 text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Service Guarantee</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">อุ่นใจทุกการซ่อม</h3>
              <p className="text-sm text-slate-300 mb-4">
                รับประกันอะไหล่แท้ และงานประกอบสูงสุด 90 วัน มีประวัติบันทึกในแอป เรียกตรวจเช็กซ้ำได้ทุกเวลา
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-slate-800">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">คะแนนความพึงพอใจ:</span>
                <span className="text-amber-400 font-bold">4.9 / 5.0 ดาว</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">เวลาตอบรับเฉลี่ย:</span>
                <span className="text-emerald-400 font-bold">ภายใน 5 นาที</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">ประกันงานซ่อม:</span>
                <span className="text-cyan-400 font-bold">สูงสุด 90 วัน</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
