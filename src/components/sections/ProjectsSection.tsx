/* eslint-disable @next/next/no-img-element */

import { BsBoxArrowUpRight } from "react-icons/bs";
import { SlSocialGithub } from "react-icons/sl";

const projects = [
  {
    title: "Tyche Agency",
    description:
      "Welcome to Tyche - where dreams turn into prosperity. We are Tyche Agency, one of the leading Digital Marketing agencies in Romania. We specialize in helping businesses like yours grow and succeed online.",
    imageUrl: "/tyche-front.png",
    imageAlt: "Tyche Agency Front Page",
    projectUrl: "https://tyche.agency",
    githubUrl: "https://github.com/erick-dsnk/tyche-agency",
  },
  {
    title: "Windswept Shire",
    description:
      "Windswept Shire is a role playing game placed in a mythical world filled with lots of creatures and loot you can collect and conquer the toughest of the monsters! After a long day of slaying mobs, you can kick back in th citadel, wander around with the townsfolk or just take a little nap in your house!",
    imageUrl: "/windswept-shire.png",
    imageAlt: "Windswept Shire Banner Art",
    projectUrl: "https://mythic-studios.itch.io/windsweptshire",
    githubUrl: "",
  },
  {
    title: "Uncle Dunk",
    description:
      "Presenting an outstanding multi-purpose Discord bot that offers a broad spectrum of capabilities, spanning from entertaining games to effective moderation and an array of utility commands!",
    imageUrl: "uncle-dunk.png",
    imageAlt: "Uncle Dunk Icon",
    projectUrl: "https://top.gg/bot/743859839821807736",
    githubUrl: "https://github.com/erick-dsnk/uncle-dunk-v2",
  },
  {
    title: "Electric Package Manager",
    description:
      "Highly optimized for speed and usability, Electric is anywhere from 200% to 1500% faster than other market competitors for downloading Applications and Packages, and has incredible speeds for concurrent / parallel downloading.",
    imageUrl: "electric-package-manager.png",
    imageAlt: "Electric Package Manager Demonstration",
    projectUrl: "https://electric.sh",
    githubUrl: "https://github.com/dimensionhq/electric",
  },
];

const Project = ({
  title,
  description,
  imageUrl,
  imageAlt,
  projectUrl,
  githubUrl,
  index,
}: {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  projectUrl: string;
  githubUrl: string;
  index: number;
}) => {
  return (
    <li className="relative flex flex-row justify-start md:odd:justify-start md:even:justify-end md:[&>div]:odd:right-0 md:[&>div]:even:left-0 md:[&>div]:odd:items-end md:[&>div]:even:items-start md:[&>div]:odd:text-end md:[&>div]:even:text-start min-w-[100%] mb-[100px]">
      <a className="min-h-[400px] md:max-w-[540px] relative rounded-lg shadow-lg hover:cursor-pointer [&>img]:hover:filter-none before:hidden md:before:block after:hidden md:after:block before:rounded-lg after:rounded-lg overflow-hidden hover:before:opacity-0 hover:after:opacity-0 before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:bottom-0 before:right-0 before:left-0 before:z-[2] before:bg-navy before:mix-blend-screen after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-green after:brightness-[60%] after:z-[2] after:opacity-30 custom-transition">
        <img
          className="w-full h-full object-cover md:object-fill md:aspect-video rounded-lg md:mix-blend-screen md:grayscale md:contrast-100 md:brightness-90 custom-transition opacity-20 md:opacity-100"
          src={imageUrl}
          alt={imageAlt}
        />
      </a>

      <div className="absolute min-h-[400px] md:min-h-0 flex flex-col justify-between max-w-[768px] md:max-w-[500px] top-0 p-4 xs:p-8 md:p-0">
        <p className="text-green font-mono text-[13px] my-2.5">
          Project #{index}
        </p>

        <h3 className="text-[clamp(24px,5vw,28px)] [font-weight:600] [line-height:1.1] mb-5">
          <a
            className="hover:text-green hover:cursor-pointer hover:drop-shadow-xl custom-transition"
            href={projectUrl}
            target="_blank"
          >
            {title}
          </a>
        </h3>

        <div className="flex drop-shadow-2xl md:drop-shadow-none md:hover:drop-shadow-2xl md:shadow-lg md:p-[25px] md:rounded bg-transparent md:bg-lightnavy text-[18px] text-lightslate z-[3] custom-transition">
          <p>{description}</p>
        </div>

        <div className="flex flex-row relative md:top-0 justify-end mt-4">
          {githubUrl != "" && (
            <a
              className="p-2 xs:p-3 hover:text-green hover:translate-y-[-3px] hover:cursor-pointer custom-transition"
              href={githubUrl}
            >
              <SlSocialGithub size={20} />
            </a>
          )}

          <a
            className="p-2 xs:p-3 hover:text-green hover:translate-y-[-3px] hover:cursor-pointer custom-transition"
            href={projectUrl}
          >
            <BsBoxArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </li>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-start justify-center min-h-[100vh] h-full max-w-[1000px] w-full py-[60px] xs:py-[80px] md:py-[100px] px-0 text-lightestslate"
    >
      <h2 className="flex items-center relative w-full mt-2.5 mb-10 text-[clamp(26px,5vw,32px)] text-lightestslate [font-weight:600] [line-height:1.1] before:![content:'02.'] before:[font-weight:400] before:font-mono before:text-green before:mr-2.5 before:relative before:bottom-1 before:text-[clamp(16px,3vw,20px)] after:![content:''] after:relative after:w-full md:after:w-[200px] lg:after:w-[356px] after:h-[1px] after:bg-lightestnavy after:ml-2.5 md:after:ml-5">
        Projects
      </h2>

      <div className="flex flex-col items-center md:items-start w-full">
        <ul className="w-full">
          {projects.map((project, index) => {
            return (
              <Project
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                imageAlt={project.imageAlt}
                projectUrl={project.projectUrl}
                githubUrl={project.githubUrl}
                index={index + 1}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
