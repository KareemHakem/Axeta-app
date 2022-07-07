import React, { useState } from "react";
import "./style.css";

export default function SwitchInputExperience(fontSize, fontWeight) {
  const [inputSwitch, setInputSwitch] = useState(false);
  const [inputValue, setInputValue] = useState("4");

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
        <div className="input-value-expe">{inputValue}</div>
      ) : (
        <div>
          <input
            className="input-expe-form"
            onChange={handleChangeValue}
            value={inputValue}
            placeholder="Experience"
            onKeyDown={handleKeyPress}
            type="number"
          />
        </div>
      )}
    </div>
  );
}
