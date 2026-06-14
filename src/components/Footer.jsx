import { CONTACT_INFO } from '../data/menuData';
import logoImg from '../assets/logo.png';

// ============================================================
// Component: Footer
// ============================================================

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-primary text-cream relative overflow-hidden border-t-8 border-primary-800"
      aria-label="Footer Mie Marmoyo"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-oriental-dark opacity-10" />

      <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img
              src={logoImg}
              alt="Logo Mie Marmoyo"
              className="h-20 object-contain mb-6 drop-shadow-md"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-cream/80 text-sm leading-relaxed max-w-xs font-semibold tracking-wide">
              Kedai mie dengan cita rasa khas yang menggugah selera. Dari yang lain, <span className="text-yellow-400 font-black">LEBIH!</span>
            </p>
          </div>

          {/* Jam Operasional */}
          <div>
            <h3 className="font-black text-yellow-400 mb-6 text-xl tracking-widest uppercase" style={{ fontFamily: 'Fredoka, Nunito, sans-serif' }}>
              ⏰ Jam Buka
            </h3>
            <ul className="space-y-3 text-sm text-cream/90 font-bold tracking-wide">
              <li className="flex justify-between gap-4 border-b border-white/20 pb-2">
                <span>Selasa – Minggu</span>
                <span className="font-black text-white">10.00 – 21.00 WIB</span>
              </li>
              <li className="flex justify-between gap-4 pt-1">
                <span>Senin</span>
                <span className="font-black text-cream-dark uppercase tracking-widest text-xs mt-0.5">Libur ⛔</span>
              </li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="font-black text-yellow-400 mb-6 text-xl tracking-widest uppercase" style={{ fontFamily: 'Fredoka, Nunito, sans-serif' }}>
              🔗 Ikuti Kami
            </h3>
            <div className="space-y-4">
              <a
                href={CONTACT_INFO.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/80 hover:text-white hover:translate-x-2 transition-all text-sm group font-bold tracking-wide"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">📍</span>
                <span>Lihat di Google Maps</span>
              </a>
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/80 hover:text-white hover:translate-x-2 transition-all text-sm group font-bold tracking-wide"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">📸</span>
                <span>{CONTACT_INFO.instagramHandle}</span>
              </a>
              <a
                href={CONTACT_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/80 hover:text-white hover:translate-x-2 transition-all text-sm group font-bold tracking-wide"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">🎵</span>
                <span>{CONTACT_INFO.tiktokHandle}</span>
              </a>
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/80 hover:text-white hover:translate-x-2 transition-all text-sm group font-bold tracking-wide"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">💬</span>
                <span>WhatsApp Order</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-white/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/60 text-xs font-bold tracking-widest uppercase">
            © {currentYear} MIE MARMOYO · DARI YANG LAIN, LEBIH! 🔥
          </p>
          <div className="flex items-center gap-4 text-cream/60 text-2xl drop-shadow-sm">
            🍜 🥢 🌶️
          </div>
        </div>
      </div>
    </footer>
  );
}
