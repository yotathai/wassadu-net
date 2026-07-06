export const categories = [
  {
    id: 'structural-concrete',
    name: 'งานโครงสร้างและคอนกรีต',
    description: 'ปูนซีเมนต์, คอนกรีตผสมเสร็จ, เสาเข็ม, หิน, ทราย',
    icon: 'Building2',
    color: 'bg-orange-500',
    subcategories: [
      { id: 'cement', name: 'ปูนซีเมนต์' },
      { id: 'ready-mixed', name: 'คอนกรีตผสมเสร็จ' },
      { id: 'piles', name: 'เสาเข็มและแผ่นพื้น' },
      { id: 'masonry', name: 'อิฐ หิน ทราย' }
    ]
  },
  {
    id: 'steel-metal',
    name: 'เหล็กและโลหะภัณฑ์',
    description: 'เหล็กเส้น, เหล็กรูปพรรณ, ลวด, ตะแกรง, ฮาร์ดแวร์',
    icon: 'Layers',
    color: 'bg-amber-500',
    subcategories: [
      { id: 'rebar', name: 'เหล็กเส้นก่อสร้าง' },
      { id: 'structural-steel', name: 'เหล็กรูปพรรณ' },
      { id: 'wire-mesh', name: 'ลวดและตะแกรงเหล็ก' },
      { id: 'hardware', name: 'ฮาร์ดแวร์ก่อสร้าง' }
    ]
  },
  {
    id: 'roofing',
    name: 'งานหลังคาและกันสาด',
    description: 'กระเบื้องหลังคา, เมทัลชีท, โครงหลังคา',
    icon: 'Home',
    color: 'bg-orange-600',
    subcategories: [
      { id: 'roof-tiles', name: 'กระเบื้องหลังคา' },
      { id: 'metal-sheets', name: 'หลังคาเมทัลชีท' },
      { id: 'trusses', name: 'โครงหลังคาและอุปกรณ์' }
    ]
  },
  {
    id: 'block-plastering',
    name: 'วัสดุก่อและฉาบ',
    description: 'บล็อก, อิฐ, ปูนก่อ, ปูนฉาบ',
    icon: 'Blocks',
    color: 'bg-amber-600',
    subcategories: [
      { id: 'blocks', name: 'บล็อกและอิฐ' },
      { id: 'mortar', name: 'ปูนก่อ ปูนฉาบ' }
    ]
  },
  {
    id: 'flooring-surface',
    name: 'กระเบื้องและวัสดุปูพื้นผิว',
    description: 'กระเบื้อง, ลามิเนต, กระเบื้องยาง SPC',
    icon: 'Grid',
    color: 'bg-orange-500',
    subcategories: [
      { id: 'tiles', name: 'กระเบื้อง' },
      { id: 'other-flooring', name: 'วัสดุปูพื้นอื่นๆ' }
    ]
  },
  {
    id: 'paints-chemicals',
    name: 'สีและเคมีภัณฑ์ก่อสร้าง',
    description: 'สีทาอาคาร, สีเฉพาะทาง, เคมีภัณฑ์กันซึม',
    icon: 'PaintBucket',
    color: 'bg-amber-500',
    subcategories: [
      { id: 'paints', name: 'สีทาอาคาร' },
      { id: 'specialty-paints', name: 'สีเฉพาะทาง' },
      { id: 'chemicals', name: 'เคมีภัณฑ์' }
    ]
  },
  {
    id: 'plumbing-water',
    name: 'งานประปาและระบบน้ำ',
    description: 'ท่อ PVC, ข้อต่อ, ปั๊มน้ำ, ถังเก็บน้ำ',
    icon: 'Droplets',
    color: 'bg-orange-600',
    subcategories: [
      { id: 'pipes', name: 'ท่อประปา' },
      { id: 'fittings', name: 'ข้อต่อและวาล์ว' },
      { id: 'water-management', name: 'ระบบน้ำ' }
    ]
  },
  {
    id: 'sanitary-ware',
    name: 'สุขภัณฑ์และอุปกรณ์ห้องน้ำ',
    description: 'ชักโครก, อ่างล้างหน้า, ก๊อกน้ำ',
    icon: 'Bath',
    color: 'bg-amber-600',
    subcategories: [
      { id: 'toilets', name: 'โถสุขภัณฑ์และอ่าง' },
      { id: 'faucets', name: 'ก๊อกน้ำและฝักบัว' }
    ]
  },
  {
    id: 'electrical-lighting',
    name: 'งานไฟฟ้าและแสงสว่าง',
    description: 'สายไฟ, ท่อร้อยสาย, เบรกเกอร์, โคมไฟ',
    icon: 'Zap',
    color: 'bg-orange-500',
    subcategories: [
      { id: 'cables', name: 'สายไฟและท่อร้อยสาย' },
      { id: 'control-units', name: 'อุปกรณ์ควบคุม' },
      { id: 'lighting', name: 'แสงสว่าง' }
    ]
  },
  {
    id: 'doors-windows',
    name: 'ประตู หน้าต่าง และงานไม้',
    description: 'บานประตู, วงกบ, ไม้สังเคราะห์',
    icon: 'DoorOpen',
    color: 'bg-amber-500',
    subcategories: [
      { id: 'doors-windows', name: 'บานประตูและหน้าต่าง' },
      { id: 'frames', name: 'วงกบและอุปกรณ์' },
      { id: 'synthetic-wood', name: 'ไม้สังเคราะห์' }
    ]
  },
  {
    id: 'safety-tools',
    name: 'อุปกรณ์ความปลอดภัยและเครื่องมือ',
    description: 'นั่งร้าน, เครื่องมือช่าง, อุปกรณ์เซฟตี้',
    icon: 'HardHat',
    color: 'bg-orange-600',
    subcategories: [
      { id: 'scaffolding', name: 'อุปกรณ์นั่งร้าน' },
      { id: 'tools', name: 'เครื่องมือช่าง' },
      { id: 'ppe', name: 'อุปกรณ์เซฟตี้ (PPE)' }
    ]
  }
];

export const priceComparisonData = {
  'cement-portland-50kg': {
    name: 'ปูนซีเมนต์ปอร์ตแลนด์ ประเภท 1 (บรรจุ 50 กก./ถุง)',
    brand: 'SCG (ตราช้าง)',
    category: 'cement',
    unit: 'ถุง',
    updatedAt: '2026-07-07T08:00:00Z',
    prices: [
      { source: 'Wassadu.net (ราคาขายส่ง)', price: 145.00, isBestPrice: true },
      { source: 'สำนักดัชนีเศรษฐกิจการค้า (ราคาอ้างอิง)', price: 151.25, isBestPrice: false },
      { source: 'ไทวัสดุ', price: 155.00, isBestPrice: false },
      { source: 'โกลบอลเฮ้าส์', price: 153.00, isBestPrice: false },
      { source: 'โฮมโปร', price: 159.00, isBestPrice: false },
    ]
  },
  'rebar-db12-10m': {
    name: 'เหล็กเส้นข้ออ้อย SD40 ขนาด DB12 มม. (ยาว 10 เมตร)',
    brand: 'TATA TISCON / มอก.',
    category: 'rebar',
    unit: 'เส้น',
    updatedAt: '2026-07-07T08:00:00Z',
    prices: [
      { source: 'Wassadu.net (ราคาโรงงาน)', price: 185.50, isBestPrice: true },
      { source: 'สำนักดัชนีเศรษฐกิจการค้า (ราคาอ้างอิง)', price: 195.00, isBestPrice: false },
      { source: 'ไทวัสดุ', price: 198.00, isBestPrice: false },
      { source: 'ดูโฮม', price: 192.00, isBestPrice: false },
    ]
  }
};
