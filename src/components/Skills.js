import "../styles/Skills.css";
import { GrTechnology } from "react-icons/gr";
import { GiSkills, GiTeamIdea } from "react-icons/gi";
import { MdOutlineLanguage, MdLeaderboard } from "react-icons/md";
import {
  TbFileTypeSql,
  TbFileTypeXml,
  TbBrandVscode,
  TbWriting,
} from "react-icons/tb";
import { useState } from 'react';
import { HiCommandLine } from "react-icons/hi2";
import { BiLogoNetlify } from "react-icons/bi";
import { GoProjectRoadmap } from "react-icons/go";
import { FaPython, FaGolang } from "react-icons/fa6";
import { VscTerminalBash } from "react-icons/vsc";
import { RiEnglishInput } from "react-icons/ri";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaReact,
  FaLinux,
  FaFigma,
  FaWindows,
  FaBusinessTime,
  FaCreativeCommonsSampling,
} from "react-icons/fa";
import {
  SiSolidity,
  SiJavascript,
  SiKotlin,
  SiLatex,
  SiSphinx,
  SiFlask,
  SiPowershell,
  SiScala,
  SiAndroidstudio,
  SiKalilinux,
  SiWireshark,
} from "react-icons/si";
import PopUp from "./PopUp";


function Skills() {
    const [technicalbuttonPopup, settechnicalbuttonPopup] = useState(false);
    const [interpersonalbuttonPopup, setpersonalbuttonPopup] = useState(false);
     const [langbuttonPopup, setlangbuttonPopup] = useState(false);

    return (
      <div className="Skills" id="Skills">
        <div className="skills-container">
          <div className="skills-title">
            <h1 className="title-skills">SKILLS</h1>
          </div>
          <div className="skills-list">
            <button
              className="skills-list-container technical"
              onClick={() => settechnicalbuttonPopup(true)}
            >
              <GrTechnology className="skill-logo-item" /> Technical Skills
            </button>
            <button
              className="skills-list-container interpersonal"
              onClick={() => setpersonalbuttonPopup(true)}
            >
              <GiSkills className="skill-logo-item" /> Interpersonal Skills
            </button>
            <button
              className="skills-list-container lang"
              onClick={() => setlangbuttonPopup(true)}
            >
              <MdOutlineLanguage className="skill-logo-item" /> Language
              Proficiency
            </button>
          </div>
          <PopUp
            trigger={technicalbuttonPopup}
            setTrigger={settechnicalbuttonPopup}
          >
            <h3 className="technical-skills-title">TECHNICAL SKILLS</h3>
            <ul>
              <ul className="first-line-skills">
                <li className="list-item">
                  <button className="skill-button">C</button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <FaPython className="s-logo" /> Python
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <TbFileTypeSql className="s-logo" /> SQL
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <FaJava className="s-logo" /> Java
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <SiSolidity className="s-logo" /> Solidity
                  </button>
                </li>
              </ul>
              <ul className="second-line-skills">
                <li className="list-item">
                  <button className="skill-button">
                    {" "}
                    <SiScala className="s-logo" /> Scala
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <FaHtml5 className="s-logo" /> HTML
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <FaCss3Alt className="s-logo" /> CSS
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button js">
                    <SiJavascript className="s-logo" /> Javascript
                  </button>
                </li>
              </ul>
              <ul className="third-line-skills">
                <li className="list-item">
                  <button className="skill-button">
                    <SiKotlin className="s-logo" /> Kotlin
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <SiLatex className="s-logo" /> Latex
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <SiSphinx className="s-logo" /> Sphinx
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <FaGitAlt className="s-logo" /> Git
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button bs">
                    {" "}
                    <VscTerminalBash className="s-logo" /> Bash Script
                  </button>
                </li>
              </ul>
              <ul className="fourth-line-skills">
                <li className="list-item">
                  <button className="skill-button ss">
                    <SiPowershell className="s-logo" /> Shell Script
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <FaGolang className="s-logo" /> Git
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <FaReact className="s-logo" /> React
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <SiFlask className="s-logo" /> Flask
                  </button>
                </li>
              </ul>
              <ul className="fifth-line-skills">
                <li className="list-item">
                  <button className="skill-button">
                    <HiCommandLine className="s-logo" /> CLI
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <TbFileTypeXml className="s-logo" /> XML
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <BiLogoNetlify className="s-logo" /> Netlify
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <TbBrandVscode className="s-logo" /> VS Code
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button as">
                    <SiAndroidstudio className="s-logo" /> Android Studio
                  </button>
                </li>
              </ul>
              <ul className="sixth-line-skills">
                <li className="list-item">
                  <button className="skill-button">
                    <FaLinux className="s-logo" /> Linux
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button kl">
                    <SiKalilinux className="s-logo" /> Kali Linux
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <FaFigma className="s-logo" /> Figma
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button">
                    <FaWindows className="s-logo" /> Windows
                  </button>
                </li>
              </ul>
              <ul className="seventh-line-skills">
                <li className="list-item">
                  <button className="skill-button ws">
                    <SiWireshark className="s-logo" /> Wireshark
                  </button>
                </li>
              </ul>
            </ul>
          </PopUp>
          <PopUp
            trigger={interpersonalbuttonPopup}
            setTrigger={setpersonalbuttonPopup}
          >
            <h3 className="interpersonal-skills-title">INTERPERSONAL SKILLS</h3>
            <ul>
              <ul className="first-line-skills">
                <li className="list-item">
                  <button className="skill-button ip">
                    <FaBusinessTime className="s-logo" /> Time Management
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button ip">
                    <GoProjectRoadmap className="s-logo" /> Project Management
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button bs">Problem Solving</button>
                </li>
                <li className="list-item">
                  <button className="skill-button sc-t">
                    <MdLeaderboard className="s-logo" /> Leadership
                  </button>
                </li>
              </ul>
              <ul className="second-line-skills">
                <li className="list-item">
                  <button className="skill-button ip">
                    <GiTeamIdea className="s-logo" /> Teamwork
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button ip">
                    <FaCreativeCommonsSampling className="s-logo" /> Public
                    Speaking
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button ip">
                    <TbWriting className="s-logo" /> Technical Writing
                  </button>
                </li>
                <li className="list-item">
                  <button className="skill-button sc">
                    Flexibility & Adaptability
                  </button>
                </li>
              </ul>
            </ul>
          </PopUp>
          <PopUp trigger={langbuttonPopup} setTrigger={setlangbuttonPopup}>
            <h3 className="lang-skills-title">LANGUAGE PROFICIENCY</h3>
            <ul className="first-line-skills">
              <li className="list-item">
                <button className="skill-button">
                  English
                </button>
              </li>
              <li className="list-item">
                <button className="skill-button">
                  Tamil
                </button>
              </li>
              <li className="list-item">
                <button className="skill-button">
                  Hindi
                </button>
              </li>
              <li className="list-item">
                <button className="skill-button">
                  German
                </button>
              </li>
            </ul>
          </PopUp>
          &emsp; <br />
          &emsp;
        </div>
      </div>
    );
}

export default Skills;
