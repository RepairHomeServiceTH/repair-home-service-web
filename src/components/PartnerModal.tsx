import React, { useState } from 'react';
import { X, Wrench, CheckCircle, ShieldCheck, MapPin, Phone, Building2, Smartphone } from 'lucide-react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [shopName, setShopName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [province, setProvince] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([
    'Samsung',
    'OPPO',
    'vivo',
    'Xiaomi',
  ]);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#0D121F] border border-cyan-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
          aria-label="ปิด"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">สมัครเป็นร้านซ่อมพาร์ตเนอร์</h3>
                <p className="text-xs text-cyan-400 font-medium">Repair Home Service Partner Network</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              เพิ่มรายได้และฐานลูกค้าใหม่ในพื้นที่ของคุณ รับงานซ่อมจากระบบโดยตรง มีระบบแผนที่นำทางรับเครื่อง และบริหารคิวงานได้สะดวกผ่านแอปช่าง
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    ชื่อร้านซ่อม / ชื่อช่าง *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={shopName}
                      onChange={(e) => setShopName(e.target.value)}
                      placeholder="เช่น โมบาย เซอร์วิส พลัส"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    ชื่อ-นามสกุล ผู้ติดต่อ *
                  </label>
                  <input
                    type="text"
                    required
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="นายสมชาย ใจดี"
                    className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    เบอร์โทรศัพท์มือถือ *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="08X-XXX-XXXX"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    จังหวัด / เขตพื้นที่ให้บริการ *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      placeholder="เช่น กรุงเทพฯ (เขตบางแค / ธนบุรี)"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  แบรนด์สมาร์ทโฟนที่ร้านมีความชำนาญ (เลือกได้หลายข้อ)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Samsung', 'OPPO', 'vivo', 'Xiaomi / Redmi', 'Apple iPhone', 'realme / อื่นๆ'].map((b) => {
                    const isChecked = selectedBrands.includes(b);
                    return (
                      <button
                        type="button"
                        key={b}
                        onClick={() => toggleBrand(b)}
                        className={`px-3 py-2 rounded-xl text-xs font-medium text-left transition-all border ${
                          isChecked
                            ? 'bg-cyan-500/15 border-cyan-500 text-cyan-200'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        ✓ {b}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-400 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>ไม่มีค่าแรกเข้า ช่างและร้านซ่อมจะได้รับค่าตอบแทนโอนเข้าบัญชีทันทีต่องานที่ทำเสร็จสิ้น</span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-cyan-500/20"
                >
                  ส่งข้อมูลสมัครพาร์ตเนอร์
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">ได้รับข้อมูลการสมัครเรียบร้อยแล้ว</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
              ขอบคุณร้าน <span className="text-cyan-400 font-semibold">{shopName || 'ของคุณ'}</span> เจ้าหน้าที่เครือข่าย Repair Home Service จะติดต่อกลับไปยังเบอร์ <span className="text-white font-semibold">{phone || 'ที่ระบุ'}</span> ภายใน 24 ชั่วโมง เพื่อยืนยันและเปิดบัญชีระบบช่าง
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-cyan-500 text-slate-950 font-bold rounded-xl text-sm hover:bg-cyan-400 transition-colors"
            >
              รับทราบและปิดหน้าต่าง
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
