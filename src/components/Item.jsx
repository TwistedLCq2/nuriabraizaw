import React, { useState } from "react";
import "./styles/item.css";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";

const Item = ({ product }) => {
  const [cantidad, setCantidad] = useState(1);

  const cantidadItem = (value) => {
    setCantidad(value);
  };

  const onAdd = () => {
    console.log("ID: " + product.id, "Cantidad: " + cantidad);
  };
  const onInfo = () => {
    <ItemDetailContainer key={product.id} />;
    console.log(product.id);
  };

  return (
    <div className="item card">
      <p className="prod-id">{product.id}</p>
      <img className="prod-img card-img-top" src={product.img} alt="" />
      <div className="card-body">
        <h3 className="card-title">{product.nombre}</h3>
        <span className="card-text">${product.precio}</span>
        <ItemCount min="1" max="5" onAdd={cantidadItem} />

        <button className="btn btn-light add" onClick={() => onAdd()}>
          Agregar al carrito
        </button>
        <button className="btn btn-light info" onClick={() => onInfo()}>
          Mas Info
        </button>
      </div>
    </div>
  );
};
export default Item;
