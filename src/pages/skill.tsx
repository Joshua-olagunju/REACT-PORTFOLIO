import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiCanva,
  SiAdobephotoshop,
  SiHtml5,
  SiCss3,
  SiFramer,
  SiShadcnui,
} from "react-icons/si";
import { CiStar } from "react-icons/ci";
import { VscVscode } from "react-icons/vsc";

import { TbLayoutGrid } from "react-icons/tb";

const skillGroups = [
  {
    title: "Frontend",
    description: "Modern interfaces built for speed, scale, and usability.",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
    ],
  },
  {
    title: "Delivery & quality",
    description: "Reliable workflows from version control to deployment.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
    ],
  },
  {
    title: "Design & product",
    description: "Thoughtful systems that turn ideas into clear experiences.",
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Adobe XD", icon: SiAdobephotoshop },
      { name: "Design systems", icon: TbLayoutGrid },
      { name: "Wireframing", icon: SiCanva },
    ],
  },
];

type Skill = { name: string; icon: React.ComponentType<{ size?: number }> };

function SkillCard({ title, description, skills }: { title: string; description: string; skills: Skill[] }) {
  return (
    <article className="border border-gray-200 border-t-2 border-t-[#83b541] rounded-sm p-6 flex flex-col gap-4 w-full h-full bg-white">
      <div className="text-center">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-xs text-gray-500 leading-5 mt-2 max-w-[16rem] mx-auto">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center content-start">
        {skills.map(({ name, icon: Icon }) => (
          <span
            key={name}
            className="flex items-center gap-2 text-xs px-3 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700 hover:border-[#83b541]/60 hover:text-[#527b23] transition-colors"
          >
            <Icon size={14} />
            {name}
          </span>
        ))}
      </div>
    </article>
  );
}

// ==================================
// Skill Component
// ==================================
export function Skill() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-3 py-16 scroll-mt-[150px]">
      <div className="text-xs text-[#83b541] mb-4 bg-white border border-gray-200 flex items-center justify-center py-2 px-4 gap-1 rounded-full w-fit mx-auto">
        <CiStar size={20} />
        Skills
      </div>

      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-center">
          OVERVIEW OF MY SKILLS
        </h3>
        <p className="text-sm text-gray-500 mt-2">The tools I use to turn product ideas and design systems into dependable web experiences.</p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} {...group} />
        ))}
      </div>
    </section>
  );
}
