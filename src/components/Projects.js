import React from "react";
import "../styles/Projects.css";
import "remixicon/fonts/remixicon.css";
import Project from "./Project";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Designed a dynamic personal portfolio website showcasing my professional achievements, skills, experiences, achievements, and notable projects.",
    link: "https://github.com/fromjyce/Jayashre",
    contributor: "Solo Contributor",
    timeline: "Ongoing - Managed by me" /*January */,
    stack: "React JS, HTML, CSS, Javascript, Figma, UX",
  },
  {
    title: "CipherGuard: A Secure Encryption/Decryption Tool",
    description:
      "SwingFX Java application for text, document, audio, video, and image encryption.",
    link: "https://github.com/fromjyce/CipherGuard",
    contributor: "Solo Contributor",
    timeline: "Ongoing" /*December */,
    stack: "Java, SwingFX, GUI, Cryptography",
  },
  {
    title: "BlockSecure",
    description:
      "A cutting-edge solution revolutionizing secure voting systems with advanced encryption and blockchain-like mechanisms to ensure election integrity.",
    link: "https://github.com/fromjyce/BlockSecure",
    contributor: "Team Contributor",
    timeline: "Ongoing" /*January */,
    stack:
      "Next JS, ViteJS, ReactJS, HTML, CSS, JavaScript, Solidity, Ethereum, Figma",
  },
  {
    title: "SecureDash",
    description:
      "A real-time monitoring dashboard leveraging machine learning to enhance Smart Grid security against cyber threats.",
    link: "https://github.com/fromjyce/SecureDash",
    contributor: "Solo Contributor",
    timeline: "March 2024 - May 2024",
    stack:
      "Electron JS, HTML, CSS, Javascript, Scapy, Flask, Python, MySQL, PowerBI, CICDDOS2019 Dataset, Machine Learning, Deep Learning",
  },
  {
    title: "BotDetect",
    description:
      "A graph-based ML model for botnet detection utilizing feature selection to enhance detection rates, reduce complexity, and improve robustness against zero-day attacks.",
    link: "https://github.com/fromjyce/BotDetect",
    contributor: "Team Contributor",
    timeline: "March 2024 - April 2024",
    stack:
      "Python, Machine Learning, Flask, Pickle & Parquet Files, HTML, CSS, Javascript, CTU-13 Dataset, Wireshark, Scapy, Graph Tool",
  },
  {
    title: "Diamond Bidding Game",
    description:
      "A graphical card game using Pygame, where players compete against the computer by selecting and bidding cards to achieve the highest score.",
    link: "https://github.com/fromjyce/WE-Module3/tree/main/GenAI-Assignment-6",
    contributor: "Solo Contributor",
    timeline: "March 2024",
    stack: "Python, Algorithms, PyGame, Tkinter",
  },
  {
    title: "Algorithmic Trading Model Development",
    description:
      "Development of an Algorithmic Trading Model for the BTC/USDT Crypto Market",
    link: "https://github.com/fromjyce/Algorithmic-Trading",
    contributor: "Team Contributor",
    timeline: "January 2024" /*January */,
    stack: "Python, Machine Learning, Trading, Deep Learning",
  },
  {
    title: "HireMeHorizon: Smart Campus Recruiter",
    description:
      "Applying machine learning to campus placement data involves analyzing student info, using models, and developing a website for undergraduates to assess placement and predict salaries.",
    link: "https://github.com/fromjyce/HireMeHorizon",
    contributor: "Team Contributor",
    timeline: "October 2023 - December 2023",
    stack:
      "Python, HTML, CSS, Javascript, Flask, MySQL, React, Figma, Machine Learning, UX",
  },
  {
    title: "Deepfake Detection with InceptionResNetV2-BiLSTM",
    description:
      "This project enhances deepfake detection by combining InceptionResNetV2 and BiLSTM networks, addressing concerns about deceptive content in multimedia.",
    link: "https://github.com/fromjyce/DeepfakeDetection",
    contributor: "Solo Contributor",
    timeline: "October 2023 - December 2023",
    stack: "Python, Deep Learning, Tensorflow-Keras, Flask, Numpy, OpenCV",
  },
  {
    title: "PenGUIn",
    description:
      "Developed a user-friendly Linux app for OS hardening with essential and advanced security options, one-click USB and Tor exit node blocking, Essential and Advanced modes, and additional features like cache cleaning for heightened system security.",
    link: "https://github.com/fromjyce/PenGUIn",
    contributor: "Team Contributor",
    timeline: "October 2023 - December 2023",
    stack: "Shell Scripting, Ubuntu - Operating System, PyGTK, OS Hardening",
  },
  {
    title: "AirPic",
    description:
      "A collaborative project revolutionizing camera interaction. Introduced smile detection, hand gesture-controlled capture, zoom via gestures, and dynamic filters.",
    link: "https://github.com/fromjyce/AirPic",
    contributor: "Team Contributor",
    timeline: "June 2023 - November 2023",
    stack:
      "Kotlin, Android, Android Studio, CameraX API, Jetpack Compose, Tensorflow-Keras API, Latex, Figma, UX",
  },
  {
    title: "OpenChain",
    description:
      "A Solidity smart contract transforming the digital content marketplace, was developed using ThirdWeb.",
    link: "https://github.com/fromjyce/OpenChain",
    contributor: "Solo Contributor",
    timeline: "October 2023 - November 2023",
    stack: "Solidity, Remix IDE, Thirdweb, Blockchain, Ethereum",
  },
  {
    title: "Student Management System",
    description:
      "Utilized JavaFX for a user-friendly interface, implementing a Student class with attributes to facilitate tasks like adding, editing, and displaying student details, ensuring accurate input validation and information integrity through data storage mechanisms.",
    link: "https://github.com/fromjyce/CodSoftPrograms/blob/main/StudentManagementSystem.java",
    contributor: "Solo Contributor",
    timeline: "August 2023 - September 2023",
    stack: "Java, SwingFX, UX, GUI",
  },
  {
    title: "Real Time Currency Converter",
    description:
      "Crafted a currency converter using Apilayer API, allowing base-to-target currency selection, real-time exchange rates fetching, accurate conversions, and clear result display with target currency symbols.",
    link: "https://github.com/fromjyce/CodSoftPrograms/blob/main/CurrencyConverter.java",
    contributor: "Solo Contributor",
    timeline: "August 2023 - September 2023",
    stack: "Java, Terminal Emulation, API Integration",
  },
  {
    title: "A Basic To-do Web App",
    description:
      "Built a minimalist to-do web app with HTML, CSS, and potentially JavaScript, enabling users to efficiently manage tasks, including features for editing, marking completion, and date/time tracking.",
    link: "https://github.com/fromjyce/OasisInfoBytePrograms/tree/main/LevelTwo/TaskThree",
    contributor: "Solo Contributor",
    timeline: "August 2023 - September 2023",
    stack: "HTML, Figma, Javascript, CSS, UX",
  },
  {
    title: "CameraX",
    description:
      "An innovative camera app coded in Kotlin, leveraging the power of CameraX library for a seamless photography experience.",
    link: "https://github.com/fromjyce/CameraX",
    contributor: "Solo Contributor",
    timeline: "July 2023 - August 2023",
    stack: "Kotlin, Android Studio, CameraX, Android",
  },
  {
    title: "American Sign Language Detection",
    description:
      "An ASL Gesture Recognition System in Python using CNNs for Improved Accessibility and Inclusivity.",
    link: "https://github.com/fromjyce/AmericanSignLanguageDetection",
    contributor: "Team Contributor",
    timeline: "March 2023 - May 2023",
    stack: "Python, Tkinter, Tensorflow-Keras, OpenCV",
  },
  {
    title: "Barcode Based Attendance System",
    description:
      "Developed a Python-based attendance system using barcode scanning and Excel files for user-friendly database management.",
    link: "https://github.com/fromjyce/BarCodeAttendanceSystem",
    contributor: "Solo Contributor",
    timeline: "March 2023 - May 2023",
    stack: "Python, Tkinter, Excel, OpenCV, Pyzbar, OpenPyxl",
  },
  {
    title: "Smile Snap Wave Stop",
    description:
      "The project involves smile detection and screenshot capture using OpenCV, along with hand detection to terminate the program.",
    link: "https://github.com/fromjyce/SmileSnapWaveStop",
    contributor: "Solo Contributor",
    timeline: "May 2023 - June 2023",
    stack: "Python, OpenCV, Tkinter, Mediapipe, Haarcascade",
  },
  {
    title: "Emotions based Music Player",
    description:
      "A first-semester mini project's C program played songs based on user-input emotions using a simple interface and external libraries.",
    link: "https://github.com/fromjyce/SongPlayer-In-C",
    contributor: "Solo Contributor",
    timeline: "October 2022 - December 2022",
    stack: "C, Terminal Emulation, Code::Blocks",
  },
];

function Projects() {
  return (
    <div className="projects-main-container">
      <div className="projects-actual-container" id="projects">
        <h1 className="projects-title">projects</h1>
        <h2 className="projects-intro-title">
          Some of the projects I've worked on so far.
        </h2>
        <div className="projects-container">
          <ul className="projects-list">
            {projects.map((project, index) => (
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
