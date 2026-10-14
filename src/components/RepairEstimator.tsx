import React, { useState } from 'react';
import { PHONE_BRANDS, REPAIR_ISSUES } from '../data/repairData';
import { 
  Calculator, 
  Smartphone, 
  Clock, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight, 
  Wrench,
  MapPin,
  Sparkles
} from 'lucide-react';

interface RepairEstimatorProps {
  onOpenDownload: () => void;
}

export const RepairEstimator: React.FC<RepairEstimatorProps> = ({ onOpenDownload }) => {
  const [selectedBrandId, setSelectedBrandId] = useState<string>('samsung');
  const selectedBrand = PHONE_BRANDS.find((b) => b.id === selectedBrandId) || PHONE_BRANDS[0];

  const [selectedModel, setSelectedModel] = useState<string>(selectedBrand.popularModels[0]);
  const [selectedIssueId, setSelectedIssueId] = useState<string>('screen');
  const selectedIssue = REPAIR_ISSUES.find((i) => i.id === selectedIssueId) || REPAIR_ISSUES[0];

  const handleBrandChange = (brandId: string) => {
    setSelectedBrandId(brandId);
    const newBrand = PHONE_BRANDS.find((b) => b.id === brandId) || PHONE_BRANDS[0];
    setSelectedModel(newBrand.popularModels[0]);
  };

  return (
    <section id="estimator" className="py-20 bg-[#0A0E18] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>ระบบคำนวณและประเมินค่าบริการเบื้องต้น</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ตรวจสอบราคาและระยะเวลาซ่อมมือถือ
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            เลือกยี่ห้อ รุ่น และอาการเสีย เพื่อดูค่าใช้จ่ายประมาณการ ช่างพร้อมเดินทางไปรับเครื่องถึงบ้านคุณ
          </p>
        </div>

        {/* Interactive Estimator Tool */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0D121F] border border-slate-800 space-y-6">
            
            {/* 1. Pick Brand */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                1. เลือกแบรนด์สมาร์ทโฟน
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {PHONE_BRANDS.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => handleBrandChange(b.id)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border ${
                      selectedBrandId === b.id
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Pick Model */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                2. เลือกรุ่นมือถือ ({selectedBrand.name})
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedBrand.popularModels.map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedModel(m)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold text-left transition-all border flex items-center justify-between ${
                      selectedModel === m
                        ? 'bg-slate-800 border-cyan-500 text-cyan-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className="truncate">{m}</span>
                    {selectedModel === m && <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-1" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Pick Issue */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                3. เลือกอาการเสียที่พบ
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {REPAIR_ISSUES.map((issue) => (
                  <button
                    key={issue.id}
                    onClick={() => setSelectedIssueId(issue.id)}
                    className={`p-3 rounded-xl text-left transition-all border flex items-start gap-2.5 ${
                      selectedIssueId === issue.id
                        ? 'bg-cyan-950/40 border-cyan-500 text-white shadow-sm'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                    }`}
                  >
                    <Wrench className={`w-4 h-4 mt-0.5 shrink-0 ${selectedIssueId === issue.id ? 'text-cyan-400' : 'text-slate-500'}`} />
                    <div>
                      <p className={`text-xs font-semibold ${selectedIssueId === issue.id ? 'text-white' : 'text-slate-300'}`}>
                        {issue.name.split('/')[0]}
                      </p>
                      <p className="text-[10px] text-slate-500 mt-0.5 truncate max-w-[180px]">
                        {issue.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Estimate Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#101728] to-[#0A0D17] border border-cyan-500/30 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  สรุปผลการประเมิน
                </span>
                <span className="text-[10px] bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-2 py-0.5 rounded-full">
                  รับเครื่องถึงบ้านฟรี
                </span>
              </div>

              <div className="py-4 space-y-3">
                <div>
                  <p className="text-[11px] text-slate-400">อุปกรณ์:</p>
                  <p className="text-base font-bold text-white flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-cyan-400" />
                    <span>{selectedBrand.name} {selectedModel}</span>
                  </p>
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">อาการเสีย:</p>
                  <p className="text-sm font-semibold text-slate-200">
                    {selectedIssue.name}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5 my-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">ราคาประเมินเบื้องต้น:</span>
                    <span className="text-lg font-black text-cyan-400">
                      {selectedIssue.avgPrice}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">ระยะเวลาซ่อมโดยเฉลี่ย:</span>
                    <span className="text-white font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      {selectedIssue.avgTime}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">การรับประกันงานซ่อม:</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      สูงสุด 90 วัน
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">ค่าเดินทางรับ-ส่งถึงบ้าน:</span>
                    <span className="text-emerald-300 font-bold">ฟรี (ในรัศมีบริการ)</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 italic">
                  * ราคาจริงจะได้รับการตรวจสอบสภาพเครื่องโดยละเอียดและแจ้งให้กดยืนยันในแอปก่อนเริ่มดำเนินการเสมอ
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={onOpenDownload}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all group"
              >
                <span>แจ้งซ่อมอาการนี้ผ่านแอปเลย</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
