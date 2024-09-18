"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const createContent = [
  {
    title: "Your Web App, Your Way: Custom Solutions with MERN",
    description:
      "Every web project is unique, and so is my approach. As a MERN stack developer, I provide personalized development services to bring your ideas to life. Whether it's building a dynamic front-end with React or structuring a powerful back-end with Node.js and MongoDB, my work ensures a tailored solution that meets your specific needs and grows with your ambitions.",
  },
  {
    title: "Unlock Your Digital Potential with MERN Stack Development",
    description:
      "Your project deserves a developer who understands your vision. I specialize in creating custom web solutions using the MERN stack, combining MongoDB, Express, React, and Node.js to build apps that are as unique as your business. With a personalized, hands-on approach, I ensure that every feature is designed to support your growth and success.",
  },
  {
    title: "Tailored Web Applications for Your Needs: MERN Stack Development",
    description:
      "I offer a personalized, hands-on approach to building web applications with the MERN stack. Each project is developed with your goals at the forefront, ensuring you get a solution that fits your specific requirements. Whether it’s crafting an intuitive front-end or building a robust API, I’m here to help you succeed in every phase of your development journey.",
  },
  {
    title: "Craft Your Future with MERN Stack: Personalized Web Solutions",
    description:
      "Embark on a development journey tailored to your vision. As a MERN stack developer, I provide personalized solutions to help you create modern, responsive web applications. From front-end design with React to back-end architecture with Node.js and MongoDB, every project is a collaborative effort designed to meet your needs and set the stage for your success.",
  },
];
function Choose() {
  return <div>
    <StickyScroll content={createContent}></StickyScroll>
  </div>;
}

export default Choose;
