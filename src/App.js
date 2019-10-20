import React, { useState } from "react";
import "./App.css";
import Logo from "./components/DisplayComponents/Logo";
import { Numbers } from "./components/ButtonComponents/NumberButtons/Numbers"
import { NumberButton } from "./components/ButtonComponents/NumberButtons/NumberButton"
import { Operators } from "./components/ButtonComponents/OperatorButtons/Operators"
import { OperatorButton } from "./components/ButtonComponents/OperatorButtons/OperatorButton"
import { Specials } from "./components/ButtonComponents/SpecialButtons/Specials"
import { SpecialButton } from "./components/ButtonComponents/SpecialButtons/SpecialButton"

function App() {


  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Numbers />
        <Operators />
        <Specials />
      </div>
    </div>
  );
}

export default App;
