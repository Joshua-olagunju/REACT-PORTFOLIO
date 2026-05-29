import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

// =======================================
// FAQS
// =======================================
export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "What kind of projects do you work on?",
      answer:
        "I work on a wide range of projects including portfolios, landing pages, e-commerce websites for all kinds of businesses, web applications, and blogs.",
    },
    {
      question: "How long does a project usually take?",
      answer:
        "Project timelines depend on the scope and complexity, but most small to medium projects are completed within a few weeks.",
    },
    {
      question: "What information do you need to get started?",
      answer:
        "I usually need a clear idea of your goals, target audience, preferred features, and any designs or references you already have.",
    },
    {
      question: "Can you work with existing designs or products?",
      answer:
        "Yes, I can improve, redesign, or extend existing websites or applications while maintaining consistency with your brand.",
    },
    {
      question: "Do you work with modern frameworks and tools?",
      answer:
        "Yes, I work with modern technologies such as React, Next.js, TypeScript, and other tools needed to build fast and scalable web applications.",
    },
  ];

  return (
    <section className="py-10 max-w-3xl mx-auto text-center px-3">
      <div className="text-xs text-[#83b541] bg-white/10 shadow flex items-center justify-center py-2 px-4 gap-1 rounded-full   w-fit mx-auto border-[#4682A9]/20">
        <CiStar className="text-center" size={20} /> FAQs
      </div>
      <h1 className="text-3xl text-center font-[500] my-2">Got Questions?</h1>
      <p className="text-gray-500 mb-10">
        Here’s everything you may want to know.
      </p>

      {faqs.map((faq, index) => (
        <div key={index} className=" ">
          <div className="mb-5">
            <h4
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="text-start gap-5 p-8 bg-[#83b541]/5 border border-[#83b541]/30 cursor-pointer font-semibold  rounded-md flex items-center justify-between"
            >
              {faq.question}

              {openIndex === index ? (
                <FiMinus size={20} className="text-[#83b541]" />
              ) : (
                <IoMdAdd size={20} className="text-[#83b541]" />
              )}
            </h4>
            {/* Answer (only show when clicked) */}
            {openIndex === index && (
              <div
                className={`p-3 text-sm text-gray-600 text-start overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0 "
                }`}
              >
                {faq.answer}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
