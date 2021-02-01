import React, { useState } from "react";
import { EndButton, Purchase } from "./Buttons";
import "./styles/itemCount.css";

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
            <EndButton />
            <Purchase />
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
