import { Button } from "../components/button";
import { CiStar } from "react-icons/ci";
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
      <div className="mb-3 text-xs text-[#83b541] bg-white/10 shadow flex items-center justify-center py-2 px-4 gap-1 rounded-full   w-fit mx-auto border-[#4682A9]/20">
        <CiStar className="text-center" size={20} /> About Me
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        <div className="flex flex-col gap-2">
          <div className="text-start md:text-center mt-2  flex flex-col gap-2">
            <h4 className="text-2xl font-[600] text-center">
              GET TO KNOW MORE ABOUT ME
            </h4>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-6 items-start  ">
              <p className="text-sm max-w-3xl text-gray-600 leading-loose">
                I'm a passionate Frontend Developer and UI/UX Designer who
                builds modern, responsive websites and applications using React,
                Next.js, TypeScript, and Tailwind CSS. I enjoy turning complex
                ideas into intuitive, visually appealing interfaces, with my
                core tools and skills highlighted through the icons below.
              </p>

              <p className="text-sm max-w-3xl text-gray-600  leading-loose">
                Beyond development, I’m driven by continuous learning and
                creative problem-solving. I enjoy refining user experiences,
                experimenting with new approaches, and working closely with
                designers and developers to create products that are both
                functional and impactful.
              </p>

              <Button
                text="RESUME"
                size="small"
                className="w-50 py-3 "
                buttonBackground="green"
                icon={<FaRegFileAlt />}
                href="https://drive.google.com/file/d/1RHssFGlO5LHM0Ox4InUIytl9apeWt-AU/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
