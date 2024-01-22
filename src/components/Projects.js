import "../styles/Projects.css";
import ProjectRectangle from "./ProjectRectangle";



const Projects = () => {
  const projects = [
    {
      title: "Emotions based Music Player",
      description:
        "A first-semester mini project's C program played songs based on user-input emotions using a simple interface and external libraries.",
      link: "https://example.com/project1",
      contributor: "Solo Contributor",
      timeline: "October 2022 - December 2022",
      stack: "C, Terminal Emulation",
    },
    {
      title: "Smile Snap Wave Stop",
      description:
        "The project involves smile detection and screenshot capture using OpenCV, along with hand detection to terminate the program.",
      link: "https://example.com/project1",
      contributor: "Solo Contributor",
      timeline: "May 2023 - June 2023",
      stack: "Python, OpenCV, Tkinter, Mediapipe, Haarcascade",
    },
    {
      title: "Barcode Based Attendance System",
      description:
        "Developed a Python-based attendance system using barcode scanning (tkinter GUI, pyzbar, SVM Classifier, OpenCV) and Excel files for user-friendly database management.",
      link: "https://example.com/project1",
      contributor: "Solo Contributor",
      timeline: "March 2023 - May 2023",
      stack: "Python, Tkinter, Excel, OpenCV, Pyzbar, OpenPyxl",
    },
    {
      title: "American Sign Language Detection",
      description:
        "An ASL Gesture Recognition System in Python using CNNs for Improved Accessibility and Inclusivity.",
      link: "https://example.com/project1",
      contributor: "Team Contributor",
      timeline: "March 2023 - May 2023",
      stack: "Python, Tkinter, Tensorflow-Keras, OpenCV",
    },
    {
      title: "CameraX",
      description:
        "An innovative camera app coded in Kotlin, leveraging the power of CameraX library for a seamless photography experience",
      link: "https://example.com/project1",
      contributor: "Solo Contributor",
      timeline: "July 2023 - August 2023",
      stack: "Kotlin, Android Studio, CameraX, Android",
    },
    {
      title: "A Basic To-do Web App",
      description:
        "Built a minimalist to-do web app with HTML, CSS, and potentially JavaScript, enabling users to efficiently manage tasks, including features for editing, marking completion, and date/time tracking.",
      link: "https://example.com/project1",
      contributor: "Solo Contributor",
      timeline: "August 2023 - September 2023",
      stack: "HTML, Figma, Javascript, CSS, UX",
    },
    {
      title: "Real Time Currency Converter",
      description:
        "Crafted a currency converter using Apilayer API, allowing base-to-target currency selection, real-time exchange rates fetching, accurate conversions, and clear result display with target currency symbols.",
      link: "https://example.com/project1",
      contributor: "Solo Contributor",
      timeline: "August 2023 - September 2023",
      stack: "Java, Terminal Emulation, API Integration",
    },

    {
      title: "Student Management System",
      description:
        "Utilized JavaFX for a user-friendly interface, implementing a Student class with attributes to facilitate tasks like adding, editing, and displaying student details, ensuring accurate input validation and information integrity through data storage mechanisms.",
      link: "https://example.com/project1",
      contributor: "Solo Contributor",
      timeline: "August 2023 - September 2023",
      stack: "Java, SwingFX, UX, GUI",
    },
    {
      title: "OpenChain",
      description:
        "A Solidity smart contract transforming the digital content marketplace, was developed using ThirdWeb",
      link: "https://example.com/project1",
      contributor: "Solo Contributor",
      timeline: "October 2023 - November 2023",
      stack: "Solidity, Remix IDE, Thirdweb, Blockchain, Ethereum",
    },
    {
      title: "AirPic",
      description:
        "A collaborative project revolutionizing camera interaction. Introduced smile detection, hand gesture-controlled capture, zoom via gestures, and dynamic filters",
      link: "https://example.com/project1",
      contributor: "Team Contributor",
      timeline: "June 2023 - November 2023",
      stack:
        "Kotlin, Android, Android Studio, CameraX API, Jetpack Compose, Tensorflow-Keras API, Latex, Figma, UX",
    },
    {
      title: "PenGUIn",
      description:
        "Developed a user-friendly Linux app for OS hardening with essential and advanced security options, one-click USB and Tor exit node blocking, Essential and Advanced modes, and additional features like cache cleaning for heightened system security.",
      link: "https://example.com/project1",
      contributor: "Team Contributor",
      timeline: "October 2023 - December 2023",
      stack: "Shell Scripting, Operating System, PyGTK, OS Hardening",
    },
    {
      title: "Deepfake Detection with InceptionResNetV2-BiLSTM",
      description:
        "This project enhances deepfake detection by combining InceptionResNetV2 and BiLSTM networks, addressing concerns about deceptive content in multimedia.",
      link: "https://example.com/project1",
      contributor: "Solo Contributor",
      timeline: "October 2023 - December 2023",
      stack: "Python, Deep Learning, ",
    },
    {
      title: "HireMeHorizon: Smart Campus Recruiter",
      description:
        "Applying machine learning to campus placement data involves analyzing student info, using models, and developing a website for undergraduates to assess placement and predict salaries.",
      link: "https://example.com/project1",
      contributor: "Team Contributor",
      timeline: "October 2023 - December 2023",
      stack:
        "Python, HTML, CSS, Javascript, Flask, MySQL, React, Figma, Machine Learning, UX",
    },
    {
      title: "CipherGuard: A Secure Encryption/Decryption Tool",
      description:
        "SwingFX Java application for text, document, audio, video, and image encryption using methods like CaesarCipher, OneTimePad, AES, RSA, and RC4",
      link: "https://example.com/project1",
      contributor: "Solo Contributor",
      timeline: "Ongoing" /*December */,
      stack: "Java, SwingFX, GUI, Cryptography",
    },
    {
      title: "Algorithmic Trading Model Development",
      description:
        "Development of an Algorithmic Trading Model for the BTC/USDT Crypto Market",
      link: "https://example.com/project1",
      contributor: "Team Contributor",
      timeline: "Ongoing" /*January */,
      stack: "Python, Machine Learning, Trading",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Designed a dynamic personal portfolio website showcasing my professional achievements, skills, experiences, achievements, and notable projects",
      link: "https://example.com/project1",
      contributor: "Solo Contributor",
      timeline: "Ongoing" /*January */,
      stack: "React JS, HTML, CSS, Javascript, Figma, UX",
    },
  ];

  return (
    <div className="Projects" id="Projects">
      <div className="projects-container">
        <div className="projects-title">
          <h1 className="title-projects">PROJECTS</h1>
        </div>
        <div className="projectsr-container">
          {projects.map((project, index) => (
            <ProjectRectangle
              key={index}
              projectTitle={project.title}
              projectDescription={project.description}
              projectLink={project.link}
              projectContributor={project.contributor}
              projecttimeline={project.timeline}
              projectstack = {project.stack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;