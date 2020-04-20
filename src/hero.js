import "core-js/es6/map";
import "core-js/es6/set";

import React from "react";
import "./hero.css";
import IoSocialLinkedin from "react-icons/lib/io/social-linkedin";
import IoIosEmail from "react-icons/lib/io/ios-email";

const Hero = props => {
  return (
    <header>
      <div>
        <div id="authorImg">
          <img src={require("./img/sh.png")} />
        </div>
        <div id="heroContent">
          <h2 className="flexrow">
            <span>S A M I</span>&nbsp;
            <span>
              <strong>H E I K K I N E N</strong>
            </span>
          </h2>
          <p className="flexrow">
            <span>Lead Software Developer</span>&nbsp;-&nbsp;
            <span>
              <strong>Developer &#38; Designer - ScM &#38; Lead</strong>
              &nbsp;&nbsp;
            </span>
            <span id="icons">
              <a href={props.contactLink}>
                <IoIosEmail />
              </a>
              <a href={props.linkedinLink} target="_blank">
                <IoSocialLinkedin />
              </a>
            </span>
          </p>
          <h3>My objectives</h3>
          <p>
            To work in a position I am able to use my talents and long
            experience to make the products greatly better by{" "}
            <strong>coding</strong> very usable applications (front end to back
            end), <strong>designing</strong> great user experiences and/or
            making things happen in product management and other agile roles.
          </p>
          <p>To keep on being curious about new things and always learning.</p>
          <h3>About me</h3>
          <p>
            I am living in Oulu, Finland, where I moved in 2001 after finishing
            my computer science studies in Joensuu (1995-2000). I am born in
            Kajaani. My hobbies are{" "}
            <a href="https://soundcloud.com/2snb/tracks" target="_blank">
              music production
            </a>{" "}
            (music, videos and animations),{" "}
            <a href="http://500px.com/sz1" target="_blank">
              photography
            </a>{" "}
            (and editing), visual design and web design (inc.{" "}
            <a href="http://ouluttaret.fi" target="_blank">
              WordPress
            </a>
            ). I am also interested in gadgets, games, finance, psychology and
            art. And newly, 8 ball (billiard)!
          </p>

          <p className="tags">
            UI software, UI design, front-end, interaction design, concept
            design, usability, graphic design, user experience, requirements,
            scrum, scm, lead, use cases, user stories, Photoshop, Sketch, html,
            css, Angular, React, UI graphics, visual styles, application
            skinning, UX architecture, XAML, Expression Blend, prototyping,
            desktop, mobile, web
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
