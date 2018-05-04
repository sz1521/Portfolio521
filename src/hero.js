import React, { Component } from 'react';
import './hero.css';
import IoSocialLinkedin from 'react-icons/lib/io/social-linkedin'
import IoIosEmail from 'react-icons/lib/io/ios-email'

class Hero extends Component {
    render() {
        return (
            <header>
                <div>
                    <img src={require('./img/sh.png')} style={{ width: 224, height: 224 }} />
                    <div id="heroContent">
                        <h2>S A M I <strong>H E I K K I N E N</strong></h2>
                        <p>Senior UX Specialist - Developer &#38; Designer 
                        &nbsp;&nbsp;<a href="mailto:sami521@gmail.com"><IoIosEmail /></a> 
                        &nbsp;&nbsp;<a href="http://linkedin.com/in/sami521" target="_blank"><IoSocialLinkedin /></a></p>
                        <h3>My objectives</h3>
                        <p>To work in a position I am able to
                        use my talents and long experience
                        to make the products greatly better
                        by coding very usable
                        applications (front end to back end) and/or designing great user experiences.</p>
                        <p>To keep on being curious about new
                        things and always learning.</p>
                        <h3>About me</h3>
                        <p>I am living in Oulu, Finland, where I moved in 2001 after finishing my computer science studies in Joensuu (1995-2000). I am born in Kajaani.
                        My hobbies are <a href="http://2snb.tk" target="_blank">music production</a> (music and videos), <a href="http://500px.com/sz1" target="_blank">photography</a> (and editing), visual design and web design (inc. <a href="http://graphicstyles.org" target="_blank">portals and forums</a>).
                        I am also interested in gadgets, games, finance, psychology and art.</p>

                        <p className="tags">
                            UI software, UI design, front-end, interaction design, concept design, usability, graphic design, user experience, requirements,
                            use cases, user stories, Photoshop, Sketch, html, css, Angular, React, UI graphics, visual styles, application skinning, UX architecture, XAML, Expression Blend, prototyping, desktop, mobile, web
                        </p>
                    </div>
                </div>
            </header>
        );
    }

}

export default Hero;