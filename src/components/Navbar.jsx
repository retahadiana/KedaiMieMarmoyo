import { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../data/menuData';
import logoImg from '../assets/logo.png';

// ============================================================
// Component: Navbar
// Sticky navigation with scroll effect and cart badge
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg border-b border-orange-100'
          : 'bg-transparent'
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
              className="h-10 object-contain transition-all duration-300"
              style={{
                filter: scrolled ? 'none' : 'brightness(0) invert(1)',
              }}
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  scrolled
                    ? 'text-gray-700 hover:text-primary hover:bg-orange-50'
                    : 'text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10'
                }`}
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
              className={`relative p-2.5 rounded-xl font-semibold transition-all duration-200 ${
                scrolled
                  ? 'bg-orange-50 text-primary hover:bg-orange-100'
                  : 'bg-white bg-opacity-15 text-white hover:bg-opacity-25'
              }`}
              aria-label={`Keranjang belanja, ${totalQty} item`}
              id="cart-toggle-btn"
            >
              <span className="text-lg">🛒</span>
              {totalQty > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 text-xs font-black w-5 h-5 rounded-full flex items-center justify-center leading-none">
                  {totalQty > 9 ? '9+' : totalQty}
                </span>
              )}
            </button>

            {/* WA CTA */}
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-primary text-white font-bold text-sm py-2 px-4 rounded-xl hover:bg-primary-800 transition-all duration-200 hover:shadow-glow-red active:scale-95"
            >
              💬 Order WA
            </a>

            {/* Mobile menu toggle */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu mobile"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-orange-100 py-3 px-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-gray-700 hover:text-primary hover:bg-orange-50 font-semibold text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 rounded-lg bg-primary text-white font-bold text-sm text-center mt-2"
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
