import React, { useState } from "react";
import "./App.css";
import Logo from "./components/DisplayComponents/Logo";
import { Numbers } from "./components/ButtonComponents/NumberButtons/Numbers"
import { Operators } from "./components/ButtonComponents/OperatorButtons/Operators"
import { Specials } from "./components/ButtonComponents/SpecialButtons/Specials"
import { Display } from "./components/DisplayComponents/Display"

function App() {


  return (
    <div className="container">
      <Logo />
      <div className="App">
      <Display number={12}/>
        <Numbers />
        <Operators />
        <Specials />
      </div>
    </div>
  );
}

export default App;
