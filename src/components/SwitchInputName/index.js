import React, { useState } from "react";
import "./style.css";

export default function SwitchInputName({ fontSize, fontWeight }) {
  const [inputSwitch, setInputSwitch] = useState(false);
  const [inputValue, setInputValue] = useState("joury");

  const handleChangeValue = (e) => {
    if (!nameRegex.test(inputValue)) {
      setInputValue(e.target.value);
    } else {
      Error("Error");
    }
  };
  const handleSwitchInput = () => {
    setInputSwitch(true);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setInputSwitch(false);
    }
  };

  var nameRegex = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/@#]/;
  const bool = nameRegex.test(inputValue);

  return (
    <div onClick={handleSwitchInput}>
      {!inputSwitch ? (
        <div
          className="switch-input-value-name"
          style={{ fontSize, fontWeight }}
        >
          {inputValue}
        </div>
      ) : (
        <input
          className="input-info-name-form"
          onChange={handleChangeValue}
          value={inputValue}
          onKeyDown={handleKeyPress}
        />
      )}
    </div>
  );
}
