import React from 'react';
import { X, Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0D121F] border border-cyan-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
          aria-label="ปิด"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            <Shield className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">นโยบายความเป็นส่วนตัวและมาตรฐานความปลอดภัย</h3>
            <p className="text-xs text-slate-400">Repair Home Service Data Protection & Guarantee Policy</p>
          </div>
        </div>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
              <Lock className="w-4 h-4" />
              <h4>1. การปกป้องข้อมูลส่วนบุคคลในอุปกรณ์ (Data Privacy Guarantee)</h4>
            </div>
            <p className="text-xs text-slate-400 mb-2">
              เราตระหนักดีว่าโทรศัพท์มือถือของคุณเก็บข้อมูลสำคัญ รูปภาพ ข้อความ และแอปพลิเคชันธุรกรรมต่างๆ:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>ช่างไม่มีสิทธิ์เข้าถึง ดู คัดลอก หรือส่งต่อข้อมูลส่วนตัวใดๆ ในอุปกรณ์ของลูกค้าโดยเด็ดขาด</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>ลูกค้าสามารถเปิด Maintenance Mode / Repair Mode (มีใน Samsung, Xiaomi, Apple) ก่อนส่งเครื่อง</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>ช่างทุกคนลงนามในสัญญาข้อตกลงรักษาความลับทางกฎหมาย (Non-Disclosure Agreement)</span>
              </li>
            </ul>
          </section>

          <section className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
              <Shield className="w-4 h-4" />
              <h4>2. มาตรการถุงนิรภัยและรหัสล็อก (Tamper-Proof Protocol)</h4>
            </div>
            <p className="text-xs text-slate-300">
              เมื่อช่างมารับเครื่องถึงหน้าบ้าน จะทำการตรวจสภาพภายนอก ถ่ายภาพบันทึกในระบบ และบรรจุเครื่องลงในถุงนิรภัยรักษาความปลอดภัยที่มีบาร์โค้ดเฉพาะตัว ไม่สามารถเปิดออกได้โดยไม่ทิ้งร่องรอย
            </p>
          </section>

          <section className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
              <FileText className="w-4 h-4" />
              <h4>3. นโยบายการรับประกันงานซ่อม (Warranty Policy)</h4>
            </div>
            <p className="text-xs text-slate-300">
              รับประกันอะไหล่และงานซ่อมสูงสุด 90 วัน นับจากวันที่ลูกค้ารับเครื่องคืน มีใบรับประกันดิจิทัลบันทึกในแอป หากชิ้นส่วนเดิมทำงานผิดปกติ สามารถเรียกช่างมารับเครื่องเพื่อแก้ไขได้ฟรี
            </p>
          </section>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};
