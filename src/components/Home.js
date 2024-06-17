import React from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

function Home() {
  return (
    <div className="home-main-container">
      <div className="home-container">
        <h1 className="centered-text">Hi! I'm Jayashre.</h1>
        <div className="typewriting-effect-container">
          <p className="prefix-text">I'm </p>
          <Typewriter
            options={{
              strings: [
                "a Cybersecurity Student.",
                "a Researcher.",
                "a Web Developer.",
                "an almost Front-End Developer.",
                "a Blockchain Enthusiast.",
                "a CTF Player.",
                "Open for Work.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="centered-buttons-container">
          <div className="side-by-side-buttons-container">
            <a className="home-link" href="/#">
              <div className="button-one">
                <i class="ri-github-fill button-icon"></i>
                <div className="button-one-title">Follow! @fromjyce</div>
              </div>
            </a>
            <a className="home-link" href="/#">
              <div className="button-two">
                <i class="ri-linkedin-box-fill button-icon"></i>
                <div className="button-two-title">Connect with me!</div>
              </div>
            </a>
          </div>
          <Link
            to="/#"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="home-link-item"
          >
            <div className="middle-button-container">
              <i class="ri-telegram-2-fill button-icon"></i>
              <div className="middle-button-title">Contact Me!</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
