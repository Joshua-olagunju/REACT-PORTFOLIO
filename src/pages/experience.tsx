import { CiStar } from "react-icons/ci";

const roles = [
  {
    period: "May 2025 - Present",
    role: "Frontend Developer",
    company: "Abvakon Mobile Solutions Ltd. (PrimBooks)",
    summary: "Contributing to the production frontend of PrimBooks, a finance and accounting SaaS platform for business users - from responsive product screens to release-ready features.",
    highlights: ["React / Next.js + TypeScript", "REST API and server-state integration", "Public launch: November 2026"],
  },
  {
    period: "Jun 2025 - Oct 2025",
    role: "Web Content Uploader / Squad Leader",
    company: "GAO Tek Inc.",
    summary: "Maintained website content to publishing requirements while coordinating a small contributor group and reviewing work for consistency and completeness.",
    highlights: ["Content publishing", "Basic SEO and accessibility", "Contributor coordination"],
  },
  {
    period: "Feb 2023 - Present",
    role: "Freelance Front-End Developer",
    company: "Independent Projects",
    summary: "Designing and developing responsive client and independent projects, from design references and Figma prototypes to functional web pages and deployment.",
    highlights: ["React, Next.js and Tailwind CSS", "Figma-to-frontend delivery", "Modern web deployments"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-3 py-16 scroll-mt-[150px]">
      <div className="text-xs text-[#83b541] bg-white/10 shadow flex items-center justify-center py-2 px-4 gap-1 rounded-full w-fit mx-auto">
        <CiStar size={20} /> Experience
      </div>
      <div className="text-center max-w-2xl mx-auto mt-3 mb-8">
        <h3 className="text-2xl font-semibold">LEADING, BUILDING, IMPROVING</h3>
        <p className="text-sm text-gray-500 mt-2">Experience across product development, accessible implementation, and collaborative delivery.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {roles.map((role) => (
          <article key={role.role} className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 flex flex-col hover:-translate-y-1 hover:border-[#83b541]/50 hover:shadow-lg hover:shadow-black/5 transition-all">
            <p className="text-xs font-medium text-[#669530] uppercase tracking-wide mb-5">{role.period}</p>
            <div>
              <h4 className="text-lg font-semibold">{role.role}</h4>
              <p className="text-sm font-medium text-gray-500 mt-1">{role.company}</p>
              <p className="text-sm text-gray-600 leading-6 mt-3">{role.summary}</p>
              <ul className="flex flex-wrap gap-2 mt-5">
                {role.highlights.map((item) => <li key={item} className="text-xs bg-[#83b541]/10 text-[#527b23] rounded-full px-3 py-1">{item}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
