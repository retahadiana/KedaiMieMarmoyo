import { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../data/menuData';
import logoImg from '../assets/logo-horizontal.png';

// ============================================================
// Component: Navbar
// Sticky navigation
// ============================================================

export default function Navbar({ totalQty, onCartClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Beranda' },
    { href: '#menu', label: 'Menu' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b-4 border-primary/20 py-2 shadow-sm'
          : 'bg-transparent py-4'
        }`}
      aria-label="Navigasi Utama"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2" aria-label="Mie Marmoyo - Beranda">
            <img
              src={logoImg}
              alt="Logo Mie Marmoyo"
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300 drop-shadow-md"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-xl font-bold text-sm transition-all duration-200 text-secondary hover:text-primary hover:bg-primary/10 uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side: Cart + WA Button */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className={`relative p-2.5 rounded-xl font-bold transition-all duration-200 border-2 active:scale-95 ${scrolled
                  ? 'bg-primary text-white border-primary shadow-sm hover:bg-primary-600'
                  : 'bg-cream text-primary border-primary shadow-sm hover:bg-primary/10'
                }`}
              aria-label={`Keranjang belanja, ${totalQty} item`}
              id="cart-toggle-btn"
            >
              <span className="text-xl">🛒</span>
              {totalQty > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center leading-none shadow-sm border-2 border-white">
                  {totalQty > 9 ? '9+' : totalQty}
                </span>
              )}
            </button>

            {/* WA CTA */}
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 btn-primary"
            >
              💬 Order WA
            </a>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors text-primary hover:bg-primary/10 border-2 border-transparent hover:border-primary/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu mobile"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-1 rounded-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
                <span className={`block h-1 rounded-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-1 rounded-full bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream border-4 border-primary/20 shadow-soft mt-3 py-4 px-3 space-y-2 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 pattern-oriental opacity-30 pointer-events-none" />
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block relative z-10 px-4 py-3 rounded-xl text-secondary hover:text-primary hover:bg-primary/10 font-bold text-sm transition-colors uppercase tracking-widest text-center"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative z-10 w-full py-3.5 btn-primary text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              💬 Order WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
