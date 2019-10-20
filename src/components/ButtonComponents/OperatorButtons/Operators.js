import React, { useState } from "react";
import { OperatorButton } from "./OperatorButton"
import { operators } from "../../../data"

export const Operators = (props) => {
  const [operatorsState] = useState(operators);

  return (
    <div>
      {operatorsState.map(props => ( 
      <OperatorButton char={props.char}/>
      ))}
    </div>
  );
};