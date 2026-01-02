import { Button } from "../components/button";
import { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";

// ==================================
// About Component
// ==================================
export function About() {
  const [showFrontEndSkills, setShowFrontEndSkills] = useState(true);

  // ==================================
  // Rendered JSX
  // ==================================
  return (
    <section
      id="about"
      className="   !py-20 flex flex-col items-center justify-center gap-10 !px-5 !px:md-20 "
    >
      <div className=" mb-4 text-center flex flex-col gap-2">
        <h2 className="text-3xl font-[500] ">About Me</h2>
        <p className=" text-xs bg-[#275b8f] text-[#eafab4] px-10 py-2 rounded-full">
          Know more about me and my tools
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
        <div className="flex flex-col gap-6 items-start flex-1">
          <p className="text-sm max-w-3xl text-gray-600">
            I'm, a passionate Front-end Developer and UI/UX Designer. I
            specialize in building modern, responsive websites and applications
            using React, Next.js, TypeScript, and Tailwind CSS. I focus on
            creating beautiful, user-friendly interfaces that deliver seamless
            experiences, combining clean, efficient code with strong design
            principles. These skills are displayed in the icons .
          </p>
          <p className="text-sm max-w-3xl text-gray-600">
            Outside of coding, I love exploring new technologies, keeping up
            with the latest UI/UX trends, and collaborating with other
            creatives. I’m always excited to tackle new challenges and bring
            innovative projects to life with both technical expertise and
            thoughtful design.
          </p>

          <Button
            text="Resume"
            size="small"
            className="w-50"
            buttonBackground="blue"
            icon={<FaRegFileAlt />}
          />
        </div>

        <div className="flex flex-col gap-4 flex-1 w-full">
          <div className=" flex gap-4 items-start">
            <Button
              text="Front-end"
              buttonBackground="black"
              size="small"
              className={`mt-4 ${
                showFrontEndSkills
                  ? "bg-black text-white"
                  : "bg-transparent !text-gray-500 border-1 border-black"
              }`}
              onClick={() => setShowFrontEndSkills(true)}
            />

            <Button
              text="UI/UX"
              buttonBackground="black"
              size="small"
              className={`mt-4 ${
                !showFrontEndSkills
                  ? "bg-black text-white"
                  : "bg-transparent !text-gray-500 border-1 border-black"
              }`}
              onClick={() => setShowFrontEndSkills(false)}
            />
          </div>

          {showFrontEndSkills && (
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center pt-5 gap-3 bg-white rounded-lg shadow-md">
                <div className="px-10">
                  <img
                    src="/next-js.svg"
                    alt="Next.js Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <figure className="flex flex-col items-center w-full">
                  <figcaption className="text-xs bg-[#275b8f] text-white px-2 py-1  rounded-b  w-full text-center">
                    NextJs
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col items-center pt-5 gap-3 bg-white rounded-lg shadow-md">
                <div className="px-10">
                  <img
                    src="/javascript-svgrepo-com.svg"
                    alt="Next.js Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <figure className="flex flex-col items-center w-full">
                  <figcaption className="text-xs bg-[#275b8f] text-white px-2 py-1  rounded-b  w-full text-center">
                    JavaScript
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col items-center pt-5 gap-3 bg-white rounded-lg shadow-md">
                <div className="px-10">
                  <img
                    src="/python-svgrepo-com(1).svg"
                    alt="Next.js Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <figure className="flex flex-col items-center w-full">
                  <figcaption className="text-xs bg-[#275b8f] text-white px-2 py-1  rounded-b  w-full text-center">
                    Python
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col items-center pt-5 gap-3 bg-white rounded-lg shadow-md">
                <div className="px-10">
                  <img
                    src="/git-svgrepo-com(2).svg"
                    alt="Next.js Logo"
                    width={30}
                  />
                </div>
                <figure className="flex flex-col items-center w-full">
                  <figcaption className="text-xs bg-[#275b8f] text-white px-2 py-1  rounded-b  w-full text-center">
                    Git
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col items-center pt-5 gap-3 bg-white rounded-lg shadow-md">
                <div className="px-10">
                  <img
                    src="/react-2.svg"
                    alt="Next.js Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <figure className="flex flex-col items-center w-full">
                  <figcaption className="text-xs bg-[#275b8f] text-white px-2 py-1  rounded-b  w-full text-center">
                    React
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col items-center pt-5 gap-3 bg-white rounded-lg shadow-md">
                <div className="px-10">
                  <img
                    src="/tailwindcss-icon-svgrepo-com.svg"
                    alt="Next.js Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <figure className="flex flex-col items-center w-full">
                  <figcaption className="text-xs bg-[#275b8f] text-white px-2 py-1  rounded-b  w-full text-center">
                    Tailwind
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col items-center pt-5 gap-3 bg-white rounded-lg shadow-md">
                <div className="px-10">
                  <img
                    src="/bootstrap-4-logo-svgrepo-com.svg"
                    alt="Next.js Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <figure className="flex flex-col items-center w-full">
                  <figcaption className="text-xs bg-[#275b8f] text-white px-2 py-1  rounded-b  w-full text-center">
                    Bootstrap
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col items-center pt-5 gap-3 bg-white rounded-lg shadow-md">
                <div className="px-10">
                  <img
                    src="/xampp-svgrepo-com.svg"
                    alt="Next.js Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <figure className="flex flex-col items-center w-full">
                  <figcaption className="text-xs bg-[#275b8f] text-white px-2 py-1  rounded-b  w-full text-center">
                    Xampp
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col items-center pt-5 gap-3 bg-white rounded-lg shadow-md">
                <div className="px-10">
                  <img
                    src="/typescript-logo-svgrepo-com.svg"
                    alt="Next.js Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <figure className="flex flex-col items-center w-full">
                  <figcaption className="text-xs bg-[#275b8f] text-white px-2 py-1  rounded-b  w-full text-center">
                    TypeScript
                  </figcaption>
                </figure>
              </div>
            </div>
          )}
          {!showFrontEndSkills && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center pt-5 gap-3 bg-white rounded-lg shadow-md">
                <div className="px-10">
                  <img
                    src="/figma-svgrepo-com.svg"
                    alt="Next.js Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <figure className="flex flex-col items-center w-full">
                  <figcaption className="text-xs bg-[#275b8f] text-white px-2 py-1  rounded-b  w-full text-center">
                    Figma
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col items-center pt-5 gap-3 bg-white rounded-lg shadow-md">
                <div className="px-10">
                  <img
                    src="/adobe-xd-1-logo-svgrepo-com.svg"
                    alt="Next.js Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <figure className="flex flex-col items-center w-full">
                  <figcaption className="text-xs bg-[#275b8f] text-white px-2 py-1  rounded-b  w-full text-center">
                    Adobe XD
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col items-center pt-5 gap-3 bg-white rounded-lg shadow-md">
                <div className="px-10">
                  <img
                    src="/framer-svgrepo-com.svg"
                    alt="Next.js Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <figure className="flex flex-col items-center w-full">
                  <figcaption className="text-xs bg-[#275b8f] text-white px-2 py-1  rounded-b  w-full text-center">
                    Framer
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col items-center pt-5 gap-3 bg-white rounded-lg shadow-md">
                <div className="px-10">
                  <img
                    src="/canva-icon.svg"
                    alt="Next.js Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <figure className="flex flex-col items-center w-full">
                  <figcaption className="text-xs bg-[#275b8f] text-white px-2 py-1  rounded-b  w-full text-center">
                    Canva
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col items-center pt-5 gap-3 bg-white rounded-lg shadow-md">
                <div className="px-10">
                  <img
                    src="/miro.svg"
                    alt="Next.js Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <figure className="flex flex-col items-center w-full">
                  <figcaption className="text-xs bg-[#275b8f] text-white px-2 py-1  rounded-b  w-full text-center">
                    Miro
                  </figcaption>
                </figure>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
