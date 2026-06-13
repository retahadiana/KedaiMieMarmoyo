import { formatPrice } from '../data/menuData';

// ============================================================
// Component: MenuCard
// Individual menu item card with hover animation
// ============================================================

export default function MenuCard({ item, onAdd }) {
  const hasInCart = false; // visual only, cart state lives in parent

  return (
    <article
      className="menu-card group animate-fade-in-up"
      aria-label={`Menu: ${item.name}`}
    >
      {/* Card Header / Emoji Display */}
      <div className="relative h-32 bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center overflow-hidden">
        {/* Large emoji background */}
        <span
          className="text-7xl opacity-90 group-hover:scale-110 transition-transform duration-300 select-none"
          role="img"
          aria-hidden="true"
        >
          {item.emoji}
        </span>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {item.isPopular && (
            <span className="badge-terlaris flex items-center gap-1">
              ⭐ Terlaris
            </span>
          )}
          {item.isSpicy && (
            <span className="badge-pedas flex items-center gap-1">
              🌶️ Pedas
            </span>
          )}
        </div>

        {/* Category chip top-right */}
        <div className="absolute top-3 right-3">
          <span className="bg-white bg-opacity-90 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium capitalize shadow-sm">
            {item.tags[0]?.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-base leading-tight mb-1">
          {item.name}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Price + Add Button */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-xs text-gray-400 font-medium">Harga</p>
            <p className="text-primary font-black text-lg leading-tight">
              {formatPrice(item.price)}
            </p>
          </div>
          <button
            onClick={() => onAdd(item)}
            className="w-10 h-10 rounded-xl bg-primary text-white font-black text-xl flex items-center justify-center hover:bg-primary-800 hover:shadow-glow-red transition-all duration-200 active:scale-90 flex-shrink-0"
            aria-label={`Tambahkan ${item.name} ke keranjang`}
          >
            +
          </button>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </article>
  );
}
