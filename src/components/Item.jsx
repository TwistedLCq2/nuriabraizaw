import React from "react";
import "./styles/item.css";
import { NavLink } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="item card">
      <img src={item.img} alt={item.id} className="prod-img card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{item.nombre}</h3>
        <span className="card-text">${item.precio}</span>
        <div className="buttons">
          <button className="btn btn-light info">
            <NavLink
              activeClassName="active-servicio"
              className="mas-info"
              to={`/category/items/${item.id}`}
            >
              Más Info
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Item;
