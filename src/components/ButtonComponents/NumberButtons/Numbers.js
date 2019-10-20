import React, { useState } from "react";
import { NumberButton } from "./NumberButton"
import { numbers } from "../../../data"

export const Numbers = (props) => {
  const [numbersState] = useState(numbers);

  return (
    <div>
      {numbersState.map((numbers, index) => (
      <NumberButton key={index} numbers={numbers}/>
      ))}
    </div>
  );
};
