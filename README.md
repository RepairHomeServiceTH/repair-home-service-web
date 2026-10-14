# Repair Home Service - Landing Page

เว็บไซต์ Landing Page แนะนำและโฆษณาแอปพลิเคชัน "Repair Home Service" (ซ่อมมือถือถึงบ้าน ง่ายกว่าเดิม) พัฒนาด้วย React 19 + TypeScript + Vite + Tailwind CSS

---

## โครงสร้างโปรเจกต์ (Project Structure)

```
├── public/                     # ไฟล์สาธารณะ (Favicon, Manifest, Robots)
│   ├── favicon.svg
│   ├── manifest.json
│   └── robots.txt
├── src/                        # ซอร์สโค้ดหลัก
│   ├── components/             # คอมโพเนนต์ของหน้า Landing Page
│   │   ├── Navbar.tsx          # แถบนำทางด้านบน
│   │   ├── HeroSection.tsx     # ส่วนหัวเรื่องหลัก & จำลองแอป
│   │   ├── BrandShowcase.tsx   # แสดงแบรนด์มือถือ (Samsung, OPPO, vivo, Xiaomi ฯลฯ)
│   │   ├── ServiceFeatures.tsx # จุดเด่น 5 ข้อของบริการ
│   │   ├── RepairEstimator.tsx # ระบบประเมินราคาซ่อมเบื้องต้น
│   │   ├── StepProcess.tsx     # วิธีใช้งาน 5 ขั้นตอน
│   │   ├── ForRepairShops.tsx  # ส่วนสำหรับร้านซ่อมมือถือ
│   │   ├── TrustSystem.tsx     # ระบบสร้างความมั่นใจ 4 ด้าน
│   │   ├── FAQSection.tsx      # คำถามที่พบบ่อย
│   │   ├── DownloadSection.tsx # ส่วนดาวน์โหลดท้ายเว็บ
│   │   ├── Footer.tsx          # ท้ายเว็บ & ช่องทางติดต่อ
│   │   ├── DownloadModal.tsx   # หน้าต่างดาวน์โหลดแอป
│   │   ├── PartnerModal.tsx    # ฟอร์มสมัครเป็นร้านซ่อม
│   │   └── PrivacyModal.tsx    # นโยบายความเป็นส่วนตัว
│   ├── data/
│   │   └── repairData.ts       # ข้อมูลรุ่น อาการเสีย และสถิติ
│   ├── App.tsx                 # คอมโพเนนต์หลัก
│   ├── main.tsx                # จุดเริ่มต้นแอปพลิเคชัน
│   └── index.css               # สไตล์ Tailwind และ Dark Tech
├── index.html                  # HTML Entry Point
├── vite.config.ts              # การตั้งค่า Vite
├── package.json                # รายการ Dependencies และ Scripts
├── tsconfig.json               # การตั้งค่า TypeScript
├── firebase.json               # การตั้งค่า Firebase Hosting (SPA Rewrite & Cache)
└── .firebaserc                 # ไฟล์เป้าหมาย Firebase Project ID
```

---

## ขั้นตอนการรันและการ Deploy ขึ้น Firebase Hosting

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. รันทดสอบในโหมด Development (พรีวิวในเครื่อง)
```bash
npm run dev
```

### 3. บิลด์โปรเจกต์สำหรับ Production
```bash
npm run build
```
*ระบบจะสร้างไฟล์สำหรับขึ้นโฮสต์ไว้ในโฟลเดอร์ `dist/` โดยอัตโนมัติ*

### 4. Deploy ขึ้น Firebase Hosting
```bash
# ล็อกอินเข้าสู่ Firebase (หากยังไม่ได้ทำ)
firebase login

# สั่ง Deploy เฉพาะ Hosting
firebase deploy --only hosting
```
