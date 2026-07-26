import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiCanva,
  SiAdobephotoshop,
} from "react-icons/si";
import { CiStar } from "react-icons/ci";
import { VscVscode } from "react-icons/vsc";

import { TbLayoutGrid } from "react-icons/tb";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Tools & workflow",
    skills: [
      { name: "Git / GitHub", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
    ],
  },
  {
    title: "UI / UX",
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Canva", icon: SiCanva },
      { name: "Adobe", icon: SiAdobephotoshop },
      { name: "Prototyping", icon: TbLayoutGrid },
    ],
  },
];

type Skill = { name: string; icon: React.ComponentType<{ size?: number }> };

function SkillCard({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div className="border border-gray-200 rounded p-5 flex flex-col gap-4 w-full h-full">
      <h4 className="text-center font-medium text-lg">{title}</h4>
      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map(({ name, icon: Icon }) => (
          <span
            key={name}
            className="flex items-center gap-2 text-xs px-3 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700"
          >
            <Icon size={14} />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

// ==================================
// Skill Component
// ==================================
export function Skill() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-3 scroll-mt-[150px]">
      <div className="text-xs text-[#83b541] mb-5 bg-white/10 shadow flex items-center justify-center py-2 px-4 gap-1 rounded-full w-fit mx-auto border-[#4682A9]/20">
        <CiStar size={20} />
        Skills
      </div>

      <div className="text-center mb-4">
        <h3 className="text-2xl font-semibold text-center">
          OVERVIEW OF MY SKILLS
        </h3>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} {...group} />
        ))}
      </div>
    </section>
  );
}