import { Button } from "../components/button";
import { CgMediaLive } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
// ==================================
// Project Component
// ==================================
export function Project() {
  const projects = [
    {
      title: "Responsive Corporate Website",
      description:
        " Sodatim is a forward-thinking digital solutions company dedicated to building reliable, scalable, and user-centered products. We combine modern technology, thoughtful design, and strategic thinking to create digital experiences that solve real problems and drive business growth.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/Screenshot 2026-04-17 165544.png",
      liveLink: "https://sodatim.com/",
      buttonText: "View Live",
    },
     {
      title: "Kings Guards Security Nigeria Limited",
      description: " Kings Guards Nigeria Limited is a well-known brand name in the private industrial security sector in Nigeria. Established in 1992, Kings Guards has continued to offer quality and total security solutions to its numerous clients spread across the length and breath of the country.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion" , "PHP"],
      image: "/Screenshot 2026-04-17 170930.png",
      liveLink: "https://kings-guard-gamma.vercel.app/",
      buttonText: null,
    },
    {
      title: "Home of Queens Fashion Brand",
      description: " At Home of Queens,  we are dedicated to providing top-notch security services, ensuring the safety and peace of mind of our clients.",
      techStack: ["React", "Tailwind CSS", "TypeScript"],
      image: "/Screenshot 2026-04-17 171306.png",
      liveLink: "https://home-of-queens.vercel.app/",
     buttonText: "View Live",
    },
    {
      title: "Finance Tracker",
      description: "A responsive finance tracking web app built with JavaScript, PHP, and Tailwind CSS, featuring clear dashboards and user-friendly interfaces.",
      techStack: ["JavaScript", "PHP", "Tailwind CSS"],
      image: "/corebooks.com.ng_DashboardPages_MainDashboard.php (2).png",
      liveLink: "#",
    },
    {
      title: "Fintech Website",
      description: "A responsive fintech website built with HTML5, JavaScript, and Bootstrap, featuring clean layouts and user-friendly interface design.",
      techStack: ["HTML5", "JavaScript", "Bootstrap"],
      image: "/abvakonmobilesolutions.com_ (2).png",
      liveLink: "https://abvakonmobilesolutions.com/",
      buttonText: "View Live",
    },
   
  ];
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
        <h4 className="text-lg font-[600] text-center">
          HIGHLIGHTS OF MY PROJECTS
        </h4>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-5">
        {projects.map((project, index) => (
          <div key={index} className="  shadow-sm ">
            <div className="relative">
              <div className=" overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-auto h-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2   p-4">
              <p className="font-[700] text-md">{project.title}</p>
              <p className="text-xs text-gray-500 leading-loose">
                {project.description}
              </p>
              <div className="flex flex-col gap-4 items-start justify-between">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.buttonText && (
                  <div className="flex items-center gap-4">
                    <Button
                      icon={<CgMediaLive />}
                      text={project.buttonText}
                      buttonBackground="green"
                      size="small"
                      href={project.liveLink !== "#" ? project.liveLink : undefined}
                      target={project.liveLink !== "#" ? "_blank" : undefined}
                      rel={project.liveLink !== "#" ? "noreferrer" : undefined}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
