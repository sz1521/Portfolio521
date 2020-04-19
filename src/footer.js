import "core-js/es6/map";
import "core-js/es6/set";

import React, { Component } from "react";
import "./footer.css";
import IoSocialLinkedin from "react-icons/lib/io/social-linkedin";
import IoIosEmail from "react-icons/lib/io/ios-email";
import IoCode from "react-icons/lib/io/code";
import IoSocialHtml5 from "react-icons/lib/io/social-html5";
import IoSocialGithub from "react-icons/lib/io/social-github";

class Footer extends Component {
  render() {
    return (
      <footer>
        <a href={this.props.contactLink}>
          <IoIosEmail /> Contact me
        </a>
        <a href={this.props.linkedinLink} target="_blank">
          <IoSocialLinkedin /> My Linkedin profile
        </a>
        <a href={this.props.githubLink} target="_blank">
          <IoSocialGithub /> My GitHub projects
        </a>
      </footer>
    );
  }
}

export default Footer;
