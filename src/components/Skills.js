import React from "react";
import "../styles/Skills.css";
import "remixicon/fonts/remixicon.css";

function Skills() {
    return (
      <div className="skills-main-container">
        <div className="skills-actual-container" id="skills">
          <h1 className="skills-title">skills</h1>
          <div className="technical-skills-container">
            <h2 className="technical-skills-title">Technical Skills</h2>
            <ul className="technical-skills-list">
              <li className="technical-skills-list-item">
                Responsive Web Design Development
              </li>
              <li className="technical-skills-list-item">
                Android Application Development
              </li>
              <li className="technical-skills-list-item">
                Decentralized Application Development
              </li>
              <li className="technical-skills-list-item">
                Machine Learning Model Development
              </li>
            </ul>
          </div>
          <div className="program-langs-container">
            <h2 className="program-langs-title">
              Programming Languages / Technical Stack
            </h2>
            <ul className="program-langs-list">
              <li className="program-langs-list-item">C</li>
              <li className="program-langs-list-item">Python</li>
              <li className="program-langs-list-item">SQL</li>
              <li className="program-langs-list-item">Scala</li>
              <li className="program-langs-list-item">Git / GitHub / GitLab</li>
              <li className="program-langs-list-item">Haskell</li>
              <li className="program-langs-list-item">Latex</li>
              <li className="program-langs-list-item">Sphinx</li>
              <li className="program-langs-list-item">Java</li>
              <li className="program-langs-list-item">Kotlin</li>
              <li className="program-langs-list-item">XML</li>
              <li className="program-langs-list-item">Android</li>
              <li className="program-langs-list-item">Solidity</li>
              <li className="program-langs-list-item">Bash/Shell Scripting</li>
              <li className="program-langs-list-item">HTML</li>
              <li className="program-langs-list-item">CSS</li>
              <li className="program-langs-list-item">Javascript</li>
              <li className="program-langs-list-item">Flask</li>
              <li className="program-langs-list-item">React JS</li>
              <li className="program-langs-list-item">Next JS</li>
              <li className="program-langs-list-item">Electron JS</li>
              <li className="program-langs-list-item">Vite JS</li>
            </ul>
          </div>
        </div>
      </div>
    );

}

export default Skills;