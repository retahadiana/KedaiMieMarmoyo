import { CATEGORIES } from '../data/menuData';

// ============================================================
// Component: MenuFilter
// Tab buttons to filter menu by category
// ============================================================

export default function MenuFilter({ activeCategory, onCategoryChange }) {
  return (
    <div
      className="flex flex-wrap gap-2 justify-center mb-8"
      role="tablist"
      aria-label="Filter Kategori Menu"
    >
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          role="tab"
          aria-selected={activeCategory === cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`filter-tab ${
            activeCategory === cat.id ? 'active' : 'inactive'
          }`}
          id={`tab-${cat.id}`}
        >
          <span className="mr-1.5">{cat.emoji}</span>
          {cat.label}
        </button>
      ))}
    </div>
  );
}
