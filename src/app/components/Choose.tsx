"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const createContent = [
  {
    title: "Software Trainee (Internship)",
    description:
      "B.Tech Student from Noida Institute of Engineering and Technology completed the project from 8th May 2023 to 8th November 2023,Under training period,developed “E-commerce platform” using “MERN Stack” Technology",
  },
  {
    title: "Academic Project1 (Farm2Fork)",
    description:
      "Full-stack e-commerce solution created using React Redux Toolkit for dynamic client-side experiences, paired with a Node, Express API backend and MongoDB database. Robust cart management with add-to-cart and remove cart options. Comprehensive user authentication and authorization for a tailored shopping experience.",
  },
  {
    title: "Academic Project2 (Elite-Shoppee_Front-end)",
    description:
      "Front-End Project with essential e-commerce functionalities including search, add-to-cart, checkout and remove-from-cart. Using HTML, CSS, React JS, Redux Toolkit, Bootstrap, and Firebase.",
  },
  {
    title: "Academic Project3 (Blog-Management-System)",
    description:
    "Built using Node.js, React.js, JavaScript, Bootstrap, and REST API. For smooth management of blogs, including features of login, register, and logout system.",
  },
];
function Choose() {
  return <div>
    <StickyScroll content={createContent}></StickyScroll>
  </div>;
}

export default Choose;
