import React from "react";

import SwitchInputName from "../SwitchInputName";
import SwitchInput from "../SwitchInput";
import CreateChips from "../CreateChips";

import Printer from "../../assets/printer.png";
import Flag from "../../assets/flag.png";
import replace from "../../assets/replace.png";

import "react-edit-text/dist/index.css";
import "./style.css";
import UploadPhoto from "../UploadPhoto";

export default function NavbarSlider({
  handlePrint,
  handleChangeImage,
  handleClickImage,
  openButton,
  handleChangeUserExpeValue,
  inputExpeUserValue,
  handleKeyExpePress,
  handleSwitchBtnExpeInput,
  inputSwitch,
  file,
  handleCreateInputExpe,
}) {
  return (
    <div className="navbar-slider-container">
      <div className="left-side-container">
        <div className="navbar-image-container">
          {/* {!openButton ? (
            <></>
          ) : (
            <input
              type="file"
              onChange={handleChangeImage}
              className="btn-replace-image"
            />
          )}
          <img onClick={handleClickImage} src={file} alt="imageUser" /> */}
          <UploadPhoto />
        </div>
        <div className="navbar-info-user-container">
          <SwitchInputName fontSize={40} fontWeight={500} />
          <SwitchInput fontSize={20} fontWeight={100} />
          <div className="flex-wrap">
            <img src={Flag} alt="flag-img" />
            <SwitchInput
              style={{ marginLeft: -10 }}
              fontSize={20}
              fontWeight={100}
            />
          </div>
          <CreateChips
            handleChangeUserExpeValue={handleChangeUserExpeValue}
            inputExpeUserValue={inputExpeUserValue}
            handleKeyExpePress={handleKeyExpePress}
            handleSwitchBtnExpeInput={handleSwitchBtnExpeInput}
            handleCreateInputExpe={handleCreateInputExpe}
            inputSwitch={inputSwitch}
          />
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
