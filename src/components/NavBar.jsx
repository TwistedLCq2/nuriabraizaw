import React from "react";
import "./styles/navbar.css";
import logo from "../img/logo.png";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <img src={logo} alt="" />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="*">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="*">Servicios</a>
          </li>
          <li className="nav-item">
            <a href="*">Contacto</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
