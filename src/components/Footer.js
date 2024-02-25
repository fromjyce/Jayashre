import "../styles/Footer.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { FaDiscord, FaLinkedin } from "react-icons/fa6";
import { TbLocationFilled } from "react-icons/tb";
import { MdContactMail } from "react-icons/md";
import {Link} from "react-scroll";

function Footer() {
    return (
      <div className="Footer" id="footer">
        <div className="footer-container" id="contact">
          <div className="boxes-container">
            <div className="box-item one">
              <div className="first-item first-line">
                <h1 className="logo-title first-half">J</h1>
                <h1 className="logo-title second-half">S</h1>&emsp;
                <h1 className="name-title first-half">JY</h1>
                <h1 className="name-title second-half">CE</h1>
              </div>
              <div className="first-item second-line">
                As a budding cybersecurity enthusiast with coding skills, I'm
                excited about exploring and growing in this ever-evolving field.
              </div>
              <div className="first-item third-line">
                <div className="contact-items-list">
                  <Tippy
                    content="Discord"
                    className="footer-tooltip"
                    animation="scale"
                    arrow={false}
                    hideOnClick={true}
                    placement="left"
                  >
                    <a
                      href="https://discordapp.com/users/840610453431779348"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDiscord size={30} />
                    </a>
                  </Tippy>
                  &nbsp; &nbsp; &nbsp;
                  <Tippy
                    content="LinkedIn"
                    className="footer-tooltip"
                    animation="scale"
                    arrow={false}
                    hideOnClick={true}
                    placement="right"
                  >
                    <a
                      href="https://www.linkedin.com/in/jayashrek/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={30} />
                    </a>
                  </Tippy>
                </div>
              </div>
            </div>
            <div className="box-item two">
              <h2 className="second-item heading">Quick Links</h2>
              <ul className="links-list">
                <li className="links-item">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="link-item"
                  >
                    Home
                  </Link>
                </li>
                <li className="links-item">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="link-item"
                  >
                    About Me
                  </Link>
                </li>
                <li className="links-item">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="link-item"
                  >
                    Projects
                  </Link>
                </li>
                <li className="links-item">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="link-item"
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
            <div className="box-item three">
              <h2 className="third-item heading">Contact Info</h2>
              <div className="items-container">
                <div className="email-con">
                  <MdContactMail size={30} color="#db2b39" />
                  &nbsp; &nbsp;
                  <a href="mailto:jaya2004kra@gmail.com">
                    jaya2004kra@gmail.com
                  </a>
                </div>
                <div className="location-con">
                  <TbLocationFilled size={30} color="#db2b39" />
                  &nbsp; &nbsp; Chennai, Tamil Nadu, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;

/*https://discordapp.com/users/840610453431779348*/