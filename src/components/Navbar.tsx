import React, { useState, useEffect } from 'react';
import { Smartphone, Wrench, Menu, X, Download, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenDownload: () => void;
  onOpenPartner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload, onOpenPartner }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090E]/90 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-400/40 transition-shadow">
            <div className="absolute inset-0 rounded-xl bg-cyan-400/20 animate-pulse" />
            <div className="relative flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-slate-950" />
              <Wrench className="w-3.5 h-3.5 text-slate-950 absolute -bottom-1 -right-1" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Repair Home Service
            </span>
            <span className="text-[10px] tracking-wider text-cyan-400 font-semibold uppercase -mt-1">
              ซ่อมมือถือถึงบ้าน
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-cyan-300 transition-colors">
            บริการของเรา
          </a>
          <a href="#estimator" className="hover:text-cyan-300 transition-colors">
            ประเมินราคาซ่อม
          </a>
          <a href="#steps" className="hover:text-cyan-300 transition-colors">
            5 ขั้นตอนง่ายๆ
          </a>
          <a href="#for-shops" className="hover:text-cyan-300 transition-colors">
            สำหรับร้านซ่อม
          </a>
          <a href="#trust" className="hover:text-cyan-300 transition-colors">
            ระบบความมั่นใจ
          </a>
          <a href="#faq" className="hover:text-cyan-300 transition-colors">
            คำถามที่พบบ่อย
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenPartner}
            className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all"
          >
            เข้าร่วมเป็นร้านซ่อม
          </button>
          <button
            onClick={onOpenDownload}
            className="px-4 py-2 text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 flex items-center gap-1.5 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>ดาวน์โหลดแอป</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenDownload}
            className="px-3 py-1.5 text-xs font-bold bg-cyan-500 text-slate-950 rounded-lg flex items-center gap-1"
          >
            <Download className="w-3 h-3" />
            <span>โหลดแอป</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
            aria-label="เมนูหลัก"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0E17] border-b border-slate-800 px-5 py-5 space-y-4 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-300 flex items-center justify-between"
            >
              <span>บริการของเรา</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-300 flex items-center justify-between"
            >
              <span>ประเมินราคาซ่อม</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </a>
            <a
              href="#steps"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-300 flex items-center justify-between"
            >
              <span>5 ขั้นตอนการใช้งาน</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </a>
            <a
              href="#for-shops"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-300 flex items-center justify-between"
            >
              <span>สำหรับร้านซ่อมมือถือ</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </a>
            <a
              href="#trust"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-300 flex items-center justify-between"
            >
              <span>ระบบความมั่นใจ</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-300 flex items-center justify-between"
            >
              <span>คำถามที่พบบ่อย</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              <span>ดาวน์โหลดแอปลูกค้า</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPartner();
              }}
              className="w-full py-2.5 bg-slate-900 border border-cyan-500/40 text-cyan-300 font-semibold rounded-xl text-center text-sm"
            >
              เข้าร่วมเป็นร้านซ่อม
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
