import { useState } from "react";
import "./styles.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">

      <div>
      <h1 className="number">{count}</h1>

      </div>

      <div className="btns-container">
        <button className="increament" onClick={() => setCount((prev) => prev + 1)}>add </button>
        <button className="decreament" onClick={() => setCount((prev) => prev - 1)}>sub </button>
        <button onClick={() => setCount(0)}>reset </button>
      </div>
    </div>
  );
};

export default Counter;
