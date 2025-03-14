import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div style={{ width: "%100", margin: "40px" }}>
      <h1 style={{ alignItems: "center" }}>Counter Application</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <p>Counter : {counter}</p>
    </div>
  );
};

export default Counter;
