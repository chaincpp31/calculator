import React from "react";

function Calculate({
  number,
  setNumber,
  secondNumber,
  setSecondNumber,
  calculate,
  setCalculate
}) {
  const handleCalculate = (operatorBtn) => {
    setCalculate(operatorBtn);
    setSecondNumber(number);
    setNumber(" ");
  };

  const equalTo = () => {
    switch (calculate) {
      case "+":
        setNumber(parseInt(secondNumber) + parseInt(number));
        break;
      case "-":
        setNumber(parseInt(secondNumber) - parseInt(number));
        break;
      case "*":
        setNumber(parseInt(secondNumber) * parseInt(number));
        break;
      default:
        setNumber(parseInt(secondNumber) / parseInt(number));
        break;
    }
  };
  return (
    <>
      <div>
        <button onClick={() => handleCalculate("+")}>+</button>
        <button onClick={() => handleCalculate("-")}>-</button>
        <button onClick={() => handleCalculate("*")}>*</button>
        <button onClick={() => handleCalculate("/")}>/</button>
        <button onClick={equalTo}>=</button>
        <button onClick={() => handleCalculate(" ")}>C</button>
      </div>
    </>
  );
}
export default Calculate;
