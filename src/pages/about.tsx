import { Button } from "../components/button";
import { CiStar } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";

// ==================================
// About Component
// ==================================
export function About() {
  return (
    <section id="about" className="py-20 px-3 mt-10 scroll-mt-[150px]">
      <div className="mb-3 text-xs text-[#83b541] bg-white/10 shadow flex items-center justify-center py-2 px-4 gap-1 rounded-full w-fit mx-auto border-[#4682A9]/20">
        <CiStar size={20} /> About Me
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center max-w-6xl mx-auto">
        {/* Image */}
        <div className="w-full max-w-sm md:w-1/2 shrink-0">
          <img
            src="/MyAboutImage.jpeg"
            alt="Joshua Olagunju working"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <h3 className="text-2xl font-semibold text-center md:text-left">
            GET TO KNOW MORE ABOUT ME
          </h3>

          <div className="flex flex-col gap-6 items-start mt-4">
            <p className="text-sm text-gray-600 leading-loose">
              I'm a passionate Frontend Developer and UI/UX Designer who builds
              modern, responsive websites and applications using React, Next.js,
              TypeScript, and Tailwind CSS. I enjoy turning complex ideas into
              intuitive, visually appealing interfaces, with my core tools and
              skills highlighted through the icons below.
            </p>

            <p className="text-sm text-gray-600 leading-loose">
              Beyond development, I'm driven by continuous learning and creative
              problem-solving. I enjoy refining user experiences, experimenting
              with new approaches, and working closely with designers and
              developers to create products that are both functional and
              impactful.
            </p>

            <Button
              text="RESUME"
              size="small"
              className="w-[180px] py-3"
              buttonBackground="green"
              icon={<FaRegFileAlt />}
              href="https://drive.google.com/file/d/1xmDOcGymJqc8sD0MwYc2BbRLIdZ6iHNn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
