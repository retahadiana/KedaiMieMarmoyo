import { CONTACT_INFO } from '../data/menuData';
import whatsappLogo from '../assets/whatsapp.png';
import instagramLogo from '../assets/instagram.png';
import tiktokLogo from '../assets/tiktok.png';
import mapsLogo from '../assets/maps.png';

// ============================================================
// Component: ContactSection
// Shows store contact info: Google Maps, Instagram, TikTok
// ============================================================

const contactLinks = [
  {
    id: 'whatsapp',
    label: 'Order WA',
    sublabel: 'Pesan Langsung',
    href: CONTACT_INFO.whatsappLink,
    logo: whatsappLogo,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    sublabel: CONTACT_INFO.instagramHandle,
    href: CONTACT_INFO.instagram,
    logo: instagramLogo,
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    sublabel: CONTACT_INFO.tiktokHandle,
    href: CONTACT_INFO.tiktok,
    logo: tiktokLogo,
  },
  {
    id: 'maps',
    label: 'Lokasi',
    sublabel: 'Buka Google Maps',
    href: CONTACT_INFO.googleMaps,
    logo: mapsLogo,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="pt-24 pb-12 md:pt-32 md:pb-16 px-4 md:px-8 relative overflow-hidden"
      aria-label="Informasi Kontak Mie Marmoyo"
    >
      <div className="absolute inset-0 pattern-oriental opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Title & Hours */}
          <div className="lg:w-5/12 flex flex-col justify-between">
            <div className="sticky top-32">
              <span className="inline-block text-primary font-black text-sm tracking-[0.3em] uppercase mb-6">
                Hubungi Kami
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-secondary uppercase leading-[1.1]" style={{ fontFamily: 'Fredoka, Nunito, sans-serif' }}>
                Tetap<br />
                <span className="text-primary relative inline-block mt-2">
                  Terhubung
                  <span className="absolute -bottom-2 left-0 w-1/2 h-2 bg-yellow-400 -z-10 rounded-full"></span>
                </span>
              </h2>
              <p className="text-secondary/70 mt-8 max-w-sm text-lg leading-relaxed font-medium">
                Kunjungi kedai kami, ikuti update terbaru di sosial media, atau langsung pesan menu favoritmu sekarang tanpa ribet.
              </p>

              {/* Minimalist Hours */}
              <div className="mt-16 bg-white/50 backdrop-blur-sm border border-secondary/10 p-8 rounded-3xl">
                <h3 className="text-xs font-black text-secondary tracking-[0.2em] uppercase mb-6 opacity-60">Jam Operasional</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-secondary/10 pb-3">
                    <span className="font-bold text-secondary text-lg">Selasa – Minggu</span>
                    <span className="font-black text-primary text-lg">10:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between items-end pb-1 pt-2">
                    <span className="font-bold text-secondary text-lg">Senin</span>
                    <span className="font-black text-red-600 bg-red-50 px-3 py-1 rounded-md uppercase tracking-widest text-xs">Tutup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Huge Typographic Links */}
          <div className="lg:w-7/12 flex flex-col justify-center">
            <div className="border-t-2 border-secondary/10"></div>
            {contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b-2 border-secondary/10 py-10 md:py-12 transition-all duration-500 hover:border-primary relative overflow-hidden"
              >
                {/* Background hover reveal */}
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                
                <div className="flex items-center justify-between relative z-10 px-4 md:px-6">
                  <div className="flex items-center gap-6 md:gap-10">
                    <img
                      src={link.logo}
                      alt={link.label}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-xl grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 transform"
                    />
                    <div>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary group-hover:text-primary transition-colors duration-500 uppercase tracking-tight">
                        {link.label}
                      </h3>
                      <p className="mt-3 text-secondary/50 font-bold tracking-[0.2em] uppercase text-xs md:text-sm group-hover:text-primary/70 transition-colors duration-500">
                        {link.sublabel}
                      </p>
                    </div>
                  </div>
                  
                  {/* Arrow Button */}
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-lg">
                    <svg className="w-6 h-6 md:w-8 md:h-8 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
