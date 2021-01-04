import React, { useState } from "react";
import "./styles/itemCount.css";

const ItemCount = () => {
  const [counter, SetCounter] = useState(1);

  const more = () => {
    let increase = counter + 1;
    if (counter < 5) {
      SetCounter(increase);
    }
  };

  const less = () => {
    let decrease = counter - 1;
    if (counter > 1) {
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
