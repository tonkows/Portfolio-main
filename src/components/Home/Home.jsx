import React, { useEffect } from "react";
import "./home.css";

import HeaderSocial from "./HeaderSocial";
import ScrollDown from "./ScrollDown";

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".Welcome__Home, .name__home, .btn"
    );

    // Initial state
    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
    });

    // Sequential animation on load
    setTimeout(() => {
      elements.forEach((el, i) => {
        setTimeout(() => {
          el.style.transition = "all 0.5s ease-out";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, i * 200);
      });
    }, 500);

    // IntersectionObserver for scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.style.transition = "all 0.5s ease-out";
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        } else {
          entry.target.style.opacity = "0";
          entry.target.style.transform = "translateY(20px)";
        }
      });
    });

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="home container" id="home">
      <div className="intro">
        <div className="portfolio-container">
          <div className="portfolio-text Welcome__Home">
            <span className="text-line">WEB</span>
            <span className="text-line highlight">PORTFOLIO</span>
          </div>
        </div>

        <h1 className="name__home">Kanittha Somboon</h1>

        <HeaderSocial />
        <ScrollDown />
        <div className="background-lines">
  {/* Intro Content */}
</div>

      </div>
    </section>
  );
};

export default Home;
