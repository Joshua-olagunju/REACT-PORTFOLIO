import { Button } from "../components/button";

import { FaRegFileAlt } from "react-icons/fa";

// ==================================
// About Component
// ==================================
export function About() {
  // ==================================
  // Rendered JSX
  // ==================================
  return (
    <section id="about" className="py-20 px-3 mt-10  ">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        <div className="flex flex-col gap-2">
          <div className=" !text-start  flex flex-col gap-2">
            <h1 className="text-4xl font-[600] mb-0">
              About <span className="text-[#83b541]">me</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5  max-w-4xl">
            <div className="flex flex-col gap-6 items-start  ">
              <h4 className="text-md font-[500]">GET TO KNOW MORE ABOUT ME</h4>

              <p className="text-sm max-w-3xl text-gray-600 leading-relaxed">
                I'm a passionate Frontend Developer and UI/UX Designer who
                builds modern, responsive websites and applications using React,
                Next.js, TypeScript, and Tailwind CSS. I enjoy turning complex
                ideas into intuitive, visually appealing interfaces, with my
                core tools and skills highlighted through the icons below.
              </p>

              <p className="text-sm max-w-3xl text-gray-600 leading-relaxed">
                Beyond development, I’m driven by continuous learning and
                creative problem-solving. I enjoy refining user experiences,
                experimenting with new approaches, and working closely with
                designers and developers to create products that are both
                functional and impactful.
              </p>

              <Button
                text="RESUME"
                size="large"
                className="w-50 py-3 "
                buttonBackground="green"
                icon={<FaRegFileAlt />}
                href="https://drive.google.com/file/d/1F5_aK8NCaFkAE-BxBaQgNYMu4h78Ps9_/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              />
            </div>
            <div className="flex flex-col gap-2 h-70 w-70 overflow-hidden">
              <img
                src="/MyAboutImage.jpeg"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
