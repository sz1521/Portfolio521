import 'core-js/es6/map';
import 'core-js/es6/set';

import React, { Component } from 'react';
import './dev.css';
let Scroll = require('react-scroll');
let scroller = Scroll.scroller;
let Element = Scroll.Element;

class Ux extends Component {
  render() {
    return (
      <article id="dev">
        <Element name="devScroll"></Element>
        <h1>Front-end coding</h1>
        <p>I am very motivated on working in UI/UX development roles in Agile enviroments (Scrum). I have a long experience in web development and design (started already in the 90's). I am also experienced in development with Microsoft technologies for over 10 years in many projects.</p>
        <p>Combined with my design experience, I am very capable as a <strong>UI/UX developer</strong> that gets best results to end users. In that role, I have worked in projects from Telecom to Healthcare.</p>
        <p>My specialties are application theming and UI control development: implementing style files and customized controls described in the design guidelines and integrating resulting theme library into the final product.</p>
        <h3>Web development</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>Bootstrap</li>
          <li>Angular 1 / 2+</li>
          <li>React</li>
          <li>Ionic 1 / 2</li>
          <li>Web graphics</li>
          <li>Web pages</li>
          <li>Web portals</li>
          <li>Desktop web apps</li>
          <li>Mobile web apps</li>
        </ul>
        <h3>WPF/XAML/.Net/C#</h3>
        <ul>
          <li>Advanced XAML UI coding</li>
          <li>Expert level XAML styling</li>
        </ul>
        <h3>JAVA</h3>
        <ul>
          <li>Swing, Java SE</li>
        </ul>
      </article>
    );
  }

}

export default Ux;