import React, { Component } from 'react';
import './menu.css';
let Scroll = require('react-scroll');
let scroller = Scroll.scroller;
var scroll = Scroll.animateScroll;

class Menu extends Component {
    render() {
        return (
            <nav>
                <ul id="menubar" className="backdrop-blur">
                    <li><a onClick={() => scroll.scrollToTop({duration: 1000, smooth: true})}>About</a></li>                    
                    <li><a onClick={() => scroller.scrollTo('devScroll',{duration: 1000, smooth: true, offset: -80})}>Dev</a></li>                    
                    <li><a onClick={() => scroller.scrollTo('uxScroll',{duration: 1000, smooth: true, offset: -80})}>UX</a></li>
                    <li className="left"><a href="https://drive.google.com/open?id=1Our07xMStO5OOBikCU63SG8hKG95RzKj">CV</a></li>
                </ul>
            </nav>
        );
    }

}

export default Menu;