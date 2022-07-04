import React from "react";
import "./style.css";

export default function CreateChops({
  inputSwitch, 
  handleChangeUserExpeValue,
  inputExpeUserValue,
  handleKeyExpePress,
  handleSwitchBtnExpeInput,
  handleCreateInputExpe,
}) {
  return (
    <div className="user-expe-container">
      <div className="chip-user-expe">{inputExpeUserValue}</div>
      <div onClick={handleSwitchBtnExpeInput}>
        {!inputSwitch ? (
          <button onClick={handleCreateInputExpe} className="btn-create-chip">
            +
          </button>
        ) : (
          <>
            <input
              type="text"
              value={inputExpeUserValue}
              onChange={(e) => handleChangeUserExpeValue(e)}
              className="input-expe-user"
              onKeyDown={handleKeyExpePress}
            />
          </>
        )}
      </div>
    </div>
  );
}
