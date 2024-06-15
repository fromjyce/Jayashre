import React from "react";
import "../styles/Sidebar.css";
import "remixicon/fonts/remixicon.css";

function Sidebar() {
  return (
    <div className="sidebar-main-container" id="side-bar">
      <div className="actual-sidebar" id="actual-sidebar">
        <ul className="icons-list">
          <li className="icon one">
            <a className="icon-link" href="/#">
              <i class="ri-discord-fill"></i>
            </a>
          </li>
          <li className="icon two">
            <a className="icon-link" href="/#">
              <i class="ri-graduation-cap-fill"></i>
            </a>
          </li>
          <li className="icon three">
            <a className="icon-link" href="/#">
              <i class="ri-github-fill"></i>
            </a>
          </li>
          <li className="icon four">
            <a className="icon-link" href="/#">
              <i class="ri-linkedin-box-fill"></i>
            </a>
          </li>
          <li className="icon five">
            <a className="icon-link" href="/#">
              <i class="ri-mail-download-fill"></i>
            </a>
          </li>
          <li className="icon six">
            <a className="icon-link" href="/#">
              <i class="ri-mail-send-fill"></i>
            </a>
          </li>
        </ul>
        <div className="settings-icon">
          <a className="icon-link" href="/#">
            <i class="ri-settings-3-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
