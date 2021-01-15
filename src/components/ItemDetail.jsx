import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { NavLink } from "react-router-dom";
import "./styles/itemDetail.css";

const ItemDetail = ({ product }) => {
  const [cantidad, setCantidad] = useState(1);

  const cantidadItem = (value) => {
    setCantidad(value);
  };

  const onAdd = () => {
    console.log("ID: " + product.id, "Cantidad: " + cantidad);
  };

  return (
    <>
      {product.map((product) => (
        <div className="item2 card" key={product.id}>
          <img
            className="prod-img card-img-top"
            src={product.img}
            alt={product.nombre}
          />
          <div className="card-body body">
            <h3 className="card-title">{product.nombre}</h3>
            <h4 className="card-text text">{product.descripcion}</h4>
            <span className="card-text">${product.precio}</span>
          </div>
          <ItemCount min="1" max="5" onAdd={cantidadItem} />
          <button className="btn btn-light add2" onClick={() => onAdd()}>
            Agregar al carrito
          </button>
          <NavLink
            activeClassName="active-servicios"
            className="default-class"
            to="/category/servicios"
          >
            <button className="btn btn-light back">Volver a Servicios</button>
          </NavLink>
        </div>
      ))}
    </>
  );
};
export default ItemDetail;
