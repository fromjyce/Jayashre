import React from "react";
import "../styles/UpdateFooter.css";
import "remixicon/fonts/remixicon.css";

function UpdateFooter() {
  return (
    <div className="update-footer-main-container" id="update-footer">
      <div className="update-footer-container">
        <div className="github-container">
          <ul className="github-list">
            <li className="github-list-item branch-icon">
              <i class="ri-git-branch-fill footer-icon"></i>
            </li>
            <li className="github-list-item branch-name">main</li>
          </ul>
        </div>
        <div className="main-container">
          <div className="updation">Last Updated on July 2024</div>
        </div>
        <div className="smile-container">
          <ul className="jyce-list">
            <li className="jyce-list-item emoji">
              <i class="ri-user-smile-fill footer-icon"></i>
            </li>
            <li className="jyce-list-item jyce-name">JYCE</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UpdateFooter;
