import { useState } from "react";
const [counter, setCounter] = useState(0);

const increment = () => {
  setCounter((prev) => prev + 1);
};
const useState = () => {
  return (
    <section>
      <h1>Counter Application</h1>
      <button onClick={increment}>Increment</button>
      <p>Counter : {counter}</p>
    </section>
  );
};

export default useState;
