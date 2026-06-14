import { useState, useEffect } from 'react';
import { OPERATIONAL_HOURS, CONTACT_INFO } from '../data/menuData';
import logoImg from '../assets/logo.png';

// ============================================================
// Component: HeroBanner
// Displays the main hero section with real-time open/close status
// ============================================================

function getStoreStatus() {
  // Get Jakarta time (WIB = UTC+7)
  const now = new Date();
  const jakartaOffset = 7 * 60; // minutes
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
  const jakartaTime = new Date(utcMs + jakartaOffset * 60000);

  const dayOfWeek = jakartaTime.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  const hour = jakartaTime.getHours();

  const isClosed = dayOfWeek === OPERATIONAL_HOURS.closedDay;
  const isWithinHours =
    hour >= OPERATIONAL_HOURS.open && hour < OPERATIONAL_HOURS.close;

  return {
    isOpen: !isClosed && isWithinHours,
    isClosed,
    currentHour: hour,
    dayName: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'][dayOfWeek],
  };
}

export default function HeroBanner() {
  const [status, setStatus] = useState(getStoreStatus());

  useEffect(() => {
    // Update every minute
    const interval = setInterval(() => {
      setStatus(getStoreStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center overflow-hidden border-b-2 border-secondary/10"
      aria-label="Hero Banner Mie Marmoyo"
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-full bg-gradient-to-l from-red-50 to-transparent opacity-50 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center relative">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-7/12 relative z-20">
            {/* Open/Close Status Badge */}
            <div className="mb-10 animate-fade-in-up stagger-1">
              {status.isOpen ? (
                <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-secondary/10 px-5 py-2.5 rounded-full font-bold shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                  <span className="text-xs md:text-sm tracking-widest uppercase text-secondary">
                    Buka — {OPERATIONAL_HOURS.open}.00 – {OPERATIONAL_HOURS.close}.00 WIB
                  </span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-secondary/10 px-5 py-2.5 rounded-full font-bold shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                  </span>
                  <span className="text-xs md:text-sm tracking-widest uppercase text-secondary">
                    {status.isClosed
                      ? `TUTUP — Senin Libur`
                      : `TUTUP — Buka jam ${OPERATIONAL_HOURS.open}.00 WIB`}
                  </span>
                </div>
              )}
            </div>

            {/* Eyebrow Slogan */}
            <div className="flex items-center gap-4 mb-6 animate-fade-in-up stagger-2">
               <div className="h-px w-12 md:w-20 bg-primary/40"></div>
               <span className="text-primary font-black tracking-[0.4em] uppercase text-xs md:text-sm">
                 Dari yang lain, Lebih!
               </span>
            </div>

            {/* Headline */}
            <h1
              className="text-[3.25rem] min-[400px]:text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[10rem] font-black text-secondary leading-[0.85] tracking-tighter mb-8 animate-fade-in-up stagger-3 uppercase relative"
              style={{ fontFamily: 'Fredoka, Nunito, sans-serif' }}
            >
              MIE<br />
              <span className="text-primary relative inline-block">
                MARMOYO
                {/* Decorative Swoosh */}
                <svg className="absolute w-full h-4 md:h-6 -bottom-3 md:-bottom-4 left-0 text-yellow-400 opacity-80" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentColor">
                   <path d="M0,50 Q50,100 100,50 Q50,0 0,50 Z"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-secondary/70 max-w-xl mb-12 leading-relaxed animate-fade-in-up stagger-4 font-medium pl-1 border-l-4 border-primary/20">
              Menyajikan cita rasa otentik yang memanjakan lidah. Perpaduan bumbu rahasia yang bikin ketagihan sejak suapan pertama.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-6 animate-fade-in-up stagger-5">
              <a
                href="#menu"
                className="bg-primary text-white font-black uppercase tracking-widest px-8 py-4 rounded-2xl shadow-[0_8px_30px_rgb(176,38,38,0.3)] hover:shadow-[0_8px_30px_rgb(176,38,38,0.5)] hover:-translate-y-1 hover:bg-primary-600 transition-all duration-300 flex items-center gap-3"
              >
                <span>Lihat Menu</span>
                <span className="text-xl">↓</span>
              </a>
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-secondary font-black uppercase tracking-widest px-8 py-4 rounded-2xl shadow-sm border border-secondary/10 hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-3"
              >
                <span>Order WhatsApp</span>
                <span className="text-xl">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Massive Absolute Graphic */}
          <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-[700px] xl:w-[900px] pointer-events-none z-0 animate-fade-in-up stagger-6">
            {/* Oriental Sun Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] xl:w-[700px] xl:h-[700px] bg-red-600 rounded-full blur-[100px] opacity-[0.08]"></div>
            
            <img
              src={logoImg}
              alt="Logo Mie Marmoyo"
              className="w-full h-full object-contain relative z-10 opacity-[0.35] drop-shadow-2xl mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
