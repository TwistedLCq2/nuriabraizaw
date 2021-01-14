import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "./styles/itemDetailC.css";

const ItemDetailContainer = () => {
  const { prodId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${prodId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [prodId]);

  if (!product) return null;

  return (
    <>
      <div className="detail">
        <ItemDetail product={product} key={product.id} />
      </div>
    </>
  );
};
export default ItemDetailContainer;
