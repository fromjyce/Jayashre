import "../styles/Footer.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { FaDiscord, FaLinkedin } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import {Link} from "react-scroll";

function Footer() {
    return (
      <div class="Footer" id="footer">
        <div class="footer-container" id="contact">
          <footer class="footer-07">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                  <h2 class="footer-heading">
                    <span class="one-letter first-half">J</span>
                    <span class="one-letter second-half">S</span>&nbsp;&nbsp;
                    <span class="two-letter first-half">JY</span>
                    <span class="two-letter second-half">CE</span>
                  </h2>
                  <p class="menu">
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
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      className="link-item"
                    >
                      About
                    </Link>
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
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="link-item"
                    >
                      Contact
                    </Link>
                  </p>
                  <ul class="ftco-footer-social p-0">
                    <li>
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
                          <span class="contact-logo">
                            <FaDiscord />
                          </span>
                        </a>
                      </Tippy>
                    </li>
                    <li>
                      <Tippy
                        content="LinkedIn"
                        className="footer-tooltip"
                        animation="scale"
                        arrow={false}
                        hideOnClick={true}
                        placement="bottom"
                      >
                        <a
                          href="https://www.linkedin.com/in/jayashrek/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span class="contact-logo">
                            <FaLinkedin />
                          </span>
                        </a>
                      </Tippy>
                    </li>
                    <li>
                      <Tippy
                        content="Mail Me"
                        className="footer-tooltip"
                        animation="scale"
                        arrow={false}
                        hideOnClick={true}
                        placement="right"
                      >
                        <a href="mailto:jaya2004kra@gmail.com">
                          <span class="contact-logo">
                            <MdContactMail />
                          </span>
                        </a>
                      </Tippy>
                    </li>
                  </ul>
                  <div class="location-line">Chennai, Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
}

export default Footer;

/*https://discordapp.com/users/840610453431779348*/