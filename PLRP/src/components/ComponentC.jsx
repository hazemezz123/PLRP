import ComponentD from "./ComponentD.jsx";
import { UserContext } from "../UserContext.js";
import { useContext } from "react";
const componentC = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="box">
      <h1>componentC</h1>
      <h2>{`Hello From the C : ${user}`}</h2>
      <ComponentD />
    </div>
  );
};

export default componentC;
