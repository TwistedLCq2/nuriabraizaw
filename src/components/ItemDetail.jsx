import React, { useState } from "react";
import ItemCount from "./ItemCount";
import ItemListContainer from "./ItemListContainer";

const ItemDetail = ({ product }) => {
  const [cantidad, setCantidad] = useState(1);

  const cantidadItem = (value) => {
    setCantidad(value);
  };

  const onAdd = () => {
    console.log("ID: " + product.id, "Cantidad: " + cantidad);
  };
  const back = () => {
    <ItemListContainer />;
  };

  return (
    <div className="modal-content" key={product.id}>
      <img
        className="prod-img card-img-top"
        src={product.img}
        alt={product.nombre}
      />
      <div className="modal-body">
        <h3 className="title">{product.nombre}</h3>
        <h4 className="text">{product.descripcion}</h4>
        <span className="text">${product.precio}</span>
      </div>
      <ItemCount min="1" max="5" onAdd={cantidadItem} />
      <button className="btn btn-light" onClick={() => onAdd()}>
        Agregar al carrito
      </button>
      <button className="btn btn-light" onClick={() => back()}>
        Volver a Servicios
      </button>
    </div>
  );
};
export default ItemDetail;
