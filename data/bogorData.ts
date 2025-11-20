
import type { Kecamatan } from '../types';

export const BOGOR_DATA: Kecamatan[] = [
  {
    id: 'bogor-tengah',
    name: 'Bogor Tengah',
    // Central polygon - Adjusted left border to close gap with TS/Barat (added 265,285)
    path: "M270,240 L350,240 L360,320 L260,330 L265,285 Z",
    transform: "translate(0, 0)",
    textPosition: { x: "310", y: "290" },
    colorClass: "fill-green-500 group-hover:fill-green-400",
    kelurahan: [
      {
        id: 'babakan', name: 'Babakan',
        places: [
          { 
            id: 'p1', 
            name: 'Kebun Raya Bogor', 
            type: 'Local Attraction', 
            description: 'Kebun botani luas dengan ribuan koleksi tanaman dan Istana Bogor yang megah.', 
            images: [
              'https://placehold.co/600x400/10b981/ffffff?text=Kebun+Raya+Bogor',
              'https://placehold.co/600x400/059669/ffffff?text=Istana+Bogor',
              'https://placehold.co/600x400/047857/ffffff?text=Danau+Gunting'
            ], 
            address: 'Jl. Ir. H. Juanda No.13, Paledang, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16122',
            mapUrl: 'https://maps.app.goo.gl/bogor',
            contact: { phone: '0251-8311362' } 
          },
          { 
            id: 'p2', 
            name: 'Kopi Nako', 
            type: 'Culinary Spot', 
            description: 'Tempat ngopi populer dengan desain industrial modern dan area outdoor yang nyaman.', 
            images: [
              'https://placehold.co/600x400/d97706/ffffff?text=Kopi+Nako+Exterior',
              'https://placehold.co/600x400/b45309/ffffff?text=Es+Kopi+Nako'
            ], 
            contact: { socialMedia: 'https://www.instagram.com/kopinako.id' } 
          }
        ]
      },
      {
        id: 'paledang', name: 'Paledang',
        places: [
          { 
            id: 'p3', 
            name: 'Taman Sempur', 
            type: 'Local Attraction', 
            description: 'Ruang terbuka hijau favorit warga Bogor untuk berolahraga dan bersantai.', 
            images: ['https://placehold.co/600x400/10b981/ffffff?text=Taman+Sempur'] 
          },
          { 
            id: 'p4', 
            name: 'Third Wave Coffee', 
            type: 'Culinary Spot', 
            description: 'Menyajikan kopi spesialti dengan berbagai metode seduh manual.', 
            images: [
              'https://placehold.co/600x400/78350f/ffffff?text=Third+Wave+Coffee',
              'https://placehold.co/600x400/92400e/ffffff?text=Manual+Brew'
            ] 
          },
          { 
            id: 'p13', 
            name: 'Stasiun Bogor', 
            type: 'Local Attraction', 
            description: 'Bangunan stasiun bersejarah dengan arsitektur kolonial yang khas.', 
            images: [
              'https://placehold.co/600x400/64748b/ffffff?text=Stasiun+Bogor',
              'https://placehold.co/600x400/475569/ffffff?text=Arsitektur+Kolonial'
            ] 
          },
        ]
      },
      { 
        id: 'gudang', name: 'Gudang', 
        places: [
          {
            id: 'p14', 
            name: 'Pasar Gudang', 
            type: 'Local Attraction', 
            description: 'Pusat perbelanjaan grosir aneka barang.', 
            images: ['https://placehold.co/600x400/f59e0b/ffffff?text=Pasar+Gudang'] 
          }
        ] 
      },
      { 
        id: 'cibogor', name: 'Cibogor', 
        places: [
          {
            id: 'p15', 
            name: 'Warung Kopi Pa\'de', 
            type: 'Culinary Spot', 
            description: 'Warung kopi sederhana dengan cita rasa kopi lokal yang otentik.', 
            images: ['https://placehold.co/600x400/7c2d12/ffffff?text=Warung+Kopi+Pa\'de'] 
          }
        ] 
      },
      { id: 'pabaton', name: 'Pabaton', places: [] },
      { 
        id: 'sempur', name: 'Sempur', 
        places: [
          {
            id: 'p16', 
            name: 'Museum Perjuangan Bogor', 
            type: 'Educational Site', 
            description: 'Museum yang didedikasikan untuk sejarah perjuangan kemerdekaan di Bogor.', 
            images: [
              'https://placehold.co/600x400/b91c1c/ffffff?text=Museum+Perjuangan',
              'https://placehold.co/600x400/991b1b/ffffff?text=Koleksi+Senjata'
            ] 
          }
        ] 
      },
      { id: 'tegallega', name: 'Tegallega', places: [] },
      { id: 'kebon-kelapa', name: 'Kebon Kelapa', places: [] },
      { id: 'panaragan', name: 'Panaragan', places: [] },
      { id: 'ciwaringin', name: 'Ciwaringin', places: [] },
      { id: 'kebon-pedes', name: 'Kebon Pedes', places: [] },
    ]
  },
  {
    id: 'bogor-timur',
    name: 'Bogor Timur',
    // East polygon
    path: "M350,240 L420,260 L520,360 L410,420 L360,320 Z",
    transform: "translate(0, 0)",
    textPosition: { x: "415", y: "330" },
    colorClass: "fill-red-500 group-hover:fill-red-400",
    kelurahan: [
      {
        id: 'baranangsiang', name: 'Baranangsiang',
        places: [
          { 
            id: 'p5', 
            name: 'Kopi Tugoh', 
            type: 'Culinary Spot', 
            description: 'Menikmati kopi dari ketinggian dengan pemandangan kota Bogor.', 
            images: [
              'https://placehold.co/600x400/57534e/ffffff?text=Kopi+Tugoh',
              'https://placehold.co/600x400/44403c/ffffff?text=Pemandangan+Kota'
            ] 
          },
          { 
            id: 'p6', 
            name: 'Museum Tanah dan Pertanian', 
            type: 'Educational Site', 
            description: 'Museum edukatif tentang sejarah pertanian di Indonesia.', 
            images: ['https://placehold.co/600x400/15803d/ffffff?text=Museum+Tanah'] 
          }
        ]
      },
       {
        id: 'sukasari', name: 'Sukasari',
        places: [
          { 
            id: 'p7', 
            name: 'Kopi Daong', 
            type: 'Culinary Spot', 
            description: 'Coffee shop di tengah hutan pinus yang sejuk dan asri.', 
            images: [
              'https://placehold.co/600x400/166534/ffffff?text=Kopi+Daong',
              'https://placehold.co/600x400/14532d/ffffff?text=Hutan+Pinus',
              'https://placehold.co/600x400/14532d/ffffff?text=Suasana+Malam'
            ], 
            contact: { socialMedia: 'https://www.instagram.com/kopidaong.id' } 
          },
          { 
            id: 'p17', 
            name: 'SKYE Rooftop', 
            type: 'Culinary Spot', 
            description: 'Cafe di rooftop dengan pemandangan 360 derajat kota Bogor.', 
            images: ['https://placehold.co/600x400/0ea5e9/ffffff?text=SKYE+Rooftop'] 
          },
        ]
      },
      { 
        id: 'katulampa', name: 'Katulampa', 
        places: [
          {
            id: 'p18', 
            name: 'Bendung Katulampa', 
            type: 'Educational Site', 
            description: 'Bangunan bersejarah peninggalan Belanda untuk memantau debit air sungai Ciliwung.', 
            images: [
              'https://placehold.co/600x400/3b82f6/ffffff?text=Bendung+Katulampa',
              'https://placehold.co/600x400/2563eb/ffffff?text=Sungai+Ciliwung'
            ] 
          }
        ] 
      },
      { id: 'sindangsari', name: 'Sindangsari', places: [] },
      { id: 'sindangrasa', name: 'Sindangrasa', places: [] },
      { 
        id: 'tajur', name: 'Tajur', 
        places: [
          {
            id: 'p19', 
            name: 'Sentra Tas Tajur', 
            type: 'Local Attraction', 
            description: 'Kawasan perbelanjaan yang terkenal dengan produk tas berkualitas.', 
            images: ['https://placehold.co/600x400/db2777/ffffff?text=Sentra+Tas+Tajur'] 
          }
        ] 
      },
    ]
  },
  {
    id: 'bogor-selatan',
    name: 'Bogor Selatan',
    // South polygon - Updated accurate shape
    path: "M360,320 L410,420 L300,550 L150,420 L260,330 Z",
    transform: "translate(0, 0)",
    textPosition: { x: "280", y: "440" },
    colorClass: "fill-blue-500 group-hover:fill-blue-400",
    kelurahan: [
      {
        id: 'batutulis', name: 'Batutulis',
        places: [
          { 
            id: 'p8', 
            name: 'The Jungle Waterpark', 
            type: 'Local Attraction', 
            description: 'Taman rekreasi air dengan berbagai wahana seru untuk keluarga.', 
            images: [
              'https://placehold.co/600x400/0284c7/ffffff?text=The+Jungle',
              'https://placehold.co/600x400/0369a1/ffffff?text=Wahana+Air'
            ], 
            contact: { phone: '0251-8212666' } 
          },
          { 
            id: 'p9', 
            name: 'Popolo Coffee', 
            type: 'Culinary Spot', 
            description: 'Coffee shop dengan interior minimalis dan suasana yang homey.', 
            images: ['https://placehold.co/600x400/a8a29e/ffffff?text=Popolo+Coffee'] 
          },
          { 
            id: 'p20', 
            name: 'Prasasti Batutulis', 
            type: 'Educational Site', 
            description: 'Situs peninggalan bersejarah dari Kerajaan Pajajaran.', 
            images: ['https://placehold.co/600x400/525252/ffffff?text=Prasasti+Batutulis'] 
          },
        ]
      },
      { id: 'bondongan', name: 'Bondongan', places: [] },
      { 
        id: 'mulyaharja', name: 'Mulyaharja', 
        places: [
          { 
            id: 'p21', 
            name: 'Kampung Tematik Mulyaharja', 
            type: 'Educational Site', 
            description: 'Wisata edukasi pertanian di tengah kota dengan sawah yang hijau.', 
            images: [
              'https://placehold.co/600x400/65a30d/ffffff?text=Kampung+Mulyaharja',
              'https://placehold.co/600x400/4d7c0f/ffffff?text=Sawah+Hijau'
            ] 
          }
        ] 
      },
      { id: 'ranggamekar', name: 'Ranggamekar', places: [] },
      { id: 'cikaret', name: 'Cikaret', places: [] },
      { id: 'empang', name: 'Empang', places: [] },
      { id: 'pamoyanan', name: 'Pamoyanan', places: [] },
      { id: 'genteng', name: 'Genteng', places: [] },
      { id: 'muarasari', name: 'Muarasari', places: [] },
      { id: 'harjasari', name: 'Harjasari', places: [] },
      { id: 'kertamaya', name: 'Kertamaya', places: [] },
      { id: 'rancamaya', name: 'Rancamaya', places: [] },
      { id: 'bojongkerta', name: 'Bojongkerta', places: [] },
      { id: 'pakuan', name: 'Pakuan', places: [] },
      { id: 'lawanggintung', name: 'Lawang Gintung', places: [] },
      { id: 'cipaku', name: 'Cipaku', places: [] },
    ]
  },
  {
    id: 'bogor-barat',
    name: 'Bogor Barat',
    // West polygon - Updated to share border with TS (at 130,260 -> 265,285) and Tengah (260,330 -> 265,285)
    path: "M260,330 L150,420 L60,340 L130,260 L265,285 Z",
    transform: "translate(0, 0)",
    textPosition: { x: "140", y: "350" },
    colorClass: "fill-yellow-400 group-hover:fill-yellow-300",
    kelurahan: [
      {
        id: 'menteng', name: 'Menteng',
        places: [
          { 
            id: 'p10', 
            name: 'Situ Gede', 
            type: 'Local Attraction', 
            description: 'Danau alami yang indah untuk memancing, berperahu, atau piknik.', 
            images: [
              'https://placehold.co/600x400/0891b2/ffffff?text=Situ+Gede',
              'https://placehold.co/600x400/0e7490/ffffff?text=Danau+Alam'
            ] 
          },
          { 
            id: 'p22', 
            name: 'Rumah Kopi Ranin', 
            type: 'Culinary Spot', 
            description: 'Menyeduh dan menjual kopi asli dari petani lokal Indonesia.', 
            images: ['https://placehold.co/600x400/5b21b6/ffffff?text=Rumah+Kopi+Ranin'] 
          },
        ]
      },
      { id: 'cilendek-barat', name: 'Cilendek Barat', places: [] },
      { id: 'cilendek-timur', name: 'Cilendek Timur', places: [] },
      { id: 'pasir-jaya', name: 'Pasir Jaya', places: [] },
      { id: 'gunungbatu', name: 'Gunungbatu', places: [] },
      { id: 'loji', name: 'Loji', places: [] },
      { 
        id: 'sindangbarang', name: 'Sindangbarang', 
        places: [
          { 
            id: 'p23', 
            name: 'Kampung Budaya Sindangbarang', 
            type: 'Educational Site', 
            description: 'Situs budaya yang merekonstruksi kehidupan kampung Sunda kuno.', 
            images: [
              'https://placehold.co/600x400/d97706/ffffff?text=Kp.+Budaya+Sindangbarang',
              'https://placehold.co/600x400/b45309/ffffff?text=Rumah+Adat'
            ] 
          }
        ] 
      },
      { id: 'bubulak', name: 'Bubulak', places: [] },
      { id: 'pasir-kuda', name: 'Pasir Kuda', places: [] },
      { id: 'pasir-mulya', name: 'Pasir Mulya', places: [] },
      { id: 'balumbang-jaya', name: 'Balumbang Jaya', places: [] },
      { id: 'margasari', name: 'Marga Sari', places: [] },
      { id: 'curug', name: 'Curug', places: [] },
      { id: 'curug-mekar', name: 'Curug Mekar', places: [] },
      { id: 'sempak', name: 'Semplak', places: [] },
      { id: 'kayu-manis', name: 'Kayu Manis', places: [] },
    ]
  },
  {
    id: 'bogor-utara',
    name: 'Bogor Utara',
    // North polygon
    path: "M270,240 L260,100 L400,80 L420,260 L350,240 Z",
    transform: "translate(0, 0)",
    textPosition: { x: "350", y: "180" },
    colorClass: "fill-pink-500 group-hover:fill-pink-400",
    kelurahan: [
      {
        id: 'cibuluh', name: 'Cibuluh',
        places: [
          { 
            id: 'p11', 
            name: 'Two Stories Cafe', 
            type: 'Culinary Spot', 
            description: 'Cafe dengan konsep unik dan rooftop yang asik untuk nongkrong.', 
            images: [
              'https://placehold.co/600x400/be123c/ffffff?text=Two+Stories',
              'https://placehold.co/600x400/9f1239/ffffff?text=Rooftop'
            ] 
          },
        ]
      },
      { 
        id: 'bantarjati', name: 'Bantarjati', 
        places: [
          { 
            id: 'p24', 
            name: 'Taman Kencana', 
            type: 'Local Attraction', 
            description: 'Taman rindang di tengah kota yang cocok untuk bersantai sore hari.', 
            images: ['https://placehold.co/600x400/10b981/ffffff?text=Taman+Kencana'] 
          }
        ] 
      },
      { id: 'tanah-baru', name: 'Tanah Baru', places: [] },
      { id: 'tegal-gundil', name: 'Tegal Gundil', places: [] },
      { id: 'ciparigi', name: 'Ciparigi', places: [] },
      { id: 'kedung-halang', name: 'Kedung Halang', places: [] },
      { id: 'ciluar', name: 'Ciluar', places: [] },
      { 
        id: 'cimahpar', name: 'Cimahpar', 
        places: [
          { 
            id: 'p25', 
            name: 'Raindear Coffee', 
            type: 'Culinary Spot', 
            description: 'Coffee shop dengan interior modern dan sering menjadi tempat kerja para remote worker.', 
            images: [
              'https://placehold.co/600x400/52525b/ffffff?text=Raindear+Coffee',
              'https://placehold.co/600x400/3f3f46/ffffff?text=Interior'
            ] 
          }
        ] 
      },
    ]
  },
  {
    id: 'tanah-sareal',
    name: 'Tanah Sareal',
    // North West polygon - Updated to close gap with Barat and Tengah (added 265,285)
    path: "M270,240 L260,100 L150,120 L130,260 L265,285 Z",
    transform: "translate(0, 0)",
    textPosition: { x: "200", y: "200" },
    colorClass: "fill-purple-600 group-hover:fill-purple-500",
    kelurahan: [
      {
        id: 'kedungbadak', name: 'Kedung Badak',
        places: [
          { 
            id: 'p12', 
            name: 'Maraca Coffee', 
            type: 'Culinary Spot', 
            description: 'Tempat ngopi yang tenang dengan pilihan biji kopi yang beragam.', 
            images: [
              'https://placehold.co/600x400/431407/ffffff?text=Maraca+Coffee',
              'https://placehold.co/600x400/2a0a04/ffffff?text=Biji+Kopi'
            ], 
            contact: { socialMedia: 'https://www.instagram.com/maracacoffee' } 
          }
        ]
      },
      { id: 'sukaresmi', name: 'Sukaresmi', places: [] },
      { 
        id: 'kebon-pedes', name: 'Kebon Pedes', 
        places: [
          { 
            id: 'p26', 
            name: 'Taman Heulang', 
            type: 'Local Attraction', 
            description: 'Taman kota yang luas dengan jogging track dan area bermain anak.', 
            images: ['https://placehold.co/600x400/16a34a/ffffff?text=Taman+Heulang'] 
          }
        ] 
      },
      { id: 'mekarwangi', name: 'Mekarwangi', places: [] },
      { id: 'cibadak', name: 'Cibadak', places: [] },
      { id: 'kencana', name: 'Kencana', places: [] },
      { id: 'kedung-jaya', name: 'Kedung Jaya', places: [] },
      { id: 'kedung-waringin', name: 'Kedung Waringin', places: [] },
      { id: 'sukadamai', name: 'Sukadamai', places: [] },
      { id: 'tanahsareal', name: 'Tanah Sareal', places: [] },
      { id: 'kayumanis', name: 'Kayumanis', places: [] }
    ]
  }
];
