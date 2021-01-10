import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { productsId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${productsId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [productsId]);

  if (!product) return null;

  console.log(product);
  return (
    <>
      <div class="modal" tabindex="-1">
        <ItemDetail key={product.id} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
