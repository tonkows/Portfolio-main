import React from "react";
import "./about.css";
import "./aboutBox.css";

import Image from "../../assets/IMG_9642.jpg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About</h2>
      <div className="about__container grid">
        <div className="about__img-container">
          <img src={Image} alt="Profile Image" className="about__img" />
          <div className="about__img-text">KANITTHA SOMBOON</div>
        </div>

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello, my name is Kanittha Somboon, and I'm Motivated Computer Science graduate from Kasetsart University with hands-on experience in system analysis, web development, and UI design. 
              During my internship as a System Analyst, I engaged in real-world business processes and collaborated with development teams to design effective solutions. 
              I’m highly interested in pursuing a career as a System Analyst or Web Developer, where I can apply my skills and experience to contribute to the success and growth of the organization.
            </p>
            <a href="/assets/CVKanitthaS..pdf" className="CV_btn"target="_blank"
              rel="noopener noreferrer">
              CV
            </a>
            <a
              href="/assets/Resume_KanitthaS..pdf"
              className="RS_btn"
              target="_blank"
              rel="noopener noreferrer"
            >
             Resume
            </a>
            <a
              href="/assets/Transcript.pdf"
              className="TS_btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Transcript
            </a>
          </div>

          <div className="about__university grid">
            <div className="university__data">
              <div className="university__titles">
                <h5 className="university__name">
                  <b>KASETSART UNIVERSITY</b>
                </h5>
                <span className="university__number">
                  Bachelor of Science Program in Computer Science, Faculty of
                  Liberal Arts and Science
                </span>
                <h6 className="university__GPAX">
                  <b>GPAX : 3.49 (Second Class Honors)</b>
                </h6>
              </div>
              <div className="university__bar">
                <span className="university__percentage"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
