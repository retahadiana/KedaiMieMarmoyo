import { formatPrice } from '../data/menuData';

// ============================================================
// Component: MenuCard
// Individual menu item card with real food photo & hover animation
// ============================================================

export default function MenuCard({ item, onAdd }) {
  return (
    <article
      className="menu-card group animate-fade-in-up relative overflow-hidden rounded-3xl bg-white shadow-sm border border-secondary/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(176,38,38,0.4)] hover:border-primary/30"
      aria-label={`Menu: ${item.name}`}
    >
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out -translate-x-full z-20 pointer-events-none skew-x-12" />
      
      {/* Card Image */}
      <div className="relative h-56 w-full shrink-0 overflow-hidden bg-gradient-to-br from-orange-50 to-red-50">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain p-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 ease-out"
          loading="lazy"
        />


        {/* Badges top-left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {item.isPopular && (
            <span className="badge-terlaris flex items-center gap-1 shadow-md">
              ⭐ Terlaris
            </span>
          )}
          {item.isSpicy && (
            <span className="badge-pedas flex items-center gap-1 shadow-md">
              🌶️ Pedas
            </span>
          )}
        </div>

        {/* Category tag top-right */}
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-white/90 backdrop-blur-sm text-gray-600 text-xs px-2.5 py-1 rounded-full font-semibold shadow-sm capitalize">
            {item.tags[0]?.replace('-', ' ')}
          </span>
        </div>

        {/* Price overlay bottom-right */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="bg-primary text-white font-black text-sm px-3 py-1 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
            {formatPrice(item.price)}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 relative z-10">
        <h3 className="font-bold text-gray-900 text-base leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
          {item.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2 flex-1">
          {item.description}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAdd(item)}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-[0_8px_20px_-6px_rgba(176,38,38,0.6)] transition-all duration-300 active:scale-95 group-hover:from-primary-600 group-hover:to-primary"
          aria-label={`Tambahkan ${item.name} ke keranjang`}
        >
          <span className="text-base group-hover:animate-bounce">🛒</span>
          Tambah ke Keranjang
        </button>
      </div>

      {/* Bottom accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </article>
  );
}
