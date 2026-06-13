import { CONTACT_INFO } from '../data/menuData';

// ============================================================
// Component: ContactSection
// Shows store contact info: Google Maps, Instagram, TikTok
// ============================================================

const contactLinks = [
  {
    id: 'maps',
    label: 'Temukan Kami',
    sublabel: 'Buka di Google Maps',
    href: CONTACT_INFO.googleMaps,
    emoji: '📍',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
  },
  {
    id: 'instagram',
    label: CONTACT_INFO.instagramHandle,
    sublabel: 'Ikuti di Instagram',
    href: CONTACT_INFO.instagram,
    emoji: '📸',
    color: 'from-pink-500 via-purple-500 to-orange-400',
    bg: 'bg-pink-50',
    text: 'text-pink-700',
    border: 'border-pink-200',
  },
  {
    id: 'tiktok',
    label: CONTACT_INFO.tiktokHandle,
    sublabel: 'Tonton di TikTok',
    href: CONTACT_INFO.tiktok,
    emoji: '🎵',
    color: 'from-gray-800 to-gray-600',
    bg: 'bg-gray-50',
    text: 'text-gray-800',
    border: 'border-gray-200',
  },
  {
    id: 'whatsapp',
    label: 'Chat WhatsApp',
    sublabel: 'Order & Tanya Langsung',
    href: CONTACT_INFO.whatsappLink,
    emoji: '💬',
    color: 'from-green-500 to-green-700',
    bg: 'bg-green-50',
    text: 'text-green-700',
    border: 'border-green-200',
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-8 bg-white"
      aria-label="Informasi Kontak Mie Marmoyo"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-50 text-primary font-bold text-sm px-4 py-1.5 rounded-full mb-4 border border-primary-100">
            📞 Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Temukan & <span className="text-primary">Ikuti Kami</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Kunjungi langsung, ikuti update terbaru, atau langsung order via WhatsApp!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center text-center p-6 rounded-2xl border-2 ${link.bg} ${link.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              aria-label={link.sublabel}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {link.emoji}
              </div>

              {/* Label */}
              <p className={`font-bold text-base ${link.text} mb-1`}>{link.label}</p>
              <p className="text-gray-500 text-sm">{link.sublabel}</p>

              {/* Arrow */}
              <span className={`mt-3 text-xs font-semibold ${link.text} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                Kunjungi →
              </span>
            </a>
          ))}
        </div>

        {/* Hours Info */}
        <div className="mt-10 bg-orange-50 border border-orange-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🕙</div>
            <div>
              <p className="font-bold text-gray-900">Jam Operasional</p>
              <p className="text-gray-600 text-sm">Selasa – Minggu, 10.00 – 21.00 WIB</p>
              <p className="text-primary text-sm font-semibold">⛔ Senin Libur</p>
            </div>
          </div>
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary-800 transition-all duration-200 hover:shadow-glow-red active:scale-95 whitespace-nowrap"
          >
            💬 Order Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
