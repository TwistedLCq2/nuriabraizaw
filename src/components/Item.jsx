import React from "react";
import "./styles/item.css";
import { NavLink } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="item card">
      <p className="prod-id">{product.id}</p>
      <img className="prod-img card-img-top" src={product.img} alt="" />
      <div className="card-body">
        <h3 className="card-title">{product.nombre}</h3>
        <span className="card-text">${product.precio}</span>
        <div className="buttons">
          <button className="btn btn-light info">
            <NavLink
              activeClassName="active-servicio"
              className="mas-info"
              to={`/category/servicios/${product.id}`}
            >
              Mas Info
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Item;
