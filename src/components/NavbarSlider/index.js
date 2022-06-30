import React from "react";
import { EditTextarea } from "react-edit-text";

// import Image from "../../assets/kareem.jpg";
// import Replace from "../../assets/replace.png";
import Printer from "../../assets/printer.png";

import "react-edit-text/dist/index.css";
import "./style.css";

export default function NavbarSlider({
  handlePrint,
  handleSaveNameValue,
  handleSaveLocationValue,
  handleSaveLanguageValue,
  // handleChangeImage,
  // handleClickImage,
  nameValue,
  locationValue,
  languageValue,
  // openButton,
  // file,
}) {
  const [openButton, setOpenButton] = React.useState(false);
  const [file, setFile] = React.useState();
  const handleClickImage = () => {
    setOpenButton(!openButton);
  };
  const handleChangeImage = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
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
        <h3>
          <EditTextarea
            value={nameValue}
            onChange={handleSaveNameValue}
            className="form-edit-name"
          />
        </h3>

        <p className="navbar-info-location">
          <EditTextarea
            value={locationValue}
            onChange={handleSaveLocationValue}
            className="form-edit-name"
          />
        </p>
        <p className="navbar-info-language">
          <EditTextarea
            value={languageValue}
            onChange={handleSaveLanguageValue}
            className="form-edit-name"
          />
        </p>

        <div className="navbar-chip-experience">
          <div className="navbar-chip">
            <p className="navbar-experience">javaScript</p>
          </div>
          <button className="button-add-chip">+</button>
        </div>
      </div>
      <div className="btn-container">
        <img src={Printer} alt="printer-img" className="printer-image" />
        <button className="print-btn" type="button" onClick={handlePrint}>
          Print this page
        </button>
      </div>
    </div>
  );
}
