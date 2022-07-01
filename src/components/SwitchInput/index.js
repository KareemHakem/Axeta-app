import React, { useState } from "react";
import "./style.css";


export default function SwitchInput({ fontSize, fontWeight }) {
  //   handleSwitchInput,
  //   handleChangeValue,
  //   inputSwitch,
  //   handleKeyPress,
  //   value
  const [inputSwitch, setInputSwitch] = useState(false);
  const [inputValue, setInputValue] = useState("kareem");

  const handleChangeValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleSwitchInput = () => {
    setInputSwitch(true);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setInputSwitch(false);
    }
  };

  return (
    <div onClick={handleSwitchInput}>
      {!inputSwitch ? (
        <div style={{ fontSize, fontWeight }}>{inputValue}</div>
      ) : (
        <input
          className="input-info-form"
          onChange={handleChangeValue}
          value={inputValue}
          onKeyDown={handleKeyPress}
        />
      )}
    </div>
  );
}
