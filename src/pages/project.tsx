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
      className="py-20 md:py-30 flex flex-col items-center justify-center gap-10 !px-5 !md:px-20"
    >
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl font-[600] ">Projects</h2>
        <p className="text-sm border-l-5   pl-3 max-w-3xl text-center">
          Here are some of my notable projects that showcase my skills in
          front-end development and UI/UX design.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-10 w-full">
        {/* Project Card 1 */}
        <div className="  rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
          <img
            src="/Screenshot 2026-01-03 084957.png"
            alt="Project 1"
            className="w-full object-contain rounded-md mb-4 h-48"
          />
          <div className="p-5">
            <h3 className="text-xl font-[500] mb-2">Portfolio Website</h3>
            <p className="text-sm mb-4">
              A personal portfolio website showcasing my projects and skills,
              built with React and Tailwind CSS.
            </p>
            <Button
              text="View Project"
              size="small"
              buttonBackground="blue"
              className="w-full !mt-5"
            />
          </div>
        </div>
        {/* Project Card 1 */}
        <div className=" border-[#275b8f] rounded-lg  shadow-sm hover:shadow-xl transition-shadow duration-300">
          <img
            src="/Screenshot 2026-01-03 084057.png"
            alt="Project 1"
            className="w-full object-cover   mb-4  h-48"
          />
          <div className="p-5">
            <h3 className="text-xl font-[500] mb-2">Portfolio Website</h3>
            <p className="text-sm mb-4">
              A personal portfolio website showcasing my projects and skills,
              built with React and Tailwind CSS.
            </p>
            <Button
              text="View Project"
              size="small"
              buttonBackground="blue"
              className="w-full !mt-5"
            />
          </div>
        </div>
        {/* Project Card 1 */}
        <div className=" rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
          <img
            src="/Screenshot 2026-01-03 084409.png"
            alt="Project 1"
            className="w-full object-cover rounded-md mb-4  h-48"
          />
          <div className="p-5">
            <h3 className="text-xl font-[500] mb-2">Portfolio Website</h3>
            <p className="text-sm mb-4">
              A personal portfolio website showcasing my projects and skills,
              built with React and Tailwind CSS.
            </p>
            <Button
              text="View Project"
              size="small"
              buttonBackground="blue"
              className="w-full !mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
