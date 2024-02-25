import "../styles/About.css";

function About () {
const scrollToContact = () => {
  const contactElement = document.getElementById("contact");
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: "smooth" });
  }
};

    return (
      <div className="About" id="about">
        <div className="about-container">
          <div className="about-title">
            <h1 className="title-about">ABOUT</h1>
          </div>
          <div className="rectangle">
            <div className="about-paragraph">
              <p>
                Hey there! &#128075; <br /> I'm a Cyber Security student with a
                knack for both coding and cybersecurity &#128640; <br /> Beyond
                the textbooks, I thrive on hands-on experiences, diving into
                real-world challenges. <br /> I'm all about that continuous
                learning vibe – always hungry for more knowledge. My goal? To
                use my skills to come up with cool, innovative solutions. <br />
                I'm totally open to collaborations, especially when it involves
                strengthening security measures and taking on cyber risks.
                <br /> Let's team up to make the digital world a safer place
                &#128187; &#128274;
              </p>
            </div>
            <button className="contact-button" onClick={scrollToContact}>
              Contact Me
            </button>
          </div>
          &emsp; <br /> &emsp; <br /> &emsp; <br /> &emsp;{" "}
          <pre>
            <br />
          </pre>
        </div>
      </div>
    );
}

export default About;