import React from "react";
import "./styles/item.css";
import { NavLink } from "react-router-dom";

const Item = ({ item: { id, nombre, precio, img } }) => {
  return (
    <div className="item card">
      <img src={img} alt={id} className="prod-img card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{nombre}</h3>
        <span className="card-text">${precio}</span>
        <div className="buttons">
          <button className="btn btn-light info">
            <NavLink
              activeClassName="active-servicio"
              className="mas-info"
              to={`/servicios/${id}`}
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
