import { CiStar } from "react-icons/ci";
import { FiSearch, FiLayout, FiCode, FiCheckCircle } from "react-icons/fi";

const steps = [
  {
    icon: FiSearch,
    number: "01",
    title: "Understand",
    text: "I clarify the product goal, users, technical constraints, and the success criteria before building.",
  },
  {
    icon: FiLayout,
    number: "02",
    title: "Translate",
    text: "I turn Figma handoffs and design references into a practical component and page structure.",
  },
  {
    icon: FiCode,
    number: "03",
    title: "Build",
    text: "I create responsive, reusable frontend experiences and connect them to the data and APIs they need.",
  },
  {
    icon: FiCheckCircle,
    number: "04",
    title: "Refine",
    text: "I test across screen sizes, resolve issues with the team, and improve details before release.",
  },
];

export function Process() {
  return (
    <section id="process" className="max-w-6xl mx-auto px-3 py-16 scroll-mt-[150px]">
      <div className="text-xs text-[#4F86C6] mb-4 bg-white border border-gray-200 flex items-center justify-center py-2 px-4 gap-1 rounded-full w-fit mx-auto">
        <CiStar size={20} /> How I Work
      </div>
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h3 className="text-2xl font-semibold">FROM IDEA TO RELEASE</h3>
        <p className="text-sm text-gray-500 mt-2">A focused, collaborative process for turning product ideas into dependable web experiences.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map(({ icon: Icon, number, title, text }) => (
          <article key={number} className="bg-white border border-gray-200 border-t-2 border-t-[#4F86C6] rounded-sm p-5">
            <div className="flex items-start justify-between">
              <span className="w-10 h-10 bg-[#4F86C6]/10 text-[#2E5F9E] flex items-center justify-center"><Icon /></span>
              <span className="text-xs font-medium text-gray-400">{number}</span>
            </div>
            <h4 className="font-semibold mt-5">{title}</h4>
            <p className="text-sm text-gray-500 leading-6 mt-2">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
