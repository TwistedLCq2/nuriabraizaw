import React from "react";
import "./styles/cartWidget.css";
import cart from "../img/cart.png";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <NavLink
        activeClassName="active"
        className="m-2 nav-link widget"
        to="/category/cart"
      >
        <div className="widget">
          <a href="*">
            <img src={cart} alt="carrito" className="carrito" />
            <span className="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-info">
              4
            </span>
          </a>
        </div>
      </NavLink>
    </>
  );
};

export default CartWidget;
