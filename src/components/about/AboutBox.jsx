import React, { useEffect } from "react";
import "./aboutBox.css";

const AboutBox = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll(".skills__box");

    boxes.forEach((box, index) => {
      box.classList.add(`delay-${index + 1}`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1, 
      }
    );

    boxes.forEach((box) => {
      observer.observe(box);
    });

    return () => {
      boxes.forEach((box) => {
        observer.unobserve(box);
      });
    };
  }, []);

  return (
   <section className="about container section" id="about">
  <h2 className="section__title">My Skills</h2>
  <div className="skills__boxes grid">

    {/* 1. Programming Languages */}
    <div className="skills__box">
      <h3 className="skills__title"><strong>Programming Languages</strong></h3>
      <span>Python, HTML, CSS, JavaScript, PHP, C#</span>
    </div>

    {/* 2. Web Frameworks & Libraries */}
    <div className="skills__box">
      <h3 className="skills__title"><strong>Web Frameworks & Libraries</strong></h3>
      <span>Node.js, React.js, Express.js</span>
    </div>

    {/* 3. CSS & UI Libraries */}
    <div className="skills__box">
      <h3 className="skills__title"><strong>CSS & UI Libraries</strong></h3>
      <span>TailwindCSS, Bootstrap, Styled-Components, Ant Design, Chart.js</span>
    </div>

    {/* 4. Python Libraries */}
    <div className="skills__box">
      <h3 className="skills__title"><strong>Python Libraries</strong></h3>
      <span>Pandas, SKLearn, Matplotlib</span>
    </div>

    {/* 5. Tools */}
    <div className="skills__box">
      <h3 className="skills__title"><strong>Tools</strong></h3>
      <span>GitHub, VSCode, Figma, Jupyter, Colab, Lucid Chart</span>
    </div>

    {/* 6. Databases */}
    <div className="skills__box">
      <h3 className="skills__title"><strong>Databases</strong></h3>
      <span>MySQL (phpMyAdmin), PostgreSQL</span>
    </div>

  </div>
</section>


  );
};

export default AboutBox;
