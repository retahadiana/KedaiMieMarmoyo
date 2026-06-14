// ============================================================
// DATA MENU - Semua data hardcoded untuk deployment statis
// ============================================================

// Import semua gambar menu
import imgMieCharsiu    from '../assets/menu/mie-charsiu.png';
import imgMieMala       from '../assets/menu/mie-mala.png';
import imgMieTomyam     from '../assets/menu/mie-tomyam.png';
import imgMieGurih      from '../assets/menu/mie-gurih.png';
import imgMieGurihOri   from '../assets/menu/mie-gurih-ori.png';
import imgMieManis      from '../assets/menu/mie-manis.png';
import imgMieManisOri   from '../assets/menu/mie-manis-ori.png';
import imgCekerPedas    from '../assets/menu/ceker-pedas.png';
import imgDimsum        from '../assets/menu/dimsum.png';
import imgWonton        from '../assets/menu/wonton.png';
import imgUdangKeju     from '../assets/menu/udang-keju.png';
import imgUdangRambutan from '../assets/menu/udang-rambutan.png';
import imgAyamNori      from '../assets/menu/ayam-nori.png';
import imgEsHijau       from '../assets/menu/es-hijau-merambat.png';
import imgEsMerah       from '../assets/menu/es-merah-merona.png';
import imgCoklat        from '../assets/menu/coklat-kuentel.png';
import imgEsJeruk       from '../assets/menu/es-jeruk.png';
import imgEsTeh         from '../assets/menu/es-teh.png';
import imgEsTehSusu     from '../assets/menu/es-teh-susu.png';

export const CATEGORIES = [
  { id: 'semua',     label: 'Semua',     emoji: '🍜' },
  { id: 'pedas',     label: 'Pedas',     emoji: '🌶️' },
  { id: 'mie-goreng',label: 'Mie',       emoji: '🥢' },
  { id: 'side-dish', label: 'Side Dish', emoji: '🥟' },
  { id: 'minuman',   label: 'Minuman',   emoji: '🥤' },
];

export const MENU_ITEMS = [
  // ── Mie Kuah ──────────────────────────────────────────────
  {
    id: 1,
    name: 'Mie Charsiu',
    description: 'Mie kuah dengan topping charsiu (daging merah panggang khas Cina) yang gurih dan lezat.',
    price: 15000,
    category: 'mie-goreng',
    tags: ['mie-kuah'],
    isSpicy: false,
    isPopular: false,
    image: imgMieCharsiu,
  },
  {
    id: 2,
    name: 'Mie Kuah Mala',
    description: 'Mie kuah dengan kaldu mala yang pedas dan menghangatkan, khas cita rasa Marmoyo.',
    price: 15000,
    category: 'mie-goreng',
    tags: ['mie-kuah'],
    isSpicy: true,
    isPopular: true,
    image: imgMieMala,
  },
  {
    id: 3,
    name: 'Mie Tomyam',
    description: 'Mie kuah dengan kuah tomyam asam segar yang menggugah selera.',
    price: 15000,
    category: 'mie-goreng',
    tags: ['mie-kuah'],
    isSpicy: true,
    isPopular: false,
    image: imgMieTomyam,
  },
  // ── Mie Goreng ────────────────────────────────────────────
  {
    id: 4,
    name: 'Mie Gurih Level 1–3',
    description: 'Mie goreng gurih dengan level kepedasan 1 hingga 3, cocok untuk pemula pecinta pedas.',
    price: 10000,
    category: 'mie-goreng',
    tags: ['goreng'],
    isSpicy: true,
    isPopular: true,
    image: imgMieGurih,
  },
  {
    id: 5,
    name: 'Mie Gurih Level 4–5',
    description: 'Mie goreng gurih level ekstra pedas (4–5) untuk jiwa pemberani!',
    price: 11000,
    category: 'mie-goreng',
    tags: ['goreng'],
    isSpicy: true,
    isPopular: false,
    image: imgMieGurih,
  },
  {
    id: 6,
    name: 'Mie Manis Level 1–3',
    description: 'Mie goreng dengan bumbu manis yang khas, level 1–3, favorit semua kalangan.',
    price: 10000,
    category: 'mie-goreng',
    tags: ['goreng'],
    isSpicy: true,
    isPopular: true,
    image: imgMieManis,
  },
  {
    id: 7,
    name: 'Mie Manis Level 4–5',
    description: 'Mie goreng manis pedas tingkat tinggi, level 4–5, bagi kamu yang suka tantangan!',
    price: 11000,
    category: 'mie-goreng',
    tags: ['goreng'],
    isSpicy: true,
    isPopular: false,
    image: imgMieManis,
  },
  {
    id: 8,
    name: 'Mie Gurih Ori',
    description: 'Mie goreng gurih original tanpa level pedas, cita rasa khas Marmoyo yang otentik.',
    price: 10000,
    category: 'mie-goreng',
    tags: ['goreng'],
    isSpicy: false,
    isPopular: false,
    image: imgMieGurihOri,
  },
  {
    id: 9,
    name: 'Mie Manis Ori',
    description: 'Mie goreng manis original, lembut dan gurih tanpa tambahan pedas.',
    price: 10000,
    category: 'mie-goreng',
    tags: ['goreng'],
    isSpicy: false,
    isPopular: false,
    image: imgMieManisOri,
  },
  // ── Side Dish ─────────────────────────────────────────────
  {
    id: 10,
    name: 'Ceker Pedas',
    description: 'Ceker ayam dimasak dengan bumbu pedas rempah, empuk dan meresap.',
    price: 10000,
    category: 'side-dish',
    tags: ['side-dish'],
    isSpicy: true,
    isPopular: false,
    image: imgCekerPedas,
  },
  {
    id: 11,
    name: 'Dimsum',
    description: 'Dimsum kukus isi daging pilihan, lembut dan sedap sebagai pelengkap mie.',
    price: 10000,
    category: 'side-dish',
    tags: ['side-dish'],
    isSpicy: false,
    isPopular: false,
    image: imgDimsum,
  },
  {
    id: 12,
    name: 'Wonton Ori',
    description: 'Wonton original isi daging cincang dengan kulit tipis yang renyah.',
    price: 10000,
    category: 'side-dish',
    tags: ['side-dish'],
    isSpicy: false,
    isPopular: true,
    image: imgWonton,
  },
  {
    id: 13,
    name: 'Udang Keju',
    description: 'Udang segar dibalut keju leleh yang gurih dan creamy.',
    price: 10000,
    category: 'side-dish',
    tags: ['side-dish'],
    isSpicy: false,
    isPopular: false,
    image: imgUdangKeju,
  },
  {
    id: 14,
    name: 'Udang Rambutan',
    description: 'Udang dengan balutan tepung renyah mirip rambutan, tekstur unik dan crispy.',
    price: 10000,
    category: 'side-dish',
    tags: ['side-dish'],
    isSpicy: false,
    isPopular: false,
    image: imgUdangRambutan,
  },
  {
    id: 15,
    name: 'Ayam Nori',
    description: 'Ayam goreng dibalut nori (rumput laut Jepang) yang crispy dengan cita rasa umami.',
    price: 10000,
    category: 'side-dish',
    tags: ['side-dish'],
    isSpicy: false,
    isPopular: false,
    image: imgAyamNori,
  },
  // ── Minuman ───────────────────────────────────────────────
  {
    id: 16,
    name: 'Es Hijau Merambat',
    description: 'Minuman es segar dengan rasa melon hijau yang merambat menyegarkan.',
    price: 7000,
    category: 'minuman',
    tags: ['minuman'],
    isSpicy: false,
    isPopular: false,
    image: imgEsHijau,
  },
  {
    id: 17,
    name: 'Es Merah Merona',
    description: 'Es segar dengan perpaduan rasa merah merona yang manis dan memanjakan.',
    price: 7000,
    category: 'minuman',
    tags: ['minuman'],
    isSpicy: false,
    isPopular: false,
    image: imgEsMerah,
  },
  {
    id: 18,
    name: 'Cokelat Kuentel',
    description: 'Minuman cokelat kental yang kaya rasa, hangat atau dingin sesuai selera.',
    price: 10000,
    category: 'minuman',
    tags: ['minuman'],
    isSpicy: false,
    isPopular: true,
    image: imgCoklat,
  },
  {
    id: 19,
    name: 'Es Jeruk',
    description: 'Es jeruk segar alami, asam manis menyegarkan, cocok menemani mie pedas.',
    price: 5000,
    category: 'minuman',
    tags: ['minuman'],
    isSpicy: false,
    isPopular: false,
    image: imgEsJeruk,
  },
  {
    id: 20,
    name: 'Es Teh',
    description: 'Teh manis dingin klasik, sederhana namun selalu jadi pilihan tepat.',
    price: 4000,
    category: 'minuman',
    tags: ['minuman'],
    isSpicy: false,
    isPopular: false,
    image: imgEsTeh,
  },
  {
    id: 21,
    name: 'Es Teh Susu',
    description: 'Perpaduan teh dan susu yang creamy, manis, dan menyegarkan.',
    price: 7000,
    category: 'minuman',
    tags: ['minuman'],
    isSpicy: false,
    isPopular: false,
    image: imgEsTehSusu,
  },
];

// Jam operasional
export const OPERATIONAL_HOURS = {
  open: 10,
  close: 21,
  closedDay: 1, // Senin
};

// Kontak & Sosial Media
export const CONTACT_INFO = {
  whatsapp: '6285725509232',
  whatsappLink: 'https://wa.me/qr/D5QPOVHQIEMLJ1',
  googleMaps: 'https://maps.app.goo.gl/wBdSk4t4838HJ27X8?g_st=ac',
  instagram: 'https://instagram.com/miemarmoyo',
  tiktok: 'https://tiktok.com/@mie.marmoyo',
  instagramHandle: '@miemarmoyo',
  tiktokHandle: '@mie.marmoyo',
};

export const formatPrice = (price) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
