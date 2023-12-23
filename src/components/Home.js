import { useRef } from "react";
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
    <div className="Home" id="Home">
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
              className="tooltip"
              animation="scale"
              arrow={false}
              hideOnClick={true}
              placement="bottom"
            >
              <li className="list-item">
                <a href="/#">
                  <IoMail size={30} color="#343434" />
                </a>
              </li>
            </Tippy>
            <Tippy
              content="LinkedIn"
              className="tooltip"
              animation="scale"
              arrow={false}
              hideOnClick={true}
              placement="bottom"
            >
              <li className="list-item">
                <a href="/#">
                  <SiLinkedin size={30} color="#343434" />
                </a>
              </li>
            </Tippy>
            <Tippy
              content="GitHub"
              className="tooltip"
              animation="scale"
              arrow={false}
              hideOnClick={true}
              placement="bottom"
            >
              <li className="list-item">
                <a href="/#">
                  <FaGithub size={30} color="#343434" />
                </a>
              </li>
            </Tippy>
            <Tippy
              content={["Google Scholar"]}
              className="tooltip"
              animation="scale"
              arrow={false}
              hideOnClick={true}
              placement="bottom"
            >
              <li className="list-item">
                <a href="/#">
                  <SiGooglescholar size={30} color="#343434" />
                </a>
              </li>
            </Tippy>
            <Tippy
              content={["Download Resume"]}
              className="tooltip"
              animation="scale"
              arrow={false}
              hideOnClick={true}
              placement="bottom"
            >
              <li className="list-item">
                <a href="/#">
                  <FaRegFileAlt size={30} color="#343434" />
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
