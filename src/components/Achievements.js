import React from "react";
import "remixicon/fonts/remixicon.css";
import "../styles/Achievements.css";

function Achievements() {
    return (
      <div className="achievements-main-container">
        <div className="achievements-actual-container" id="achievements">
          <h1 className="achievements-title">experience</h1>
          <h2 className="achievements-intro-title">
            Some accomplishments I have achieved so far
          </h2>
          <div className="achieve-container">
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
          </div>{" "}
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
          <br />
          <br />{" "}
        </div>
      </div>
    );
}

export default Achievements;