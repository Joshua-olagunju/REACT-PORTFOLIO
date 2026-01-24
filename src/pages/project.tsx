import { Button } from "../components/button";
import { CgMediaLive } from "react-icons/cg";
// ==================================
// Project Component
// ==================================
export function Project() {
  // ==================================
  // Rendered JSX
  // ==================================
  return (
    <section id="projects" className="px-3">
      {/* Heading */}
      <div className="flex flex-col items-center gap-2 justify-center max-w-2xl mx-auto text-start md:text-center">
        <h1 className="text-3xl font-[500] mb-0">
          Highlights of my <span className="text-[#83b541]">Projects</span>
        </h1>

        <p className="text-sm text-gray-500">
          A selection of projects that highlight my experience in frontend
          development and UI/UX design.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
        <div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden aspect-video ">
              <img
                src="/drift-tech-web.vercel.app_.png"
                alt="DriftTech Website"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
            <div className="absolute top-2 right-2  ">
              <Button
                icon={<CgMediaLive />}
                text="View Live"
                buttonBackground="black"
                size="small"
                className="animate-pulse"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <p className="font-[500]">DriftTech Corporate Website</p>

            <p className="text-xs text-gray-500">
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

        <div>
          <div className="rounded-lg overflow-hidden aspect-video">
            <img
              src="/corebooks.com.ng_DashboardPages_MainDashboard.php (2).png"
              alt="Finance Tracker"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <p className="font-[500]">Finance Tracker</p>
            <p className="text-xs text-gray-500">
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

        <div>
          <div className="rounded-lg overflow-hidden aspect-video">
            <img
              src="/abvakonmobilesolutions.com_ (2).png"
              alt="Fintech Website"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <p className="font-[500]">Fintech Website</p>
            <p className="text-xs text-gray-500">
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

        <div>
          <div className="rounded-lg overflow-hidden aspect-video ">
            <img
              src="/primbooks-nex-tjs-ta9c.vercel.app_login (1).png"
              alt="Project 3"
              className=" w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <p className="font-[500]"> Financial Fintech Web Application</p>

            <p className="text-xs text-gray-500">
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
