import React from "react";
import SwitchInputExperience from "../SwitchInputExperience";
import "./style.css";

export default function Experience({ userData }) {
  return (
    <div className="Experience-container">
      <h3>Experience</h3>
      {userData.map((expe) => (
        <>
          {expe === null ? (
            <></>
          ) : (
            <div className="flex-input-Experience">
              <p className="expe-text">- {expe.expe}</p>
              <p className="Experience-hover-text">
                <SwitchInputExperience /> years
              </p>
            </div>
          )}
        </>
      ))}
    </div>
  );
}
