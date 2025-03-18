import React from "react";
import { UserContext } from "./ComponentA";
import { useContext } from "react";
const ButtonCounter = () => {
  const { count, setCount } = useContext(UserContext);
  return <button onClick={() => setCount(count + 1)}>Click me {count}</button>;
};

export default ButtonCounter;
