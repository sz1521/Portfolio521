import React, { Component } from 'react';
import './portfolioMain.css';
import Menu from "./menu";
import Hero from "./hero";
import Ux from "./ux";
import Dev from "./dev";
import Footer from "./footer"

class PortfolioMain extends Component {
  render() {
    return (
      <div id="layout">
        <a name="start">&nbsp;</a>
        <Menu />
        <div id="content">
          <Hero />
          <Dev />
          <Ux />
          <Footer />
        </div>
      </div>
    );
  }
}

export default PortfolioMain;