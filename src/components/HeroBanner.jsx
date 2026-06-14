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
      className="relative min-h-[75vh] flex items-center overflow-hidden border-b-4 border-primary/20"
      aria-label="Hero Banner Mie Marmoyo"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-16 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          
          {/* Left Column: Text Content */}
          <div className="max-w-2xl mx-auto md:mx-0 flex flex-col items-center md:items-start flex-1">
            {/* Open/Close Status Badge */}
            <div className="mb-6 animate-fade-in-up stagger-1">
              {status.isOpen ? (
                <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-900 border-2 border-yellow-400 px-5 py-2 rounded-full font-bold shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500" />
                  </span>
                  <span className="text-sm md:text-base">BUKA SEKARANG — {OPERATIONAL_HOURS.open}.00 – {OPERATIONAL_HOURS.close}.00 WIB</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 bg-cream text-primary border-2 border-primary px-5 py-2 rounded-full font-bold shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                  </span>
                  <span className="text-sm md:text-base">
                    {status.isClosed
                      ? `TUTUP — Senin Libur`
                      : `TUTUP — Buka jam ${OPERATIONAL_HOURS.open}.00 WIB`}
                  </span>
                </div>
              )}
            </div>

            {/* Headline */}
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-black text-secondary leading-[1.1] tracking-wide mb-4 animate-fade-in-up stagger-2 text-shadow-solid uppercase"
              style={{ fontFamily: 'Fredoka, Nunito, sans-serif' }}
            >
              MIE <br />
              <span className="text-primary">MARMOYO</span>
            </h1>

            {/* Slogan */}
            <p className="text-xl md:text-2xl text-secondary font-bold mb-3 animate-fade-in-up stagger-3 uppercase tracking-widest">
              Dari yang lain, <span className="text-primary">LEBIH!</span>
            </p>
            <p className="text-base md:text-lg text-secondary/80 max-w-lg mb-10 leading-relaxed animate-fade-in-up stagger-4 font-medium">
              Nikmati mie dengan cita rasa khas Marmoyo — perpaduan bumbu rahasia yang bikin ketagihan sejak pertama suap. 🔥
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in-up stagger-5">
              <a
                href="#menu"
                className="btn-primary"
              >
                🍜 Lihat Menu
              </a>
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                💬 Order via WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Large Logo Graphic */}
          <div className="hidden md:flex flex-1 justify-center items-center animate-fade-in-up stagger-6">
            <img
              src={logoImg}
              alt="Logo Mie Marmoyo"
              className="w-full max-w-[280px] lg:max-w-sm object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
