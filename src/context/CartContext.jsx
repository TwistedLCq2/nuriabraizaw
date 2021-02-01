import React, { useContext, createContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    if (isInCart(product)) {
      cart.map((prod) => {
        if (prod.id == product.id) {
          return (prod.quantity += quantity);
        }
      });
    } else {
      setCart((state) => {
        return [...state, { ...product, quantity: quantity }];
      });
    }
  };

  console.log(cart);

  const removeItem = (productId) => {
    setCart(cart.filter((products) => products.id !== productId));
    console.log(cart);
  };

  const isInCart = (product) => {
    return cart?.find((prod) => prod.id === product.id) != null;
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clearCart,
        removeItem,
        isInCart,
        size: cart.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
