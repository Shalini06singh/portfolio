import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

import { Button } from "./ui/moving-border";

function Sections() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          MERN Stack Developer
        </h1>
        <h2 className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Hi.. I am Shalini Singh.
        </h2>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Proficient in developing responsive UIs and Full-stack applications
          using MongoDB, Express.js, React.js, Node.js, and Next.js.My tech stack is
          Java, JavaScript, React, Next.js, Node.js, and MongoDB.I am always looking forward to learn new
          technologies. I am currently looking for a full-time position/intern
          as a software developer/engineer.
        </p>
        <div className="mt-4">
          <Link href={"/projects"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Projects
            </Button>
          </Link>
          <Link href={"https://github.com/Shalini06singh"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              GitHub
            </Button>
          </Link>
          <Link href={"https://www.linkedin.com/in/shalini06/"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              LinkedIn
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sections;
