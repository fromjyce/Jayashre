import React from "react";
import "../styles/Navbar.css";
import "remixicon/fonts/remixicon.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-main-container" id="navbar">
      <div className="navbar-actual-container">
        <NavLink
          to="/Jayashre"
          className="navbar-link-item-home"
          activeClassName="active"
        >
          <div className="item-container">
            <i className="ri-html5-fill html-icon"></i>home.html
          </div>
        </NavLink>
        <NavLink
          to="/skills"
          className="navbar-link-item"
          activeClassName="active"
        >
          <div className="item-container">
            <i className="ri-javascript-fill js-icon"></i>skills.js
          </div>
        </NavLink>
        <NavLink
          to="/projects"
          className="navbar-link-item"
          activeClassName="active"
        >
          <div className="item-container">
            <i className="ri-java-line java-icon"></i>projects.java
          </div>
        </NavLink>
        <NavLink
          to="/education"
          className="navbar-link-item"
          activeClassName="active"
        >
          <div className="item-container">
            <i className="ri-braces-fill json-icon"></i>education.json
          </div>
        </NavLink>
        <NavLink
          to="/experience"
          className="navbar-link-item"
          activeClassName="active"
        >
          <div className="item-container">
            <i className="ri-css3-fill css-icon"></i>experience.css
          </div>
        </NavLink>
        <NavLink
          to="/achievements"
          className="navbar-link-item"
          activeClassName="active"
        >
          <div className="item-container">
            <i className="ri-file-excel-2-fill xlsx-icon"></i>achievements.xlsx
          </div>
        </NavLink>
        <NavLink
          to="/contact"
          className="navbar-link-item-contact"
          activeClassName="active"
        >
          <div className="item-container">
            <i className="ri-markdown-fill md-icon"></i>contact.md
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
