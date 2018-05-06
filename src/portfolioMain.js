import 'core-js/es6/map';
import 'core-js/es6/set';

import React, { Component } from 'react';
import './portfolioMain.css';
import Menu from "./menu";
import Hero from "./hero";
import Ux from "./ux";
import Dev from "./dev";
import Footer from "./footer"

class PortfolioMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cvAddress: "https://drive.google.com/open?id=1Our07xMStO5OOBikCU63SG8hKG95RzKj",
      gitHubAddress: "http://github.com/sz1521/Portfolio521",
      linkedinAddress: "http://linkedin.com/in/sami521",
      contactAdress: "mailto:sami521@gmail.com"
    }
  }

  render() {
    return (
      <div id="layout">
        <Menu cvLink={this.state.cvAddress} />
        <div id="content">
          <Hero linkedinLink={this.state.linkedinAddress} contactLink={this.state.contactAdress} />
          <Dev />
          <Ux />
          <Footer githubLink={this.state.gitHubAddress} linkedinLink={this.state.linkedinAddress} contactLink={this.state.contactAdress}/>
        </div>
      </div>
    );
  }
}

export default PortfolioMain;