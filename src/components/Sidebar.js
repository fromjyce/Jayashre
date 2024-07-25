import React from "react";
import "../styles/Sidebar.css";
import "remixicon/fonts/remixicon.css";
import { SiLeetcode } from "react-icons/si";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-main-container" id="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-item leetcode-zero">
          <a
            className="icon-link"
            href="https://leetcode.com/u/jaya2004kra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="side-icon" />
          </a>
        </div>
        <div className="sidebar-item discord-one">
          <a
            className="icon-link"
            href="https://discordapp.com/users/840610453431779348"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ri-discord-fill side-icon"></i>
          </a>
        </div>
        <div className="sidebar-item scholar-two">
          <a
            className="icon-link"
            href="https://scholar.google.com/citations?user=PYXemgQAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ri-graduation-cap-fill side-icon"></i>
          </a>
        </div>
        <div className="sidebar-item github-three">
          <a
            className="icon-link"
            href="https://github.com/fromjyce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ri-github-fill side-icon"></i>
          </a>
        </div>
        <div className="sidebar-item linkedin-four">
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/jayashrek/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ri-linkedin-box-fill side-icon"></i>
          </a>
        </div>
        <Tippy
          content="Download Resume"
          className="sidebar-tooltip"
          animation="scale"
          placement="right"
          arrow={true}
          hideOnClick={true}
        >
          <div className="sidebar-item resume-five">
            <a
              className="icon-link"
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              download
            >
              <i class="ri-mail-download-fill side-icon"></i>
            </a>
          </div>
        </Tippy>
        <Tippy
          content="Send Mail"
          className="sidebar-tooltip"
          animation="scale"
          placement="right"
          arrow={true}
          hideOnClick={true}
        >
          <div className="sidebar-item mail-six">
            <a
              className="icon-link"
              href="mailto:jaya2004kra@gmail.com"
              target="_top"
              rel="noopener noreferrer"
            >
              <i class="ri-mail-send-fill side-icon"></i>
            </a>
          </div>
        </Tippy>
        <div className="bottom-icons">
          <div className="account-icon">
            <NavLink className="icon-link" to="/home">
              <i class="ri-account-circle-fill side-icon"></i>
            </NavLink>
          </div>
          <div className="settings-icon">
            <NavLink className="icon-link" to="/contact">
              <i class="ri-settings-3-fill side-icon"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
