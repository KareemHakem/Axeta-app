import React from "react";
import SwitchInputExperience from "../SwitchInputExperience";
import "./style.css";

export default function Experience() {
  return (
    <div className="Experience-container">
      <h3>Experience</h3>
      <div className="flex-input-Experience">
        <p className="expe-text">-php</p>
        <SwitchInputExperience />
      </div>
      <div className="flex-input-Experience">
        <p className="expe-text">-javascript</p>
        <SwitchInputExperience />
      </div>
      <div className="flex-input-Experience">
        <p className="expe-text">-php</p>
        <SwitchInputExperience />
      </div>
    </div>
  );
}
