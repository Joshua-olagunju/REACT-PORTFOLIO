import { Button } from "../components/button";
import { CgMediaLive } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import { FcIdea } from "react-icons/fc";
import { Modal } from "../components/modal";
import { useState } from "react";
// ==================================
// Project Component
// ==================================
export function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          HIGHLIGHTS OF MY PROJECTS
        </h4>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-2   gap-5 md:gap-5">
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
          </div>

          <div className="flex flex-col gap-2 mt-5">
            <p className="font-[700] text-lg">Responsive Corporate Website</p>

            <p className="text-xs text-gray-500 leading-loose">
              A modern corporate fintech website focused on clean UI, smooth
              animations, and clear presentation of digital solutions.
            </p>

            <div className="flex flex-col md:flex-row gap-4  items-start md:items-center justify-between">
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
                  icon={<FcIdea />}
                  text="Case Study"
                  buttonBackground="black"
                  size="small"
                  onClick={() => setIsModalOpen(true)}
                />
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

              <Modal
                title=" Corporate Website Case Study"
                size="lg"
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              >
                <div>
                  <div className="flex flex-col items-start gap-4">
                    <video
                      src="/demosdrift-tech-demo.mp4"
                      autoPlay
                      loop
                      muted
                      controls={false} // optional
                      className="w-full rounded-md"
                      aria-label="Demo video of DriftTech corporate website with smooth animations"
                    ></video>

                    <Button
                      icon={<CgMediaLive />}
                      text="Live"
                      buttonBackground="green"
                      size="small"
                      href="https://drift-tech-web.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    />
                  </div>

                  <div className="mt-4">
                    <h2 className="text-lg font-semibold     mb-2">
                      Problem Statement
                    </h2>
                    <p className="text-sm leading-relaxed">
                      The client needed a modern corporate website for a
                      fintech/digital solutions company that communicates
                      professionalism, trust, and innovation. The site had to be
                      fully responsive, load quickly, feature smooth animations
                      for engagement, and clearly present services without
                      overwhelming the user. Starting from Figma designs, the
                      goal was a pixel-perfect, performant implementation that
                      works seamlessly across devices.
                    </p>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-lg font-semibold     mb-2">
                      My Role & Responsibilities
                    </h2>
                    <ul className="list-disc pl-5 text-sm space-y-1.5">
                      <li>
                        Led end-to-end front-end development from Figma handoff
                        to Vercel deployment.
                      </li>
                      <li>
                        Built modular React components with TypeScript for
                        maintainability and type safety.
                      </li>
                      <li>
                        Implemented smooth scroll animations and
                        micro-interactions using Framer Motion.
                      </li>
                      <li>
                        Created responsive layouts with Tailwind CSS, ensuring
                        perfect adaptation from mobile to desktop.
                      </li>
                      <li>
                        Optimized performance (image loading, code splitting)
                        for fast initial loads and high Lighthouse scores.
                      </li>
                      <li>
                        Ensured semantic HTML, ARIA attributes, and basic
                        accessibility best practices.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-lg font-semibold     mb-2">
                      Key Challenges & How I Solved Them
                    </h2>
                    <ul className="list-disc pl-5 text-sm space-y-3">
                      <li>
                        <span className="font-medium text-green-600">
                          Challenge:
                        </span>{" "}
                        Balancing heavy animations (Framer Motion) without
                        hurting performance on mobile.
                        <br />
                        <span className="font-medium text-green-600">
                          Solution:
                        </span>{" "}
                        Used viewport-based triggers, reduced motion for
                        prefers-reduced-motion users, and optimized
                        assets—resulting in smooth 60fps even on lower-end
                        devices.
                      </li>
                      <li>
                        <span className="font-medium text-green-600">
                          Challenge:
                        </span>{" "}
                        Translating complex Figma layouts (multi-column
                        sections, overlapping elements) into responsive code.
                        <br />
                        <span className="font-medium text-green-600">
                          Solution:
                        </span>{" "}
                        Leveraged Tailwind's responsive utilities and custom
                        breakpoints; tested rigorously with browser dev tools
                        and real devices.
                      </li>
                      <li>
                        <span className="font-medium text-green-600">
                          Challenge:
                        </span>{" "}
                        Maintaining clean, scalable code as design iterations
                        came in.
                        <br />
                        <span className="font-medium text-green-600">
                          Solution:
                        </span>{" "}
                        Organized components in a feature-based structure, used
                        reusable UI primitives, and documented props with
                        TypeScript.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-lg font-semibold     mb-2">
                      Tech Stack & Why I Chose It
                    </h2>
                    <div className="flex flex-wrap gap-2 text-white">
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700">
                        React
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700">
                        TypeScript
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700">
                        Tailwind CSS
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700">
                        Framer Motion
                      </span>
                    </div>
                    <p className="mt-2 text-sm">
                      Chose Framer Motion for buttery-smooth animations without
                      heavy libraries, Tailwind for rapid and consistent
                      styling, and TypeScript to catch errors early in a growing
                      codebase.
                    </p>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-lg font-semibold     mb-2">
                      Results & Learnings
                    </h2>
                    <p className="text-sm leading-relaxed">
                      The site achieved excellent performance (90+ Lighthouse
                      scores) and flawless responsiveness across devices. Client
                      feedback highlighted the professional feel and engaging
                      animations. This project reinforced the importance of
                      performance-first animation design and iterative
                      refactoring—skills I now apply to every build.
                    </p>
                  </div>
                </div>
              </Modal>
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
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <p className="font-[700] text-lg">Finance Tracker</p>
            <p className="text-xs text-gray-500 leading-loose">
              A responsive finance tracking web app built with JavaScript, PHP,
              and Tailwind CSS, featuring clear dashboards and user-friendly
              interfaces.
            </p>

            <div className="flex flex-col md:flex-row gap-4  items-start md:items-center justify-between">
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

              <div className="  ">
                <Button
                  icon={<CgMediaLive />}
                  text="View Case Study"
                  buttonBackground="green"
                  size="small"
           
                />
              </div>
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
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <p className="font-[700] text-lg">Fintech Website</p>
            <p className="text-xs text-gray-500 leading-loose">
              A responsive fintech website built with HTML5, JavaScript, and
              Bootstrap, featuring clean layouts and user-friendly interface
              design.
            </p>

            <div className="flex flex-col md:flex-row gap-4  items-start md:items-center justify-between">
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

              <div className="  ">
                <Button
                  icon={<CgMediaLive />}
                  text="View Live"
                  buttonBackground="green"
                  size="small"
                  href="https://abvakonmobilesolutions.com/"
                  target="_blank"
                  rel="noreferrer"
                />
              </div>
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
            <p className="font-[700] text-lg">
              {" "}
              Financial Fintech Web Application
            </p>

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
