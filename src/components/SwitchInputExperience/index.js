import React, { useState } from "react";

import "./style.css";

export default function SwitchInputExperience() {
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
        <div className="display-input">
          <input
            className="input-expe-form"
            type="number"
            onChange={handleChangeValue}
            value={inputValue}
            onKeyDown={handleKeyPress}
          />
        </div>
      )}
    </div>
  );
}
