import React, { useState } from "react";
import Button from "./Button";
import Calculate from "./Calculate";
import Display from "./Display";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [calculate, setCalculate] = useState(0);
  return (
    <React.Fragment>
      <Button
        number={number}
        setNumber={setNumber}
        secondNumber={secondNumber}
        setSecondNumber={setSecondNumber}
        calculate={calculate}
        setCalculate={setCalculate}
      />
      <Calculate
        number={number}
        setNumber={setNumber}
        secondNumber={secondNumber}
        setSecondNumber={setSecondNumber}
        calculate={calculate}
        setCalculate={setCalculate}
      />
      <Display
        number={number}
        setNumber={setNumber}
        secondNumber={secondNumber}
        setSecondNumber={setSecondNumber}
        calculate={calculate}
        setCalculate={setCalculate}
      />
    </React.Fragment>
  );
}
