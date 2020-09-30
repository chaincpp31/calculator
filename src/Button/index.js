import React from "react";

function Button({
  number,
  setNumber,
  secondNumber,
  setSecondNumber,
  calculate,
  setCalculate
}) {
  let handleOneClick = () => {
    setNumber(number + "1");
  };
  let handleTwoClick = () => {
    setNumber(number + "2");
  };
  let handleThreeClick = () => {
    setNumber(number + "3");
  };
  let handleFourClick = () => {
    setNumber(number + "4");
  };
  let handleFiveClick = () => {
    setNumber(number + "5");
  };
  let handleSixClick = () => {
    setNumber(number + "6");
  };
  let handleSevenClick = () => {
    setNumber(number + "7");
  };
  let handleEightClick = () => {
    setNumber(number + "8");
  };
  let handleNineClick = () => {
    setNumber(number + "9");
  };
  let handleZeroClick = () => {
    setNumber(number + "0");
  };

  return (
    <React.Fragment>
      <div>
        <button onClick={handleOneClick}>1</button>
        <button onClick={handleTwoClick}>2</button>
        <button onClick={handleThreeClick}>3</button>
      </div>
      <div>
        <button onClick={handleFourClick}>4</button>
        <button onClick={handleFiveClick}>5</button>
        <button onClick={handleSixClick}>6</button>
      </div>
      <div>
        <button onClick={handleSevenClick}>7</button>
        <button onClick={handleEightClick}>8</button>
        <button onClick={handleNineClick}>9</button>
      </div>
      <button onClick={handleZeroClick}>0</button>
    </React.Fragment>
  );
}
export default Button;
