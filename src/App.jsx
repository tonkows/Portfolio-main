import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/Home/Home";
import Marquee from "./components/Marquee/Marquee";
import About from "./components/about/About";
import GitHubCalendarComponent from './components/GitCalenda/GitHubCalendarComponent';
import Graduation from "./components/graduation/Graduation";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Home />
      <Marquee />
      <About /> 
      <GitHubCalendarComponent />
      <Graduation />
      <Projects />
      <Certificates />
      <Contact />
    </Router>
  );
}

export default App;
