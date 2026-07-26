import { Button } from "../components/button";
import { CgMediaLive } from "react-icons/cg";
import { CiStar } from "react-icons/ci";

const projects = [
  {
    image: "/Screenshot 2026-05-29 125930.png",
    alt: "Fintech Website",
    title: "Kings Guard Website",
    description:
      "A responsive corporate website for a security company, built with React, Tailwind CSS, and TypeScript, featuring a clean design and intuitive navigation.",
    stack: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    liveUrl: "https://kings-guard-gamma.vercel.app/",
  },
  {
    image: "/Screenshot 2026-07-26 083749.png",
    alt: "Music Institute Website",
    title: "Music Institute Website",
    description:
      "A modern website for a music training institute, showcasing courses, trainers, and events with a clean and responsive design.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://praise-g-music.vercel.app/",
  },
  {
    image: "/Screenshot 2026-05-29 125411.png",
    alt: "DriftTech Website",
    title: "Responsive Corporate Website",
    description:
      "A modern corporate fintech website focused on clean UI, smooth animations, and clear presentation of digital solutions.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://drift-tech-web.vercel.app/",
  },
];

type ProjectCardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
};

function ProjectCard({
  image,
  alt,
  title,
  description,
  stack,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="p-2 border border-gray-200 h-full flex flex-col">
      <div className="overflow-hidden aspect-video">
        <img src={image} alt={alt} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col gap-2 p-2 mt-5 flex-1">
        <p className="font-bold text-lg">{title}</p>
        <p className="text-xs text-gray-500 leading-loose">{description}</p>

        <div className="flex flex-wrap gap-2 mt-1">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <Button
          icon={<CgMediaLive />}
          text="View Live"
          buttonBackground="green"
          size="small"
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto"
        />
      </div>
    </div>
  );
}

// ==================================
// Project Component
// ==================================
export function Project() {
  return (
    <section id="projects" className="px-3 scroll-mt-[150px]">
      {/* Heading */}
      <div className="mb-3 text-xs text-[#83b541] bg-white/10 shadow flex items-center justify-center py-2 px-4 gap-1 rounded-full w-fit mx-auto border-[#4682A9]/20">
        <CiStar size={20} />
        My Works
      </div>

      <div className="flex flex-col items-center gap-2 justify-center max-w-2xl mx-auto text-center mt-2">
        <h3 className="text-2xl font-semibold text-center">
          HIGHLIGHTS OF MY WORKS
        </h3>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
