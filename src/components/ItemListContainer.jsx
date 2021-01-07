import React from "react";
import { useEffect, useState } from "react";
import logoxl from "../img/logoxl.png";
import "./styles/itemListC.css";
import Products from "../Products.json";
import ItemList from "./ItemList.jsx";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const getData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se encontro nada");
        }
      }, 3000);
    });

  useEffect(() => {
    getData(Products)
      .then((res) => setProductos(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="intro">
        <img src={logoxl} alt="logo" />
        <h4>Nuestra misión es acompañar a medianas y grandes empresas a que</h4>
        <h4>
          disfruten del desarrollo y crecimiento de sus proyectos a través de la
          imagen.
        </h4>
        <h4>
          Diseñaremos el universo visual y virtual de tu marca para que logre
          transmitir{" "}
        </h4>
        <h4>
          y comunicar su esencia y valores, logrando así destacarla en el mundo
          digital.
        </h4>
      </div>
      <div className="productos">
        <ItemList />
      </div>
    </>
  );
};

export default ItemListContainer;
