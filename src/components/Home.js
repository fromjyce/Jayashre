import React from "react";
import "../styles/Home.css";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-scroll";
import TypeWriter from "./Typewriter";

function Home() {

    const typeWriter = ["a cybersecurity student.", "a researcher.", "an almost frontend developer.", "a blockchain enthusiast.", "open for work."];

    return (
      <div className="home-main-container">
        <div className="home-actual-container" id="home">
          <div className="home-container">
            <h1 className="home-name-title">Hi! I'm Jayashre.</h1>
            <div className="typewriter-container">
              <div className="typewriter-holder">
                <p>
                  I'm <TypeWriter data={typeWriter} />
                </p>
              </div>
            </div>
            <div className="buttons-container">
              <div className="first-line-container">
                <div>
                  <a href="/#" target="__blank" className="follow-link">
                    <div className="follow-button-container">
                      <i class="ri-github-fill follow-icon"></i>
                      <div className="follow-title">Follow @fromjyce</div>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="/#" target="__blank" className="connect-link">
                    <div className="contact-button-container">
                      <i class="ri-linkedin-box-fill connect-icon"></i>
                      <div className="connect-title">Connect with Me</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="second-line-container">
                <Link
                  to="/#"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="contact-page-link"
                >
                  <div className="contact-page-container">
                    <div className="centered-container">
                      <i class="ri-telegram-2-fill tele-icon"></i>
                      <div className="contact-title">Contact Me</div>
                    </div>
                  </div>
                </Link>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;