import ComponentB from "./ComponentB.jsx";
import { UserContext } from "../UserContext.js";
import { useState } from "react";
import SetButton from "./SetButton.jsx";
const componentA = () => {
  const [user, setUser] = useState("Lord");
  const values = { user, setUser };
  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`hello ${user}`}</h2>
      <UserContext.Provider value={values}>
        <ComponentB />
        <SetButton />
      </UserContext.Provider>
    </div>
  );
};

export default componentA;
