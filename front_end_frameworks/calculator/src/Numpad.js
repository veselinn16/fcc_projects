import React from "react";
import { buttonKeysArr } from "./utils/buttonChars";

import Button from "./Button";

const Numpad = () => {
  return (
    <div className="numpad">
      {buttonKeysArr.map((char, i) => (
        <Button char={char} key={i} />
      ))}
    </div>
  );
};

export default Numpad;
