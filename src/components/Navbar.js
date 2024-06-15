import React from "react";
import "../styles/Navbar.css";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-scroll";

function Navbar() {
    return (
      <div className="navbar-main-container" id="navbar-container">
        <div className="navbar-actual-container">
          <Link
            to="/#"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link-item"
          >
            <div className="nac-item home-button" id="home-button">
              <ul className="nac-item-list home-list">
                <li className="nac-item-list-item home-icon">
                  <i class="ri-html5-fill html-icon"></i>
                </li>
                <li className="nac-item-list-item home-name">home.html</li>
              </ul>
            </div>
          </Link>
          <Link
            to="/#"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link-item"
          >
            <div className="nac-item skills-button" id="skills-button">
              <ul className="nac-item-list skills-list">
                <li className="nac-item-list-item skills-icon">
                  <i class="ri-javascript-fill js-icon"></i>
                </li>
                <li className="nac-item-list-item skills-name">skills.js</li>
              </ul>
            </div>
          </Link>
          <Link
            to="/#"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link-item"
          >
            <div className="nac-item education-button" id="education-button">
              <ul className="nac-item-list education-list">
                <li className="nac-item-list-item education-icon">
                  <i class="ri-java-line java-icon"></i>
                </li>
                <li className="nac-item-list-item education-name">
                  education.java
                </li>
              </ul>
            </div>
          </Link>
          <Link
            to="/#"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link-item"
          >
            <div className="nac-item projects-button" id="projects-button">
              <ul className="nac-item-list projects-list">
                <li className="nac-item-list-item projects-icon">
                  <i class="ri-braces-fill json-icon"></i>
                </li>
                <li className="nac-item-list-item projects-name">
                  projects.json
                </li>
              </ul>
            </div>
          </Link>
          <Link
            to="/#"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link-item"
          >
            <div className="nac-item experience-button" id="experience-button">
              <ul className="nac-item-list experience-list">
                <li className="nac-item-list-item experience-icon">
                  <i class="ri-css3-fill css-icon"></i>
                </li>
                <li className="nac-item-list-item experience-name">
                  experience.css
                </li>
              </ul>
            </div>
          </Link>
          <Link
            to="/#"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link-item"
          >
            <div
              className="nac-item achievement-button"
              id="achievement-button"
            >
              <ul className="nac-item-list achievement-list">
                <li className="nac-item-list-item achievement-icon">
                  <i class="ri-file-excel-2-fill xlsx-icon"></i>
                </li>
                <li className="nac-item-list-item achievement-name">
                  achievements.xlsx
                </li>
              </ul>
            </div>
          </Link>
          <Link
            to="/#"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link-item"
          >
            <div className="nac-item contact-button" id="contact-button">
              <ul className="nac-item-list contact-list">
                <li className="nac-item-list-item contact-icon">
                  <i class="ri-markdown-fill md-icon"></i>
                </li>
                <li className="nac-item-list-item contact-name">contact.md</li>
              </ul>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default Navbar;
