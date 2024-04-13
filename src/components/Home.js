import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "../styles/Home.css";
import { motion } from "framer-motion";
import { IoMail } from "react-icons/io5";
import { SiLinkedin, SiGooglescholar } from "react-icons/si";
import { FaGithub, FaRegFileAlt } from "react-icons/fa";
import jyce from "../assets/jyce.png";

function Home() {
  return (
    <div className="Home" id="home">
      <div className="home-container">
        <motion.img
          src={jyce}
          className="jyce-image"
          alt="jyce-img"
          width="375"
          height="375"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="intro-text-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Hi, I'm</h1>
        </motion.div>
        <motion.div
          className="intro-text-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Jayashre
        </motion.div>
        <div className="contact-container">
          <motion.ul
            className="contact-items"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Tippy
              content="Mail"
              className="home-tooltip"
              animation="scale"
              arrow={false}
              hideOnClick={true}
              placement="bottom"
            >
              <li className="list-item">
                <a href="mailto:jaya2004kra@gmail.com">
                  <IoMail size={30} />
                </a>
              </li>
            </Tippy>
            <Tippy
              content="LinkedIn"
              className="home-tooltip"
              animation="scale"
              arrow={false}
              hideOnClick={true}
              placement="bottom"
            >
              <li className="list-item">
                <a
                  href="https://www.linkedin.com/in/jayashrek/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLinkedin size={30} />
                </a>
              </li>
            </Tippy>
            <Tippy
              content="GitHub"
              className="home-tooltip"
              animation="scale"
              arrow={false}
              hideOnClick={true}
              placement="bottom"
            >
              <li className="list-item">
                <a
                  href="https://github.com/fromjyce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                </a>
              </li>
            </Tippy>
            <Tippy
              content={["Google Scholar"]}
              className="home-tooltip"
              animation="scale"
              arrow={false}
              hideOnClick={true}
              placement="bottom"
            >
              <li className="list-item">
                <a
                  href="https://scholar.google.com/citations?hl=en&user=PYXemgQAAAAJ&scilu=&scisig=AM0yFCkAAAAAZY2BbsMfQFk24oqw5gwaMQpxj3U&gmla=AH70aAXSzoGtzzJeBtgBuFn-l1bsf6vfmuxD5RqVk8I1DjROCRkX9Dq-clMLshTWqXB5ErrAx_iJjsDcuY9dZtB8LEZht1T0Y1xkYGs&sciund=11893380693895042300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGooglescholar size={30} />
                </a>
              </li>
            </Tippy>
            <Tippy
              content={["Download Resume"]}
              className="home-tooltip"
              animation="scale"
              arrow={false}
              hideOnClick={true}
              placement="bottom"
            >
              <li className="list-item">
                <a href={require("../assets/resume.pdf")} download>
                  <FaRegFileAlt size={30} />
                </a>
              </li>
            </Tippy>
          </motion.ul>
        </div>
        <pre>
          {" "}
          <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
        </pre>
        &nbsp;
      </div>
    </div>
  );
}

export default Home;
