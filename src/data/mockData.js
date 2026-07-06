export const CATEGORIES = [
  { id: '1', name: 'งานโครงสร้างและคอนกรีต', slug: 'structural-concrete', desc: 'ปูนซีเมนต์, เสาเข็ม, แผ่นพื้น' },
  { id: '2', name: 'เหล็กและโลหะภัณฑ์', slug: 'steel-metal', desc: 'เหล็กเส้น, เหล็กรูปพรรณ, ลวดสลิง' },
  { id: '3', name: 'งานหลังคาและฝ้าเพดาน', slug: 'roofing-ceiling', desc: 'กระเบื้องหลังคา, โครงหลังคา, แผ่นยิปซัม' },
  { id: '4', name: 'วัสดุก่อและฉาบ', slug: 'masonry-plastering', desc: 'อิฐมอญ, อิฐมวลเบา, ปูนฉาบ' },
  { id: '5', name: 'กระเบื้องและวัสดุปูพื้น', slug: 'tiles-flooring', desc: 'แกรนิตโต้, เซรามิก, ลามิเนต' },
  { id: '6', name: 'สีและเคมีภัณฑ์ก่อสร้าง', slug: 'paint-chemicals', desc: 'สีทาอาคาร, น้ำยากันซึม, กาวซีเมนต์' },
  { id: '7', name: 'งานประปาและสุขภัณฑ์', slug: 'plumbing-sanitary', desc: 'ท่อ PVC, ปั๊มน้ำ, ถังเก็บน้ำ, สุขภัณฑ์' },
  { id: '8', name: 'งานไฟฟ้าและแสงสว่าง', slug: 'electrical-lighting', desc: 'สายไฟ, ท่อร้อยสายไฟ, โคมไฟ' },
  { id: '9', name: 'ประตู หน้าต่าง และไม้', slug: 'doors-windows-wood', desc: 'ประตูไม้, หน้าต่างอลูมิเนียม, วงกบ' },
  { id: '10', name: 'อุปกรณ์ความปลอดภัย', slug: 'safety-equipment', desc: 'เครื่องมือไฟฟ้า, นั่งร้าน, เซฟตี้' },
];

export const MOCK_PRODUCTS = [
  // เหล็ก (Steel) - Category 2
  {
    id: 'p1',
    categoryId: '2',
    name: 'เหล็กเส้นกลม SR24 ขนาด 9 มม. ยาว 10 เมตร',
    brand: 'TATA TISCON',
    price: 185.00,
    unit: 'เส้น',
    vendor: 'บริษัท พีระภัณฑ์ คอนสตรัคชั่น จำกัด',
    isEGP: true,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop', // Rebar placeholder
    location: 'กรุงเทพมหานคร',
    lastUpdated: '2026-07-07'
  },
  {
    id: 'p2',
    categoryId: '2',
    name: 'เหล็กข้ออ้อย SD40 ขนาด 12 มม. ยาว 10 เมตร',
    brand: 'บกส',
    price: 245.50,
    unit: 'เส้น',
    vendor: 'บจก. สยามสตีล',
    isEGP: true,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop',
    location: 'สมุทรปราการ',
    lastUpdated: '2026-07-06'
  },
  {
    id: 'p3',
    categoryId: '2',
    name: 'เหล็กรูปพรรณ ตัวซี 100x50x20x2.3 มม.',
    brand: 'SYS',
    price: 450.00,
    unit: 'เส้น (6 เมตร)',
    vendor: 'บจก. สยามสตีล',
    isEGP: true,
    image: 'https://images.unsplash.com/photo-1590483866170-dfc7921c1682?q=80&w=600&auto=format&fit=crop', // Steel beams
    location: 'ชลบุรี',
    lastUpdated: '2026-07-05'
  },
  
  // ปูนซีเมนต์ (Concrete/Cement) - Category 1
  {
    id: 'p4',
    categoryId: '1',
    name: 'ปูนซีเมนต์ปอร์ตแลนด์ ประเภท 1 (ตราช้าง)',
    brand: 'SCG',
    price: 135.00,
    unit: 'ถุง (50 กก.)',
    vendor: 'ตัวแทนจำหน่าย SCG',
    isEGP: true,
    image: 'https://images.unsplash.com/photo-1621503923412-dfdf698096f9?q=80&w=600&auto=format&fit=crop', // cement bags
    location: 'กรุงเทพมหานคร',
    lastUpdated: '2026-07-07'
  },
  {
    id: 'p5',
    categoryId: '1',
    name: 'ปูนซีเมนต์ผสม (ตราเสือ)',
    brand: 'SCG',
    price: 115.00,
    unit: 'ถุง (50 กก.)',
    vendor: 'ส.เจริญวัสดุก่อสร้าง',
    isEGP: false,
    image: 'https://images.unsplash.com/photo-1621503923412-dfdf698096f9?q=80&w=600&auto=format&fit=crop',
    location: 'นนทบุรี',
    lastUpdated: '2026-07-04'
  }
];
