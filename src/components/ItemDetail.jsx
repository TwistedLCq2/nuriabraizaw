import React, { useState } from "react";
import ItemCount from "./ItemCount";
//import { useCartContext } from "./CartContext";
import { NavLink } from "react-router-dom";
import "./styles/itemDetail.css";

const ItemDetail = ({ product }) => {
  //const { addItem } = useCartContext();
  const [cantidad, setCantidad] = useState(1);

  const cantidadItem = (value) => {
    setCantidad(value);
  };

  const onAdd = (count) => {
    //addItem(product.id, count);
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
          <ItemCount initial="1" stock="5" onAdd={cantidadItem} />
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
