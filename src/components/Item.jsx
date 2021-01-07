import React, { useState } from "react";
import "./styles/item.css";
import ItemCount from "./ItemCount";

const Item = ({ product }) => {
  const [cantidad, setCantidad] = useState(1);

  const cantidadItem = (value) => {
    setCantidad(value);
  };

  const onAdd = () => {
    console.log("ID: " + product.id, "Cantidad: " + cantidad);
  };

  return (
    <div className="item card">
      <p className="prod-id">{product.id}</p>
      <img className="prod-img card-img-top" src={product.img} alt="" />
      <div className="card-body">
        <h3 className="card-title">{product.nombre}</h3>
        <span className="card-text">${product.precio}</span>
        <ItemCount min="1" max="5" onAdd={cantidadItem} />
      </div>
      <button className="btn btn-light" onClick={() => onAdd()}>
        Agregar al carrito
      </button>
    </div>
  );
};
export default Item;
