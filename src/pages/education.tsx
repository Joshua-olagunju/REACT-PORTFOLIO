import { CiStar } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Master's in Information Technology",
    school: "Miva Open University",
    period: "In progress - Expected 2027",
    detail: "Building deeper expertise in technology, systems, and digital innovation alongside professional frontend work.",
    status: "In progress",
  },
  {
    degree: "B.Sc. Sociology",
    school: "Crawford University, Ogun State",
    period: "2017 - 2021",
    detail: "A foundation in understanding people, behaviour, and the real-world contexts behind the products they use.",
    status: "Completed",
  },
];

export function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-3 pb-16 scroll-mt-[150px]">
      <div className="text-xs text-[#83b541] mb-4 bg-white border border-gray-200 flex items-center justify-center py-2 px-4 gap-1 rounded-full w-fit mx-auto">
        <CiStar size={20} /> Education
      </div>
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h3 className="text-2xl font-semibold">LEARNING WITH PURPOSE</h3>
        <p className="text-sm text-gray-500 mt-2">Academic foundations that support my technical practice and product perspective.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {education.map((item) => (
          <article key={item.degree} className="bg-white border border-gray-200 border-t-2 border-t-[#83b541] rounded-sm p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="w-10 h-10 bg-[#83b541]/10 text-[#669530] flex items-center justify-center shrink-0">
                <FaGraduationCap />
              </div>
              <span className="text-xs text-[#527b23] bg-[#83b541]/10 px-3 py-1 rounded-full">{item.status}</span>
            </div>
            <h4 className="text-lg font-semibold mt-5">{item.degree}</h4>
            <p className="text-sm font-medium text-gray-600 mt-1">{item.school}</p>
            <p className="text-xs font-medium uppercase tracking-wide text-[#669530] mt-4">{item.period}</p>
            <p className="text-sm text-gray-500 leading-6 mt-3">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
