import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // Load cart from localStorage on initial render
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Persist cart in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        // Increase quantity if product exists
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      // Add full product data with qty
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Check if product is in cart
  const isInCart = (productId) => cartItems.some((item) => item.id === productId);

  // Format price (for WooCommerce style cents -> dollars)
  const formattedPrice = (price) => (Number(price) / 100).toFixed(2);

  // Total count of items
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  // Total cart price
  const cartTotal = cartItems.reduce(
    (sum, item) =>
      sum + (item.prices ? Number(formattedPrice(item.prices.price)) : Number(item.price || 0)) * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartCount,
        cartTotal,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
