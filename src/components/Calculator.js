import React, { useState } from "react";

function Calculator() {
  const [value, setValue] = useState("");

  const appendValue = (val) => {
    setValue((prev) => prev + val);
  };

  const clearAll = () => setValue("");

  const calculate = () => {
    try {
      const result = eval(value);
      if (result === Infinity || isNaN(result)) {
        setValue("Error");
      } else {
        setValue(result.toString());
      }
    } catch {
      setValue("Error");
    }
  };

  return (
    <div id="calci" className="Calculator">
      {/* Display */}
      <div className="display">{value || "0"}</div>

      {/* Buttons container */}
      <div className="buttons">
        <button id="btn-clear" onClick={clearAll}>C</button>

        <button id="btn-7" onClick={() => appendValue("7")}>7</button>
        <button id="btn-8" onClick={() => appendValue("8")}>8</button>
        <button id="btn-9" onClick={() => appendValue("9")}>9</button>
        <button id="btn-div" onClick={() => appendValue("/")}>/</button>

        <button id="btn-4" onClick={() => appendValue("4")}>4</button>
        <button id="btn-5" onClick={() => appendValue("5")}>5</button>
        <button id="btn-6" onClick={() => appendValue("6")}>6</button>
        <button id="btn-multiply" onClick={() => appendValue("*")}>*</button>

        <button id="btn-1" onClick={() => appendValue("1")}>1</button>
        <button id="btn-2" onClick={() => appendValue("2")}>2</button>
        <button id="btn-3" onClick={() => appendValue("3")}>3</button>
        <button id="btn--" onClick={() => appendValue("-")}>-</button>

        <button id="btn-0" onClick={() => appendValue("0")}>0</button>
        <button id="plus" onClick={() => appendValue("+")}>+</button>
        <button id="equal" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
