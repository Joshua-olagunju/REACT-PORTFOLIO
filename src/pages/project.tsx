import { CgMediaLive } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    image: "/Screenshot 2026-11-09 085447.png",
    alt: "PrimBooks finance and accounting platform dashboard",
    title: "PrimBooks Finance Platform",
    description:
      "Contributed to the frontend of a production finance and accounting SaaS platform. I built responsive application views, reusable UI patterns, and API-connected experiences that support invoicing, financial tracking, and reporting workflows.",
    role: "Frontend Engineer",
    contributions: ["Responsive finance workflows", "Reusable UI patterns", "REST API and server-state integration"],
    outcome: "Contributed to PrimBooks' public launch in November 2026.",
    stack: ["React", "Next.js", "TypeScript", "REST APIs", "React Query"],
    liveUrl: "https://app.primbooks.com/login",
  },
  {
    image: "/Screenshot 2026-05-29 125930.png",
    alt: "Fintech Website",
    title: "Kings Guard Website",
    description:
      "Built in partnership with Sodatim Technologies, where I contributed as the front-end developer. I helped turn the team’s direction into a responsive corporate website with clear service information, trust signals, and contact paths.",
    role: "Frontend Developer, Sodatim Technologies partnership",
    contributions: ["Responsive page implementation", "Service and trust-focused content hierarchy", "Cross-device navigation and contact flows"],
    outcome: "Delivered a clear corporate presence for prospective clients.",
    stack: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    liveUrl: "https://kings-guard-gamma.vercel.app/",
  },
  {
    image: "/primbooks-portfolio.png",
    alt: "PrimBooks landing page team and interface",
    title: "PrimBooks Landing Page",
    description:
      "I translated UI designs created by fellow UI/UX designers into polished, responsive front-end screens for PrimBooks. My work focused on reusable interface components, fluid interactions, and a consistent product experience across the landing page.",
    role: "Frontend Developer",
    contributions: ["Figma handoff to frontend", "Reusable UI components", "Purposeful motion and responsive layouts"],
    outcome: "A cohesive landing-page experience that communicates the product clearly.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    liveUrl: "https://primbooks-landing-page.vercel.app/",
  },
  {
    image: "/Screenshot 2026-07-26 083749.png",
    alt: "Music Institute Website",
    title: "Music Institute Website",
    description:
      "A polished course and events experience designed to help prospective students explore the institute with confidence.",
    role: "Frontend Developer",
    contributions: ["Course and event presentation", "Responsive interface design", "Clear discovery paths for prospective students"],
    outcome: "A polished site that helps visitors explore the institute with confidence.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://praise-g-music.vercel.app/",
  },
  {
    image: "/Screenshot 2026-05-29 125411.png",
    alt: "Sodatim website work showcase",
    title: "Sodatim Website",
    description:
      "A modern digital-services site with a clear visual system, purposeful motion, and an easy-to-scan content hierarchy.",
    role: "Frontend Developer",
    contributions: ["Content hierarchy and responsive layout", "Purposeful Framer Motion interactions", "Consistent visual system"],
    outcome: "An easy-to-scan digital-services experience for prospective clients.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://sodatim.com/",
  },
];

type ProjectCardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
  role: string;
  contributions: string[];
  outcome: string;
  stack: string[];
  liveUrl: string;
};

function ProjectCard({
  image,
  alt,
  title,
  description,
  role,
  contributions,
  outcome,
  stack,
  liveUrl,
}: ProjectCardProps) {
  return (
    <article className="group bg-white border border-gray-200 rounded-sm overflow-hidden h-full flex flex-col hover:border-[#4F86C6]/60 transition-colors duration-300">
      <div className="overflow-hidden aspect-video bg-gray-100">
        <img src={image} alt={alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>

      <div className="flex flex-col gap-4 p-6 flex-1">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#4F86C6] mb-2">Selected work</p>
          <h4 className="font-semibold text-xl">{title}</h4>
        </div>
        <p className="text-sm text-gray-500 leading-6">{description}</p>

        <div className="border-y border-gray-100 py-3 space-y-2">
          <p className="text-xs font-medium text-gray-700"><span className="text-[#2E5F9E]">Role:</span> {role}</p>
          <ul className="space-y-1">
            {contributions.map((contribution) => (
              <li key={contribution} className="text-xs text-gray-500 leading-5 flex gap-2">
                <span className="text-[#4F86C6]" aria-hidden="true">•</span>{contribution}
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-600 leading-5"><span className="font-medium text-[#2E5F9E]">Outcome:</span> {outcome}</p>
        </div>

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

        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="mt-auto pt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#2E5F9E] hover:gap-3 transition-all">
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
      <div className="mb-3 text-xs text-[#4F86C6] bg-white/10 shadow flex items-center justify-center py-2 px-4 gap-1 rounded-full w-fit mx-auto border-[#4682A9]/20">
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
