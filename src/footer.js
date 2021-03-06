import "core-js/es6/map";
import "core-js/es6/set";

import React from "react";
import "./footer.css";
import IoSocialLinkedin from "react-icons/lib/io/social-linkedin";
import IoIosEmail from "react-icons/lib/io/ios-email";
import IoSocialGithub from "react-icons/lib/io/social-github";

const Footer = props => {
  return (
    <footer>
      <a href={props.contactLink}>
        <IoIosEmail /> Contact me
      </a>
      <a href={props.linkedinLink} target="_blank">
        <IoSocialLinkedin /> My Linkedin profile
      </a>
      <a href={props.githubLink} target="_blank">
        <IoSocialGithub /> My GitHub projects
      </a>
    </footer>
  );
};

export default Footer;
