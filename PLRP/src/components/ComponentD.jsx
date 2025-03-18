import { useContext } from "react";
import { UserContext } from "./ComponentA";

const ComponentD = () => {
  const { user, count } = useContext(UserContext);
  return (
    <div className="box">
      <h1>Component D</h1>
      <h2>{user}</h2>
      <h3>{count}</h3>
    </div>
  );
};

export default ComponentD;
