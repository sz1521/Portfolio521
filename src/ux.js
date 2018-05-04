import React, { Component } from 'react';
import './ux.css';
let Scroll = require('react-scroll');
let scroller = Scroll.scroller;
let Element = Scroll.Element;

class Ux extends Component {
    render() {
        return (
            <article id="ux">
                <Element name="uxScroll"></Element>
                <h1>UX Design</h1>
                <p>I have over 15 years of professional experience in UI/UX design. My passions are usability and visual quality of user interfaces (<strong>desktop</strong>, <strong>web</strong>, <strong>mobile</strong>), I want to provide the best user experience available for end users.</p>
                <p>I have been working long time in UI projects from design to implementation, so I am understanding the software architecture and development process easily. I always make only implementable specifications: I can give guidance and coding help how to implement plans with a prototype into a final product.</p>
                <p>I also have a strong graphic design experience. My specialty is application theming and UI controls: implementing style files from the design guidelines and integrating resulting theme into the final product.</p> 
                <p>I am also very motived in working with agile, scrum projects and couching team in a role of Scrum Master.</p>
                <p>Latest work was participating in very large health care information system work by making designs and giving gudance for tens of products at once. New products and features are coming in very fast-pased all the time and I really needed to use my talent of understanding new things fast.</p>
                <h2>How I work in agile projects</h2> 
                <h3>Design</h3> 
                <ul>
                    <li><strong>Personas,&nbsp;</strong><strong>use cases</strong> and <strong>user research</strong> as input for design</li>
                    <li><strong>Iterative </strong>doing <strong>wire frames</strong> (UI interaction design and testing), <strong>UI specs</strong> (for implementation)</li>
                    <li><strong>Visual design</strong> (icons, graphics)</li>
                    <li>Testing new UI features with users using <strong>light prototypes</strong> (local or online, Sketch / Invision)</li>
                    <li>Participating customer meetings (discussion about <strong>user requirements</strong>)</li>
                    <li>Validate design by <strong>user research</strong></li>
                    <li>Daily co-operation with other <strong>UX team members</strong></li></ul>
                <h3>Guidance</h3>
                <ul>
                    <li><strong>Guiding developers</strong> to implement UI through whole project</li><li>Co-operation in UI development by<strong> iterative design and development</strong>:<br />Participating from a draft to a final product, changes are welcome during the process</li>
                    <li>Helping in <strong>UI problem solving</strong> and fixing (sometimes involves advanced UI coding tasks)</li>
                    <li><strong>Validating UI</strong> when some UI part is ready (for testing)</li><li>Validation by <strong>continues UI testing</strong></li>
                    <li>Participating in sprint demos</li>
                </ul>
                <h3>Reviewing</h3>
                <ul>
                    <li><strong>UX review </strong>after a feature specification is ready for approving</li>
                    <li>UX review after implementation is almost ready</li>
                    <li><strong>Usability / user testing</strong></li><li>Participating in <strong>validation testing</strong></li>
                    <li>Doing automatic usage <strong>data research</strong></li>
                </ul>
                <h2>Domain knowledge, example customers &amp; end users</h2><h3>Professional</h3>
                <ul>
                    <li><strong>Telecom</strong>: Nokia (network admins, mobile phone service professionals)</li>
                    <li><strong>Healthcare</strong>: Public healthcare (doctors, nurses, citizens)</li>
                    <li><strong>Entertainment</strong>: Yle (citizens), Nokia (citizens)</li>
                </ul>
                <h3>Hobbyish</h3>
                <ul
                    ><li>Graphic software</li><li>Music software</li><li>Games</li>
                </ul>
            </article>
        );
    }

}

export default Ux;