import React from "react";
import "./home.css";

import HeaderSocial from "./HeaderSocial";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
      <h1 className="Welcome__Home">Welcome to Web Portfolio</h1>
        <h1 className="name__home">Kanittha Somboon</h1>
        <span className="home__education">I'm a fullstack Developer</span>
        
        <HeaderSocial />

        <a href="#about" className="Aboutme_btn">About Me</a>

       <ScrollDown />
      </div>
       
    </section>
  );
};

export default Home;
