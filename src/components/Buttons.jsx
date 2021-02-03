import React from "react";
import { NavLink } from "react-router-dom";

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

export const EndButton = () => {
  return (
    <NavLink to="/cart" className="btn btn-light">
      <span className="px-5 p-2 mx-auto">Terminar compra</span>
    </NavLink>
  );
};

export const Purchase = () => {
  return (
    <NavLink to="/category/servicios" className="btn btn-light">
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
