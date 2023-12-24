import "../styles/Experience.css";
import { FaPython, FaPenAlt, FaGithub } from "react-icons/fa";
import { SiTorbrowser } from "react-icons/si";
import { CgWebsite, CgBrowse } from "react-icons/cg";


function Experience () {
    return (
      <div className="Experience" id="Experience">
        <div className="experience-container">
          <div className="experience-title">
            <h1 className="title-experience">EXPERIENCE</h1>
          </div>
          <div className="vertical-line"></div>
          <div className="first-experience">
            <div className="experience-point first">
              <div className="e-logo">
                <FaPython size={25} color="#343434" />
              </div>
            </div>
            <div div className="experience-box-white-black first-exp">
              <div className="full-experience-paragraph-left">
                <div className="date left-aligned-paragraph">
                  May 2023 - June 2023
                </div>{" "}
                <br />
                <div className="job-title left-aligned-paragraph">
                  Python Programming Intern{" "}
                  <a href="/#">
                    <FaGithub size={22} color="#db2b39" />
                  </a>
                </div>{" "}
                <br />
                <div className="company left-aligned-paragraph">InternPe</div>
                <br />
                <div className="stack-concepts left-aligned-paragraph">
                  <strong>Tech Stack & Concepts: </strong>Python, OOPs, CNN,
                  Project Management, GUI
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
          </div>
          <div className="second-experience">
            <div className="experience-point second">
              <div className="e-logo">
                <SiTorbrowser size={25} color="#343434" />
              </div>
            </div>
            <div className="experience-box-white-black second-exp">
              <div className="full-experience-paragraph-right">
                <div className="date right-aligned-paragraph">
                  June 2023 - August 2023
                </div>{" "}
                <br />
                <div className="job-title right-aligned-paragraph">
                  Summer Intern - Website Committee
                </div>{" "}
                <br />
                <div className="company right-aligned-paragraph">
                  World Affairs Council of Harrisburg
                </div>
                <br />
                <div className="stack-concepts right-aligned-paragraph">
                  <strong>Tech Stack & Concepts: </strong>Web Development,
                  Public Speaking
                </div>
                <p className="job-description right-aligned-paragraph">
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
          </div>
          <div className="third-experience">
            <div className="experience-point third">
              <div className="e-logo">
                <FaPenAlt size={25} color="#343434" />
              </div>
            </div>
            <div div className="experience-box-white-black third-exp">
              <div className="full-experience-paragraph-left">
                <div className="date left-aligned-paragraph">
                  July 2023 - September 2023
                </div>{" "}
                <br />
                <div className="job-title left-aligned-paragraph">
                  Content Writing Intern
                </div>{" "}
                <br />
                <div className="company left-aligned-paragraph">
                  CoConnexion
                </div>
                <br />
                <div className="stack-concepts left-aligned-paragraph">
                  <strong>Tech Stack & Concepts: </strong>Technical Writing,
                  Written Communication, Teamwork
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
          </div>
          <div className="fourth-experience">
            <div className="experience-point fourth">
              <div className="e-logo">
                <CgWebsite size={25} color="#343434" />
              </div>
            </div>
            <div div className="experience-box-white-black fourth-exp">
              <div className="full-experience-paragraph-right">
                <div className="date right-aligned-paragraph">
                  August 2023 - September 2023
                </div>{" "}
                <br />
                <div className="job-title right-aligned-paragraph">
                  <a href="/#">
                    <FaGithub size={22} color="#db2b39" />
                  </a>{" "}
                  Web Development Intern
                </div>{" "}
                <br />
                <div className="company right-aligned-paragraph">
                  Code Alpha
                </div>
                <br />
                <div className="stack-concepts right-aligned-paragraph">
                  <strong>Tech Stack & Concepts: </strong>Web Development, UX,
                  HTML, CSS, JS, PHP
                </div>
                <p className="job-description right-aligned-paragraph">
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
          </div>
          <div className="fifth-experience">
            <div className="experience-point fifth">
              <div className="e-logo">
                <CgBrowse size={25} color="#343434" />
              </div>
            </div>
            <div div className="experience-box-white-black fifth-exp">
              <div className="full-experience-paragraph-left">
                <div className="date left-aligned-paragraph">
                  August 2023 - September 2023
                </div>{" "}
                <br />
                <div className="job-title left-aligned-paragraph">
                  Web Development and Design Intern{" "}
                  <a href="/#">
                    <FaGithub size={22} color="#db2b39" />
                  </a>{" "}
                </div>
                <br />
                <div className="company left-aligned-paragraph">
                  Oasis Infobyte
                </div>
                <br />
                <div className="stack-concepts left-aligned-paragraph">
                  <strong>Tech Stack & Concepts: </strong>Web Development, UX,
                  HTML, CSS, JS, API, React, Node.js, MongoDB, Flask
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
          </div>
          
        </div>
      </div>
    );
}

export default Experience;
