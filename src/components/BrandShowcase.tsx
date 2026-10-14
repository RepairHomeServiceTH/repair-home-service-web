import React, { useState } from 'react';
import { PHONE_BRANDS } from '../data/repairData';
import { Smartphone, CheckCircle, Cpu, ShieldCheck } from 'lucide-react';

interface BrandShowcaseProps {
  onSelectBrand?: (brandId: string) => void;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = ({ onSelectBrand }) => {
  const [activeBrandId, setActiveBrandId] = useState<string>('samsung');

  const selectedBrand = PHONE_BRANDS.find((b) => b.id === activeBrandId) || PHONE_BRANDS[0];

  return (
    <section className="py-14 bg-[#080C14] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Multi-Brand Engineering Expertise
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            รองรับสมาร์ทโฟนทุกแบรนด์ชั้นนำในไทย
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            ไม่จำกัดแค่แบรนด์ใดแบรนด์หนึ่ง เรามีช่างผู้เชี่ยวชาญและสต็อกอะไหล่พร้อมซ่อมทั้ง Samsung, OPPO, vivo, Xiaomi, realme และ iPhone
          </p>
        </div>

        {/* Brand Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {PHONE_BRANDS.map((brand) => {
            const isActive = brand.id === activeBrandId;
            return (
              <button
                key={brand.id}
                onClick={() => {
                  setActiveBrandId(brand.id);
                  if (onSelectBrand) onSelectBrand(brand.id);
                }}
                className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center relative overflow-hidden group ${
                  isActive
                    ? 'bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-950/70 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
                )}
                <span className="text-lg font-black text-white tracking-wider mb-1 group-hover:text-cyan-300 transition-colors">
                  {brand.name}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {brand.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Brand Spotlight Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0C1220] to-slate-900/90 border border-slate-700/70 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-cyan-300">CERTIFIED REPAIR SPECIFICATION</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{selectedBrand.name}</h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                {selectedBrand.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>ช่างมีเครื่องมือเฉพาะทางและตรวจเช็กค่ามาตรฐานโรงงาน</span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                รุ่นยอดนิยมที่มีอะไหล่พร้อมบริการทันที ({selectedBrand.name})
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {selectedBrand.popularModels.map((model) => (
                  <div
                    key={model}
                    className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-xs font-semibold text-white truncate">{model}</p>
                      <p className="text-[10px] text-slate-400">ช่างพร้อมรับถึงบ้าน</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
