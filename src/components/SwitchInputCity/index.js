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

  var nameRegex = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/@#]/;
  const bool = nameRegex.test(inputValue);

  return (
    <div onClick={handleSwitchInput}>
      {!inputSwitch ? (
        <div
          className="switch-input-value-city"
          style={{ fontSize, fontWeight }}
        >
          {inputValue}
        </div>
      ) : (
        <div className="display-input">
          <input
            className="input-info-form"
            onChange={handleChangeValue}
            value={inputValue}
            onKeyDown={handleKeyPress}
          />

          {bool ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p className="error-logo">X</p>
              <p style={{ color: "red", marginLeft: 5 }}>Error</p>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p className="logo"> ✔ </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
