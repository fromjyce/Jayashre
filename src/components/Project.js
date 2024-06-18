import React from "react";
import "remixicon/fonts/remixicon.css";

function Project({ title, description, link, contributor, timeline, stack }) {
  return (
    <li className="projects-list-item">
      <div className="projects-list-item-container">
        <div className="title-github-container">
          <h3 className="project-title">{title}</h3>
          <a
            className="github-project-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-github-fill github-project-icon"></i>
          </a>
        </div>
        <div className="projects-contributor">{contributor}</div>
        <div className="project-description">{description}</div>
        <div className="project-stack">{stack}</div>
        <div className="project-timeline">{timeline}</div>
      </div>
    </li>
  );
}

export default Project;
