import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "./styles/itemDetailC.css";
import Products from "../Products.json";

const ItemDetailContainer = () => {
  const { prodId } = useParams();
  const [product, setProduct] = useState([]);

  const getData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se encontro nada");
        }
      }, 2000);
    });

  useEffect(() => {
    getData(Products)
      .then((response) => {
        console.log(response);
        setProduct(response.filter((product) => product.id == prodId));
      })
      .catch((error) => console.log(error));
  }, [prodId]);

  console.log(Products);

  return (
    <>
      <div className="detail">
        <ItemDetail product={product} key={product.id} />
      </div>
    </>
  );
};
export default ItemDetailContainer;
