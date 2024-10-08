import React from "react";
import "../styles/Projects.css";
import "remixicon/fonts/remixicon.css";
import Project from "./Project";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Created a dynamic portfolio website to highlight professional achievements, skills, and projects using React JS, HTML, CSS, and JavaScript, designed for a compelling online presence.",
    link: "https://github.com/fromjyce/Jayashre",
    contributor: "Solo Contributor",
    timeline: "Ongoing - Managed by me" /*January */,
    stack: "React JS, HTML/CSS, Javascript, Figma, UX",
    category: "sde",
  },
  {
    title: "WebShield",
    description:
      "Developed a high-accuracy phishing detection solution using a Chrome extension, ReactJS, FastAPI, and Firebase, achieving 98% accuracy across five machine learning models and enhancing online security.",
    link: "https://github.com/fromjyce/WebShield",
    contributor: "Solo Contributor",
    timeline: "July 2024 - August 2024",
    stack: "Python, Fast API, HTML/CSS, JavaScript, ReactJS, Firebase, Machine Learning, Phishing Detection",
    category: "ds",
  },
  {
    title: "Visual Based Malware Classification",
    description:
      "Contributed to research on visual-based malware classification under Dr. Pavan Kumar C, enhancing detection accuracy by 98%. Implemented advanced image processing and machine learning techniques to significantly improve the efficiency of malware detection systems.",
    link: "https://github.com/fromjyce/Visual-Based-Malware-Classification",
    contributor: "Solo Contributor",
    timeline: "May 2024 - July 2024",
    stack: "Python, Deep Learning, Machine Learning, Image Processing, Feature Extraction, Malware Analysis, Data Engineering",
    category: "ds",
  },
  {
    title: "SecureDash",
    description:
      "Engineered a real-time monitoring dashboard to boost Smart Grid security by 90% through advanced machine learning, utilizing ElectronJS, Flask, PowerBI, and various datasets.",
    link: "https://github.com/fromjyce/SecureDash",
    contributor: "Solo Contributor",
    timeline: "March 2024 - May 2024",
    stack:
      "Electron JS, HTML/CSS, Javascript, Scapy, Flask, Python, MySQL, PowerBI, CICDDOS2019 Dataset, Machine Learning, Deep Learning",
      category: "ds",
  },
  {
    title: "BotDetect",
    description:
      "Designed a graph-based machine learning model for botnet detection, improving detection rates and system robustness by 95% against zero-day attacks, leveraging Python and advanced data processing techniques.",
    link: "https://github.com/fromjyce/BotDetect",
    contributor: "Team Contributor",
    timeline: "March 2024 - April 2024",
    stack:
      "Python, Machine Learning, Flask, Pickle & Parquet Files, HTML/CSS, Javascript, CTU-13 Dataset, Wireshark, Scapy, Graph Tool",
      category: "ds",
  },
  {
    title: "Diamond Bidding Game",
    description:
      "Created a graphical card game with Pygame where players bid and select cards to score highest, showcasing skills in game development and algorithms.",
    link: "https://github.com/fromjyce/WE-Module3/tree/main/GenAI-Assignment-6",
    contributor: "Solo Contributor",
    timeline: "March 2024",
    stack: "Python, Algorithms, PyGame, Tkinter",
    category: "sde",
  },
  {
    title: "Algorithmic Trading Model Development",
    description:
      "Developed a model for algorithmic trading in the BTC/USDT crypto market, applying machine learning and deep learning techniques for trading strategy optimization.",
    link: "https://github.com/fromjyce/Algorithmic-Trading",
    contributor: "Team Contributor",
    timeline: "January 2024",
    stack: "Python, Machine Learning, Trading, Deep Learning",
    category: "ds",
  },
  {
    title: "HireMeHorizon: Smart Campus Recruiter",
    description:
      "Created a predictive website to improve campus placement outcomes by 94% using machine learning for accurate salary predictions, integrating Python, ReactJS, and Flask.",
    link: "https://github.com/fromjyce/HireMeHorizon",
    contributor: "Team Contributor",
    timeline: "October 2023 - December 2023",
    stack:
      "Python, HTML/CSS, Javascript, Flask, MySQL, React JS, Figma, Machine Learning, UX",
      category: "ds",
  },
  {
    title: "Deepfake Detection with InceptionResNetV2-BiLSTM",
    description:
      "Developed a deepfake detection system integrating InceptionResNetV2 with BiLSTM networks, achieving over 94% accuracy in identifying deepfake content. Utilized Python and TensorFlow-Keras to build a robust solution for multimedia content verification on a dedicated website.",
    link: "https://github.com/fromjyce/DeepfakeDetection",
    contributor: "Solo Contributor",
    timeline: "October 2023 - December 2023",
    stack: "Python, Deep Learning, Tensorflow-Keras, Flask, Numpy, OpenCV, HTML/CSS, JavaScript, ReactJS",
    category: "ds",
  },
  {
    title: "PenGUIn",
    description:
      "Co-developed a user-friendly Linux application for OS hardening, offering essential and advanced security features with streamlined one-click options, using PyGTK and Shell scripting.",
    link: "https://github.com/fromjyce/PenGUIn",
    contributor: "Team Contributor",
    timeline: "October 2023 - December 2023",
    stack: "Shell Scripting, Ubuntu - Operating System, PyGTK, OS Hardening",
    category: "sde",
  },
  {
    title: "AirPic",
    description:
      "Led the development of a gesture-controlled app with Kotlin and TensorFlow-Keras, featuring advanced gesture recognition for an enhanced user experience.",
    link: "https://github.com/fromjyce/AirPic",
    contributor: "Team Contributor",
    timeline: "June 2023 - November 2023",
    stack:
      "Kotlin, Android, Android Studio, CameraX API, Jetpack Compose, Tensorflow-Keras API, Latex, Figma, UX",
      category: "sde",
  },
  {
    title: "OpenChain",
    description:
      "Designed a Solidity smart contract for a digital content marketplace, utilizing Remix IDE and ThirdWeb to innovate blockchain applications.",
    link: "https://github.com/fromjyce/OpenChain",
    contributor: "Solo Contributor",
    timeline: "October 2023 - November 2023",
    stack: "Solidity, Remix IDE, Thirdweb, Blockchain, Ethereum, HTML/CSS, JavaScript",
    category: "sde",
  },
  {
    title: "CameraX",
    description:
      "Developed a camera application using Kotlin and CameraX for a seamless photography experience with enhanced features.",
    link: "https://github.com/fromjyce/CameraX",
    contributor: "Solo Contributor",
    timeline: "July 2023 - August 2023",
    stack: "Kotlin, Android Studio, CameraX, Android",
    category: "sde",
  },
  {
    title: "American Sign Language Detection",
    description:
      "Created an ASL gesture recognition system using CNNs, achieving 90% accuracy to enhance accessibility. Utilized Python and TensorFlow-Keras for effective gesture recognition.",
    link: "https://github.com/fromjyce/AmericanSignLanguageDetection",
    contributor: "Team Contributor",
    timeline: "March 2023 - May 2023",
    stack: "Python, Tkinter, Tensorflow-Keras, OpenCV",
    category: "ds",
  },
  {
    title: "Barcode Based Attendance System",
    description:
      "Designed an attendance system using barcode scanning and Python, integrating Excel for user-friendly database management.",
    link: "https://github.com/fromjyce/BarCodeAttendanceSystem",
    contributor: "Solo Contributor",
    timeline: "March 2023 - May 2023",
    stack: "Python, Tkinter, Excel, OpenCV, Pyzbar, OpenPyxl",
    category: "sde",
  },
  {
    title: "Smile Snap Wave Stop",
    description:
      "Implemented a project for smile detection and screenshot capture, using OpenCV and hand detection for program control.",
    link: "https://github.com/fromjyce/SmileSnapWaveStop",
    contributor: "Solo Contributor",
    timeline: "May 2023 - June 2023",
    stack: "Python, OpenCV, Tkinter, Mediapipe, Haarcascade",
    category: "ds",
  },
  {
    title: "Emotions based Music Player",
    description:
      "Developed a C-based music player that selects songs based on user-input emotions, utilizing a simple interface and external libraries.",
    link: "https://github.com/fromjyce/SongPlayer-In-C",
    contributor: "Solo Contributor",
    timeline: "October 2022 - December 2022",
    stack: "C, Terminal Emulation, Code::Blocks",
    category: "sde",
  },
];

const categorizeProjects = (projects, category) => {
  return projects.filter((project) => project.category === category);
};

function Projects() {
  const dataScienceProjects = categorizeProjects(projects, "ds");
  const sdeProjects = categorizeProjects(projects, "sde");
  const dataEngineeringProjects = categorizeProjects(projects, "de");

  return (
    <div id="projects" className="projects-main-container">
      <div className="projects-actual-container">
        <h1 className="projects-title">projects</h1>
        <h2 className="projects-intro-title">
          Some of the projects I've worked on so far.
        </h2>

        {/* Data Science Projects */}
        <div className="projects-category">
          <h3>Data Science Projects</h3>
          <ul className="projects-list">
            {dataScienceProjects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                contributor={project.contributor}
                timeline={project.timeline}
                stack={project.stack}
              />
            ))}
          </ul>
        </div>

        {/* Software Development Engineering (SDE) Projects */}
        <div className="projects-category">
          <h3>SDE Projects</h3>
          <ul className="projects-list">
            {sdeProjects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                contributor={project.contributor}
                timeline={project.timeline}
                stack={project.stack}
              />
            ))}
          </ul>
        </div>

        {/* Data Engineering Projects */}
        <div className="projects-category">
          <h3>Data Engineering Projects</h3>
          <ul className="projects-list">
            {dataEngineeringProjects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                contributor={project.contributor}
                timeline={project.timeline}
                stack={project.stack}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
