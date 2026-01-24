import { Button } from "../components/button";
import { FaLocationArrow } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// ==================================
// About Component
// ==================================

export function About() {
  type SkillCardProps = {
    icon: string;
    name: string;
  };

  const skillsRow1 = [
    { name: "Typescript", icon: "/typescript-logo-svgrepo-com.svg" },
    { name: "Framer", icon: "/framer-svgrepo-com.svg" },
    { name: "Javascript", icon: "/javascript-svgrepo-com.svg" },
    { name: "Tailwind", icon: "/tailwindcss-icon-svgrepo-com.svg" },
    { name: "React", icon: "/react-2.svg" },
  ];

  const skillsRow2 = [
    { name: "Git", icon: "/git-svgrepo-com(2).svg" },
    { name: "NextJs", icon: "/next-js.svg" },
    { name: "Github", icon: "/github-color-svgrepo-com.svg" },
    { name: "Bootstrap", icon: "/bootstrap-4-logo-svgrepo-com.svg" },
    { name: "Figma", icon: "/figma-svgrepo-com.svg" },
    { name: "Canva", icon: "/canva-icon.svg" },
  ];
  const SkillCard = ({ icon, name }: SkillCardProps) => (
    <div className="shadow-md rounded-md w-36 aspect-square flex-shrink-0 flex flex-col items-center overflow-hidden bg-white">
      <div className="rounded-full h-20 w-20 flex items-center justify-center mt-4">
        <img
          src={icon}
          alt={name}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <figure className="mt-auto w-full text-center">
        <figcaption className="bg-black text-white text-xs py-1 rounded-b-md">
          {name}
        </figcaption>
      </figure>
    </div>
  );

  // ==================================
  // Rendered JSX
  // ==================================
  return (
    <section id="about" className="py-20 px-3 ">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        <div className="flex flex-col gap-2">
          <div className=" text-start md:text-center flex flex-col gap-2 mb-5">
            <h1 className="text-6xl font-[500] mb-0">
              About <span className="text-[#83b541]">me</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 mt-5 max-w-7xl">
            <div className="flex flex-col gap-6 items-start  ">
              <h3 className="text-md font-[500] text-gray-500">
                GET TO KNOW MORE ABOUT ME
              </h3>

              <p className="text-sm max-w-3xl text-gray-500">
                I'm a passionate Frontend Developer and UI/UX Designer who
                builds modern, responsive websites and applications using React,
                Next.js, TypeScript, and Tailwind CSS. I enjoy turning complex
                ideas into intuitive, visually appealing interfaces, with my
                core tools and skills highlighted through the icons below.
              </p>

              <p className="text-sm max-w-3xl text-gray-500">
                Beyond development, I’m driven by continuous learning and
                creative problem-solving. I enjoy refining user experiences,
                experimenting with new approaches, and working closely with
                designers and developers to create products that are both
                functional and impactful.
              </p>

              <Button
                text="RESUME"
                size="small"
                className="w-50 py-3 "
                buttonBackground="green"
                icon={<FaRegFileAlt />}
                href="https://drive.google.com/file/d/1F5_aK8NCaFkAE-BxBaQgNYMu4h78Ps9_/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              />
            </div>
            <div className="flex flex-col gap-2 h-70 w-70 overflow-hidden order-second">
              <img
                src="/MyAboutImage.jpeg"
                className="rounded-full w-full h-full object-cover"
              />
            </div>

            <div className="  order-last">
              <p>dfdg</p>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <span className="text-[#83b541] font-[500] text-sm flex items-center gap-2">
                <FaLocationArrow />
                MY STACKS
              </span>
              <h3 className="text-md font-[500] text-gray-500">
                Take a look at my favorite tools
              </h3>
              <motion.div className="overflow-hidden w-full">
                <motion.div
                  className="flex gap-4 flex-nowrap"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...skillsRow1, ...skillsRow1].map((skill, i) => (
                    <SkillCard key={i} {...skill} />
                  ))}
                </motion.div>
              </motion.div>

              <motion.div className="overflow-hidden w-full mt-6">
                <motion.div
                  className="flex gap-4 flex-nowrap"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...skillsRow2, ...skillsRow2].map((skill, i) => (
                    <SkillCard key={i} {...skill} />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
