import React from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-main-container">
      <div id="home" className="home-container">
        <h1 className="centered-text">Hi! I'm Jayashre.</h1>
        <div className="typewriting-effect-container">
          <p className="prefix-text">I'm </p>
          <Typewriter
            options={{
              strings: [
                "a Cybersecurity Student.",
                "a Data Science buff.",
                "a Researcher.",
                "an almost Full Stack Developer.",
                "a Blockchain Enthusiast.",
                "a Data Engineer.",
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
            <a
              className="home-link"
              href="https://github.com/fromjyce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="button-one">
                <i class="ri-github-fill button-icon"></i>
                <div className="button-one-title">Follow! @fromjyce</div>
              </div>
            </a>
            <a
              className="home-link"
              href="https://www.linkedin.com/in/jayashrek/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="button-two">
                <i class="ri-linkedin-box-fill button-icon"></i>
                <div className="button-two-title">Connect with me!</div>
              </div>
            </a>
          </div>
          <NavLink
            to="/contact"
            className="home-link-item"
            activeClassName="active"
          >
            <div className="middle-button-container">
              <i class="ri-telegram-2-fill button-icon"></i>
              <div className="middle-button-title">Contact Me!</div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
