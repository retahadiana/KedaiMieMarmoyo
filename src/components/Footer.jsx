import { CONTACT_INFO } from '../data/menuData';
import logoImg from '../assets/logo.png';

// ============================================================
// Component: Footer
// ============================================================

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="gradient-hero pattern-batik text-white"
      aria-label="Footer Mie Marmoyo"
    >
      {/* Top wave */}
      <div className="-mt-1">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full rotate-180">
          <path
            d="M0,20 C240,40 480,0 720,20 C960,40 1200,0 1440,20 L1440,40 L0,40 Z"
            fill="#FFF7ED"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src={logoImg}
              alt="Logo Mie Marmoyo"
              className="h-16 object-contain mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-orange-200 text-sm leading-relaxed max-w-xs">
              Kedai mie dengan cita rasa khas yang menggugah selera. Dari yang lain, LEBIH!
            </p>
          </div>

          {/* Jam Operasional */}
          <div>
            <h3 className="font-bold text-yellow-300 mb-4 text-base">⏰ Jam Buka</h3>
            <ul className="space-y-2 text-sm text-orange-200">
              <li className="flex justify-between gap-4">
                <span>Selasa – Minggu</span>
                <span className="font-semibold text-white">10.00 – 21.00 WIB</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Senin</span>
                <span className="font-semibold text-red-300">Libur ⛔</span>
              </li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="font-bold text-yellow-300 mb-4 text-base">🔗 Ikuti Kami</h3>
            <div className="space-y-3">
              <a
                href={CONTACT_INFO.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-orange-200 hover:text-white transition-colors text-sm group"
              >
                <span className="text-xl">📍</span>
                <span className="group-hover:underline">Lihat di Google Maps</span>
              </a>
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-orange-200 hover:text-white transition-colors text-sm group"
              >
                <span className="text-xl">📸</span>
                <span className="group-hover:underline">{CONTACT_INFO.instagramHandle}</span>
              </a>
              <a
                href={CONTACT_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-orange-200 hover:text-white transition-colors text-sm group"
              >
                <span className="text-xl">🎵</span>
                <span className="group-hover:underline">{CONTACT_INFO.tiktokHandle}</span>
              </a>
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-orange-200 hover:text-white transition-colors text-sm group"
              >
                <span className="text-xl">💬</span>
                <span className="group-hover:underline">WhatsApp Order</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-10 mt-10 pt-6 text-center">
          <p className="text-orange-300 text-sm">
            © {currentYear} Mie Marmoyo · Dari yang lain, LEBIH! 🔥
          </p>
        </div>
      </div>
    </footer>
  );
}
