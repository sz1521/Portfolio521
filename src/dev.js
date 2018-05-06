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
        <p>I am very motivated to work in UI/UX development roles in Agile enviroments (Scrum). I have a long experience in web development and design (started already in the 90's). I am also experienced in Microsoft technologies for over 10 years.</p>
        <p>Combined with my design experience, I am very capable as a UI/UX developer that gets best results to end users.</p>
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