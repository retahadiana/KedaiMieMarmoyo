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
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      aria-label="Hero Banner Mie Marmoyo"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero pattern-batik" />

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white opacity-5" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-orange-300 opacity-10" />
      <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-yellow-300 opacity-5 animate-pulse-slow" />

      {/* Decorative noodle emoji floating */}
      <div className="absolute top-16 right-8 text-6xl opacity-20 animate-float hidden md:block select-none">🍜</div>
      <div className="absolute bottom-24 right-24 text-5xl opacity-15 animate-float hidden lg:block select-none" style={{ animationDelay: '1s' }}>🌶️</div>
      <div className="absolute top-1/2 right-12 text-4xl opacity-10 animate-float hidden xl:block select-none" style={{ animationDelay: '0.5s' }}>🥢</div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-3xl">
          {/* Logo */}
          <div className="mb-6 animate-fade-in-up stagger-1">
            <img
              src={logoImg}
              alt="Logo Mie Marmoyo"
              className="h-20 md:h-28 object-contain drop-shadow-2xl"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>

          {/* Open/Close Status Badge */}
          <div className="mb-6 animate-fade-in-up stagger-2">
            {status.isOpen ? (
              <div className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full font-bold shadow-lg">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-100" />
                </span>
                <span className="text-sm md:text-base">BUKA SEKARANG — {OPERATIONAL_HOURS.open}.00 – {OPERATIONAL_HOURS.close}.00 WIB</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 bg-gray-700 bg-opacity-80 text-white px-5 py-2.5 rounded-full font-bold shadow-lg">
                <span className="relative flex h-3 w-3">
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400" />
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
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-4 text-shadow-lg animate-fade-in-up stagger-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            MIE<br />
            <span className="text-yellow-300">MARMOYO</span>
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-orange-100 font-medium mb-2 text-shadow animate-fade-in-up stagger-4">
            Dari yang lain, <span className="text-yellow-300 font-black">LEBIH!</span>
          </p>
          <p className="text-base md:text-lg text-orange-200 max-w-lg mb-10 animate-fade-in-up stagger-5">
            Nikmati mie dengan cita rasa khas Marmoyo — perpaduan bumbu rahasia yang bikin ketagihan sejak pertama suap 🔥
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-6">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-black py-3.5 px-8 rounded-xl text-base shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl active:scale-95"
            >
              🍜 Lihat Menu
            </a>
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white bg-opacity-15 hover:bg-opacity-25 backdrop-blur-sm text-white font-bold py-3.5 px-8 rounded-xl text-base border border-white border-opacity-30 transition-all duration-200 hover:-translate-y-1 active:scale-95"
            >
              💬 Order via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="#FFF7ED"
          />
        </svg>
      </div>
    </section>
  );
}
