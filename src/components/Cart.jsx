/* import React from "react";
import { useCart } from "../context/CartContext";
import { ButtonPrimary, ButtonClearCart } from "./Buttons";
import ItemCart from "./ItemCart";
import "./styles/cart.css";

const Cart = () => {
  const { cart, clearCart, cartWidgetItems, totalPrice } = useCart();
  const total = totalPrice();

  return (
    <div className="carrito">
      {cartWidgetItems() > 0 ? (
        cart.map((i) => (
          <>
            <ItemCart
              key={i.product.id}
              name={i.product.nombre}
              price={i.product.precio}
              url={i.product.img}
              id={i.product.id}
              quantity={i.quantity}
            />
          </>
        ))
      ) : (
        <>
          <p className="empty">No hay Items en el Carrito</p>
          <ButtonPrimary
            to="/category/:categoryId"
            text="Ir a Servicios"
            className="empty"
          />
        </>
      )}
      {cartWidgetItems() > 0 && (
        <>
          <div className="flex justify-between mx-2  h-full shadow-md rounded-md max-w-lg w-full py-4 px-2 lg:px-4 text-lg font-bold">
            <p>Total</p>
            <hr className="w-full mt-5 mx-3" />
            <p>${total}</p>
          </div>
          <ButtonPrimary to="/" text="Seguir Comprando" />
          <ButtonClearCart clearCart={clearCart} text="Vaciar Carro" />{" "}
        </>
      )}
    </div>
  );
};

export default Cart;
 */
