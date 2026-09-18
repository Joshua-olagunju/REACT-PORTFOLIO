import { CgMediaLive } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    image: "/Screenshot 2026-05-29 125930.png",
    alt: "Fintech Website",
    title: "Kings Guard Website",
    description:
      "A responsive corporate website that makes services, trust signals, and contact paths easy to find across every screen size.",
    stack: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    liveUrl: "https://kings-guard-gamma.vercel.app/",
  },
  {
    image: "/Screenshot 2026-07-26 083749.png",
    alt: "Music Institute Website",
    title: "Music Institute Website",
    description:
      "A polished course and events experience designed to help prospective students explore the institute with confidence.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://praise-g-music.vercel.app/",
  },
  {
    image: "/Screenshot 2026-05-29 125411.png",
    alt: "Sodatim website work showcase",
    title: "Sodatim Website",
    description:
      "A modern digital-services site with a clear visual system, purposeful motion, and an easy-to-scan content hierarchy.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://sodatim.com/",
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
    <article className="group bg-white border border-gray-200 rounded-2xl overflow-hidden h-full flex flex-col shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
      <div className="overflow-hidden aspect-video bg-gray-100">
        <img src={image} alt={alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>

      <div className="flex flex-col gap-4 p-6 flex-1">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#83b541] mb-2">Selected work</p>
          <h4 className="font-semibold text-xl">{title}</h4>
        </div>
        <p className="text-sm text-gray-500 leading-6">{description}</p>

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

        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="mt-auto pt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#669530] hover:gap-3 transition-all">
          <CgMediaLive /> View live site <FiArrowUpRight />
        </a>
      </div>
    </article>
  );
}

// ==================================
// Project Component
// ==================================
export function Project() {
  return (
    <section id="projects" className="px-3 py-10 scroll-mt-[150px]">
      {/* Heading */}
      <div className="mb-3 text-xs text-[#83b541] bg-white/10 shadow flex items-center justify-center py-2 px-4 gap-1 rounded-full w-fit mx-auto border-[#4682A9]/20">
        <CiStar size={20} />
        My Works
      </div>

      <div className="flex flex-col items-center gap-2 justify-center max-w-2xl mx-auto text-center mt-2">
        <h3 className="text-2xl font-semibold text-center">
          WORK BUILT TO BE USED
        </h3>
        <p className="text-sm text-gray-500">A few recent interfaces shaped around clarity, responsiveness, and real user needs.</p>
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
