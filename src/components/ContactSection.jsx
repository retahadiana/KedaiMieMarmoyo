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
    color: 'bg-primary-600',
  },
  {
    id: 'instagram',
    label: CONTACT_INFO.instagramHandle,
    sublabel: 'Ikuti di Instagram',
    href: CONTACT_INFO.instagram,
    emoji: '📸',
    color: 'bg-primary-700',
  },
  {
    id: 'tiktok',
    label: CONTACT_INFO.tiktokHandle,
    sublabel: 'Tonton di TikTok',
    href: CONTACT_INFO.tiktok,
    emoji: '🎵',
    color: 'bg-secondary',
  },
  {
    id: 'whatsapp',
    label: 'Chat WhatsApp',
    sublabel: 'Order & Tanya Langsung',
    href: CONTACT_INFO.whatsappLink,
    emoji: '💬',
    color: 'bg-primary',
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 md:px-8 relative"
      aria-label="Informasi Kontak Mie Marmoyo"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary text-white font-bold text-sm px-6 py-2 rounded-full mb-6 border-2 border-primary-700 shadow-sm uppercase tracking-widest">
            📞 Hubungi Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-widest uppercase text-shadow-solid" style={{ fontFamily: 'Fredoka, Nunito, sans-serif' }}>
            Temukan & <span className="text-primary">Ikuti Kami</span>
          </h2>
          <p className="text-secondary/80 mt-4 max-w-md mx-auto text-lg leading-relaxed font-medium">
            Kunjungi langsung, ikuti update terbaru, atau langsung order via WhatsApp!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-8 rounded-3xl border-4 border-primary/10 bg-cream shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 relative overflow-hidden"
              aria-label={link.sublabel}
            >
              <div className="absolute inset-0 pattern-oriental opacity-10 pointer-events-none" />
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-full ${link.color} text-white flex items-center justify-center text-3xl mb-5 shadow-solid group-hover:scale-110 transition-transform duration-300 relative z-10 border-2 border-cream`}>
                {link.emoji}
              </div>

              {/* Label */}
              <p className="font-black text-base text-secondary mb-1.5 uppercase tracking-wide relative z-10">{link.label}</p>
              <p className="text-secondary/70 text-sm font-bold relative z-10">{link.sublabel}</p>

              {/* Arrow */}
              <span className="mt-4 text-xs font-black text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200 relative z-10">
                Kunjungi →
              </span>
            </a>
          ))}
        </div>

        {/* Hours Info */}
        <div className="mt-12 bg-cream border-4 border-primary/20 shadow-md rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 pattern-oriental opacity-10 pointer-events-none" />
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="text-5xl drop-shadow-md">🕙</div>
            <div>
              <p className="font-black text-secondary text-xl mb-1 uppercase tracking-wider" style={{ fontFamily: 'Fredoka, Nunito, sans-serif' }}>Jam Operasional</p>
              <p className="text-secondary/90 font-bold tracking-wide">Selasa – Minggu, 10.00 – 21.00 WIB</p>
              <p className="text-primary text-sm font-black mt-2 tracking-widest uppercase bg-primary/10 inline-block px-3 py-1 rounded-full border border-primary/20">⛔ Senin Libur</p>
            </div>
          </div>
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 btn-primary whitespace-nowrap w-full sm:w-auto text-lg relative z-10"
          >
            💬 Order Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
