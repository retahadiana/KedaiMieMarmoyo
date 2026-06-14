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
          className="py-16 md:py-24 px-4 md:px-8 relative"
          aria-labelledby="menu-heading"
        >
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block bg-primary text-white font-bold text-sm px-6 py-2 rounded-full mb-6 shadow-sm tracking-widest uppercase">
                🍜 Daftar Menu
              </span>
              <h2
                id="menu-heading"
                className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-wide drop-shadow-sm uppercase"
                style={{ fontFamily: 'Fredoka, Nunito, sans-serif' }}
              >
                MIE MARMOYO
              </h2>
              <p className="text-secondary max-w-lg mx-auto text-lg font-medium">
                Pilih menu favoritmu, tambahkan ke keranjang, dan langsung order via WhatsApp! 🔥
              </p>
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
            className="fixed bottom-6 right-6 z-30 bg-primary text-white rounded-full px-6 py-4 shadow-[0_10px_40px_-10px_rgba(176,38,38,0.6)] flex items-center gap-3 font-bold hover:bg-primary-600 active:scale-95 transition-all duration-200 animate-fade-in-up border-2 border-white"
            aria-label={`Buka keranjang, ${totalQty} item`}
            id="mobile-cart-fab"
          >
            <span className="text-xl relative">
              🛒
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center leading-none border-2 border-white">
                {totalQty}
              </span>
            </span>
            <span className="bg-yellow-400 text-yellow-900 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
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
