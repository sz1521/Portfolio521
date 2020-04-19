import "core-js/es6/map";
import "core-js/es6/set";

import React, { Component } from "react";
import "./menu.css";
import IoIosCloudDownload from "react-icons/lib/io/ios-cloud-download";

const Scroll = require("react-scroll");
const scroller = Scroll.scroller;
const scroll = Scroll.animateScroll;

class Menu extends Component {
  render() {
    return (
      <nav>
        <ul id="menubar" className="backdrop-blur">
          <li>
            <a
              aria-label="About Sami Heikkinen"
              onClick={() =>
                scroll.scrollToTop({ duration: 1000, smooth: true, spy: false })
              }
            >
              About
            </a>
          </li>
          <li>
            <a
              aria-label="Sami as a frontend developer"
              onClick={() =>
                scroller.scrollTo("devScroll", {
                  duration: 1000,
                  smooth: true,
                  spy: false,
                  offset: -70
                })
              }
            >
              Dev
            </a>
          </li>
          <li>
            <a
              aria-label="Sami as a ux designer"
              onClick={() =>
                scroller.scrollTo("uxScroll", {
                  duration: 1000,
                  smooth: true,
                  spy: false,
                  offset: -70
                })
              }
            >
              UX
            </a>
          </li>
          <li className="left">
            <a href={this.props.cvLink}>
              <span>
                <IoIosCloudDownload /> CV
              </span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
