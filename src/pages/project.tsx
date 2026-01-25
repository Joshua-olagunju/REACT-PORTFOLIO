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
    <section id="projects" style={{ paddingTop: "150px", marginTop: "-100px" }} className="px-3">
      {/* Heading */}
      <div className="mb-3 text-xs text-[#83b541] bg-white/10 shadow flex items-center justify-center py-2 px-4 gap-1 rounded-full   w-fit mx-auto border-[#4682A9]/20">
        <CiStar className="text-center" size={20} />
        My Works
      </div>
      <div className="flex flex-col items-center gap-2 justify-center max-w-2xl mx-auto text-center mt-2">
        <h4 className="text-2xl font-[600] text-center">
          HIGHLIGHTS OF MY PROJECTS
        </h4>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5">
        <div className="p-5 shadow-sm rounded-md">
          <div className="relative">
            <div className="rounded-lg overflow-hidden aspect-video ">
              <img
                src="/drift-tech-web.vercel.app_.png"
                alt="DriftTech Website"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay */}

            <div className="absolute top-2 right-2  ">
              <Button
                icon={<CgMediaLive />}
                text="View Live"
                buttonBackground="green"
                size="small"
                href="https://drift-tech-web.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="animate-pulse"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-5">
            <p className="font-[600] ">DriftTech Corporate Website</p>

            <p className="text-xs text-gray-500 leading-loose">
              A modern corporate fintech website focused on clean UI, smooth
              animations, and clear presentation of digital solutions.
            </p>

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
          </div>
        </div>

        <div className="p-5 shadow-sm rounded-md">
          <div className="relative">
            <div className="rounded-lg overflow-hidden aspect-video">
              <img
                src="/corebooks.com.ng_DashboardPages_MainDashboard.php (2).png"
                alt="Finance Tracker"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay */}

            <div className="absolute top-2 right-2  ">
              <Button
                icon={<CgMediaLive />}
                text="View Case Study"
                buttonBackground="green"
                size="small"
                className="animate-pulse"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <p className="font-[600]  ">Finance Tracker</p>
            <p className="text-xs text-gray-500 leading-loose">
              A responsive finance tracking web app built with JavaScript, PHP,
              and Tailwind CSS, featuring clear dashboards and user-friendly
              interfaces.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                JavaScript
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                PHP
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        <div className="p-5 shadow-sm rounded-md">
          <div className="relative">
            <div className="rounded-lg overflow-hidden aspect-video">
              <img
                src="/abvakonmobilesolutions.com_ (2).png"
                alt="Fintech Website"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay */}

            <div className="absolute top-2 right-2  ">
              <Button
                icon={<CgMediaLive />}
                text="View Live"
                buttonBackground="green"
                size="small"
                href="https://abvakonmobilesolutions.com/"
                target="_blank"
                rel="noreferrer"
                className="animate-pulse "
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <p className="font-[600]  ">Fintech Website</p>
            <p className="text-xs text-gray-500 leading-loose">
              A responsive fintech website built with HTML5, JavaScript, and
              Bootstrap, featuring clean layouts and user-friendly interface
              design.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                HTML5
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                JavaScript
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                Bootstrap
              </span>
            </div>
          </div>
        </div>

        <div className="p-5 shadow-sm rounded-md">
          <div className="relative">
            <div className="rounded-lg overflow-hidden aspect-video ">
              <img
                src="/primbooks-nex-tjs-ta9c.vercel.app_login (1).png"
                alt="Project 3"
                className=" w-full h-full object-cover"
              />
            </div>
            {/* Overlay */}

            <div className="absolute top-2 right-2 hidden ">
              <Button
                icon={<CgMediaLive />}
                text="View Live"
                buttonBackground="green"
                size="small"
                className="animate-pulse"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <p className="font-[600]  "> Financial Fintech Web Application</p>

            <p className="text-xs text-gray-500 leading-loose">
              A fintech web interface built with Next.js, TypeScript, and
              Tailwind CSS, focused on clean UI, responsive layouts, and
              intuitive user experience.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                Next.js
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                TypeScript
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
