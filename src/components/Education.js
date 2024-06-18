import React from "react";
import "remixicon/fonts/remixicon.css";
import "../styles/Education.css";

function Education() {
    return (
      <div id="education" className="education-main-container">
        <div className="education-actual-container">
          <h1 className="education-title">education</h1>
          <div className="academic-background-container">
            <h2 className="academic-background-title">
              My Academic background
            </h2>
            <ul className="academic-background-list">
              <li className="academic-background-list-item college-item">
                <div className="acad-info-container college-container">
                  <div className="institution-name">
                    Shiv Nadar University, Chennai
                  </div>
                  <div className="major-name">
                    Computer Science and Engineering, specializing in
                    Cybersecurity
                  </div>
                  <div className="degree-name">Bachelor's Degree (B.Tech)</div>
                  <div className="acad-timeline">August 2022 - Ongoing</div>
                </div>
                <div className="college-courses-list-container">
                  <div className="courses-list-title">
                    Few Courses that I have taken until now
                  </div>
                  <ul className="courses-list">
                    <li className="courses-list-item">
                      CS1009: Cyber Security Essentials
                    </li>
                    <li className="courses-list-item">
                      CS1703: Digital Design + Lab
                    </li>
                    <li className="courses-list-item">
                      CS1001: Programming in C
                    </li>
                    <li className="courses-list-item">
                      MA1001: Linear Algebra
                    </li>
                    <li className="courses-list-item">
                      PH1001T: Engineering Physics
                    </li>
                    <li className="courses-list-item">
                      MA1002: Probability & Statistics
                    </li>
                    <li className="courses-list-item">
                      CS1002: Programming in Python
                    </li>
                    <li className="courses-list-item">
                      CS1006T: Data & Structures
                    </li>
                    <li className="courses-list-item">
                      CS1004: Computer Organization & Architecture
                    </li>
                    <li className="courses-list-item">
                      CS1008: Classical Cryptography
                    </li>
                    <li className="courses-list-item">
                      MA2001: Discrete Mathematics and Graph Theory
                    </li>
                    <li className="courses-list-item">
                      CS2003: Object Oriented Programming
                    </li>
                    <li className="courses-list-item">
                      CS2001T: Database Management Systems
                    </li>
                    <li className="courses-list-item">
                      CS2011: Modern Cryptography
                    </li>
                    <li className="courses-list-item">
                      CS2701: Operating Systems + Lab
                    </li>
                    <li className="courses-list-item">
                      CS2004: Design and Analysis of Algorithms
                    </li>
                    <li className="courses-list-item">
                      CS2002: Computer Networks
                    </li>
                    <li className="courses-list-item">
                      CS2016: Foundations of Machine Learning for Cyber Security
                    </li>
                    <li className="courses-list-item">
                      CS2702: System Security Management + Lab
                    </li>
                    <li className="courses-list-item">MA2004: Graph Theory</li>
                  </ul>
                </div>
              </li>
              <li className="academic-background-list-item school-item">
                <div className="acad-info-container school-container">
                  <div className="institution-name">
                    Shri Srimathi Sundaravalli Memorial School, Chennai
                  </div>
                  <div className="major-name">Biology</div>
                  <div className="degree-name">Highschool</div>
                  <div className="acad-timeline">May 2020 - June 2022</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="certifications-container">
            <h2 className="certifications-title">
              Certificates that I have collected over time
            </h2>
            <ul className="certifications-list">
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">Data Mining</div>
                    <a
                      href="https://drive.google.com/file/d/1ZfmfOrs8clm7jlZKBpO7zuXDwNLq2HWt/view?usp=sharing"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">NPTEL</div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">Ethical Hacking</div>
                    <a
                      href="https://drive.google.com/file/d/1RMLDeJzCgEOKBBS6SEcN-AFRR5OG7TeL/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">NPTEL</div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Cyber Security and Privacy
                    </div>
                    <a
                      href="https://drive.google.com/file/d/1vDNEl3IfmQPxMnZcc7fu_WkK6lz1Bc2I/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">NPTEL</div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Operating System Basics
                    </div>
                    <a
                      href="https://drive.google.com/file/d/13Faw9lg3o23B2fhBp3niIHZ6-7AUnb3f/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">
                    Cisco Network Academy / Cisco Skills For All
                  </div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Cyber Threat Management
                    </div>
                    <a
                      href="https://drive.google.com/file/d/128uWklIQp6SRIjWodR0_JSbxqj2p_w_7/view?usp=drive_link"
                      className="certification-icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">
                    Cisco Network Academy / Cisco Skills For All
                  </div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Introduction to Packet Tracer
                    </div>
                    <a
                      href="https://drive.google.com/file/d/1gTKRVxWyicQ1UuuX-N5clRD1M6IDVIoc/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">
                    Cisco Network Academy / Cisco Skills For All
                  </div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Understanding Google Cloud Security and Operations
                    </div>
                    <a
                      href="https://drive.google.com/file/d/1JXychy0Hr9fN87xcv1lP_VetFe4kGX1D/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">Google Cloud</div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Google Workplace Security
                    </div>
                    <a
                      href="https://drive.google.com/file/d/1C5_yBMmY3Ah5EzHdG8Tsdy9BvMqXfQ98/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">Google Cloud</div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Information Security
                    </div>
                    <a
                      href="https://drive.google.com/file/d/1g9Ao5nhQljYe_fwk5kx81mfJ6O98fw2Q/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">
                    The Open University
                  </div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Introduction to Cyber Security
                    </div>
                    <a
                      href="https://drive.google.com/file/d/1DcMzBjwggfVvW4XD1bGaXb5RAASp9RL9/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">
                    Cisco Network Academy / Cisco Skills For All
                  </div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Project Management Fundamentals
                    </div>
                    <a
                      href="https://drive.google.com/file/d/18v0_ZVcQqrUJFXKN4QBCQ7c4JBJslEvD/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">IBM SKills Build</div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Big Data 101 Foundations
                    </div>
                    <a
                      href="https://drive.google.com/file/d/1sUIUfoLmrbxXuWZ7hCM6eFTZBGiJW2Mr/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">IBM Skills Build</div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">Level Up: Python</div>
                    <a
                      href="https://drive.google.com/file/d/135HU6F-U-QgpuFJLsE59p-PgnHR-RouT/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">Linkedin Learning</div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Learning Kali Linux on Windows
                    </div>
                    <a
                      href="https://drive.google.com/file/d/1a_Pz2iJp3iKWbVb0v1yFdRccBPyWPJLU/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">Linkedin Learning</div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">Git From Scratch</div>
                    <a
                      href="https://drive.google.com/file/d/1bG4kQhUn5s83FjxW27xec7V2j6TdsnLo/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">Linkedin Learning</div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Learning Linux Command Line
                    </div>
                    <a
                      href="https://drive.google.com/file/d/16VSpELv3KPMKy35vcvKgv0mC-L_ZFzrj/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">Linkedin Learning</div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Web Programming Foundations
                    </div>
                    <a
                      href="https://drive.google.com/file/d/16bIbAqRnfoJlqZfdF9b-R6ca1RAz1rD8/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">Linkedin Learning</div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Enterprise Design Thinking Practitioner
                    </div>
                    <a
                      href="https://drive.google.com/file/d/1_kpurOTxDK1UUiks3tA49zHLRnWgESvn/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">IBM Skills Build</div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Learning Windows Terminal
                    </div>
                    <a
                      href="https://drive.google.com/file/d/1ReEIeT4OdhrH4EdfdRKcNekueb2YNKBn/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">Linkedin Learning</div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">Learning GitHub</div>
                    <a
                      href="https://drive.google.com/file/d/1by9obytti63qN4ZckFtW6kZQtfnOvWyR/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">Linkedin Learning</div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Learning SQL Programming
                    </div>
                    <a
                      href="https://drive.google.com/file/d/15GtbBbPKMhbgnzSea94fjeA-fefLbNnR/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">Linkedin Learning</div>
                </div>
              </li>
              <li className="certifications-list-item">
                <div className="certification-container item-one">
                  <div className="certification-name-icon-container">
                    <div className="certification-name">
                      Introduction to Linux
                    </div>
                    <a
                      href="https://drive.google.com/file/d/1H8Q8SOF1LNARr0etMAvyOigPpKXHxuzK/view?usp=drive_link"
                      className="certification-icon-link "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-file-text-fill certificate-icon"></i>
                    </a>
                  </div>
                  <div className="certification-company">Linkedin Learning</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Education;