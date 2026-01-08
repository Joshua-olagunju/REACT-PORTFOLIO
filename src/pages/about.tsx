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
    <section
      id="about"
      className="   !py-10 !mt-20 flex flex-col  justify-center gap-10 !px-5 !px:md-20 "
    >
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        <div className="flex flex-col gap-2">
          <div className=" !text-start  flex flex-col gap-2">
            <h1 className="text-6xl font-[500] mb-0">
              About <span className="text-[#83b541]">me</span>
            </h1>
          </div>

          <div className="flex flex-col gap-6 items-start flex-1">
            <h3 className="text-1xl font-[500]">GET TO KNOW MORE ABOUT ME</h3>

            <p className="text-md max-w-3xl text-gray-500">
              I'm a passionate Frontend Developer and UI/UX Designer who builds
              modern, responsive websites and applications using React, Next.js,
              TypeScript, and Tailwind CSS. I enjoy turning complex ideas into
              intuitive, visually appealing interfaces, with my core tools and
              skills highlighted through the icons below.
            </p>

            <p className="text-md max-w-3xl text-gray-500">
              Beyond development, I’m driven by continuous learning and creative
              problem-solving. I enjoy refining user experiences, experimenting
              with new approaches, and working closely with designers and
              developers to create products that are both functional and
              impactful.
            </p>

            <Button
              text="RESUME"
              size="small"
              className="w-50 py-3 "
              outlineBlack="black"
              outline={true}
              icon={<FaRegFileAlt />}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <img
            src="/MyAboutImage.jpeg"
            className="rounded-full h-84 w-84 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
