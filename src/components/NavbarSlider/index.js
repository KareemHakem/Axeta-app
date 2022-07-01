import React, { useState } from "react";
import SwitchInput from "../SwitchInput";

import Printer from "../../assets/printer.png";
import Flag from "../../assets/flag.png";
import "react-edit-text/dist/index.css";
import "./style.css";

export default function NavbarSlider({
  handlePrint,
  handleChangeImage,
  handleClickImage,
  openButton,
  //   handleCreateShip,
  //   createInput,
  file,

  //   handleChangeValue,
  //   inputValue,
  //   handleKeyPress,
}) {
  const [createInput, setCreateInput] = useState(false);
  const [inputShipValue, setInputShipValue] = useState("");

  const handleCreateShip = () => {
    setCreateInput(!createInput);
  };

  const handleChangeValue = (e) => {
    setInputShipValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setCreateInput(false);
    }
  };
  return (
    <div className="navbar-slider-container">
      {!openButton ? (
        <input
          type="file"
          onChange={handleChangeImage}
          className="btn-replace-image"
        />
      ) : (
        <></>
      )}

      <div className="navbar-image-container">
        <img onClick={handleClickImage} src={file} alt="imageUser" />
      </div>

      <div className="navbar-info-user-container">
        <SwitchInput fontSize={30} fontWeight={500} />
        <SwitchInput fontSize={14} fontWeight={100} />
        <div className="flex-wrap">
          <img src={Flag} alt="flag-img" />
          <SwitchInput
            style={{ marginLeft: -10 }}
            fontSize={15}
            fontWeight={100}
          />
        </div>
        <div className="ship-container">
          {!createInput ? (
            <>
              <button
                className="create-input-button"
                onClick={handleCreateShip}
              >
                +
              </button>
              <p className="ship-experience">{inputShipValue}</p>
            </>
          ) : (
            <input
              className="input-form-pro"
              onChange={handleChangeValue}
              onKeyDown={handleKeyPress}
            />
          )}
        </div>
      </div>
      <div className="print-container">
        <img src={Printer} alt="printer-img" className="printer-image" />
        <button className="print-btn" type="button" onClick={handlePrint}>
          Print this page
        </button>
      </div>
    </div>
  );
}
