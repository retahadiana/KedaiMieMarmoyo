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
    <div className="min-h-screen bg-orange-50">
      {/* ── Sticky Navbar ─────────────────────────────────── */}
      <Navbar totalQty={totalQty} onCartClick={() => setCartOpen((prev) => !prev)} />

      {/* ── Hero Banner ───────────────────────────────────── */}
      <HeroBanner />

      {/* ── Contact Info ──────────────────────────────────── */}
      <ContactSection />

      {/* ── Menu Section ──────────────────────────────────── */}
      <section
        id="menu"
        className="py-16 px-4 md:px-8 bg-orange-50"
        aria-labelledby="menu-heading"
      >
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-primary text-white font-bold text-sm px-4 py-1.5 rounded-full mb-4">
              🍜 Daftar Menu
            </span>
            <h2
              id="menu-heading"
              className="text-3xl md:text-5xl font-black text-gray-900 mb-3"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Menu <span className="text-primary">Pilihan</span> Kami
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Pilih menu favoritmu, tambahkan ke keranjang, dan langsung order via WhatsApp! 🔥
            </p>
          </div>

          {/* ── Two-column layout: Menu + Cart ─────────────── */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Menu Grid — takes majority of space */}
            <div className="flex-1 min-w-0">
              <MenuGrid onAddToCart={handleAddToCart} />
            </div>

            {/* Cart Panel — sticky sidebar on desktop */}
            <div className={`
              w-full lg:w-80 xl:w-96 flex-shrink-0
              transition-all duration-300
              lg:sticky lg:top-20
              ${cartOpen
                ? 'block'
                : 'hidden lg:block'
              }
            `}>
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
          </div>
        </div>
      </section>

      {/* ── Mobile Cart Overlay ────────────────────────────── */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setCartOpen(false)}
          aria-label="Tutup keranjang"
        >
          <div
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full pt-16 p-4 flex flex-col">
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
                className="mt-3 w-full py-3 rounded-xl bg-gray-800 bg-opacity-80 text-white font-semibold"
                onClick={() => setCartOpen(false)}
              >
                ✕ Tutup Keranjang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Floating Cart Button (mobile) ──────────────────── */}
      {totalQty > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 z-30 lg:hidden bg-primary text-white rounded-2xl px-5 py-3.5 shadow-2xl flex items-center gap-2 font-bold hover:bg-primary-800 active:scale-95 transition-all duration-200 animate-fade-in"
          aria-label={`Buka keranjang, ${totalQty} item`}
          id="mobile-cart-fab"
        >
          <span className="text-xl">🛒</span>
          <span>{totalQty} item</span>
          <span className="bg-yellow-400 text-yellow-900 font-black text-xs px-2 py-0.5 rounded-full">
            Checkout
          </span>
        </button>
      )}

      {/* ── Footer ────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
