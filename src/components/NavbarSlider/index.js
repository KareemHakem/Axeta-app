import React from "react";

import SwitchInputName from "../SwitchInputName";
import SwitchInput from "../SwitchInput";
import SwitchInputCity from "../SwitchInputCity";
import CreateChips from "../CreateChips";
import UploadPhoto from "../UploadPhoto";

import Printer from "../../assets/printer.png";
import Flag from "../../assets/flag.png";

import "react-edit-text/dist/index.css";
import "./style.css";

export default function NavbarSlider({
  handlePrint,
  users,
  userData,
  openInput,
  handleOpenDeleteButton,
  handleDelate,
  handleOpenInput,
  handleSubmit,
  handleExperience,
  openButton,
  expe,
}) {
  return (
    <div className="navbar-slider-container">
      <div className="left-side-container">
        <div className="navbar-image-container">
          <UploadPhoto />
        </div>
        <div className="navbar-info-user-container">
          <SwitchInputName fontSize={40} fontWeight={500} />
          <SwitchInputCity />
          <div className="flex-wrap">
            <img src={Flag} alt="flag-img" />
            <SwitchInput style={{ marginLeft: -10 }} />
          </div>
          <CreateChips
            users={users}
            userData={userData}
            openInput={openInput}
            handleOpenDeleteButton={handleOpenDeleteButton}
            handleDelate={handleDelate}
            handleOpenInput={handleOpenInput}
            handleSubmit={handleSubmit}
            handleExperience={handleExperience}
            openButton={openButton}
            expe={expe}
          />
        </div>

        <div className="print-container">
          <img src={Printer} alt="printer-img" className="printer-image" />
          <button className="print-btn" type="button" onClick={handlePrint}>
            Print this page
          </button>
        </div>
      </div>
    </div>
  );
}
