import React from "react";
import "remixicon/fonts/remixicon.css";
import "../styles/Contact.css";

function Contact () {
    return (
      <div id="contact" className="contact-main-container">
        <div className="contact-actual-container">
          <h1 className="contact-title">contact</h1>
          <div className="contact-container">
            <h2 className="contact-intro-title">Feel free to contact me</h2>
            <ul className="contact-list">
              <li className="contact-list-item">
                <a
                  className="contact-link"
                  href="https://leetcode.com/u/jaya2004kra/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leetcode
                </a>
              </li>
              <li className="contact-list-item">
                <a
                  className="contact-link"
                  href="https://github.com/fromjyce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="contact-list-item">
                <a
                  className="contact-link"
                  href="https://www.linkedin.com/in/jayashrek/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="contact-list-item">
                <a
                  className="contact-link"
                  href="https://discordapp.com/users/840610453431779348"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </li>
              <li className="contact-list-item">
                <a
                  className="contact-link"
                  href="mailto:jaya2004kra@gmail.com"
                  target="_top"
                  rel="noopener noreferrer"
                >
                  Send Mail
                </a>
              </li>
            </ul>
          </div>{" "}
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          <br />{" "}
        </div>
      </div>
    );
}

export default Contact;