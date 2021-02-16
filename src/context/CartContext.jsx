import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((acum, item) => acum + item.qty, 0);

    setTotalItems(newTotal);
  }, [cart]);

  const addItem = (item) => {
    switch (isInCart(item)) {
      case "differentItems":
        const newCart = [...cart, item];

        setCart(newCart);

        return true;

      case "inCart":
      case "differentQty":
        const nextCart = [...cart];
        nextCart.forEach((i) => {
          if (i.id === item.id) {
            const newQty = i.qty + item.qty;
            i.qty = newQty > item.stock ? item.stock : newQty;
          }
        });
        setCart(nextCart);

        return true;

      default:
        return false;
    }
  };

  const editItem = (item) => {
    const newCart = [...cart];
    newCart.forEach((i) => {
      if (i.id === item.id) {
        i.qty = item.qty > item.stock ? item.stock : item.qty;
      }
    });
    setCart(newCart);
  };

  const removeItem = (item) => {
    const updatedCart = cart.filter((e) => e.id !== item);
    setCart(updatedCart);
  };

  const isInCart = (item) => {
    const isId = cart.some((i) => i.id === item.id);
    const isQty = cart.some((i) => i.id === item.id && i.qty === item.qty);

    // id = true -> qty=true   : true
    // id = false -> qty=false  : false
    // id = true -> qty=false  : false

    if (!(isId && isQty)) {
      const needsUpdate = isId ? "differentQty" : "differentItems";
      return needsUpdate;
    }

    return "inCart";
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        addItem,
        editItem,
        removeItem,
        isInCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
