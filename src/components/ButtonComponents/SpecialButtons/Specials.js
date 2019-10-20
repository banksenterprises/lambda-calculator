import React, { useState } from "react";
import { specials } from "../../../data"
import { SpecialButton } from "./SpecialButton"

export const Specials = (props) => { 
  const [specialsState] = useState(specials);

  return (
    <div>
     {specialsState.map((specials, index) => (
       <SpecialButton key={index} specials={specials}/>
      ))}
    </div>
  );
};
