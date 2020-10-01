import React from "react";
import Calculate from "../Calculate";
import "./main.css";

function Display({ number, setNumber }) {
  return (
    <h1>
      {number}
      {Calculate}
    </h1>
  );
}
export default Display;
