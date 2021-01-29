import React from "react";
import { NavLink } from "react-router-dom";

export const AddToCart = ({ handleOnAdd }) => {
  return (
    <button onClick={handleOnAdd} className="btn btn-light">
      <span className="p-2 border-r-2 flex-shrink">
        <svg
          width="24"
          height="24"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <path
            d="M10 8H12V5H15V3H12V0H10V3H7V5H10V8ZM6 17C4.9 17 4.01 17.9 4.01 19C4.01 20.1 4.9 21 6 21C7.1 21 8 20.1 8 19C8 17.9 7.1 17 6 17ZM16 17C14.9 17 14.01 17.9 14.01 19C14.01 20.1 14.9 21 16 21C17.1 21 18 20.1 18 19C18 17.9 17.1 17 16 17ZM7.1 12H14.55C15.3 12 15.96 11.59 16.3 10.97L20.16 3.96L18.42 3L14.55 10H7.53L3.27 1H0V3H2L5.6 10.59L4.25 13.03C3.52 14.37 4.48 16 6 16H18V14H6L7.1 12Z"
            fill="#5F6368"
          />
        </svg>
      </span>

      <span className="px-5 mx-auto">Agregar al carrito</span>
    </button>
  );
};

export const RemoveIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-2"
  >
    <path
      d="M7 11V13H17V11H7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
      fill="#CC5F58"
    />
  </svg>
);

export const FinishButton = () => {
  return (
    <NavLink to="/cart" className="btn btn-light">
      <span className="px-5 p-2 mx-auto">Terminar compra</span>
    </NavLink>
  );
};

export const BackHome = () => {
  return (
    <NavLink to="/" className="btn btn-light">
      <span className="px-5 p-2 mx-auto">Seguir Comprando</span>
    </NavLink>
  );
};

export const ButtonPrimary = ({ to, text }) => (
  <NavLink to={to} className="btn btn-light info">
    {text}
  </NavLink>
);

export const ButtonClearCart = ({ clearCart, text }) => (
  <button onClick={clearCart} className="btn btn-danger">
    {text}
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mb-1 mx-1 inline"
    >
      <path
        d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
        fill="#5F6368"
      />
    </svg>
  </button>
);
