import React, { useState } from "react";
import "./style.css";

export default function SwitchInputName({ fontSize, fontWeight }) {
  const [inputSwitch, setInputSwitch] = useState(false);
  const [inputValue, setInputValue] = useState("joury");
  const [errorInput, setErrorInput] = useState(false);

  const handleChangeValue = (e) => {
    setInputValue(e.target.value);
    setErrorInput(!errorInput);
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

  console.log("bool", bool);

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
              <p style={{ color: "red", marginLeft: 5, marginTop: 10 }}>
                Error
              </p>
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
