import { CONTACT_INFO, formatPrice } from '../data/menuData';

// ============================================================
// Component: CartPanel
// Live shopping cart with add/remove, total, and WhatsApp checkout
// ============================================================

export default function CartPanel({
  cartList,
  totalQty,
  totalPrice,
  onAdd,
  onRemove,
  onClear,
  buildWhatsAppMessage,
}) {
  const isEmpty = cartList.length === 0;

  const handleCheckout = () => {
    if (isEmpty) return;
    const message = buildWhatsAppMessage();
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside
      className="bg-cream rounded-3xl shadow-soft border-[4px] border-primary/20 overflow-hidden flex flex-col h-full relative"
      aria-label="Keranjang Belanja"
    >
      <div className="absolute inset-0 pattern-oriental opacity-30 pointer-events-none" />
      
      {/* Panel Header */}
      <div className="bg-primary px-6 py-5 flex items-center justify-between relative z-10 border-b-[4px] border-primary-800/50">
        <div className="flex items-center gap-3">
          <span className="text-2xl drop-shadow-sm">🛒</span>
          <h2 className="font-black text-white text-xl tracking-widest uppercase" style={{ fontFamily: 'Fredoka, Nunito, sans-serif' }}>
            Pesanan
          </h2>
          {totalQty > 0 && (
            <span className="bg-yellow-400 text-yellow-900 font-black text-xs px-2.5 py-1 rounded-full min-w-[24px] text-center shadow-sm border border-yellow-200">
              {totalQty}
            </span>
          )}
        </div>
        {!isEmpty && (
          <button
            onClick={onClear}
            className="text-white/80 hover:text-white text-xs font-bold transition-colors uppercase tracking-wider bg-black/20 hover:bg-black/30 px-3 py-1.5 rounded-lg border border-transparent hover:border-white/20"
            aria-label="Kosongkan keranjang"
          >
            Kosongkan
          </button>
        )}
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto px-5 py-4 min-h-[250px] max-h-[400px] lg:max-h-[500px] relative z-10 bg-cream/90 backdrop-blur-sm">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-16">
            <span className="text-6xl mb-4 opacity-40">🍜</span>
            <p className="font-bold text-secondary text-lg uppercase tracking-wide">Keranjang Kosong</p>
            <p className="text-sm text-secondary/70 mt-1 font-medium">Tambahkan menu pilihanmu!</p>
          </div>
        ) : (
          <ul className="space-y-2" aria-label="Item dalam keranjang">
            {cartList.map(({ item, qty }) => (
              <li key={item.id} className="cart-item-row cart-item-enter py-4 border-b-2 border-primary/10 last:border-0">
                {/* Item info */}
                <div className="flex-1 min-w-0 pr-2">
                  <p className="font-bold text-secondary text-sm leading-tight truncate mb-0.5 uppercase tracking-wide">
                    {item.emoji} {item.name}
                  </p>
                  <p className="text-secondary/60 text-[11px] uppercase tracking-wider font-bold">
                    {formatPrice(item.price)}
                  </p>
                </div>

                {/* Qty controls */}
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    onClick={() => onRemove(item.id)}
                    className="qty-btn"
                    aria-label={`Kurangi ${item.name}`}
                  >
                    −
                  </button>
                  <span className="cart-count w-8 text-center font-black text-secondary text-sm">
                    {qty}
                  </span>
                  <button
                    onClick={() => onAdd(item)}
                    className="qty-btn"
                    aria-label={`Tambah ${item.name}`}
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <div className="text-right flex-shrink-0 min-w-[75px]">
                  <p className="text-primary font-black text-sm">
                    {formatPrice(item.price * qty)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Total & Checkout */}
      <div className="border-t-[4px] border-primary/20 px-6 py-5 bg-cream relative z-10 space-y-5">
        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">Total Pesanan</span>
          <span className="text-primary font-black text-2xl">
            {formatPrice(totalPrice)}
          </span>
        </div>

        {/* Checkout Button */}
        <button
          onClick={handleCheckout}
          disabled={isEmpty}
          className={`w-full py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-sm border-2 ${
            isEmpty
              ? 'bg-cream-dark/50 text-secondary/40 border-secondary/10 cursor-not-allowed'
              : 'bg-primary text-white border-primary hover:bg-primary-600 active:scale-95 hover:shadow-lg hover:shadow-primary/30'
          }`}
          aria-label="Kirim pesanan ke WhatsApp"
        >
          <span className="text-xl">💬</span>
          <span className="uppercase tracking-wider">Order via WhatsApp</span>
        </button>

        {/* Helper text */}
        {!isEmpty && (
          <p className="text-center text-[10px] text-secondary/60 font-bold uppercase tracking-widest">
            Pesanan dikirim ke WhatsApp Mie Marmoyo
          </p>
        )}
      </div>
    </aside>
  );
}
