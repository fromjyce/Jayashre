import React from "react";
import "remixicon/fonts/remixicon.css";
import "../styles/Contact.css";

function Contact () {
    return (
      <div className="contact-main-container">
        <div className="contact-actual-container" id="contact">
          <h1 className="contact-title">contact</h1>
          <div className="contact-container">
            <h2 className="contact-intro-title">Feel free to contact me</h2>
            <ul className="contact-list">
              <li className="contact-list-item">
                <a
                  className="contact-link"
                  href="/#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="contact-list-item">
                <a
                  className="contact-link"
                  href="/#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="contact-list-item">
                <a
                  className="contact-link"
                  href="/#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </li>
              <li className="contact-list-item">
                <a
                  className="contact-link"
                  href="/#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send Mail
                </a>
              </li>
            </ul>
          </div>{" "}
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
        </div>
      </div>
    );
}

export default Contact;