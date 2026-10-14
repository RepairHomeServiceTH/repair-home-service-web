import React, { useState } from 'react';
import { FIVE_STEPS } from '../data/repairData';
import { 
  Download, 
  Smartphone, 
  UserCheck, 
  Home, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface StepProcessProps {
  onOpenDownload: () => void;
}

export const StepProcess: React.FC<StepProcessProps> = ({ onOpenDownload }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const stepIcons = [Download, Smartphone, UserCheck, Home, ShieldCheck];

  const stepPreviews = [
    {
      step: 1,
      title: 'ติดตั้งแอป Repair Home Service',
      screenTitle: 'หน้าแรกดาวน์โหลด',
      screenSubtitle: 'เปิดใช้งานได้ทันที ไม่ต้องสมัครสมาชิกยุ่งยาก',
      previewDetails: [
        'รองรับสมาร์ทโฟนทุกระบบ Android และ iOS',
        'ขนาดไฟล์กะทัดรัด ดาวน์โหลดเสร็จใน 10 วินาที',
        'เข้าสู่หน้าแจ้งซ่อมได้ทันทีโดยไม่ต้องผูกบัตรเครดิต',
      ],
      tag: 'ขั้นตอนที่ 1 / 5',
    },
    {
      step: 2,
      title: 'เลือกยี่ห้อและแจ้งอาการเสีย',
      screenTitle: 'ฟอร์มแจ้งซ่อมดิจิทัล',
      screenSubtitle: 'เลือก Samsung, OPPO, vivo, Xiaomi หรืออื่นๆ',
      previewDetails: [
        'เมนูเลือกยี่ห้อและรุ่นครอบคลุมสมาร์ทโฟนทุกค่าย',
        'เลือกอาการ เช่น หน้าจอแตก แบตเตอรี่เสื่อม ชาร์จไม่เข้า',
        'ถ่ายภาพหรืออัดวิดีโออาการผิดปกติแนบได้ทันที',
      ],
      tag: 'ขั้นตอนที่ 2 / 5',
    },
    {
      step: 3,
      title: 'ช่างในพื้นที่ตอบรับงานซ่อม',
      screenTitle: 'ระบบจับคู่ช่างอัจฉริยะ',
      screenSubtitle: 'ส่งงานให้ช่างที่ใกล้และชำนาญรุ่นนั้นที่สุด',
      previewDetails: [
        'ระบบ Geofencing ค้นหาช่างในรัศมี 3-5 กิโลเมตร',
        'ช่างกดยืนยันรับงานพร้อมแสดงโปรไฟล์และคะแนนรีวิว',
        'ประเมินราคาอะไหล่และค่าบริการชัดเจนในแอป',
      ],
      tag: 'ขั้นตอนที่ 3 / 5',
    },
    {
      step: 4,
      title: 'ช่างเดินทางไปรับเครื่องถึงบ้าน',
      screenTitle: 'นัดหมายรับเครื่องถึงหน้าประตู',
      screenSubtitle: 'มีถุงนิรภัย Tamper-Proof ซีลเครื่องต่อหน้าคุณ',
      previewDetails: [
        'ช่างแต่งกายสุภาพพร้อมบัตรประจำตัวตรวจสอบได้',
        'ตรวจเช็กสภาพเครื่องภายนอกและบันทึกรูปเข้าระบบ',
        'บรรจุเครื่องลงถุงนิรภัยซีลรหัสล็อคเฉพาะตัว',
      ],
      tag: 'ขั้นตอนที่ 4 / 5',
    },
    {
      step: 5,
      title: 'ติดตามสถานะการซ่อมจนเสร็จสมบูรณ์',
      screenTitle: 'Live Status & ส่งคืนถึงบ้าน',
      screenSubtitle: 'รับเครื่องคืนพร้อมใบรับประกันนาน 90 วัน',
      previewDetails: [
        'อัปเดตสเตตัสถ่ายรูปขณะเปลี่ยนอะไหล่ให้ดูในแอป',
        'ทดสอบฟังก์ชันการทำงานครบ 100% ก่อนส่งมอบ',
        'ช่างนำเครื่องส่งคืนถึงหน้าบ้านอย่างปลอดภัย',
      ],
      tag: 'ขั้นตอนที่ 5 / 5',
    },
  ];

  const currentPreview = stepPreviews[activeStep - 1];

  return (
    <section id="steps" className="py-20 bg-[#07090E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Exact Requirement) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Simple 5-Step Experience
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            วิธีใช้งาน 5 ขั้นตอนง่ายๆ
          </h2>
          <p className="text-base text-slate-300 mt-3 max-w-xl mx-auto">
            ตั้งแต่ดาวน์โหลดแอปจนถึงรับเครื่องคืนถึงมือ ทุกขั้นตอนสะดวก โปร่งใส และปลอดภัยสูงสุด
          </p>
        </div>

        {/* 5 Step Progress Indicators (Clickable) */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-10">
          {FIVE_STEPS.map((item) => {
            const Icon = stepIcons[item.step - 1];
            const isActive = activeStep === item.step;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between group ${
                  isActive
                    ? 'bg-gradient-to-b from-[#111A2E] to-[#0D1322] border-cyan-500 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-500/50'
                    : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                      isActive
                        ? 'bg-cyan-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-400 group-hover:text-white'
                    }`}
                  >
                    0{item.step}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'
                    }`}
                  />
                </div>
                <div>
                  <h4
                    className={`text-sm font-bold transition-colors ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Detail Spotlight Interactive Display */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0E1424] via-[#0A0E18] to-[#07090E] border border-cyan-500/25 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left explanation */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
                <span>{currentPreview.tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                ขั้นตอนที่ {FIVE_STEPS[activeStep - 1].step}: {FIVE_STEPS[activeStep - 1].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {FIVE_STEPS[activeStep - 1].detail}
              </p>

              <div className="space-y-2.5 pt-2">
                {currentPreview.previewDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Navigation buttons between steps */}
              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => setActiveStep(activeStep > 1 ? activeStep - 1 : 5)}
                  className="px-4 py-2 bg-slate-900 border border-slate-700 hover:border-slate-600 text-xs font-semibold text-slate-300 rounded-lg transition-colors"
                >
                  ขั้นตอนก่อนหน้า
                </button>
                <button
                  onClick={() => setActiveStep(activeStep < 5 ? activeStep + 1 : 1)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white rounded-lg border border-slate-600 transition-colors flex items-center gap-1.5"
                >
                  <span>ขั้นตอนถัดไป</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenDownload}
                  className="ml-auto px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold rounded-lg shadow-md transition-all hidden sm:inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>ลองใช้งานจริงในแอป</span>
                </button>
              </div>
            </div>

            {/* Right mockup view of the step */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[320px] bg-[#070A11] border-2 border-slate-700/80 rounded-[32px] p-4 shadow-xl">
                <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-4" />
                
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                    <span className="font-bold text-white">{currentPreview.screenTitle}</span>
                    <span className="text-cyan-400 font-mono text-[10px]">STEP 0{activeStep}</span>
                  </div>

                  <p className="text-[11px] text-slate-400">
                    {currentPreview.screenSubtitle}
                  </p>

                  {/* Dynamic mini graphic based on step */}
                  <div className="h-28 rounded-xl bg-slate-950 border border-slate-800/80 p-3 flex flex-col justify-center items-center text-center">
                    {activeStep === 1 && (
                      <div className="space-y-1.5">
                        <Download className="w-8 h-8 text-cyan-400 mx-auto animate-bounce" />
                        <p className="text-[10px] text-white font-semibold">Repair Home Service App</p>
                        <p className="text-[9px] text-emerald-400">เวอร์ชัน 2.4.0 พร้อมติดตั้ง</p>
                      </div>
                    )}
                    {activeStep === 2 && (
                      <div className="space-y-1.5 w-full text-left">
                        <div className="flex justify-between text-[10px] text-slate-300">
                          <span>รุ่น: Samsung Galaxy S24 Ultra</span>
                          <span className="text-cyan-400">✓</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-300">
                          <span>อาการ: เปลี่ยนชุดจอแท้</span>
                          <span className="text-cyan-400">✓</span>
                        </div>
                        <div className="h-1.5 bg-cyan-500/20 rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-400 w-3/4" />
                        </div>
                      </div>
                    )}
                    {activeStep === 3 && (
                      <div className="space-y-1">
                        <UserCheck className="w-7 h-7 text-emerald-400 mx-auto" />
                        <p className="text-[10px] text-white font-bold">ช่างกิตติศักดิ์ รับงานแล้ว</p>
                        <p className="text-[9px] text-slate-400">ระยะทาง 1.2 กม. (ประเมิน 5 นาที)</p>
                      </div>
                    )}
                    {activeStep === 4 && (
                      <div className="space-y-1">
                        <Home className="w-7 h-7 text-cyan-400 mx-auto" />
                        <p className="text-[10px] text-white font-bold">ช่างถึงหน้าบ้านคุณแล้ว</p>
                        <p className="text-[9px] text-emerald-400">ซีลถุงนิรภัย Tamper-Proof เรียบร้อย</p>
                      </div>
                    )}
                    {activeStep === 5 && (
                      <div className="space-y-1">
                        <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" />
                        <p className="text-[10px] text-white font-bold">งานซ่อมเสร็จสมบูรณ์ 100%</p>
                        <p className="text-[9px] text-cyan-300">ออกใบรับประกันดิจิทัล 90 วัน</p>
                      </div>
                    )}
                  </div>

                  <div className="p-2 bg-slate-950 rounded-lg text-[10px] text-slate-400 flex items-center justify-between">
                    <span>ความคืบหน้า</span>
                    <span className="text-cyan-400 font-bold">{activeStep * 20}%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
