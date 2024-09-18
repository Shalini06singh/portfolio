"use client";
import React from "react";
// import { IconAppWindow } from "@tabler/icons-react";
import courseData from "../data/projects.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  developer: string;
  isFeatured: boolean;
  image: string;
}

function Featured() {
  const featuredProjects = courseData.projects.filter(
    (project: Project) => project.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-800 font-semibold tracking-wide uppercase">
            SKILLS
          </h2>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl">
            NEXT NODE REACT EXPRESS MONGODB JAVA
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredProjects.map((project: Project) => (
            <div className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {project.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {project.description}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="px-1 py-1 rounded border border-neutral-100 text-neutral-800 bg-slate-500 hover:bg-gray-100 transition duration-200"
                  >
                    GitHubRepo
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href={"/projects"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
}

export default Featured;
