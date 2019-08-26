import React from "react";
import Display from "./Display";
import Numpad from "./Numpad";

const Calculator = props => {
  return (
    <div className="calculator">
      <Display />
      <Numpad />
    </div>
  );
};

export default Calculator;
