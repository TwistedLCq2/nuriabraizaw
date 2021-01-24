import React, { useState } from "react";
import "./styles/item.css";
import { NavLink } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({ product }) => {
  const [cantidad, setCantidad] = useState(1);

  const cantidadItem = (value) => {
    setCantidad(value);
    console.log("ID: " + product.id, "Cantidad: " + cantidad);
  };

  return (
    <div className="item card">
      <p className="prod-id">{product.id}</p>
      <img className="prod-img card-img-top" src={product.img} alt="" />
      <div className="card-body">
        <h3 className="card-title">{product.nombre}</h3>
        <span className="card-text">${product.precio}</span>
        <div className="buttons">
          <ItemCount min="1" max="5" onAdd={cantidadItem} />
          <button className="btn btn-light info">
            <NavLink
              activeClassName="active-servicio"
              className="mas-info info"
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
