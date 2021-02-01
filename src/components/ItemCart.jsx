/* import React from "react";
import { useCart } from "../context/CartContext";

import { RemoveIcon } from "./Buttons";

const ItemCart = ({ product, quantity }) => {
  const { removeItem } = useCart();
  const handleRemove = () => removeItem(product.id);

  return (
    <div className="container">
      <div className="card-body">
        <img
          src={product.img}
          placeholder="blurred"
          alt="item"
          width={50}
          height={50}
          className=" h-12 w-14 shadow-md rounded-md"
        />
        <div className="card-body">
          <h2 className="card-title">{product.nombre}</h2>
          <p className="tracking-normal ">${product.precio}</p>
        </div>
        <div className="card-text">
          <span className="font-bold whitespace-nowrap">
            Cantidad: {quantity}
          </span>
        </div>

        <button onClick={handleRemove}>
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
};
export default ItemCart;
 */
