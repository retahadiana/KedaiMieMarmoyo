import { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import MenuFilter from './MenuFilter';
import MenuCard from './MenuCard';

// ============================================================
// Component: MenuGrid
// Displays filtered menu items in a responsive grid
// ============================================================

export default function MenuGrid({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('semua');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'semua') return MENU_ITEMS;
    if (activeCategory === 'pedas') return MENU_ITEMS.filter((item) => item.isSpicy);
    return MENU_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <MenuFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Item Count */}
      <p className="text-center text-gray-400 text-sm mb-6">
        Menampilkan <span className="font-semibold text-gray-600">{filteredItems.length}</span> item
      </p>

      {/* Grid */}
      {filteredItems.length > 0 ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Daftar Menu"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              role="listitem"
              className={`stagger-${Math.min((index % 6) + 1, 6)}`}
            >
              <MenuCard item={item} onAdd={onAddToCart} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400">
          <div className="text-5xl mb-4">🍽️</div>
          <p className="font-medium">Menu tidak ditemukan</p>
          <p className="text-sm">Coba pilih kategori lain</p>
        </div>
      )}
    </div>
  );
}
