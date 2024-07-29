import React from "react";
import "remixicon/fonts/remixicon.css";
import "../styles/Achievements.css";

function Achievements() {
    return (
      <div id="achievements" className="achievements-main-container">
        <div className="achievements-actual-container">
          <h1 className="achievements-title">achievements</h1>
          <div className="publications-container">
            <h2 className="publications-title">My Published Works</h2>
            <ul className="publications-list">
              <li className="publications-list-item">
                <div className="publication-info-container">
                  <div className="pub-name-link-container">
                    <div className="publication-name">
                      Integrating Cyber-Physical Systems for Enhanced Efficiency
                      in Healthcare Solutions (2024)
                    </div>
                    <a
                      className="pub-link"
                      href="https://www.igi-global.com/gateway/chapter/352443"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-article-fill paper-icon"></i>
                    </a>
                  </div>
                  <div className="authors-list">
                    <strong>Jayashre</strong>, Padmavathi U, Harshitha R S, Nidhi Gummaraju
                  </div>
                  <div className="publisher">
                    Technologies for Sustainable Healthcare Development, IGI Global
                  </div>
                </div>
              </li>
              <li className="publications-list-item">
                <div className="publication-info-container">
                  <div className="pub-name-link-container">
                    <div className="publication-name">
                      Safeguarding media integrity: A hybrid optimized deep
                      feature fusion based deepfake detection in videos (2024)
                    </div>
                    <a
                      className="pub-link"
                      href="https://www.sciencedirect.com/science/article/abs/pii/S0167404824001615"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-article-fill paper-icon"></i>
                    </a>
                  </div>
                  <div className="authors-list">
                    <strong>Jayashre</strong> and M Amsaprabhaa
                  </div>
                  <div className="publisher">
                    Q1 Journal, Computers & Security, Elsevier Advanced
                    Technology
                  </div>
                </div>
              </li>
              <li className="publications-list-item">
                <div className="publication-info-container">
                  <div className="pub-name-link-container">
                    <div className="publication-name">
                      American Sign Language Real Time Detection Using
                      TensorFlow and Keras in Python (2024)
                    </div>
                    <a
                      className="pub-link"
                      href="https://ieeexplore.ieee.org/abstract/document/10511469"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-article-fill paper-icon"></i>
                    </a>
                  </div>
                  <div className="authors-list">
                    <strong>Jayashre</strong>, M Amsaprabhaa, H Saadhvi Sree,
                    Kavini Muthamizhvalavan, Nidhi Gummaraju, S Padmajaa
                  </div>
                  <div className="publisher">
                    2024 3rd International Conference for Innovation in
                    Technology (INOCON), IEEE
                  </div>
                </div>
              </li>
              <li className="publications-list-item">
                <div className="publication-info-container">
                  <div className="pub-name-link-container">
                    <div className="publication-name">
                      Bar Code Based Attendance System (2023)
                    </div>
                    <a
                      className="pub-link"
                      href="https://ieeexplore.ieee.org/abstract/document/10426394"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="ri-article-fill paper-icon"></i>
                    </a>
                  </div>
                  <div className="authors-list">
                    <strong>Jayashre</strong>, M Amsaprabhaa, H Saadhvi Sree,
                    Kavini Muthamizhvalavan, Nidhi Gummaraju, S Padmajaa
                  </div>
                  <div className="publisher">
                    2023 Global Conference on Information Technologies and
                    Communications (GCITC), IEEE
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="achievements-list-title">
              Some accomplishments I have achieved so far
            </h2>
            <ul className="achievements-list">
              <li className="achievement-item">
                <strong className="date-name">February 2023</strong>: Achieved
                top 10% in Red Hat IT Aptitude Test - India 2023, ranking 89th
                percentile.
              </li>
              <li className="achievement-item">
                <strong className="date-name">February 2023</strong>: Secured
                62nd spot nationwide in ICPC Algo Queen 2023 – Amrita Vishwa
                Vidhyapeetham’s event, backed by ICPC Foundation and IBM
                Quantum.
              </li>
              <li className="achievement-item">
                <strong className="date-name">March 2023</strong>: Chosen as
                2023 Women Engineer Scholar, top 1% among 27,000 applicants, in
                TalentSprint-Google supported program.
              </li>
              <li className="achievement-item">
                <strong className="date-name">July 2023</strong>: Selected for
                the SheCodes Foundation scholarship, honing web skills, and
                actively contributing to a vibrant coding community.
              </li>
              <li className="achievement-item">
                <strong className="date-name">October 2023</strong>: Selected
                for the internal hackathon held at the university for the SIH
                Hackathon 2023.
              </li>
              <li className="achievement-item">
                <strong className="date-name">February 2024</strong>: Achieved
                2nd place at the National level poster presentation on
                "Visualizing Connectivity: IoT Poster Expo-2024" organized by
                the Centre for Internet of Things, Madhav Institute of
                Technology and Science, Gwalior (M.P.).
              </li>
              <li className="achievement-item">
                <strong className="date-name">March 2024</strong>: Awarded first
                prize in Cyber Colloquy 3.0: Deepfake Discovery Global
                Hackathon, organized by Shah And Anchor Kutchhi Engineering
                College, with a cash prize of Rs. 5000.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Achievements;