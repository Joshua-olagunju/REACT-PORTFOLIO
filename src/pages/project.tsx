import { Button } from "../components/button";

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
      className="py-20 md:py-30 flex flex-col items-center justify-center gap-10  w-full lg:w-5/6 !mx-auto   "
    >
      <div className="flex flex-col gap-2 !mx-5 items-center justify-center">
        <div className="   text-start md:text-center flex flex-col gap-2">
          <h1 className="text-6xl font-[500] mb-0">
            My <span className="text-[#83b541]">Projects</span>
          </h1>
        </div>

        <div className="flex flex-col gap-2 items-center text-start md:text-center justify-center  ">
          <h3 className="text-1xl font-[500] text-gray-500">
            Here are some of my notable projects that showcase my skills in
            front-end development and UI/UX design.
          </h3>
        </div>
      </div>
      <div className=" flex items-center flex-col md:flex-row justify-center  !lg:mx-40 gap-10 !mx-5">
        {/* Project Card 1 */}
        <div>
          <img
            src="/Screenshot 2026-01-03 084957.png"
            alt="Project 1"
            className="w-full object-contain rounded-md mb-4 h-48"
          />
          <div className="pt-5">
            <h3 className="text-xl font-[600] mb-2">
              Finance Tracking Web Application
            </h3>
            <p className="text-sm mb-4">
              A finance management application for tracking projects, invoices,
              and payments, designed to streamline financial records and
              business workflows.
            </p>
            <div className="flex justify-between !mt-3">
              {/* <Button
                text="View Demo"
                size="small"
                buttonBackground="green"
                className="flex !justify-end !mt-5  !px-5"
              /> */}
            </div>
            <div className="flex flex-wrap gap-2 items-center text-sm font-medium">
              <span>Tech Stack:</span>
              <span className="bg-gray-100 text-xs text-gray-800 px-2 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-gray-100 text-xs text-gray-800 px-2 py-1 rounded-full">
                React.js
              </span>
              <span className="bg-gray-100 text-xs text-gray-800 px-2 py-1 rounded-full">
                TypeScript
              </span>
            </div>
          </div>
        </div>
        {/* Project Card 1 */}
        <div>
          <img
            src="/Screenshot 2026-01-17 002001.png"
            alt="Project 1"
            className="w-full object-cover rounded-md mb-4  h-48"
          />
          <div className="pt-5">
            <h3 className="text-xl font-[600] mb-2">
              {" "}
              Corporate Fintech Website
            </h3>
            <p className="text-sm text-start mb-4">
              A responsive fintech website built with React and Tailwind,
              focusing on performance, user-centered design, and showcasing
              digital solutions clearly and effectively.
            </p>
            <div className="flex justify-between">
              <Button
                text="View Project"
                size="small"
                buttonBackground="green"
                href="https://abvakonmobilesolutions.com/index.html"
                target="_blank"
                className="flex !justify-end !mt-5  !px-5"
              />
            </div>
          </div>
        </div>
        <div>
          <img
            src="/Screenshot 2026-01-17 003920.png"
            alt="Project 1"
            className="w-full object-cover rounded-md mb-4  h-48"
          />
          <div className="pt-5">
            <h3 className="text-xl font-[600] mb-2">
              {" "}
              Personal Tech Journey Blog
            </h3>
            <p className="text-sm text-start mb-4">
              A blog documenting my journey from beginner to front-end
              developer, sharing lessons, challenges, and projects. Built to
              reflect growth, persistence, and a commitment to learning and
              helping others in tech.
            </p>
            <div className="flex justify-between">
              <Button
                text="View Project"
                size="small"
                buttonBackground="green"
                href="https://joshua-olagunju.github.io/My-Blog/"
                target="_blank"
                className="flex !justify-end !mt-5  !px-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
