import "../styles/Footer.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { FaDiscord, FaLinkedin } from "react-icons/fa6";

function Footer() {
    return (
      <div className="Footer" id="Footer">
        <div className="footer-container">
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
                <div className="contact-items-list" id="Contact">
                  <Tippy
                    content="Discord"
                    className="footer-tooltip"
                    animation="scale"
                    arrow={false}
                    hideOnClick={true}
                    placement="left"
                  >
                    <a href="/#">
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
                    <a href="/#">
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
                  <a href="/#">Home</a>
                </li>
                <li className="links-item">
                  <a href="/#">About Me</a>
                </li>
                <li className="links-item">
                  <a href="/#">Projects</a>
                </li>
                <li className="links-item">
                  <a href="/#">Contact Me</a>
                </li>
              </ul>
            </div>
            <div className="box-item three"></div>
          </div>
        </div>
      </div>
    );
}

export default Footer;
