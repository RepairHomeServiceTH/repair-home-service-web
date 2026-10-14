import React from 'react';
import { 
  Smartphone, 
  Wrench, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  MessageSquare,
  Facebook
} from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenPartner: () => void;
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenPartner,
  onOpenDownload,
}) => {
  return (
    <footer className="bg-[#05070B] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <div className="flex items-center justify-center relative">
                  <Smartphone className="w-5 h-5 text-slate-950" />
                  <Wrench className="w-3.5 h-3.5 text-slate-950 absolute -bottom-1 -right-1" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">
                  Repair Home Service
                </span>
                <p className="text-[10px] uppercase tracking-wider text-cyan-400 font-semibold">
                  แพลตฟอร์มซ่อมมือถือถึงบ้าน
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              ซ่อมมือถือถึงบ้าน ง่ายกว่าเดิม ไม่ต้องเสียเวลาเดินทางไปที่ร้าน แจ้งซ่อมผ่านแอป ช่างในพื้นที่พร้อมไปรับเครื่องถึงหน้าบ้าน รองรับทุกแบรนด์ทั้ง Samsung, OPPO, vivo, Xiaomi, realme และ iPhone
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>รับประกันงานซ่อมสูงสุด 90 วัน มั่นใจความปลอดภัย 100%</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              เมนูลัด
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  บริการซ่อมมือถือ
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-cyan-300 transition-colors">
                  ประเมินราคาซ่อม
                </a>
              </li>
              <li>
                <a href="#steps" className="hover:text-cyan-300 transition-colors">
                  5 ขั้นตอนการใช้งาน
                </a>
              </li>
              <li>
                <a href="#for-shops" className="hover:text-cyan-300 transition-colors">
                  สำหรับร้านซ่อมมือถือ
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-cyan-300 transition-colors">
                  ระบบความมั่นใจ
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-300 transition-colors">
                  คำถามที่พบบ่อย (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Services & Brands */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              แบรนด์ที่รองรับ
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-slate-300">Samsung Galaxy (S/A/Z Series)</span>
              </li>
              <li>
                <span className="text-slate-300">OPPO (Find / Reno / A Series)</span>
              </li>
              <li>
                <span className="text-slate-300">vivo (X / V / Y Series)</span>
              </li>
              <li>
                <span className="text-slate-300">Xiaomi / Redmi / POCO</span>
              </li>
              <li>
                <span className="text-slate-300">realme (GT / Number Series)</span>
              </li>
              <li>
                <span className="text-slate-300">Apple iPhone (ทุกรุ่น)</span>
              </li>
            </ul>
          </div>

          {/* Contact Channels (Exact Requirement) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              ช่องทางติดต่อ
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Call Center: 02-098-8888 (24 ชม.)</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>LINE Official: @repairhomeservice</span>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Facebook: Repair Home Service TH</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Email: support@repairhome.service</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>เวลาให้บริการรับเครื่อง: 08:00 - 21:00 น.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Privacy Policy & Actions */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © 2026 Repair Home Service. สงวนลิขสิทธิ์ทั้งหมด (All Rights Reserved)
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="text-slate-400 hover:text-cyan-300 transition-colors underline underline-offset-4"
            >
              นโยบายความเป็นส่วนตัว
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={onOpenPartner}
              className="text-slate-400 hover:text-cyan-300 transition-colors"
            >
              สมัครเป็นร้านซ่อม
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={onOpenDownload}
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              ดาวน์โหลดแอป
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
