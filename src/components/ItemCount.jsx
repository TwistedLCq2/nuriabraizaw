import React, { useState } from "react";
import "./styles/itemCount.css";

const ItemCount = ({ min, max, onAdd }) => {
  const [counter, SetCounter] = useState(1);

  const more = () => {
    let increase = counter + 1;
    if (counter < max) {
      SetCounter(increase);
      onAdd(increase);
    }
  };

  const less = () => {
    let decrease = counter - 1;
    if (counter > min) {
      SetCounter(decrease);
      onAdd(decrease);
    }
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
    </div>
  );
};
export default ItemCount;
