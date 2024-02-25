import "../styles/Experience.css";
import PopUpWB from "./PopUpWB";
import { useState } from "react";
import {FaGithub} from "react-icons/fa";
import { TbCertificate2 } from "react-icons/tb";

function Experience() {
    const [virtualPopup, setvirtualbuttonPopup] = useState(false);
  const [menteePopup, setmenteebuttonPopup] = useState(false);
    return (
      <div className="Experience" id="experience">
        <div className="experience-container">
          <div className="experience-title">
            <h1 className="title-experience">EXPERIENCE</h1>
          </div>
          <div className="experience-list-container">
            <div className="job-experience-item first">
              <ul className="pos-date">
                <li className="pos-date-item job-pos">
                  Python Programming Intern{" "}
                  <a
                    href="https://github.com/fromjyce/InternPePrograms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-icon"
                  >
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
            <hr
              className="horizontal-line-down"
              style={{
                background: "black",
                color: "black",
                borderColor: "black",
                height: "3px",
                width: "725px",
              }}
            />
            <div className="job-experience-item second">
              <ul className="pos-date">
                <li className="pos-date-item job-pos smaller-job-one">
                  Summer Intern - Website Committee
                </li>
                <li className="pos-date-item date smaller-date-one">
                  June 2023 - August 2023
                </li>
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
                  During my role, I played a key part in updating and
                  maintaining the WACH website and elevating the WACH newsletter
                  by introducing a monthly intern column, enhancing its appeal
                  and engagement. Additionally, I delivered a presentation on
                  mental health in China and India, complemented by an op-ed on
                  the same topic. Furthermore, I contributed to the "2023
                  International Young Leaders Conference" by preparing
                  comprehensive questionnaires for speakers.
                </p>
              </div>
            </div>
            <hr
              className="horizontal-line-down"
              style={{
                background: "black",
                color: "black",
                borderColor: "black",
                height: "3.5px",
                width: "725px",
              }}
            />
            <div className="job-experience-item third">
              <ul className="pos-date still-left">
                <li className="pos-date-item job-pos">
                  Content Writing Intern
                </li>
                <li className="pos-date-item date">
                  July 2023 - September 2023
                </li>
              </ul>
              <div className="company-stack-description left-aligned-paragraph">
                <div className="company left-aligned-paragraph">
                  CoConnexion
                </div>
                <div className="stack-skills left-aligned-paragraph">
                  <strong>Skills & Concepts: </strong>Technical Writing, Written
                  Communication, Teamwork
                </div>
                <p className="job-description left-aligned-paragraph">
                  Developed proficiency as a technical content writer, crafting
                  insightful blogs and articles on emerging technologies. Shared
                  knowledge through publications on LinkedIn and Medium to
                  contribute to the dissemination of industry insights and
                  expertise.
                </p>
              </div>
            </div>
            <hr
              className="horizontal-line-down"
              style={{
                background: "black",
                color: "black",
                borderColor: "black",
                height: "3.5px",
                width: "725px",
              }}
            />
            <div className="job-experience-item fourth">
              <ul className="pos-date still-right">
                <li className="pos-date-item job-pos">
                  Web Development Intern{" "}
                  <a
                    href="https://github.com/fromjyce/CodeAlphaPrograms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-icon"
                  >
                    <FaGithub size={22} color="#db2b39" />
                  </a>
                </li>
                <li className="pos-date-item date">
                  August 2023 - September 2023
                </li>
              </ul>
              <div className="company-stack-description left-aligned-paragraph">
                <div className="company left-aligned-paragraph">Code Alpha</div>
                <div className="stack-skills left-aligned-paragraph">
                  <strong>Skills & Concepts: </strong>Web Development, UX, HTML,
                  CSS, JS, PHP
                </div>
                <p className="job-description left-aligned-paragraph">
                  In my role as a web development intern at Code Alpha, I
                  meticulously documented my learning journey through a series
                  of projects showcased in this GitHub repository. Beginning
                  with the creation of a versatile Multi Survey Form using
                  JavaScript, HTML, and CSS with PHP integration for seamless
                  survey response delivery, I demonstrated my evolving skills.
                  Strengthening my commitment to security, I further integrated
                  Google's reCAPTCHA service into the survey form. Transitioning
                  into web design, I showcased my layout and design proficiency
                  by creating a clone of the Netflix webpage.
                </p>
              </div>
            </div>
            <hr
              className="horizontal-line-down"
              style={{
                background: "black",
                color: "black",
                borderColor: "black",
                height: "3.5px",
                width: "725px",
              }}
            />
            <div className="job-experience-item fifth">
              <ul className="pos-date still-left-one">
                <li className="pos-date-item job-pos smaller-job-two">
                  Web Development & Design Intern{" "}
                  <a
                    href="https://github.com/fromjyce/OasisInfoBytePrograms"
                    className="github-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={22} color="#db2b39" />
                  </a>
                </li>
                <li className="pos-date-item date smaller-date-two">
                  August 2023 - September 2023
                </li>
              </ul>
              <div className="company-stack-description left-aligned-paragraph">
                <div className="company left-aligned-paragraph">
                  Oasis Infobyte
                </div>
                <div className="stack-skills left-aligned-paragraph">
                  <strong>Skills & Concepts: </strong>Web Development, UX, HTML,
                  CSS, JS, API, React, Node.js, MongoDB, Flask
                </div>
                <p className="job-description left-aligned-paragraph">
                  During my immersive internship at Oasis Infobyte, I progressed
                  through various web development tasks, starting with personal
                  portfolios and landing pages and advancing to building tools
                  like temperature converters and calculators using HTML, CSS,
                  and JavaScript. I contributed to projects such as a tribute
                  page and a to-do web app, emphasizing both aesthetics and
                  usability. Moving into advanced development, I tackled Flask
                  for login authentication and embraced full-stack development
                  with React, MongoDB, and Node.js to create a sophisticated
                  Pizza Delivery Application. This project showcased my skills
                  in user and admin authentication, dynamic features like pizza
                  customization, secure payments via Razor Pay, and efficient
                  inventory management.
                </p>
              </div>
            </div>
            <hr
              className="horizontal-line-down"
              style={{
                background: "black",
                color: "black",
                borderColor: "black",
                height: "3.5px",
                width: "725px",
              }}
            />
            <div className="job-experience-item sixth">
              <ul className="pos-date still-right">
                <li className="pos-date-item job-pos">
                  Java Programming Intern{" "}
                  <a
                    href="https://github.com/fromjyce/CodSoftPrograms"
                    className="github-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={22} color="#db2b39" />
                  </a>
                </li>
                <li className="pos-date-item date">
                  August 2023 - September 2023
                </li>
              </ul>
              <div className="company-stack-description left-aligned-paragraph">
                <div className="company left-aligned-paragraph">CodSoft</div>
                <div className="stack-skills left-aligned-paragraph">
                  <strong>Skills & Concepts: </strong>Java, API, OOPs,
                  JavaFX-GUI
                </div>
                <p className="job-description left-aligned-paragraph">
                  Throughout my Java programming internship at CodSoft, I
                  underwent a significant evolution, transitioning from an
                  intern to a skilled Java programmer. The projects I undertook
                  during this period speak to the diverse range of skills I
                  acquired. From creating a Number Game that involved number
                  generation and user interaction to developing The Student
                  Grade Calculator for grade calculations and implementing a
                  user-friendly ATM Interface with transaction handling, each
                  project contributed to my growth. The Real-Time Currency
                  Converter demonstrated my ability to integrate real-time data
                  using external APIs, while the Student Management System
                  showcased my proficiency in designing user-friendly interfaces
                  for efficient data management.
                </p>
              </div>
            </div>
            <hr
              className="horizontal-line-down"
              style={{
                background: "black",
                color: "black",
                borderColor: "black",
                height: "3.5px",
                width: "725px",
              }}
            />
            <div className="job-experience-item seventh">
              <ul className="pos-date still-left still-right">
                <li className="pos-date-item job-pos">
                  Web Development Intern{" "}
                  <a
                    href="https://github.com/fromjyce/InfoAidTechPrograms"
                    className="github-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={22} color="#db2b39" />
                  </a>
                </li>
                <li className="pos-date-item date">
                  September 2023 - October 2023
                </li>
              </ul>
              <div className="company-stack-description left-aligned-paragraph">
                <div className="company left-aligned-paragraph">
                  Info Aid Tech
                </div>
                <div className="stack-skills left-aligned-paragraph">
                  <strong>Skills & Concepts: </strong>Web Development, HTML,
                  CSS, JavaScript, Django, MongoDB, MySQL, ReactJS, Node JS,
                  Flask, API, Figma
                </div>
                <p className="job-description left-aligned-paragraph">
                  Throughout my immersive internship at InfoAidTech, I engaged
                  in a series of impactful web development projects that
                  underscored my growth as a developer. Starting with a
                  captivating product landing page for premium watches, I honed
                  my skills in crafting sleek and user-friendly interfaces. The
                  development of a functional calculator then challenged me to
                  handle a range of arithmetic operations and more complex
                  calculations. Diving into practical utility, I created a
                  temperature converter, streamlining the process of unit
                  conversions. The culmination of my internship involved the
                  creation of an enticing restaurant website, where I combined
                  aesthetics with functionality.
                </p>
              </div>
            </div>
            <hr
              className="horizontal-line-down"
              style={{
                background: "black",
                color: "black",
                borderColor: "black",
                height: "3.5px",
                width: "725px",
              }}
            />
            <div className="job-experience-item eighth">
              <ul className="pos-date still-right">
                <li className="pos-date-item job-pos">
                  Java Programming Intern{" "}
                  <a
                    href="https://github.com/fromjyce/CipherBytePrograms"
                    className="github-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={22} color="#db2b39" />
                  </a>
                </li>
                <li className="pos-date-item date">
                  September 2023 - October 2023
                </li>
              </ul>
              <div className="company-stack-description left-aligned-paragraph">
                <div className="company left-aligned-paragraph">
                  Cipher Byte Technologies
                </div>
                <div className="stack-skills left-aligned-paragraph">
                  <strong>Skills & Concepts: </strong>Java, API, OOPs,
                  JavaFX-GUI
                </div>
                <p className="job-description left-aligned-paragraph">
                  During my Java programming internship at CipherByte, I evolved
                  from an intern to a skilled Java programmer through a series
                  of impactful projects. I created a "Guess Number" game
                  incorporating features like limited attempts and scoring. The
                  "ATM Interface" simulated a user-friendly banking experience
                  with transaction handling. Developing an "Online Examination
                  Tool," I implemented secure login, profile management, and
                  real-time feedback for multiple-choice questions. Finally, the
                  "Digital Library Management System" automated book-keeping,
                  issuance, fine calculation, and report generation, enhancing
                  library operations.
                </p>
              </div>
            </div>
            <hr
              className="horizontal-line-down"
              style={{
                background: "black",
                color: "black",
                borderColor: "black",
                height: "3.5px",
                width: "725px",
              }}
            />
            <div className="job-experience-item ninth last-experience">
              <ul className="pos-date still-right-one">
                <li className="pos-date-item job-pos smaller-job-one">
                  Educational Operations Coordinator{" "}
                </li>
                <li className="pos-date-item date">April 2021 - Present</li>
              </ul>
              <div className="company-stack-description left-aligned-paragraph">
                <div className="company left-aligned-paragraph">
                  RAJ Online Tutoring
                </div>
                <div className="stack-skills left-aligned-paragraph">
                  <strong>Skills & Concepts: </strong>Google Suite,
                  Administration, Tutoring
                </div>
                <p className="job-description left-aligned-paragraph">
                  As the Assistant Tutor and Administrator at Raj Online
                  Tutoring, I serve as the Substitute Tutor when the main tutor
                  is unavailable. In addition to conducting tutoring sessions,
                  my responsibilities extend to managing meeting links,
                  overseeing the financial aspects of weekly fees, preparing
                  assignments and question papers, and addressing any software
                  or technical issues that may arise during classes.
                </p>
              </div>
            </div>
          </div>
          <div className="buttons-list">
            <ul className="other-experience-buttons">
              <li className="other-experience-item">
                <button
                  className="exp-button"
                  onClick={() => setvirtualbuttonPopup(true)}
                >
                  Virtual Experience
                </button>
              </li>
              <li className="other-experience-item">
                <button
                  className="exp-button"
                  onClick={() => setmenteebuttonPopup(true)}
                >
                  Mentee Experience
                </button>
              </li>
            </ul>
          </div>
          <PopUpWB trigger={virtualPopup} setTrigger={setvirtualbuttonPopup}>
            <h1 className="ve-title">VIRTUAL EXPERIENCE</h1>
            <ul className="ve-list">
              <li className="ve-list-items">
                <strong>AIG - </strong>Shields Up: Cybersecurity Virtual
                Experience Program Participant{" "}
                <a
                  href="https://drive.google.com/file/d/10oYpeOA89BCWXSthgq7nEZoWv6GcZPBj/view?usp=sharing"
                  className="cert-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbCertificate2 size={20} color="#db2b39" />
                </a>
              </li>
              <li className="ve-list-items">
                <strong>Accenture - </strong>Project Management Virtual
                Experience Program Participant{" "}
                <a
                  href="https://drive.google.com/file/d/1w7yeuRAZchHDU4bPoPOmpth5G2xwBrt3/view?usp=sharing"
                  className="cert-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbCertificate2 size={20} color="#db2b39" />
                </a>
              </li>
              <li className="ve-list-items">
                <strong>Datacom - </strong>Introduction to Cloud Virtual
                Experience Program Participant{" "}
                <a
                  href="https://drive.google.com/file/d/1lJxrzicpTptLrmwPIUVp4-LkJVIOYVJD/view?usp=sharing"
                  className="cert-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbCertificate2 size={20} color="#db2b39" />
                </a>
              </li>
              <li className="ve-list-items">
                <strong>Mastercard - </strong>Cybersecurity Virtual Experience
                Program Participant{" "}
                <a
                  href="https://drive.google.com/file/d/1yl6xdltwzcEnx0dtEwa9HnL8tA7Lm3yv/view?usp=sharing"
                  className="cert-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbCertificate2 size={20} color="#db2b39" />
                </a>
              </li>
              <li className="ve-list-items">
                <strong>Telstra - </strong>Cybersecurity Virtual Experience
                Participant{" "}
                <a
                  href="https://drive.google.com/file/d/1JaVzot87MvnxoTvr2Yu0fD3SEOYnkPR_/view?usp=sharing"
                  className="cert-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbCertificate2 size={20} color="#db2b39" />
                </a>
              </li>
              <li className="ve-list-items">
                <strong>Datacom - </strong>Cybersecurity Virtual Experience
                Program Participant{" "}
                <a
                  href="https://drive.google.com/file/d/1UxDwUtjhGu7cp0FXt43gi5R8YN3YqMGS/view?usp=sharing"
                  className="cert-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbCertificate2 size={20} color="#db2b39" />
                </a>
              </li>
              <li className="ve-list-items">
                <strong>JPMorgan Chase & Co - </strong>Cybersecurity Virtual
                Experience Program Participant{" "}
                <a
                  href="https://drive.google.com/file/d/1P5hPAJ4Mu4ai5OpaMgKDM-Jn6jZK2gh3/view?usp=sharing"
                  className="cert-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbCertificate2 size={20} color="#db2b39" />
                </a>
              </li>
              <li className="ve-list-items">
                <strong>PwC - </strong>Cybersecurity Virtual Case Experience
                Program Participant{" "}
                <a
                  href="https://drive.google.com/file/d/1JaVzot87MvnxoTvr2Yu0fD3SEOYnkPR_/view?usp=sharing"
                  className="cert-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbCertificate2 size={20} color="#db2b39" />
                </a>
              </li>
              <li className="ve-list-items">
                <strong>ANZ - </strong>Cybersecurity Management Virtual
                Experience Program Participant{" "}
                <a
                  href="https://drive.google.com/file/d/1yAyF-W5VrkRPT2vJDdbA0eUREFvyr8Bg/view?usp=sharing"
                  className="cert-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbCertificate2 size={20} color="#db2b39" />
                </a>
              </li>
              <li className="ve-list-items">
                <strong>Clifford Chance - </strong>Cybersecurity Global Virtual
                Internship Participant{" "}
                <a
                  href="https://drive.google.com/file/d/1pGAi27YnkJyPa1VpPBwOG6BcvHTW-e2b/view?usp=sharing"
                  className="cert-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbCertificate2 size={20} color="#db2b39" />
                </a>
              </li>
              <li className="ve-list-items">
                <strong>Accenture - </strong>Coding: Development & Advanced
                Engineering Virtual Experience Program Participant{" "}
                <a
                  href="https://drive.google.com/file/d/1ZRMgLFVRzoINeBROBL_RtQ5W3wTrzvyS/view?usp=sharing"
                  className="cert-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbCertificate2 size={20} color="#db2b39" />
                </a>
              </li>
              <li className="ve-list-items">
                <strong>JPMorgan Chase & Co - </strong>Agile Virtual Experience
                Program Participant{" "}
                <a
                  href="https://drive.google.com/file/d/1_SnjRI2mNSw5FXeSSQm94s_lPkUHox2i/view?usp=sharing"
                  className="cert-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbCertificate2 size={20} color="#db2b39" />
                </a>
              </li>
              <li className="ve-list-items">
                <strong>Cognizant - </strong>Artificial Intelligence Virtual
                Experience Program Participant{" "}
                <a
                  href="https://drive.google.com/file/d/17lEy2FlKBTisG1r-s4-LYBA5Nhc3JqBy/view?usp=sharing"
                  className="cert-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbCertificate2 size={20} color="#db2b39" />
                </a>
              </li>
            </ul>
          </PopUpWB>
          <PopUpWB trigger={menteePopup} setTrigger={setmenteebuttonPopup}>
            <h1 className="ve-title">MENTEE EXPERIENCE</h1>
            <ul className="ve-list">
              <li className="ve-list-items">
                <strong>SheCodes - </strong>SheCodes Basics Workshop Mentee{" "}
                <a href="/#" className="github-icon">
                  <FaGithub size={22} color="#db2b39" />
                </a>
              </li>
              <li className="ve-list-items">
                <strong>ReSkilll & Microsoft Azure - </strong>#include
                &lt;her&gt; Cohort 2.0 - AI Cohort Mentee{" "}
              </li>
              <li className="ve-list-items">
                <strong>ReSkilll & Microsoft Azure - </strong>#include
                &lt;her&gt; Cohort 3.0 Mentee{" "}
              </li>
              <li className="ve-list-items">
                <strong>SheCodes - </strong>SheCodes Plus Workshop Mentee{" "}
                <a href="/#" className="github-icon">
                  <FaGithub size={22} color="#db2b39" />
                </a>
              </li>
              <li className="ve-list-items">
                <strong>ReSkilll & Microsoft Azure - </strong>#include
                &lt;her&gt; Cohort 4.0 Mentee{" "}
              </li>
              <li className="ve-list-items">
                <strong>Codess Cafe - </strong>Mentee{" "}
              </li>
              <li className="ve-list-items">
                <strong>SheCodes - </strong>SheCodes Responsive Workshop Mentee{" "}
                <a href="/#" className="github-icon">
                  <FaGithub size={22} color="#db2b39" />
                </a>
              </li>
            </ul>
          </PopUpWB>
        </div>
      </div>
    );
}

export default Experience;

//background-image: -webkit-linear-gradient(301.5deg, #F9F6EE 50%, #343434 50%);