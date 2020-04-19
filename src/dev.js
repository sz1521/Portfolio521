import "core-js/es6/map";
import "core-js/es6/set";
import React, { Component } from "react";
import "./dev.css";
import IoSocialCss3 from "react-icons/lib/io/social-css3";
import IoCode from "react-icons/lib/io/code";
import IoCoffee from "react-icons/lib/io/coffee";

let Scroll = require("react-scroll");
let scroller = Scroll.scroller;
let Element = Scroll.Element;
class Dev extends Component {
  render() {
    return (
      <article id="dev">
        <Element name="devScroll"></Element>
        <h2>Front-end coding</h2>
        <p>
          I am very motivated on working in UI/UX development roles in Agile
          environments (Scrum). I have a long experience in web development and
          design (started already in the 90's). I am also experienced in
          development with Microsoft technologies for over 10 years in many
          projects.
        </p>
        <p>
          Combined with my design experience, I am very capable as a{" "}
          <strong>UI/UX Developer</strong> that gets best results for end users.
          In that role, I have worked in projects from Telecom to Healthcare and
          Government.
        </p>
        <p>
          My specialties are fluent co-operation with graphic and UX designers
          and making application theming and UI controls: implementing style
          files and customized controls described in the design guidelines and
          integrating resulting theme library into the final product.
        </p>
        <p>
          I am also very motivated to work in <strong>Lead</strong>,{" "}
          <strong>Scrum Master</strong> and <strong>Product Owner</strong>{" "}
          roles.
        </p>
        <p>
          Recently I have been am working with different projects as an React
          frontend developer: for example in a AI data visualization,
          networking/hr application and education open source systems related
          projects.
        </p>
        <h3>
          <IoSocialCss3 /> Web development
        </h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>Node.js</li>
          <li>Bootstrap</li>
          <li>Angular 1 / 2+</li>
          <li>Ionic 1 / 2</li>
          <li>Web graphics and animations</li>
          <li>Web pages</li>
          <li>Web portals</li>
          <li>Desktop web apps</li>
          <li>Mobile web apps</li>
        </ul>
        <h3>
          <IoCode /> Microsoft technology
        </h3>
        <ul>
          <li>.Net</li>
          <li>C#</li>
          <li>WPF</li>
          <li>XAML (Advanced UI coding, expert level XAML styling)</li>
        </ul>
        <h3>
          <IoCoffee /> Backend and tools
        </h3>
        <ul>
          <li>Java</li>
          <li>NodeJS</li>
          <li>Maven</li>
          <li>Docker</li>
          <li>Jira</li>
          <li>Jenkins</li>
        </ul>
      </article>
    );
  }
}

export default Dev;
