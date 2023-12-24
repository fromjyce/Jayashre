import "../styles/Experience.css";
import { FaPython } from "react-icons/fa";


function Experience () {
    return (
      <div className="Experience" id="Experience">
        <div className="experience-container">
          <div className="experience-title">
            <h1 className="title-experience">EXPERIENCE</h1>
          </div>
          <div className="experience-box-container">
            <div className="vertical-line">
                <div className="experience-point first">
                <FaPython size={25} color="#343434" down-10/>
                </div>
                </div>
          </div>
        </div>
      </div>
    );
}

export default Experience;
