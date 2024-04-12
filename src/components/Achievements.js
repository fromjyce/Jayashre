import "../styles/Achievements.css";

function Achievements() {
    return (
      <div className="Achievements" id="achievements">
        <div className="achievements-container">
          <div className="achievements-title">
            <h1 className="title-achievements">ACHIEVEMENTS</h1>
          </div>
          <div className="achieve-container">
            <ul className="achievements-list">
              <li className="achievement-item">
                <strong>February 2023</strong>: Achieved top 10% in Red Hat IT
                Aptitude Test - India 2023, ranking 89th percentile.
              </li>
              <li className="achievement-item">
                <strong>February 2023</strong>: Secured 62nd spot nationwide in
                ICPC Algo Queen 2023 – Amrita Vishwa Vidhyapeetham’s event,
                backed by ICPC Foundation and IBM Quantum.
              </li>
              <li className="achievement-item">
                <strong>March 2023</strong>: Chosen as 2023 Women Engineer
                Scholar, top 1% among 27,000 applicants, in TalentSprint-Google
                supported program.
              </li>
              <li className="achievement-item">
                <strong>July 2023</strong>: Selected for the SheCodes Foundation
                scholarship, honing web skills, and actively contributing to a
                vibrant coding community.
              </li>
              <li className="achievement-item">
                <strong>October 2023</strong>: Selected for the internal
                hackathon held at the university for the SIH Hackathon 2023.
              </li>
              <li className="achievement-item">
                <strong>February 2024</strong>: Achieved 2nd place at the
                National level poster presentation on "Visualizing Connectivity:
                IoT Poster Expo-2024" organized by the Centre for Internet of
                Things, Madhav Institute of Technology and Science, Gwalior
                (M.P.).
              </li>
              <li className="achievement-item">
                <strong>March 2024</strong>: Awarded first prize in Cyber
                Colloquy 3.0: Deepfake Discovery Global Hackathon, organized by
                Shah And Anchor Kutchhi Engineering College, with a cash prize
                of Rs. 5000.
              </li>
            </ul>
          </div>
          <div className="misc-space">
            &emsp; <br /> &emsp; <br /> &emsp; <br /> &emsp; <br /> &emsp;{" "}
            <br /> <br /> &emsp; <br /> &emsp; <br />
            &emsp;
          </div>
        </div>
      </div>
    );
}

export default Achievements;
