import React, { useState } from "react";
import NavbarSlider from "../../components/NavbarSlider";

export default function Navbar({ handlePrint }) {
  const [openButton, setOpenButton] = useState(false);
  const [file, setFile] = useState();

  const handleClickImage = () => {
    setOpenButton(!openButton);
  };

  const handleChangeImage = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <NavbarSlider
        handlePrint={handlePrint}
        handleChangeImage={handleChangeImage}
        handleClickImage={handleClickImage}
        file={file}
        openButton={openButton}
        // handleCreateShip={handleCreateShip}
        // handleChangeValue={handleChangeValue}
        // handleSwitchInput={handleSwitchInput}
        // value={inputValue}
        // inputSwitch={inputSwitch}
        // handleKeyPress={handleKeyPress}
        // handleChangeValue={handleChangeValue}
        // inputValue={inputShipValue}
        //handleKeyPress={handleKeyPress}
      />
    </>
  );
}
