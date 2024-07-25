import React from "react";
import "../styles/UpdateFooter.css";
import { NavLink } from "react-router-dom";

function UpdateFooter() {
  return (
    <div className="footer-main-container" id="footer">
      <div className="footer-container">
        <a
          className="footer-link"
          href="https://github.com/fromjyce/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="left-icon">
            <i class="ri-git-branch-fill"></i>
            <span>main</span>
          </div>
        </a>
        <div className="center-text">Last Updated on July 2024</div>
        <NavLink className="footer-link" to="/contact">
          <div className="right-icon">
            <i class="ri-user-smile-fill"></i>
            <span>JYCE</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default UpdateFooter;
