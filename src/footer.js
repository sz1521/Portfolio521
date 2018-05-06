import 'core-js/es6/map';
import 'core-js/es6/set';

import React, { Component } from 'react';
import './footer.css';
import IoSocialLinkedin from 'react-icons/lib/io/social-linkedin'
import IoIosEmail from 'react-icons/lib/io/ios-email'
import IoCode from 'react-icons/lib/io/code'
import IoSocialHtml5 from 'react-icons/lib/io/social-html5'
import IoSocialGithub from 'react-icons/lib/io/social-github'

class Footer extends Component {
    render() {
        return (
            <footer>
                <p><IoIosEmail/> <a href={this.props.contactLink}>Contact me</a></p>
                <p><IoSocialLinkedin/> <a href={this.props.linkedinLink} target="_blank">My Linkedin profile</a></p>
                <p><IoSocialGithub/> <a href={this.props.githubLink} target="_blank">Code at GitHub</a></p>            
                <p><IoCode/> React + Redux + WebPack</p>
                <p><IoSocialHtml5/> Html5 + CSS3 + JS / ES6+ </p>
            </footer>
        );
    }

}

export default Footer;