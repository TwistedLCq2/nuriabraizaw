import React, { useContext, createContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartContextProvider = ({ props }) => {
  const [products, setProducts] = useState([]);
  const [isInCart, setIsInCart] = useState(false);

  const addItem = (item, quantity) => {
    const inCartList = products.find((i) => i.id === item.id);
    setIsInCart(true);
    if (inCartList) {
      inCartList.quantity += quantity;
      setProducts([...products]);
    } else {
      setProducts([...products, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    products.splice(
      products.findIndex((i) => i.id === id),
      1
    );
    setProducts([...products]);
    if (products.length === 0) {
      setIsInCart(false);
    }
  };

  const totalProductsPrice = () => {
    return products.reduce((add, i) => (add += i.price * i.quantity), 0);
  };

  const cartWidgetCount = () => {
    return products.reduce((add, i) => (add += i.quantity), 0);
  };

  const cleanListCart = () => {
    setProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        mappedCart: Object.values(products),
        addItem,
        removeItem,
        totalProductsPrice,
        isInCart,
        cartWidgetCount,
        cleanListCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
