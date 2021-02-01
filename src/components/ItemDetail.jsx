import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import "./styles/itemDetail.css";

const ItemDetail = ({ product }) => {
  const [qCart, setQCart] = useState(0);
  const { addItem } = useCart();

  const qCount = (countQ) => {
    setQCart(countQ);
    addItem(product, qCart);
  };

  return (
    <>
      {product.map((product) => (
        <div className="item2 card" key={product.id}>
          <img
            className="prod-img2 card-img-top"
            src={product.img}
            alt={product.nombre}
          />
          <div className="card-body body">
            <h3 className="card-title">{product.nombre}</h3>
            <h4 className="card-text text">{product.descripcion}</h4>
            <span className="card-text price">${product.precio}</span>
          </div>

          <ItemCount initial="0" stock="5" onAdd={qCount} />
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
