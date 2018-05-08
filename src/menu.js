import 'core-js/es6/map';
import 'core-js/es6/set';

import React, { Component } from 'react';
import './menu.css';
import IoIosCloudDownload from 'react-icons/lib/io/ios-cloud-download';

let Scroll = require('react-scroll');
let scroller = Scroll.scroller;
var scroll = Scroll.animateScroll;

class Menu extends Component {
    render() {
        return (
            <nav>
                <ul id="menubar" className="backdrop-blur">
                    <li><a onClick={() => scroll.scrollToTop({duration: 1000, smooth: true, spy: false})}>About</a></li>                    
                    <li><a onClick={() => scroller.scrollTo('devScroll',{duration: 1000, smooth: true, spy: false, offset: -70})}>Dev</a></li>                    
                    <li><a onClick={() => scroller.scrollTo('uxScroll',{duration: 1000, smooth: true, spy: false, offset: -70})}>UX</a></li>
                    <li className="left"><a href={this.props.cvLink}><span><IoIosCloudDownload/> CV</span></a></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;