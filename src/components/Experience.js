import "../styles/Experience.css";
import PopUpWB from "./PopUpWB";
import { useState } from "react";
import {FaGithub} from "react-icons/fa";

function Experience() {
    const [virtualPopup, setvirtualbuttonPopup] = useState(false);
  const [menteePopup, setmenteebuttonPopup] = useState(false);
  const blackline = {
    background: "black",
    color: "black",
    borderColor: "black",
    height: "5px",
    width: "50%"
    
  };
    return (
      <div className="Experience" id="Experience">
        <div className="experience-container">
          <div className="experience-title">
            <h1 className="title-experience">EXPERIENCE</h1>
          </div>
          <div className="experience-list-container">
            <hr className="horizontal-line-up" style={blackline} />
            <div className="job-experience-item first">
              <ul className="pos-date">
                <li className="pos-date-item job-pos">
                  Python Programming Intern{" "}
                  <a href="/#" className="github-icon">
                    <FaGithub size={22} color="#db2b39" />
                  </a>
                </li>
                <li className="pos-date-item date">May 2023 - June 2023</li>
              </ul>
              <div className="company-stack-description left-aligned-paragraph">
                <div className="company left-aligned-paragraph">InternPe</div>
                <div className="stack-skills left-aligned-paragraph">
                  <strong>Skills & Concepts: </strong>Python, OOPs, CNN, Project
                  Management, Tkinter-GUI
                </div>
                <p className="job-description left-aligned-paragraph">
                  At InternPe, I mastered Object-Oriented Programming, creating
                  organized and reusable Python code. I optimized program
                  efficiency with Python modules and demonstrated precision in
                  data manipulation. The internship featured three projects: a
                  Countdown Timer script, a Tkinter-based GUI app for dice and
                  coin actions, and SmileSnapWaveStop, utilizing OpenCV for
                  smile detection and hand tracking in automatic screenshot
                  capture.
                </p>
              </div>
            </div>
            <hr className="horizontal-line-down" style={blackline} />
          </div>
          <div className="job-experience-item second">
            <ul className="pos-date">
              <li className="pos-date-item job-pos smaller-job-one">
                Summer Intern - Website Committee
              </li>
              <li className="pos-date-item date smaller-date-one">June 2023 - August 2023</li>
            </ul>
            <div className="company-stack-description left-aligned-paragraph">
              <div className="company left-aligned-paragraph">
                World Affairs Council of Harrisburg
              </div>
              <div className="stack-skills left-aligned-paragraph">
                <strong>Skills & Concepts: </strong>Web Development, Public
                Speaking, Presentation, Wordpress
              </div>
              <p className="job-description left-aligned-paragraph">
                During my role, I played a key part in updating and maintaining
                the WACH website and elevating the WACH newsletter by
                introducing a monthly intern column, enhancing its appeal and
                engagement. Additionally, I delivered a presentation on mental
                health in China and India, complemented by an op-ed on the same
                topic. Furthermore, I contributed to the "2023 International
                Young Leaders Conference" by preparing comprehensive
                questionnaires for speakers.
              </p>
            </div>
          </div>
          <hr className="horizontal-line-down" style={blackline} />
        </div>
      </div>
    );
}

export default Experience;

//background-image: -webkit-linear-gradient(301.5deg, #F9F6EE 50%, #343434 50%);