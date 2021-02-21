import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./styles/cart.css";
import ItemCount from "./ItemCount";

function CartDetail({ item }) {
  const [removeBox, setRemoveBox] = useState(false);
  const { editItem, removeItem } = useCart();

  function addToCartHandler(qtyToAdd) {
    const info = {
      ...item,
      qty: qtyToAdd,
    };

    editItem(info);
  }
  return (
    <article className="carrito">
      <div className="cartInfo">
        <h3 className="cartInfo-title">{item.title}</h3>
        <p className="cartInfo-detail">
          <span>Plataforma:</span> {item.category}
        </p>
        <p className="cartInfo-detail">
          <span>Stock Disponible:</span> {item.stock}
        </p>
        <br />
        <p className="cartInfo-detail">
          <span>Cantidad Elegida:</span> {item.qty}
        </p>
        <p className="cartInfo-detail">
          <span>Precio Unitario:</span> USD {item.price}
        </p>
      </div>

      <div className="cart-buttons">
        <ItemCount
          initial={item.qty}
          stock={item.stock}
          onConfirm={{ onEdit: addToCartHandler }}
        />
        <button
          className="remove"
          style={{ marginTop: "5px" }}
          onClick={() => setRemoveBox(true)}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default CartDetail;
