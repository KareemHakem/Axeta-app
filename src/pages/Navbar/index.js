import React, { useState } from "react";
import NavbarSlider from "../../components/NavbarSlider";
import girl from "../../assets/girl.jpg";

export default function Navbar({ handlePrint }) {
  const [openButton, setOpenButton] = useState(false);
  const [file, setFile] = useState(girl);
  const [inputSwitch, setInputSwitch] = useState(false);
  const [inputValue, setInputValue] = useState("kareem");
  const [experienceValue, setExperienceValue] = useState("");

  const handleChangeValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleSwitchInput = () => {
    setInputSwitch(true);
  };

  const handleClickImage = () => {
    setOpenButton(!openButton);
  };

  const handleChangeImage = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setInputSwitch(false);
    }
  };

  const handleKeyPressExpe = (e) => {
    if (e.key === "Enter") {
      setInputSwitch(false);
      experienceValue("");
    }
  };

  const handleChangeUserExpeValue = (e) => {
    setExperienceValue(e.target.value);
  };
  return (
    <>
      <NavbarSlider
        handlePrint={handlePrint}
        handleChangeImage={handleChangeImage}
        handleClickImage={handleClickImage}
        file={file}
        openButton={openButton}
        handleSwitchInput={handleSwitchInput}
        handleChangeValue={handleChangeValue}
        inputSwitch={inputSwitch}
        handleKeyPress={handleKeyPress}
        inputValue={inputValue}
        handleChangeUserExpeValue={handleChangeUserExpeValue}
        inputExpeUserValue={experienceValue}
        handleKeyExpePress={handleKeyPressExpe}
        handleSwitchBtnExpeInput={handleSwitchInput}
        handleCreateInputExpe={handleSwitchInput}
      />
    </>
  );
}
