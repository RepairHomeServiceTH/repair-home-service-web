import React, { useState } from 'react';
import { X, Smartphone, Download, QrCode, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'customer' | 'technician';
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'customer',
}) => {
  const [activeTab, setActiveTab] = useState<'customer' | 'technician'>(defaultTab);
  const [downloadStarted, setDownloadStarted] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSimulateDownload = (platform: string) => {
    setDownloadStarted(platform);
    setTimeout(() => {
      setDownloadStarted(null);
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#0D121F] border border-cyan-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
          aria-label="ปิดหน้าต่าง"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">ดาวน์โหลดแอปพลิเคชัน</h3>
            <p className="text-xs text-cyan-400 font-medium">Repair Home Service Platform</p>
          </div>
        </div>

        {/* Segmented Control */}
        <div className="flex rounded-xl bg-slate-900/90 p-1 border border-slate-800 mb-6">
          <button
            onClick={() => setActiveTab('customer')}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              activeTab === 'customer'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            สำหรับลูกค้า (แจ้งซ่อม)
          </button>
          <button
            onClick={() => setActiveTab('technician')}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              activeTab === 'technician'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            สำหรับร้านซ่อม / ช่าง
          </button>
        </div>

        {/* Success toast if clicked download */}
        {downloadStarted && (
          <div className="mb-4 p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-xl flex items-center gap-3 text-emerald-300 text-sm animate-in fade-in">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>กำลังเริ่มดาวน์โหลดตัวติดตั้ง {downloadStarted} (เวอร์ชันล่าสุด 2.4.0)</span>
          </div>
        )}

        {/* Main Content */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700/60">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                  <path d="M3.6 1.8L13.8 12L3.6 22.2C3.2 21.8 3 21.2 3 20.4V3.6C3 2.8 3.2 2.2 3.6 1.8Z" fill="#00D2FF"/>
                  <path d="M17.3 8.5L13.8 12L17.3 15.5L21.5 13.1C22.2 12.7 22.2 11.3 21.5 10.9L17.3 8.5Z" fill="#FFD200"/>
                  <path d="M13.8 12L3.6 1.8C4 1.4 4.7 1.3 5.4 1.7L17.3 8.5L13.8 12Z" fill="#00E676"/>
                  <path d="M13.8 12L17.3 15.5L5.4 22.3C4.7 22.7 4 22.6 3.6 22.2L13.8 12Z" fill="#FF3D00"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Google Play Store</p>
                <p className="text-xs text-slate-400">สำหรับมือถือ Android (Samsung, Oppo, Vivo, Xiaomi ฯลฯ)</p>
              </div>
            </div>
            <button
              onClick={() => handleSimulateDownload('Android APK')}
              className="px-3.5 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>ดาวน์โหลด</span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700/60">
                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.66-7.8-11.91-14.28-5.74-8.79-10.22-18.91-13.43-30.36-3.21-11.45-4.82-22.18-4.82-32.19 0-14.78 3.73-26.79 11.19-36.03 7.46-9.24 16.79-13.97 27.99-14.2 4.93 0 10.22 1.25 15.87 3.74 5.66 2.49 9.38 3.79 11.17 3.89 1.57-.1 5.37-1.4 11.41-3.89 6.04-2.49 11.39-3.64 16.05-3.44 11.89.63 21.6 4.95 29.13 12.98-10.43 6.32-15.54 15.13-15.34 26.43.2 8.92 3.65 16.48 10.35 22.68 6.7 6.2 14.88 9.69 24.54 10.47-2.1 6.53-4.63 12.82-7.58 18.88zm-30.85-114.93c0 7.37-2.67 14.19-8.02 20.47-5.99 6.96-13.39 10.87-22.21 10.51-.13-1.04-.2-1.95-.2-2.73 0-7.37 2.87-14.48 8.61-21.33 2.87-3.43 6.43-6.24 10.68-8.44 4.25-2.2 8.32-3.41 12.22-3.64.21 1.74.32 3.15.32 4.23z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Apple App Store</p>
                <p className="text-xs text-slate-400">สำหรับ iOS 15.0 ขึ้นไป</p>
              </div>
            </div>
            <button
              onClick={() => handleSimulateDownload('iOS App Store')}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>ดาวน์โหลด</span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <Download className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-white font-semibold text-sm">ดาวน์โหลดไฟล์ APK ตรง</p>
                  <span className="text-[10px] text-cyan-300 font-mono">v2.4.0 (34 MB)</span>
                </div>
                <p className="text-xs text-slate-400">ติดตั้งโดยตรงไม่ต้องผ่าน Store ปลอดภัย 100%</p>
              </div>
            </div>
            <button
              onClick={() => handleSimulateDownload('Direct APK')}
              className="px-3.5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-lg shadow-cyan-500/20"
            >
              <span>ดาวน์โหลด APK</span>
            </button>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white p-1 rounded-xl flex items-center justify-center shadow-md shrink-0">
              {/* Stylized QR Code SVG */}
              <svg className="w-12 h-12 text-slate-950" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm12-2h2v2h-2v-2zm4 0h2v4h-4v-2h2v-2zm-6 2h2v4h-2v-4zm4 4h4v2h-4v-2zm-2 2h2v2h-2v-2zm-6-2h2v4h-2v-4zm-4-4h2v2H6v-2zm8-2h2v2h-2v-2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-white">สแกนด้วยกล้องมือถือ</p>
              <p className="text-[11px] text-slate-400">เพื่อดาวน์โหลดแอปทันทีบนสมาร์ทโฟนของคุณ</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>ความปลอดภัยระดับองค์กร</span>
          </div>
        </div>
      </div>
    </div>
  );
};
