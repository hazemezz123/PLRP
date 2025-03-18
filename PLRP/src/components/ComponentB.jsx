import React from "react";
import ComponentC from "./ComponentC.jsx";
const componentB = () => {
  return (
    <div className="box">
      <h1>ComponentB</h1>
      <ComponentC />
    </div>
  );
};

export default componentB;
