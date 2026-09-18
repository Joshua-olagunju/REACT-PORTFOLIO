import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What kind of projects do you work on?",
    answer:
      "I work on product interfaces, finance and business dashboards, corporate sites, and responsive web applications - from design handoff through deployment.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "It depends on the scope. I plan milestones early, communicate clearly, and work in focused iterations so there is steady progress throughout the project.",
  },
  {
    question: "What information do you need to get started?",
    answer:
      "A clear goal, target users, required features, and any existing brand assets, designs, or technical constraints are a great starting point.",
  },
  {
    question: "Can you work with existing designs or products?",
    answer:
      "Yes. I can extend an existing product, improve a design system, or turn Figma screens into consistent production-ready interfaces.",
  },
  {
    question: "Do you work with modern frameworks and tools?",
    answer:
      "Yes. My core stack is React, Next.js, TypeScript, Tailwind CSS, and REST API integration, with accessibility and responsive design built into the process.",
  },
];

// =======================================
// FAQs
// =======================================
export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-10 max-w-3xl mx-auto text-center px-3">
      <div className="text-xs text-[#83b541] bg-white/10 shadow flex items-center justify-center py-2 px-4 gap-1 rounded-full w-fit mx-auto border-[#4682A9]/20">
        <CiStar size={20} /> FAQs
      </div>

      <h3 className="text-3xl text-center font-medium my-2">
        Got questions?
      </h3>
      <p className="text-gray-500 mb-10">
        Here's everything you may want to know.
      </p>

      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <div key={faq.question} className="mb-5">
            <h4>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={answerId}
                className="w-full text-start gap-5 p-8 bg-[#83b541]/5 border border-[#83b541]/30 cursor-pointer font-semibold rounded-md flex items-center justify-between"
              >
                {faq.question}
                <span
                  className={`shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  {isOpen ? (
                    <FiMinus size={20} className="text-[#83b541]" />
                  ) : (
                    <IoMdAdd size={20} className="text-[#83b541]" />
                  )}
                </span>
              </button>
            </h4>

            <div
              id={answerId}
              role="region"
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="p-3 text-sm text-gray-600 text-start">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
