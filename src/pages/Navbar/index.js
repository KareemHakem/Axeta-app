import React from "react";
import NavbarSlider from "../../components/NavbarSlider";

export default function Navbar({ handlePrint }) {
  return (
    <>
      <NavbarSlider handlePrint={handlePrint} />
    </>
  );
}
