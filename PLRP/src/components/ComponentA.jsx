import { useState } from "react";
import ComponentB from "./ComponentB";
import { createContext } from "react";
import ButtonCounter from "./ButtonCounter";

export const UserContext = createContext();

const ComponentA = () => {
  const [user] = useState("Lord");
  const [count, setCount] = useState(0);
  const values = { user, count, setCount };
  return (
    <UserContext.Provider value={values}>
      <div className="box">
        <h1>Component A</h1>
        <h2>{user}</h2>
        <h2>{count}</h2>
        <ButtonCounter />
        <ComponentB />
      </div>
    </UserContext.Provider>
  );
};

export default ComponentA;
