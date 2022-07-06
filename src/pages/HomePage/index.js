import React, { useState } from "react";

import Availabilitys from "../../components/Availability";
import Experience from "../../components/Experience";
import Portfolio from "../../components/Portfolio";
import QuoteText from "../../components/QuoteText";
import SampleCode from "../../components/SampleCode";

import Navbar from "../Navbar";

export default function HomePage({ handlePrint }) {
  const [userData, setUserData] = useState(users);

  return (
    <div className="flex-direction">
      <Navbar
        userData={userData}
        setUserData={setUserData}
        handlePrint={handlePrint}
      />
      <div className="flex-wrap" style={{ marginTop: 200, marginLeft: 100 }}>
        <Portfolio />
        <Experience userData={userData} />
        <SampleCode />
        <Availabilitys />

        <QuoteText
          text="The only true wisdom is in knowing you know nothing..."
          header="The Most Amaizing..."
        />
        <QuoteText
          text="There is only one good, knowledge, and one evil, ignorance."
          header="In clients I look for..."
        />
        <QuoteText
          text="There is only one good, knowledge, and one evil, ignorance."
          header="In clients I look for..."
        />
      </div>
    </div>
  );
}

const users = [
  {
    id: 1,
    expe: "Java Script",
  },
];
