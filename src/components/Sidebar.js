import React from "react";
import "../styles/Sidebar.css";
import "remixicon/fonts/remixicon.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

function Sidebar() {
  return (
    <div className="sidebar-main-container" id="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-item discord-one">
          <a className="icon-link" href="/#">
            <i class="ri-discord-fill side-icon"></i>
          </a>
        </div>
        <div className="sidebar-item scholar-two">
          <a className="icon-link" href="/#">
            <i class="ri-graduation-cap-fill side-icon"></i>
          </a>
        </div>
        <div className="sidebar-item github-three">
          <a className="icon-link" href="/#">
            <i class="ri-github-fill side-icon"></i>
          </a>
        </div>
        <div className="sidebar-item linkedin-four">
          <a className="icon-link" href="/#">
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
            <a className="icon-link" href="/#">
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
            <a className="icon-link" href="/#">
              <i class="ri-mail-send-fill side-icon"></i>
            </a>
          </div>
        </Tippy>
        <div className="bottom-icons">
          <div className="account-icon">
            <a className="icon-link" href="/#">
              <i class="ri-account-circle-fill side-icon"></i>
            </a>
          </div>
          <div className="settings-icon">
            <a className="icon-link" href="/#">
              <i class="ri-settings-3-fill side-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
