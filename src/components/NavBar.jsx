import React from "react";
import "./styles/navbar.css";
import logo from "../img/logo.png";
import CartWidget from "./CartWidget.jsx";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <NavLink className="nav-link" to="/">
            <img src={logo} alt="inicio" />
          </NavLink>
        </div>
        <NavLink className="m-2 nav-link" to="/">
          Inicio
        </NavLink>
        <NavLink className="m-2 nav-link" to="/Servicios">
          Servicios
        </NavLink>
        <NavLink className="m-2 nav-link" to="/Contacto">
          Contacto
        </NavLink>

        <CartWidget />
      </nav>
    </>
  );
};

export default NavBar;
