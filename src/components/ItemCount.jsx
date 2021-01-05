import React, { useState } from "react";
import "./styles/itemCount.css";

const ItemCount = ({ min, max }) => {
  const [counter, SetCounter] = useState(1);

  const more = () => {
    let increase = counter + 1;
    if (counter < max) {
      SetCounter(increase);
    }
  };

  const less = () => {
    let decrease = counter - 1;
    if (counter > min) {
      SetCounter(decrease);
    }
  };

  return (
    <div className="cantidad">
      <button className="less btn btn-light" onClick={less}>
        {" "}
        -{" "}
      </button>
      <input onChange={() => {}} value={counter} />
      <button className="more btn btn-light" onClick={more}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};
export default ItemCount;
