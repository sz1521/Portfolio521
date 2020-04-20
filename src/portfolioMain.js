import "core-js/es6/map";
import "core-js/es6/set";

import React from "react";
import "./portfolioMain.css";
import Menu from "./menu";
import Hero from "./hero";
import Ux from "./ux";
import Dev from "./dev";
import Footer from "./footer";

const PortfolioMain = () => {
  const cvAddress =
    "https://drive.google.com/open?id=1Our07xMStO5OOBikCU63SG8hKG95RzKj";
  const gitHubAddress = "http://github.com/sz1521";
  const linkedinAddress = "http://linkedin.com/in/sami521";
  const contactAdress = "mailto:sami521@gmail.com";

  return (
    <div id="layout">
      <Menu cvLink={cvAddress} />
      <div id="content">
        <Hero linkedinLink={linkedinAddress} contactLink={contactAdress} />
        <Dev />
        <Ux />
        <Footer
          githubLink={gitHubAddress}
          linkedinLink={linkedinAddress}
          contactLink={contactAdress}
        />
      </div>
    </div>
  );
};

export default PortfolioMain;
