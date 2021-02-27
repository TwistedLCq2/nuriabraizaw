import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import "./styles/itemDetail.css";

const ItemDetail = ({ item }) => {
  const [qCart, setQCart] = useState(0);
  const { addItem } = useCart();

  const qCount = (countQ) => {
    setQCart(countQ);
    addItem(item, qCart);
  };

  return (
    <>
      <div className="item2 card" key={item.id}>
        <img
          className="prod-img2 card-img-top"
          src={item.img}
          alt={item.nombre}
        />
        <div className="card-body body">
          <h3 className="card-title">{item.nombre}</h3>
          <h4 className="card-text text">{item.descripcion}</h4>
          <span className="card-text price">${item.precio}</span>
        </div>

        <ItemCount initial="0" stock="5" onAdd={qCount} />
        <NavLink to="/cart">
          <button type="button" className="btn btn-info">
            Finalizar compra
          </button>
        </NavLink>
        <NavLink to="/">
          <button type="button" className="btn btn-danger">
            Seguir comprando
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default ItemDetail;
