import React, { useEffect } from "react";
import "./home.css";

import HeaderSocial from "./HeaderSocial";
import ScrollDown from "./ScrollDown";

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".Welcome__Home, .name__home, .btn"
    );

    // ตั้งค่าการเคลื่อนไหวตอนโหลดหน้า
    elements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
    });

    setTimeout(() => {
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.style.transition = "all 0.5s ease-out";
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, index * 200);
      });
    }, 500);

    // ตั้งค่าการเคลื่อนไหวเมื่อ scroll ด้วย IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        } else {
          entry.target.style.opacity = "0";
          entry.target.style.transform = "translateY(20px)";
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section className="home container" id="home">
      <div className="intro">
        <div className="portfolio-container">
          <div className="portfolio-text Welcome__Home">
            <span className="text-line">WEB</span>
            <span className="text-line">PORTFOLIO</span>
          </div>
        </div>

        <h1 className="name__home">Kanittha Somboon</h1>
        <HeaderSocial />

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;