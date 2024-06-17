import React from "react";
import "../styles/Navbar.css";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar-main-container" id="navbar">
      <div className="navbar-actual-container">
        <Link
          to="/#"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-link-item-home"
        >
          <div className="item-container">
            <i class="ri-html5-fill html-icon"></i>home.html
          </div>
        </Link>
        <Link
          to="/#"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-link-item"
        >
          <div className="item-container">
            <i class="ri-javascript-fill js-icon"></i>skills.js
          </div>
        </Link>
        <Link
          to="/#"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-link-item"
        >
          <div className="item-container">
            <i class="ri-java-line java-icon"></i>projects.java
          </div>
        </Link>
        <Link
          to="/#"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-link-item"
        >
          <div className="item-container">
            <i class="ri-braces-fill json-icon"></i>education.json
          </div>
        </Link>
        <Link
          to="/#"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-link-item"
        >
          <div className="item-container">
            <i class="ri-css3-fill css-icon"></i>experience.css
          </div>
        </Link>
        <Link
          to="/#"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-link-item"
        >
          <div className="item-container">
            <i class="ri-file-excel-2-fill xlsx-icon"></i>achievements.xlsx
          </div>
        </Link>
        <Link
          to="/#"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-link-item-contact"
        >
          <div className="item-container">
            <i class="ri-markdown-fill md-icon"></i>contact.md
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
