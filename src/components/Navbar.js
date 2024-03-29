import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCircleInfo, FaPhone } from "react-icons/fa6";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { TbPasswordUser } from "react-icons/tb";
import { GoProjectRoadmap } from "react-icons/go";
import { RiGraduationCapFill } from "react-icons/ri";
import { PiMedalFill } from "react-icons/pi";
import Tippy  from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "../styles/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <a href="/#" className="logo">
        <h3>JYCE.</h3>
      </a>
      <nav ref={navRef}>
        <Tippy
          content="About"
          className="tooltip"
          animation="scale"
          arrow={false}
          hideOnClick={true}
        >
          <a href="#about">
            <FaCircleInfo />
            <div className="text">About</div>
          </a>
        </Tippy>
        <Tippy
          content="Skills"
          className="tooltip"
          animation="scale"
          arrow={false}
          hideOnClick={true}
        >
          <a href="#skills">
            <TbPasswordUser />
            <div className="text">Skills</div>
          </a>
        </Tippy>
        <Tippy
          content="Experience"
          className="tooltip"
          animation="scale"
          arrow={false}
          hideOnClick={true}
        >
          <a href="#experience">
            <BsSuitcaseLgFill />
            <div className="text">Experience</div>
          </a>
        </Tippy>
        <Tippy
          content="Education"
          className="tooltip"
          animation="scale"
          arrow={false}
          hideOnClick={true}
        >
          <a href="#education">
            <RiGraduationCapFill />
            <div className="text">Education</div>
          </a>
        </Tippy>
        <Tippy
          content="Projects"
          className="tooltip"
          animation="scale"
          arrow={false}
          hideOnClick={true}
        >
          <a href="#projects">
            <GoProjectRoadmap />
            <div className="text">Projects</div>
          </a>
        </Tippy>
        <Tippy
          content="Achievements"
          className="tooltip"
          animation="scale"
          arrow={false}
          hideOnClick={true}
        >
          <a href="#achievements">
            <PiMedalFill />
            <div className="text">Achievements</div>
          </a>
        </Tippy>
        <Tippy
          content="Contact"
          className="tooltip"
          animation="scale"
          arrow={false}
          hideOnClick={true}
        >
          <a href="#contact">
            <FaPhone />
            <div className="text">Contact</div>
          </a>
        </Tippy>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
