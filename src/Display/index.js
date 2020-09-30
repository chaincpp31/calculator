import React from "react";
import Calculate from "../Calculate";

function Display({ number, setNumber }) {
  return (
    <h1>
      {number}
      {Calculate}
    </h1>
  );
}
export default Display;
