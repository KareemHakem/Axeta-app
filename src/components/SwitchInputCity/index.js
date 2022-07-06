import React, { useState } from "react";
import "./style.css";

export default function SwitchInputCity({ fontSize, fontWeight }) {
  const [inputSwitch, setInputSwitch] = useState(false);
  const [inputValue, setInputValue] = useState("Canada,Ottawa ");

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
        <div className="switch-input-value-city" style={{ fontSize, fontWeight }}>
          {inputValue}
        </div>
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
