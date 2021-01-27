import React, { useState, useEffect } from "react";
import Item from "./Item.jsx";
import Products from "../Products.json";
import "./styles/item.css";

const ItemList = ({ product }) => {
  const [producto, setProducto] = useState([]);

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
      .then((res) => setProducto(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {producto.length
        ? producto.map((producto) => (
            <Item product={producto} key={producto.id} />
          ))
        : "Loading..."}
    </>
  );
};

export default ItemList;
