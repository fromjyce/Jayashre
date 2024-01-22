import "../styles/ProjectRectangle.css";
import { FaSquareGithub } from "react-icons/fa6";

const ProjectRectangle = ({
  projectTitle,
  projectDescription,
  projectLink,
  projectContributor,
  projecttimeline,
  projectstack,
}) => {
  return (
    <div className="project-rectangle">
      <h3 className="contributor-name">{projectContributor}</h3>
      <h2 className="project-title-name">{projectTitle}</h2>
      <h3 className="timeline">{projecttimeline}</h3>
      <p className="project-description">{projectDescription}</p>
      <h3 className="project-stack">
        <strong>Tech Stack & Skills: </strong>
        {projectstack}
      </h3>
      <a
        className="project-github-icon"
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareGithub size={32} color="#db2b39" />
      </a>
    </div>
  );
};

export default ProjectRectangle;
