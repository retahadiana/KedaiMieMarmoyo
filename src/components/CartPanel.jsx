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
      className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden flex flex-col h-full"
      aria-label="Keranjang Belanja"
    >
      {/* Panel Header */}
      <div className="gradient-hero px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🛒</span>
          <h2 className="font-black text-white text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Keranjang
          </h2>
          {totalQty > 0 && (
            <span className="bg-yellow-400 text-yellow-900 font-black text-xs px-2 py-0.5 rounded-full min-w-[22px] text-center">
              {totalQty}
            </span>
          )}
        </div>
        {!isEmpty && (
          <button
            onClick={onClear}
            className="text-white text-opacity-70 hover:text-opacity-100 text-xs font-semibold transition-opacity"
            aria-label="Kosongkan keranjang"
          >
            🗑️ Kosongkan
          </button>
        )}
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto px-4 py-3 min-h-[200px] max-h-[400px] lg:max-h-none">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-12 text-gray-400">
            <span className="text-5xl mb-3 opacity-50">🍜</span>
            <p className="font-semibold text-gray-500">Keranjang masih kosong</p>
            <p className="text-sm mt-1">Tambahkan menu favoritmu!</p>
          </div>
        ) : (
          <ul className="space-y-0" aria-label="Item dalam keranjang">
            {cartList.map(({ item, qty }) => (
              <li key={item.id} className="cart-item-row cart-item-enter">
                {/* Item info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm leading-tight truncate">
                    {item.emoji} {item.name}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {formatPrice(item.price)} / porsi
                  </p>
                </div>

                {/* Qty controls */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button
                    onClick={() => onRemove(item.id)}
                    className="qty-btn bg-red-50 text-primary hover:bg-red-100 border border-red-200"
                    aria-label={`Kurangi ${item.name}`}
                  >
                    −
                  </button>
                  <span className="cart-count w-8 text-center font-black text-gray-900 text-sm">
                    {qty}
                  </span>
                  <button
                    onClick={() => onAdd(item)}
                    className="qty-btn bg-primary text-white hover:bg-primary-800"
                    aria-label={`Tambah ${item.name}`}
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <div className="text-right flex-shrink-0 min-w-[70px]">
                  <p className="text-primary font-bold text-sm">
                    {formatPrice(item.price * qty)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Total & Checkout */}
      <div className="border-t border-orange-100 px-4 py-4 bg-orange-50 space-y-4">
        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-semibold">Total Pesanan</span>
          <span className="text-primary font-black text-xl">
            {formatPrice(totalPrice)}
          </span>
        </div>

        {/* Checkout Button */}
        <button
          onClick={handleCheckout}
          disabled={isEmpty}
          className={`w-full py-3.5 rounded-xl font-black text-base flex items-center justify-center gap-2 transition-all duration-200 ${
            isEmpty
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-green-500 text-white hover:bg-green-600 active:scale-95 hover:shadow-lg'
          }`}
          aria-label="Kirim pesanan ke WhatsApp"
        >
          <span className="text-xl">💬</span>
          <span>Kirim Pesanan ke WhatsApp</span>
        </button>

        {/* Helper text */}
        {!isEmpty && (
          <p className="text-center text-xs text-gray-400">
            Pesananmu akan dikirim otomatis ke WhatsApp Mie Marmoyo
          </p>
        )}
      </div>
    </aside>
  );
}
