import React, { useState } from "react";
import NavbarSlider from "../../components/NavbarSlider";
import girl from "../../assets/girl.jpg";

export default function Navbar({ handlePrint, setUserData, userData }) {
  const [file, setFile] = useState(girl);
  const [inputSwitch, setInputSwitch] = useState(false);
  const [inputValue, setInputValue] = useState("kareem");

  const [expe, setExse] = useState("");

  const [openInput, setOpenInput] = useState(false);
  const [openButton, setOpenButton] = useState(false);

  const handleExperience = (e) => {
    setExse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = {
      expe,
    };

    setUserData([...userData, value]);
    setExse("");
  };

  const handleDelate = (id) => {
    setUserData(userData.filter((user) => user.id !== id));
  };

  const handleOpenInput = () => {
    setOpenInput(!openInput);
  };

  const handleOpenDeleteButton = () => {
    setOpenButton(!openButton);
  };

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
        handleSwitchBtnExpeInput={handleSwitchInput}
        handleCreateInputExpe={handleSwitchInput}
        userData={userData}
        openInput={openInput}
        handleOpenDeleteButton={handleOpenDeleteButton}
        handleDelate={handleDelate}
        handleOpenInput={handleOpenInput}
        handleSubmit={handleSubmit}
        handleExperience={handleExperience}
        expe={expe}
      />
    </>
  );
}
