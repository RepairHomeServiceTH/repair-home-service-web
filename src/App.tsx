import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandShowcase } from './components/BrandShowcase';
import { ServiceFeatures } from './components/ServiceFeatures';
import { RepairEstimator } from './components/RepairEstimator';
import { StepProcess } from './components/StepProcess';
import { ForRepairShops } from './components/ForRepairShops';
import { TrustSystem } from './components/TrustSystem';
import { DownloadSection } from './components/DownloadSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { PartnerModal } from './components/PartnerModal';
import { PrivacyModal } from './components/PrivacyModal';
import { Download, Wrench, ChevronUp } from 'lucide-react';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadModalTab, setDownloadModalTab] = useState<'customer' | 'technician'>('customer');
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for back-to-top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCustomerDownload = () => {
    setDownloadModalTab('customer');
    setDownloadModalOpen(true);
  };

  const openPartnerModal = () => {
    setPartnerModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Navigation Bar */}
      <Navbar
        onOpenDownload={openCustomerDownload}
        onOpenPartner={openPartnerModal}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenDownload={openCustomerDownload}
          onOpenPartner={openPartnerModal}
        />

        {/* Multi-Brand Showcase (Samsung, Oppo, Vivo, Xiaomi, realme, iPhone) */}
        <BrandShowcase />

        {/* 2. Service Highlights */}
        <ServiceFeatures />

        {/* Interactive Repair Price & Diagnostics Estimator */}
        <RepairEstimator onOpenDownload={openCustomerDownload} />

        {/* 3. 5-Step Process */}
        <StepProcess onOpenDownload={openCustomerDownload} />

        {/* 4. For Repair Shops & Techs */}
        <ForRepairShops onOpenPartner={openPartnerModal} />

        {/* 5. Trust & Infrastructure Systems */}
        <TrustSystem />

        {/* FAQ Section */}
        <FAQSection />

        {/* 6. Download CTA Section */}
        <DownloadSection onOpenDownload={openCustomerDownload} />
      </main>

      {/* 7. Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenPartner={openPartnerModal}
        onOpenDownload={openCustomerDownload}
      />

      {/* Floating Bottom Quick Bar for Mobile */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-30 flex gap-2">
        <button
          onClick={openCustomerDownload}
          className="flex-1 py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold rounded-xl shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2 text-sm"
        >
          <Download className="w-4 h-4 text-slate-950" />
          <span>ดาวน์โหลดแอปลูกค้า</span>
        </button>
        <button
          onClick={openPartnerModal}
          className="py-3 px-4 bg-slate-900/90 border border-slate-700 text-white font-semibold rounded-xl text-sm flex items-center justify-center"
          aria-label="สำหรับร้านซ่อม"
        >
          <Wrench className="w-4 h-4 text-cyan-400" />
        </button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="hidden md:flex fixed bottom-6 right-6 z-30 p-3 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500 transition-all shadow-xl"
          aria-label="เลื่อนขึ้นด้านบน"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        defaultTab={downloadModalTab}
      />

      <PartnerModal
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
