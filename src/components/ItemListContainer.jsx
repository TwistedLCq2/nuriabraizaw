import React from "react";
import "./styles/itemListC.css";
import ItemList from "./ItemList.jsx";

const ItemListContainer = () => {
  return (
    <>
      <div className="productos">
        <ItemList />
      </div>
    </>
  );
};

export default ItemListContainer;
