import { Button } from "../components/button";
import { FaLocationArrow } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

// ==================================
// About Component
// ==================================
export function About() {
  // ==================================
  // Rendered JSX
  // ==================================
  return (
    <section id="about" className="py-20 px-3 ">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        <div className="flex flex-col gap-2">
          <div className=" !text-start  flex flex-col gap-2">
            <h1 className="text-6xl font-[500] mb-0">
              About <span className="text-[#83b541]">me</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl">
            <div className="flex flex-col gap-6 items-start  ">
              <h3 className="text-1xl font-[500]">GET TO KNOW MORE ABOUT ME</h3>

              <p className="text-md max-w-3xl text-gray-500">
                I'm a passionate Frontend Developer and UI/UX Designer who
                builds modern, responsive websites and applications using React,
                Next.js, TypeScript, and Tailwind CSS. I enjoy turning complex
                ideas into intuitive, visually appealing interfaces, with my
                core tools and skills highlighted through the icons below.
              </p>

              <p className="text-md max-w-3xl text-gray-500">
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
            <div className="flex flex-col gap-2 h-70 w-70 overflow-hidden">
              <img
                src="/MyAboutImage.jpeg"
                className="rounded-full w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-2 h-70 w-70 overflow-hidden order-last">
              <img
                src="/MyAboutImage.jpeg"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 items-start  md:order-last">
              <span className="text-[#83b541] font-[500] text-sm flex items-center gap-2">
                <FaLocationArrow />
                MY STACKS
              </span>
              <h3 className="text-md font-[500] text-gray-500">
                Take a look at my favorite tools
              </h3>
              <div className="grid grid-cols-5 gap-3">
                <div className="shadow-md rounded-md flex flex-col items-center aspect-square  overflow-hidden">
                  {/* Image container */}
                  <div className="rounded-full overflow-hidden h-20 w-20 flex items-center justify-center mt-4">
                    <img
                      src="/typescript-logo-svgrepo-com.svg"
                      alt=""
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Caption fixed at the bottom */}
                  <figure className=" mt-2 bottom-0 w-full text-center">
                    <figcaption className="bg-black text-white text-xs py-1 rounded-b-md">
                      Typescript
                    </figcaption>
                  </figure>
                </div>
                <div className="shadow-md rounded-md flex flex-col items-center aspect-square  overflow-hidden">
                  {/* Image container */}
                  <div className="rounded-full overflow-hidden h-20 w-20 flex items-center justify-center mt-4">
                    <img
                      src="/framer-svgrepo-com.svg"
                      alt=""
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Caption fixed at the bottom */}
                  <figure className=" mt-2 bottom-0 w-full text-center">
                    <figcaption className="bg-black text-white text-xs py-1 rounded-b-md">
                      Framer
                    </figcaption>
                  </figure>
                </div>
                <div className="shadow-md rounded-md flex flex-col items-center aspect-square  overflow-hidden">
                  {/* Image container */}
                  <div className="rounded-full overflow-hidden h-20 w-20 flex items-center justify-center mt-4">
                    <img
                      src="/javascript-svgrepo-com.svg"
                      alt=""
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Caption fixed at the bottom */}
                  <figure className=" mt-2 bottom-0 w-full text-center">
                    <figcaption className="bg-black text-white text-xs py-1 rounded-b-md">
                      Javascript
                    </figcaption>
                  </figure>
                </div>

                <div className="shadow-md rounded-md flex flex-col items-center aspect-square  overflow-hidden">
                  {/* Image container */}
                  <div className="rounded-full overflow-hidden h-20 w-20 flex items-center justify-center mt-4">
                    <img
                      src="/tailwindcss-icon-svgrepo-com.svg"
                      alt=""
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Caption fixed at the bottom */}
                  <figure className=" mt-2 bottom-0 w-full text-center">
                    <figcaption className="bg-black text-white text-xs py-1 rounded-b-md">
                      Tailwind
                    </figcaption>
                  </figure>
                </div>
                <div className="shadow-md rounded-md flex flex-col items-center aspect-square  overflow-hidden">
                  {/* Image container */}
                  <div className="rounded-full overflow-hidden h-20 w-20 flex items-center justify-center mt-4">
                    <img
                      src="/react-2.svg"
                      alt=""
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Caption fixed at the bottom */}
                  <figure className=" mt-2 bottom-0 w-full text-center">
                    <figcaption className="bg-black text-white text-xs py-1 rounded-b-md">
                      React
                    </figcaption>
                  </figure>
                </div>
                <div className="shadow-md rounded-md flex flex-col items-center aspect-square  overflow-hidden">
                  {/* Image container */}
                  <div className="rounded-full overflow-hidden h-20 w-20 flex items-center justify-center mt-4">
                    <img
                      src="/git-svgrepo-com(2).svg"
                      alt=""
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Caption fixed at the bottom */}
                  <figure className=" mt-2 bottom-0 w-full text-center">
                    <figcaption className="bg-black text-white text-xs py-1 rounded-b-md">
                      Git
                    </figcaption>
                  </figure>
                </div>

                <div className="shadow-md rounded-md flex flex-col items-center aspect-square  overflow-hidden">
                  {/* Image container */}
                  <div className="rounded-full overflow-hidden h-20 w-20 flex items-center justify-center mt-4">
                    <img
                      src="/next-js.svg"
                      alt=""
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Caption fixed at the bottom */}
                  <figure className=" mt-2 bottom-0 w-full text-center">
                    <figcaption className="bg-black text-white text-xs py-1 rounded-b-md">
                      NextJs
                    </figcaption>
                  </figure>
                </div>
                <div className="shadow-md rounded-md flex flex-col items-center aspect-square  overflow-hidden">
                  {/* Image container */}
                  <div className="rounded-full overflow-hidden h-20 w-20 flex items-center justify-center mt-4">
                    <img
                      src="/github-color-svgrepo-com.svg"
                      alt=""
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Caption fixed at the bottom */}
                  <figure className=" mt-2 bottom-0 w-full text-center">
                    <figcaption className="bg-black text-white text-xs py-1 rounded-b-md">
                      Github
                    </figcaption>
                  </figure>
                </div>
                <div className="shadow-md rounded-md flex flex-col items-center aspect-square  overflow-hidden">
                  {/* Image container */}
                  <div className="rounded-full overflow-hidden h-20 w-20 flex items-center justify-center mt-4">
                    <img
                      src="/bootstrap-4-logo-svgrepo-com.svg"
                      alt=""
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Caption fixed at the bottom */}
                  <figure className=" mt-2 bottom-0 w-full text-center">
                    <figcaption className="bg-black text-white text-xs py-1 rounded-b-md">
                      Bootstrap
                    </figcaption>
                  </figure>
                </div>
                <div className="shadow-md rounded-md flex flex-col items-center aspect-square  overflow-hidden">
                  {/* Image container */}
                  <div className="rounded-full overflow-hidden h-20 w-20 flex items-center justify-center mt-4">
                    <img
                      src="/figma-svgrepo-com.svg"
                      alt=""
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Caption fixed at the bottom */}
                  <figure className=" mt-2 bottom-0 w-full text-center">
                    <figcaption className="bg-black text-white text-xs py-1 rounded-b-md">
                      Figma
                    </figcaption>
                  </figure>
                </div>
                <div className="shadow-md rounded-md flex flex-col items-center aspect-square  overflow-hidden">
                  {/* Image container */}
                  <div className="rounded-full overflow-hidden h-20 w-20 flex items-center justify-center mt-4">
                    <img
                      src="/canva-icon.svg"
                      alt=""
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Caption fixed at the bottom */}
                  <figure className=" mt-2 bottom-0 w-full text-center">
                    <figcaption className="bg-black text-white text-xs py-1 rounded-b-md">
                      Canva
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
