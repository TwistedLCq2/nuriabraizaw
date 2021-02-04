import React, { useState } from "react";

import "./styles/itemCount.css";

const ItemCount = ({ stocks, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stocks) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  onAdd(count);

  return (
    <div className="contador">
      <h5>Cantidad:</h5>
      <div className="grid">
        <button
          className="btn btn-danger"
          onClick={decrease}
          disabled={count === initial}
        >
          -
        </button>
        <input onChange={() => {}} value={count} />
        <button
          className="btn btn-info"
          onClick={increase}
          disabled={count === stocks}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
