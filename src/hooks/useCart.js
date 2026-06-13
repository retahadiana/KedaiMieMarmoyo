import { useState, useCallback } from 'react';
import { formatPrice } from '../data/menuData';

// ============================================================
// Custom Hook: useCart — Manages shopping cart state
// ============================================================

export function useCart() {
  const [cartItems, setCartItems] = useState({});
  // cartItems shape: { [menuId]: { item: MenuObject, qty: number } }

  const addToCart = useCallback((item) => {
    setCartItems((prev) => {
      const existing = prev[item.id];
      return {
        ...prev,
        [item.id]: {
          item,
          qty: existing ? existing.qty + 1 : 1,
        },
      };
    });
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems((prev) => {
      const existing = prev[itemId];
      if (!existing) return prev;
      if (existing.qty <= 1) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: { ...existing, qty: existing.qty - 1 } };
    });
  }, []);

  const clearCart = useCallback(() => setCartItems({}), []);

  const cartList = Object.values(cartItems);
  const totalQty = cartList.reduce((sum, { qty }) => sum + qty, 0);
  const totalPrice = cartList.reduce((sum, { item, qty }) => sum + item.price * qty, 0);

  const buildWhatsAppMessage = useCallback(() => {
    if (cartList.length === 0) return '';

    const lines = cartList.map(
      ({ item, qty }) =>
        `• ${item.name} x${qty} = ${formatPrice(item.price * qty)}`
    );

    const message = [
      '🍜 *PESANAN MIE MARMOYO*',
      '━━━━━━━━━━━━━━━━━━━',
      ...lines,
      '━━━━━━━━━━━━━━━━━━━',
      `💰 *Total: ${formatPrice(totalPrice)}*`,
      '',
      '_Terima kasih sudah pesan di Mie Marmoyo!_',
      '_Dari yang lain, LEBIH!_ 🔥',
    ].join('\n');

    return encodeURIComponent(message);
  }, [cartList, totalPrice]);

  return {
    cartItems,
    cartList,
    totalQty,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
    buildWhatsAppMessage,
  };
}
