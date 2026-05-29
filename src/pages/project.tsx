import { Button } from "../components/button";
import { CgMediaLive } from "react-icons/cg";
import { CiStar } from "react-icons/ci";

// ==================================
// Project Component
// ==================================
export function Project() {
  // ==================================
  // Rendered JSX
  // ==================================
  return (
    <section
      id="projects"
      style={{ paddingTop: "150px", marginTop: "-100px" }}
      className="px-3"
    >
      {/* Heading */}
      <div className="mb-3 text-xs text-[#83b541] bg-white/10 shadow flex items-center justify-center py-2 px-4 gap-1 rounded-full   w-fit mx-auto border-[#4682A9]/20">
        <CiStar className="text-center" size={20} />
        My Works
      </div>
      <div className="flex flex-col items-center gap-2 justify-center max-w-2xl mx-auto text-center mt-2">
        <h4 className="text-2xl font-[600] text-center">
          HIGHLIGHTS OF MY WORKS
        </h4>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-3   gap-5 md:gap-5">
        <div className="p-2 border border-gray-200 ">
          <div className="relative">
            <div className="  overflow-hidden aspect-video">
              <img
                src="/Screenshot 2026-05-29 125411.png"
                alt="DriftTech Website"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay */}
          </div>

          <div className="flex flex-col gap-2 p-2 mt-5">
            <p className="font-[700] text-lg">Responsive Corporate Website</p>

            <p className="text-xs text-gray-500 leading-loose">
              A modern corporate fintech website focused on clean UI, smooth
              animations, and clear presentation of digital solutions.
            </p>

            <div className="flex flex-col  gap-4   items-start  justify-between">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                  React
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                  TypeScript
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                  Tailwind CSS
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                  Framer Motion
                </span>
              </div>
              <div className="flex  items-center gap-4   ">
                <Button
                  icon={<CgMediaLive />}
                  text="View Live"
                  buttonBackground="green"
                  size="small"
                  href="https://drift-tech-web.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 border border-gray-200 ">
          <div className="relative">
            <div className="  overflow-hidden aspect-video">
              <img
                src="/Screenshot 2026-05-29 125930.png"
                alt="Fintech Website"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay */}
          </div>
          <div className="flex flex-col gap-2 p-2 mt-5">
            <p className="font-[700] text-lg">Kings Guard Website</p>
            <p className="text-xs text-gray-500 leading-loose">
              A responsive corporate website for a security company, built with
              React, Tailwind CSS, and TypeScript, featuring a clean design and
              intuitive navigation.
            </p>

            <div className="flex flex-col  gap-4  items-start  justify-between">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                  React
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                  TypeScript
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                  Node.js
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                  Tailwind CSS
                </span>
              </div>

              <div className="  ">
                <Button
                  icon={<CgMediaLive />}
                  text="View Live"
                  buttonBackground="green"
                  size="small"
                  href="https://kings-guard-gamma.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
