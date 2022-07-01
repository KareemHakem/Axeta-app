import React from "react";

import Availabilitys from "../../components/Availability";
import Experience from "../../components/Experience";
import Portfolio from "../../components/Portfolio";
import QuoteText from "../../components/QuoteText";
import SampleCode from "../../components/SampleCode";

import Navbar from "../Navbar";

export default function HomePage({ handlePrint }) {
  return (
    <div className="flex-direction">
      <Navbar handlePrint={handlePrint} />
      <div
        className="flex-direction"
        style={{ marginTop: 200, marginLeft: 100 }}
      >
        <div className="flex-wrap">
          <Portfolio />
          <Experience />
          <SampleCode />
          <Availabilitys />
        </div>

        <div className="flex-wrap">
          <QuoteText
            text="The only true wisdom is in knowing you know nothing..."
            header="The Most Amaizing..."
          />
          <QuoteText
            text="There is only one good, knowledge, and one evil, ignorance."
            header="In clients I look for..."
          />
        </div>
      </div>
    </div>
  );
}
