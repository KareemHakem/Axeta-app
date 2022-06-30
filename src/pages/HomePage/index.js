import React, { useState } from "react";

import Navbar from "../Navbar";

export default function HomePage({ handlePrint }) {
  const [nameValue, setNameValue] = useState();
  const [locationValue, setLocationValue] = useState();
  const [languageValue, setLanguageValue] = useState();

  const handleSaveValue = (e) => {
    setNameValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSaveLocationValue = (e) => {
    setLocationValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSaveLanguageValue = (e) => {
    setLanguageValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <Navbar
        handlePrint={handlePrint}
        handleSaveValue={handleSaveValue}
        nameValue={nameValue}
        locationValue={locationValue}
        languageValue={languageValue}
        handleSaveLocationValue={handleSaveLocationValue}
        handleSaveLanguageValue={handleSaveLanguageValue}
        // handleChangeImage={handleChangeImage}
        // handleClickImage={handleClickImage}
        // file={file}
        // openButton={openButton}
      />
    </>
  );
}
