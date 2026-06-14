import { CATEGORIES } from '../data/menuData';

// ============================================================
// Component: MenuFilter
// Tab buttons to filter menu by category
// ============================================================

export default function MenuFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex justify-center mb-12 relative z-10">
      <div
        className="inline-flex flex-wrap items-center justify-center bg-white/60 backdrop-blur-md p-2 rounded-[2rem] shadow-sm border border-white gap-2"
        role="tablist"
        aria-label="Filter Kategori Menu"
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onCategoryChange(cat.id)}
              className={`relative px-5 py-2.5 md:px-6 md:py-3 rounded-[1.5rem] text-sm md:text-base font-bold transition-all duration-300 uppercase tracking-wider flex items-center gap-2.5 ${
                isActive
                  ? 'bg-primary text-white shadow-md'
                  : 'text-secondary/70 hover:text-primary hover:bg-white/80'
              }`}
              id={`tab-${cat.id}`}
            >
              <span className={`text-lg md:text-xl transition-transform duration-300 ${isActive ? 'scale-110' : 'grayscale opacity-70'}`}>
                {cat.emoji}
              </span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
