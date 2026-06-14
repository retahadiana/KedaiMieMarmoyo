import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ContactSection from './components/ContactSection';
import MenuGrid from './components/MenuGrid';
import CartPanel from './components/CartPanel';
import Footer from './components/Footer';
import { useCart } from './hooks/useCart';
import './index.css';

// ============================================================
// App — Root component
// Clean Architecture: orchestrates all sections & cart state
// ============================================================

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const {
    cartList,
    totalQty,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
    buildWhatsAppMessage,
  } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    // Auto-open cart on first add
    if (cartList.length === 0) {
      setCartOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-cream pattern-oriental p-1 sm:p-2 md:p-4">
      <div className="bg-cream oriental-border shadow-2xl flex flex-col min-h-[calc(100vh-8px)] sm:min-h-[calc(100vh-16px)] md:min-h-[calc(100vh-32px)]">
        {/* ── Sticky Navbar ─────────────────────────────────── */}
        <Navbar totalQty={totalQty} onCartClick={() => setCartOpen((prev) => !prev)} />

        {/* ── Hero Banner ───────────────────────────────────── */}
        <HeroBanner />

        {/* ── Contact Info ──────────────────────────────────── */}
        <ContactSection />

        {/* ── Menu Section ──────────────────────────────────── */}
        <section
          id="menu"
          className="pt-4 pb-16 md:pt-8 md:pb-24 px-4 md:px-8 relative"
          aria-labelledby="menu-heading"
        >
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-12 md:mb-16 relative">
              {/* Background Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none overflow-hidden">
                <span className="text-[6rem] sm:text-[10rem] md:text-[14rem] tracking-tight leading-none font-black text-secondary whitespace-nowrap">MARMOYO</span>
              </div>
              
              <div className="relative z-10 text-center w-full">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-0.5 w-12 md:w-24 bg-primary/20 rounded-full"></div>
                  <span className="text-primary font-black text-sm tracking-[0.3em] uppercase">
                    Pilihan Spesial
                  </span>
                  <div className="h-0.5 w-12 md:w-24 bg-primary/20 rounded-full"></div>
                </div>
                <h2
                  id="menu-heading"
                  className="text-5xl md:text-7xl font-black text-secondary mb-6 uppercase tracking-tight"
                  style={{ fontFamily: 'Fredoka, Nunito, sans-serif' }}
                >
                  Daftar <span className="text-primary">Menu</span>
                </h2>
                <p className="text-secondary/60 max-w-xl mx-auto text-lg md:text-xl font-medium">
                  Eksplorasi hidangan khas kami, tambahkan ke keranjang, dan pesan langsung tanpa ribet via WhatsApp. 🔥
                </p>
              </div>
            </div>

            {/* ── Menu Grid ──────────────────────────────────── */}
            <div className="w-full">
              <MenuGrid onAddToCart={handleAddToCart} />
            </div>
          </div>
        </section>

        {/* ── Cart Pop-up Overlay ────────────────────────────── */}
        {cartOpen && (
          <div
            className="fixed inset-0 z-50 bg-secondary/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setCartOpen(false)}
            aria-label="Tutup keranjang"
          >
            <div
              className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-transparent animate-fade-in-up"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-full p-4 md:p-6 flex flex-col">
                <div className="flex-1">
                  <CartPanel
                    cartList={cartList}
                    totalQty={totalQty}
                    totalPrice={totalPrice}
                    onAdd={addToCart}
                    onRemove={removeFromCart}
                    onClear={clearCart}
                    buildWhatsAppMessage={buildWhatsAppMessage}
                  />
                </div>
                <button
                  className="mt-4 w-full py-4 rounded-xl bg-white text-primary font-black shadow-xl border-2 border-primary/20 active:scale-95 transition-all hover:bg-red-50 uppercase tracking-widest"
                  onClick={() => setCartOpen(false)}
                >
                  ✕ Tutup Keranjang
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Floating Cart Button ──────────────────── */}
        {totalQty > 0 && (
          <button
            onClick={() => setCartOpen(true)}
            className="group fixed bottom-6 right-6 z-30 bg-primary text-white rounded-full px-6 py-4 shadow-[0_10px_40px_-10px_rgba(176,38,38,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(176,38,38,0.8)] hover:-translate-y-2 flex items-center gap-3 font-bold hover:bg-primary-600 active:scale-95 transition-all duration-300 animate-fade-in-up border-2 border-white"
            aria-label={`Buka keranjang, ${totalQty} item`}
            id="mobile-cart-fab"
          >
            <span className="text-xl relative inline-block group-hover:rotate-12 transition-transform duration-300">
              🛒
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center leading-none border-2 border-white group-hover:animate-pulse">
                {totalQty}
              </span>
            </span>
            <span className="bg-yellow-400 text-yellow-900 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider group-hover:bg-white group-hover:text-primary transition-colors duration-300">
              Checkout
            </span>
          </button>
        )}

        {/* ── Footer ────────────────────────────────────────── */}
        <Footer />
      </div>
    </div>
  );
}
