// src/components/Data.jsx
import gameImage from "../../assets/2.png";
import resumeImage from "../../assets/1.png";
import sukiImage from "../../assets/teenoi.png";
import database from "../../assets/database.png";
import dbPDF from "/assets/Video Streaming.pdf";
import SA from "../../assets/SA.png";
import saPDF from "/assets/sa.pdf";
import LINE from "../../assets/Line Dev Camp.png";
import water from "../../assets/water.png";
import Datasci from "../../assets/datasci.png";
import Data from "/assets/World Happiness Report 2015-2019 - Jupyter Notebook.pdf";
import DataP from "/assets/World Happiness Report 2015-2019 present.pdf";
import POC from "../../assets/POC.jpg";

const projects = [
  {
    id: 1,
    image:  POC,
    title: "POC Widget Management", 
    description: "Edit data on the dashboard page",
    techStack: ["React.js","chart.js"],
    demoLink: "https://widgetmanagement.vercel.app/",
    githubLink: "https://github.com/tonkows/Widget-Feature-METTHIER",
  },
  {
    id: 2,
    image: database,
    title: "database Video Streaming",
    description: "",
    techStack: ["database"],
    demoLink: dbPDF,
  },
  {
    id: 3,
    image: LINE,
    title: "LINE Dev Camp",
    description: "",
    techStack: [
      "LINE Messaging API",
      "LINE Chatbots",
      "integrate LINE with organizational systems",
    ],
    demoLink: "https://lin.ee/vfeG7Gy",
  },
  // {
  //   id: 3,
  //   image: sukiImage,
  //   title: "Sukki Teenoi Menu (clone)",
  //   description: "A clone of the SukkiTeenoi menu",
  //   techStack: ["HTML", "CSS", "JavaScript", "Express", "Node.js"],
  //   demoLink: "https://clone-sukiteenoi-odering.vercel.app/",
  //   githubLink: "https://github.com/tonkows/Clone-Odering.git",
  // },
  {
    id: 4,
    image: gameImage,
    title: "Word Guessing Game",
    description: "The word guessing game in the fruit category",
    techStack: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://word-guessing-game-ivory.vercel.app/",
    githubLink: "https://github.com/tonkows/word-guessing-game.git",
  },
  {
    id: 5,
    image: SA,
    title: "Water Drinking promotion system",
    description: "",
    techStack: ["System Analysis and Design"],
    demoLink: saPDF,
  },
  {
    id: 6,
    image: resumeImage,
    title: "Web Portfolio",
    description: "A portfolio website showing my projects",
    techStack: ["React", "CSS", "JavaScript"],
    demoLink: null,
    githubLink: null,
  },
  // {
  //   id: 7,
  //   image: water,
  //   title: "calculate the water bill",
  //   description:
  //     "Created a program to calculate the water bill in the dormitory.",
  //   techStack: ["HTML", "CSS", "JavaScript"],
  //   demoLink: "https://cal-water-bills-dormitory.vercel.app/",
  //   githubLink: "https://github.com/tonkows/cal-dormitory-water-bills.git",
  // },
  {
    id: 8,
    image: Datasci,
    title: "Data Sci",
    description:
      "Data and data sources.Programming languages and tools. Data acquisition. Data cleaning and organization. Data processing and analysis. Data visualization. Applications. Big data. Data ethics.",
    techStack: ["python"],
    demoLink: Data,
  },
];

export default projects;
