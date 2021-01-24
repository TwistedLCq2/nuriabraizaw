import React, { useState } from "react";
import "./styles/itemCount.css";
import { NavLink } from "react-router-dom";

const ItemCount = ({ onAdd }) => {
  let initial = 1;
  let stock = 5;
  const [counter, setCounter] = useState(1);
  const [display, setDisplay] = useState("hidden");

  const more = () => {
    let increase = counter + 1;
    if (counter < stock) {
      setCounter(increase);
      onAdd(increase);
    }
  };

  const less = () => {
    let decrease = counter - 1;
    if (counter > initial) {
      setCounter(decrease);
      onAdd(decrease);
    }
  };

  const handleOnAdd = () => {
    onAdd(counter);
    setCounter(initial);
    setDisplay("block");
  };

  return (
    <div className="contador">
      <button className="less btn btn-danger" onClick={less}>
        {" "}
        -{" "}
      </button>
      <input onChange={() => {}} value={counter} />
      <button className="more btn btn-info" onClick={more}>
        {" "}
        +{" "}
      </button>

      <div>
        {display === "block" ? (
          <div className="space-y-2">
            <NavLink to="/cart" className="terminar">
              <button className="btn btn-light info">Terminar compra</button>
            </NavLink>
            <NavLink to="/" className="seguir">
              <button className="btn btn-light info">Seguir Comprando</button>
            </NavLink>
          </div>
        ) : (
          <>
            <button onClick={handleOnAdd} className="btn btn-light add2">
              Agregar al carrito
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default ItemCount;
