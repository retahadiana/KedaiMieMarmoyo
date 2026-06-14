import { CONTACT_INFO } from '../data/menuData';
import logoImg from '../assets/logo.png';

// ============================================================
// Component: Footer
// ============================================================

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-primary text-cream relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16"
      aria-label="Footer Mie Marmoyo"
    >
      {/* Background Watermark Logo */}
      <div className="absolute -left-32 -bottom-32 w-[500px] h-[500px] md:w-[800px] md:h-[800px] opacity-[0.04] pointer-events-none">
        <img src={logoImg} alt="" className="w-full h-full object-contain filter invert" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-20 md:mb-32">
          
          {/* Brand & Intro (Left) */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]" style={{ fontFamily: 'Fredoka, Nunito, sans-serif' }}>
              MIE<br/>MARMOYO
            </h2>
            <p className="text-cream/80 text-lg md:text-xl leading-relaxed max-w-sm font-medium pr-8">
              Menyajikan cita rasa khas yang menggugah selera. Dari yang lain, <span className="text-yellow-400 font-black">LEBIH!</span>
            </p>
            
            <a href={CONTACT_INFO.whatsappLink} className="mt-10 inline-flex items-center gap-4 text-white font-black uppercase tracking-widest group w-max transition-all">
              <span className="border-b-2 border-transparent group-hover:border-yellow-400 group-hover:text-yellow-400 transition-colors pb-1">Pesan Sekarang</span>
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-yellow-400 group-hover:border-yellow-400 group-hover:text-primary transition-all group-hover:scale-110">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </a>
          </div>

          {/* Jam Operasional (Middle) */}
          <div className="lg:col-span-4 lg:pl-8">
            <h3 className="font-black text-yellow-400 mb-8 text-xs tracking-[0.3em] uppercase">
              Jam Operasional
            </h3>
            <div className="space-y-6 text-cream font-medium">
              <div className="flex flex-col border-b border-white/10 pb-5">
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase mb-2">Selasa – Minggu</span>
                <span className="font-black text-3xl md:text-4xl text-white tracking-tight">10:00 - 21:00 <span className="text-sm font-bold text-white/40 tracking-normal">WIB</span></span>
              </div>
              <div className="flex flex-col pb-2">
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase mb-2">Senin</span>
                <span className="font-black text-2xl text-red-300 uppercase tracking-widest bg-red-900/30 w-max px-3 py-1 rounded-md">Tutup</span>
              </div>
            </div>
          </div>

          {/* Sosial Media (Right) */}
          <div className="lg:col-span-3">
            <h3 className="font-black text-yellow-400 mb-8 text-xs tracking-[0.3em] uppercase">
              Terhubung
            </h3>
            <ul className="space-y-2 flex flex-col">
              {[
                { label: 'Google Maps', href: CONTACT_INFO.googleMaps },
                { label: 'Instagram', href: CONTACT_INFO.instagram },
                { label: 'TikTok', href: CONTACT_INFO.tiktok },
                { label: 'WhatsApp', href: CONTACT_INFO.whatsappLink },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-cream/70 hover:text-white transition-all text-lg md:text-xl font-bold group border-b border-white/10 pb-4 hover:border-white/40 pt-2"
                  >
                    <span className="group-hover:translate-x-3 transition-transform duration-300">{link.label}</span>
                    <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-yellow-400">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/20 pt-8 md:pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-cream/40 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-center md:text-left">
            © {currentYear} MIE MARMOYO. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
             <span className="text-cream/30 text-[10px] md:text-xs tracking-[0.4em] uppercase font-black">Dari yang lain, Lebih!</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
