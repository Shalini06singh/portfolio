"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const testimonials = [
  {
    quote:
      "Working with this MERN stack developer transformed my approach to web development. Their expertise helped bring my project to life with a fully responsive, scalable, and dynamic application. The attention to detail and dedication were world-class!",
    name: "Alex Johnson",
    title: "Tech Entrepreneur",
  },
  {
    quote:
      "Partnering with this developer was a game-changer. They took my idea and turned it into a fully functional, scalable web app that exceeded all my expectations. Their MERN stack skills are top-notch!",
    name: "Sarah Williams",
    title: "Startup Founder",
  },
  {
    quote:
      "Their ability to create dynamic and user-friendly applications using the MERN stack is impressive. The project was delivered on time, and the results have boosted my business significantly. Highly recommended!",
    name: "Michael Roberts",
    title: "Small Business Owner",
  },
  {
    quote:
      "This MERN developer brought my vision to life with incredible attention to detail and flawless execution. Their expertise made the whole process smooth, from initial concept to final deployment.",
    name: "Emily Carter",
    title: "Freelance Designer",
  },
  {
    quote:
      "Thanks to their expertise in the MERN stack, I now have a web platform that runs seamlessly and scales effortlessly. Their professional approach and dedication made this a fantastic collaboration.",
    name: "David Thompson",
    title: "Product Manager",
  },
  {
    quote:
      "Their knowledge of MongoDB, Express, React, and Node.js is unmatched. The app they built for me is not only functional but also incredibly intuitive for users. I couldn't have asked for a better developer!",
    name: "Rachel Martinez",
    title: "E-commerce Owner",
  },
];

function Testimonial() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div  className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
