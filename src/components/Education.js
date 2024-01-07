import "../styles/Education.css";

function Education() {
    return (
      <div className="Education" id="Education">
        <div className="education-container">
          <div className="education-title">
            <h1 className="title-education">EDUCATION</h1>
          </div>
          <div className="overall-education-list">
            <ul className="education-list">
              <li className="education-item">
                <div className="education-info">
                  <p className="college-info">
                    <strong>Shiv Nadar University, Chennai</strong>
                    <br />
                    2022 - Ongoing
                    <br />
                    Bachelors of Technology
                    <br />
                    Computer Science and Engineering, specialization in
                    Cybersecurity
                    <br />
                    <i>
                      Currently part of the Network Security and Blockchain
                      Research Group
                    </i>
                  </p>
                </div>
              </li>
              <li className="education-item">
                <div className="education-info second">
                  <p className="school-info">
                    <strong>Srimathi Sundaravalli Memorial School</strong>
                    <br />
                    2014 - 2022
                    <br />
                    Biology Stream
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Education;
