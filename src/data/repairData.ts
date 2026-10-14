export interface PhoneBrand {
  id: string;
  name: string;
  logo: string;
  color: string;
  popularModels: string[];
  description: string;
  badge: string;
}

export interface RepairIssue {
  id: string;
  name: string;
  iconName: string;
  avgPrice: string;
  avgTime: string;
  description: string;
}

export const PHONE_BRANDS: PhoneBrand[] = [
  {
    id: 'samsung',
    name: 'Samsung',
    logo: 'SAMSUNG',
    color: '#1428A0',
    badge: 'รองรับทุกซีรีส์',
    popularModels: ['Galaxy S24 Ultra', 'Galaxy S23 FE', 'Galaxy A55 5G', 'Galaxy Z Fold 5 / Flip 5', 'Galaxy A15'],
    description: 'ช่างชำนาญงานจอ Dynamic AMOLED, เปลี่ยนแบตเตอรี่แท้, ซ่อมเมนบอร์ด และพอร์ต Type-C',
  },
  {
    id: 'oppo',
    name: 'OPPO',
    logo: 'OPPO',
    color: '#008542',
    badge: 'ช่างเฉพาะทาง',
    popularModels: ['Reno 12 Pro 5G', 'Reno 11', 'Find X7 Ultra', 'OPPO A79 5G', 'Find N3 Flip'],
    description: 'เชี่ยวชาญระบบชาร์จไว SUPERVOOC, เปลี่ยนชุดหน้าจอโค้ง 3D, โมดูลกล้อง Portrait',
  },
  {
    id: 'vivo',
    name: 'vivo',
    logo: 'vivo',
    color: '#415FFF',
    badge: 'อะไหล่แท้ตรงรุ่น',
    popularModels: ['vivo X100 Pro', 'vivo V30 5G', 'vivo V29', 'vivo Y200 5G', 'vivo Y17s'],
    description: 'ซ่อมระบบเลนส์ ZEISS, เปลี่ยนแบตเตอรี่มาตรฐาน FlashCharge, จอ AMOLED 120Hz',
  },
  {
    id: 'xiaomi',
    name: 'Xiaomi',
    logo: 'Xiaomi / Redmi',
    color: '#FF6900',
    badge: 'ครอบคลุม POCO & Redmi',
    popularModels: ['Xiaomi 14 Ultra', 'Redmi Note 13 Pro+ 5G', 'POCO F6 Pro', 'POCO X6 Pro', 'Redmi 13C'],
    description: 'ช่างรองรับ HyperOS, การแก้ปัญหาชาร์จเร็ว HyperCharge 120W, เปลี่ยนจอ 1.5K CrystalRes',
  },
  {
    id: 'realme',
    name: 'realme',
    logo: 'realme',
    color: '#FFC915',
    badge: 'อะไหล่พร้อมเปลี่ยน',
    popularModels: ['realme 12 Pro+ 5G', 'realme GT 6', 'realme 11x 5G', 'realme C67'],
    description: 'ซ่อมพอร์ตชาร์จ Dart Charge, บอร์ดดับ, เปลี่ยนฝาหลังและชุดหน้าจอแท้',
  },
  {
    id: 'apple',
    name: 'Apple iPhone',
    logo: 'Apple',
    color: '#A2AAAD',
    badge: 'เครื่องมือมาตรฐาน',
    popularModels: ['iPhone 15 Pro Max', 'iPhone 15', 'iPhone 14 Pro', 'iPhone 13', 'iPhone 11'],
    description: 'เปลี่ยนจอ True Tone, เปลี่ยนแบตเตอรี่สุขภาพ 100%, แก้กล้องสั่น และซ่อม Face ID',
  },
];

export const REPAIR_ISSUES: RepairIssue[] = [
  {
    id: 'screen',
    name: 'หน้าจอแตก / จอดำ / ทัชสกรีนไม่ติด',
    iconName: 'Smartphone',
    avgPrice: '790 - 3,500 บาท',
    avgTime: '1 - 2 ชั่วโมง',
    description: 'เปลี่ยนชุดหน้าจอใหม่ตรงรุ่น คมชัด สีสด ทัชลื่น รับประกันงานเปลี่ยนสูงสุด 90 วัน',
  },
  {
    id: 'battery',
    name: 'แบตเตอรี่เสื่อม / แบตบวม / ชาร์จลดเร็ว',
    iconName: 'BatteryCharging',
    avgPrice: '590 - 1,490 บาท',
    avgTime: '30 - 60 นาที',
    description: 'แบตเตอรี่คุณภาพสูงผ่าน มอก. กักเก็บประจุเต็มความจุ ไม่ส่งผลเสียต่อเมนบอร์ด',
  },
  {
    id: 'charging',
    name: 'ชาร์จไม่เข้า / พอร์ตชาร์จหลวม / ชาร์จช้า',
    iconName: 'Zap',
    avgPrice: '450 - 990 บาท',
    avgTime: '40 นาที',
    description: 'ซ่อมเปลี่ยนแพรชาร์จ / Type-C รองรับ Fast Charge ทุกยี่ห้อ (VOOC, SuperFast, Turbo)',
  },
  {
    id: 'camera',
    name: 'กล้องเบลอ / เลนส์แตก / โฟกัสไม่ติด',
    iconName: 'Camera',
    avgPrice: '650 - 2,200 บาท',
    avgTime: '1 ชั่วโมง',
    description: 'เปลี่ยนชุดเลนส์กระจก หรือโมดูลกล้องแท้ ภาพคมชัดเหมือนใหม่ออกจากศูนย์',
  },
  {
    id: 'board',
    name: 'เครื่องเปิดไม่ติด / ดับเอง / ตกน้ำ',
    iconName: 'Cpu',
    avgPrice: '850 - 2,800 บาท',
    avgTime: '1 - 2 วัน',
    description: 'ตรวจสอบลายวงจรด้วยกล้องจุลทรรศน์ ล้างบอร์ดอบความชื้น ซ่อม IC ภาคจ่ายไฟ',
  },
  {
    id: 'speaker',
    name: 'ลำโพงแตก / ไมค์ไม่ดัง / หูฟังไม่ได้ยิน',
    iconName: 'Volume2',
    avgPrice: '450 - 890 บาท',
    avgTime: '45 นาที',
    description: 'ทำความสะอาดหรือเปลี่ยนชุดลำโพงสนทนาและไมโครโฟนตัดเสียงรบกวน',
  },
];

export const FIVE_STEPS = [
  {
    step: 1,
    title: 'ดาวน์โหลดแอป',
    subtitle: 'ติดตั้งง่ายทั้ง Android และ iOS',
    detail: 'ดาวน์โหลดแอปพลิเคชัน Repair Home Service ติดตั้งลงบนมือถือของคุณได้ทันที ไม่ต้องลงทะเบียนยุ่งยาก',
    highlight: 'พร้อมใช้งานทันที',
  },
  {
    step: 2,
    title: 'แจ้งปัญหามือถือ',
    subtitle: 'ระบุรุ่นและอาการในไม่กี่คลิก',
    detail: 'เลือกยี่ห้อ (Samsung, Oppo, Vivo, Xiaomi ฯลฯ) รุ่น และเลือกอาการที่พบ สามารถแนบรูปถ่ายประกอบได้ทันที',
    highlight: 'ประเมินราคาล่วงหน้า',
  },
  {
    step: 3,
    title: 'ช่างรับงาน',
    subtitle: 'ระบบจับคู่ช่างที่ใกล้ที่สุด',
    detail: 'ระบบ Geofencing อัจฉริยะจะส่งงานไปยังช่างซ่อมมืออาชีพที่ได้รับการรับรองในพื้นที่ใกล้เคียงของคุณทันที',
    highlight: 'ช่างตอบรับใน 5 นาที',
  },
  {
    step: 4,
    title: 'นัดรับเครื่องถึงบ้าน',
    subtitle: 'ช่างเดินทางมารับถึงหน้าประตู',
    detail: 'ช่างในเครื่องแบบพร้อมบัตรประจำตัวมารับเครื่องถึงบ้าน บันทึกสภาพเครื่องในถุงนิรภัยและออกใบรับดิจิทัล',
    highlight: 'มีถุงนิรภัย Tamper-Proof',
  },
  {
    step: 5,
    title: 'ติดตามการซ่อมจนเสร็จ',
    subtitle: 'ดูสถานะสด พร้อมส่งเครื่องคืน',
    detail: 'ตรวจสอบสถานะการซ่อม ถ่ายภาพก่อน-หลังซ่อม ช่างส่งเครื่องกลับคืนถึงบ้านอย่างปลอดภัยพร้อมรับประกันงานซ่อม',
    highlight: 'รับประกันสูงสุด 90 วัน',
  },
];

export const TRUST_SYSTEMS = [
  {
    id: 'tracking',
    title: 'ระบบติดตามงาน',
    subtitle: 'Live Tracking & Photo Audit',
    desc: 'ลูกค้าสามารถดูสถานะการซ่อมได้แบบ Real-time ทุกขั้นตอน ช่างต้องถ่ายรูปเครื่องก่อนแกะ ขณะซ่อม และหลังซ่อมเสร็จ เพื่อความโปร่งใส 100%',
    stats: 'อัปเดตรวดเร็ว Real-time',
  },
  {
    id: 'geofencing',
    title: 'ระบบแบ่งพื้นที่ให้ช่าง',
    subtitle: 'Smart Geofencing Dispatch',
    desc: 'ระบบกระจายงานตามรัศมีและพิกัด GPS ของช่างในพื้นที่ ทำให้ช่างเดินทางไปรับเครื่องได้อย่างรวดเร็ว ไม่ต้องรอนาน และลดต้นทุนค่าเดินทาง',
    stats: 'รัศมีเฉลี่ย 3-5 กิโลเมตร',
  },
  {
    id: 'fare_calc',
    title: 'ระบบคำนวณค่าเดินทาง',
    subtitle: 'Fair Distance Calculation',
    desc: 'ระบบคำนวณระยะทางจากร้านช่างถึงบ้านลูกค้าอย่างเที่ยงตรงด้วยระบบพิกัดดาวเทียม แสดงค่าบริการชัดเจนในแอปก่อนกดยืนยัน ไม่มีบวกเพิ่มทีหลัง',
    stats: 'โปร่งใส ไม่มีแอบแฝง',
  },
  {
    id: 'connect',
    title: 'ระบบเชื่อมต่อลูกค้าและช่าง',
    subtitle: 'Direct Secure Communication',
    desc: 'พูดคุย ปรึกษาอาการ และนัดหมายเวลากับช่างผู้ดูแลเครื่องของคุณได้โดยตรงผ่านระบบแชทและโทรในแอป พร้อมทีม Support ส่วนกลางคอยดูแลตลอด',
    stats: 'บริการปลอดภัยตรวจสอบได้',
  },
];

export const FAQS = [
  {
    q: 'ข้อมูลส่วนตัวในมือถือจะปลอดภัยหรือไม่?',
    a: 'ปลอดภัย 100% ทางระบบมีมาตรการรักษาความปลอดภัยอย่างเข้มงวด ช่างซ่อมทุกคนผ่านการตรวจสอบประวัติอาชญากรรม มีสัญญาเก็บรักษาความลับข้อมูล และเครื่องจะถูกบรรจุในถุงนิรภัย Tamper-Proof Seal ที่มีหมายเลขรหัสกำกับ ลูกค้าสามารถตั้งรหัสล็อกเครื่องหรือเปิดโหมดการบำรุงรักษา (Maintenance Mode) ได้',
  },
  {
    q: 'รองรับมือถือรุ่นไหนบ้าง ซ่อมเฉพาะ iPhone หรือไม่?',
    a: 'ไม่จำกัดเฉพาะ iPhone! แอป Repair Home Service รองรับสมาร์ทโฟนทุกแบรนด์ชั้นนำในไทย ทั้ง Samsung, OPPO, vivo, Xiaomi, Redmi, POCO, realme, OnePlus, Infinix, Tecno รวมถึง Apple iPhone โดยมีคลังอะไหล่และช่างที่มีความชำนาญเฉพาะแต่ละแบรนด์',
  },
  {
    q: 'ช่างจะมารับเครื่องถึงบ้านจริงไหม มีค่าเดินทางเท่าไร?',
    a: 'ช่างในพื้นที่ของคุณจะเดินทางไปรับเครื่องถึงบ้านจริงตามวันและเวลาที่คุณนัดหมาย ค่าเดินทางคำนวณตามระยะทางจริงในแอปอย่างโปร่งใส และสำหรับงานซ่อมส่วนใหญ่จะมีโปรโมชั่น ฟรีค่าเดินทางไปรับ-ส่งเครื่อง ในรัศมีบริการ',
  },
  {
    q: 'หลังจากซ่อมเสร็จ มีการรับประกันอย่างไร?',
    a: 'งานซ่อมทุกงานมีใบรับประกันดิจิทัลในแอป รับประกันอะไหล่และงานซ่อมสูงสุด 90 วัน หากเกิดปัญหาเดิมในระยะเวลารับประกัน ช่างจะดูแลแก้ไขให้ฟรีโดยไม่มีค่าใช้จ่ายเพิ่มเติม',
  },
  {
    q: 'ร้านซ่อมมือถือสามารถเข้าร่วมเครือข่ายได้อย่างไร?',
    a: 'ร้านซ่อมที่มีหน้าร้านหรือช่างอิสระที่มีฝีมือ สามารถกดปุ่ม "เข้าร่วมเป็นร้านซ่อม" บนเว็บไซต์หรือดาวน์โหลดแอปช่าง กรอกข้อมูลร้านและยื่นเอกสารเพื่อรับการตรวจสอบ ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมงเพื่อเปิดระบบรับงาน',
  },
];
