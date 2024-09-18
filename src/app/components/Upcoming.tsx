"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function Upcoming() {
  const upcoming = [
    {
      title: "Building Scalable Web Applications with MERN",
      description:
        "Explore the architecture and best practices of scalable web applications using the MERN stack. Learn how MongoDB, Express, React, and Node.js integrate to build robust, feature-rich applications that are efficient and easy to maintain.",
      slug: "building-scalable-web-applications",
      isFeatured: true,
    },
    {
      title: "Interactive Dashboard Development with MERN",
      description:
        "Delve into building interactive, data-driven dashboards with React, Node.js, and MongoDB. This project showcases advanced UI/UX design paired with backend integration to create seamless,user-friendly experiences.",
      slug: "interactive-dashboard-development",
      isFeatured: true,
    },
    {
      title: "Real-Time Chat Application with MERN Stack",
      description:
        "Developed a real-time chat application utilizing the MERN stack, featuring live messaging, user authentication, and responsive design. This project highlights the seamless integration of front-end and back-end technologies for dynamic web applications.",
      slug: "real-time-chat-application",
      isFeatured: true,
    },
    {
      title: "E-Commerce Website with MERN Stack",
      description:
        "Dive into the development of a full-stack e-commerce website, featuring product management, payment integration, and order tracking. This project demonstrates the power of the MERN stack in building modern, scalable e-commerce platforms.",
      slug: "e-commerce-website-development",
      isFeatured: true,
    },
    {
      title: "Custom CRM Solution Using MERN",
       description: "Developed a custom CRM platform with React for front-end, Node.js, and MongoDB for back-end services. This project showcases how the MERN stack can be used to manage client data, track leads, and streamline sales processes.",
       slug: "custom-crm-solution",
        isFeatured: true
    },
    {
      title: "Event Management System with MERN Stack",
      description: "Developed a comprehensive event management system using the MERN stack, featuring real-time event scheduling, user registration, and notifications. The platform is designed for seamless scalability, with a dynamic user interface built with React and a secure back-end powered by Node.js and MongoDB.",
      slug: "event-management-system",
      isFeatured: true
    }
  ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED PROJECTS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Software Developer Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={upcoming.map((upcome) => ({
              title: upcome.title,
              description: upcome.description,
              link: "/",
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/projects"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View all
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
