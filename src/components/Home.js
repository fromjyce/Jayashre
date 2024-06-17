import React from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";

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
                "a cybersecurity student.",
                "a researcher.",
                "a web developer.",
                "an almost front-end developer.",
                "a blockchain enthusiast.",
                "open for work.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="centered-buttons-container">

        </div>
      </div>
    </div>
  );
}

export default Home;
