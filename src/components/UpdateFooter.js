import React from "react";
import "../styles/UpdateFooter.css";

function UpdateFooter() {
  return (
    <div className="footer-main-container" id="footer">
      <div className="footer-container">
        <div className="left-icon">
          <i class="ri-git-branch-fill"></i>
          <span>main</span>
        </div>
        <div className="center-text">Last Updated on June 2024</div>
        <div className="right-icon">
          <i class="ri-user-smile-fill"></i>
          <span>JYCE</span>
        </div>
      </div>
    </div>
  );
}

export default UpdateFooter;
