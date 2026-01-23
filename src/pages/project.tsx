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
      <div className="flex flex-col items-center gap-2 justify-center max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-[500] mb-0">Highlights of my Projects</h1>

        <p className="text-sm text-gray-500">
          A selection of projects that highlight my experience in frontend
          development and UI/UX design.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <div className="rounded-lg overflow-hidden aspect-video">
            <img
              src="/christopher-gower-m_HRfLhgABo-unsplash(1).jpg"
              alt="Project 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <p className="font-[500]">Coporate Fintech Website</p>
            <p className="text-xs text-gray-500">
              A responsive fintech website built with React and Tailwind,
              focused on clear, user-friendly digital solutions.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-lg overflow-hidden  aspect-video">
            <img
              src="/christopher-gower-m_HRfLhgABo-unsplash(1).jpg"
              alt="Project 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <p className="font-[500]">Coporate Fintech Website</p>
            <p className="text-xs text-gray-500">
              A responsive fintech website built with React and Tailwind,
              focused on clear, user-friendly digital solutions.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-lg overflow-hidden aspect-video ">
            <img
              src="/christopher-gower-m_HRfLhgABo-unsplash(1).jpg"
              alt="Project 3"
              className=" w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <p className="font-[500]">Coporate Fintech Website</p>
            <p className="text-xs text-gray-500">
              A responsive fintech website built with React and Tailwind,
              focused on clear, user-friendly digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
