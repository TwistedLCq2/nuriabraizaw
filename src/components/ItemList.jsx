import React from "react";
import Item from "./Item.jsx";

const ItemList = ({ list }) => {
  return (
    <>
      {list.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </>
  );
};

export default ItemList;
