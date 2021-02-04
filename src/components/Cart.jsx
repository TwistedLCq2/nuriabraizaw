import React, { useState } from "react";

import useCart from "../context/CartContext";
import { NavLink } from "react-router-dom";

import "firebase/firestore";

const Cart = () => {
  const { products, removeItem, totalProductsPrice } = useCart();
  const [confirmation, setConfirmation] = useState(false);

  const handleRemove = (i) => {
    removeItem(i.id);
  };

  const handleFinalize = () => {
    <div>Compra Finalizada</div>;
    setConfirmation(true);
  };

  console.log("Confirmacion", confirmation);

  if (products.length === 0) {
    return (
      <div className="cart">
        <div className="heading cf">
          <h3>...No hay productos agregados al Carrito...</h3>
          <NavLink to="/" exact>
            <button className="continue">Continuar Comprando</button>
          </NavLink>
        </div>
      </div>
    );
  } else {
    return (
      <section className="cart">
        <div className="heading cf">
          <h2>Carrito de Compras</h2>
          <NavLink to="/" exact>
            <button className="continue">Continuar Comprando</button>
          </NavLink>
        </div>
        <div className="shopping-cart">
          {products.map((item) => (
            <div className="product">
              <div className="product-image">
                <img src={item.img} alt={item.id} />
              </div>
              <div className="product-details">
                <h2>{item.name}</h2>
                <div className="product-removal">
                  <button
                    class="remove-product"
                    onClick={() => handleRemove(item)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
              <div className="product-price">
                <label htmlFor="price">Precio </label>
                <span className="price">COP ${item.price}</span>
              </div>
              <div className="product-quantity">
                <label htmlFor="quantity">Cantidad </label>
                <span className="quantity">{item.quantity}</span>
              </div>
              <div className="product-line-price">
                <label htmlFor="total">Total </label>
                <span className="total">${item.quantity * item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="totals">
          <div class="totals-item">
            <label>Subtotal</label>
            <div class="totals-value">{totalProductsPrice()}</div>
          </div>
          <div className="totals-item">
            <button className="checkout" onClick={handleFinalize}>
              Iniciar Compra
            </button>
          </div>
        </div>
      </section>
    );
  }
};
export default Cart;
