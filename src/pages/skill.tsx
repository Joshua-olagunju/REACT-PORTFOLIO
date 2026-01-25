import { CiStar } from "react-icons/ci";

// ==================================
// Skill Component
// ==================================
export function Skill() {
  // ==================================
  // Rendered JSX
  // ==================================
  return (
    <>
      <section className="max-w-5xl mx-auto  px-3">
        <div id="skills">
          <div className="text-xs text-[#83b541] mb-5 bg-white/10 shadow flex items-center justify-center py-2 px-4 gap-1 rounded-full   w-fit mx-auto border-[#4682A9]/20">
            <CiStar className="text-center" size={20} />
            Skills
          </div>
          <div className="text-center mb-4">
            <h4 className="text-2xl font-[600] text-center">
              OVERVIEW OF MY SKILLS
            </h4>
          </div>

          <div className="w-full  flex flex-col gap-5 md:flex-row justify-center items-center">
            <div className="shadow-sm p-5 rounded flex gap-3  flex-col w-full ">
              <div className="mb-5 text-center text-1xl font-[500]">
                <h1>Frontend</h1>
              </div>
              <div className="flex flex-col gap-4 text-xs">
                <div>
                  <div className="flex items-center gap-20 justify-between mb-1">
                    <p>React</p>
                    <p>85%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                      style={{ width: "85%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-20 justify-between mb-1">
                    <p>Next.js</p>
                    <p>70%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-20 justify-between mb-1">
                    <p>TypeScript / JavaScript</p>
                    <p>70%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-20 justify-between mb-1">
                    <p>CSS / Tailwind / BootStrap</p>
                    <p>88%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                      style={{ width: "88%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-sm p-5 rounded flex gap-3    flex-col w-full  ">
              <div className="mb-5 text-center text-1xl font-[500]">
                <h1>Tools</h1>
              </div>
              <div className="flex flex-col gap-4 text-xs">
                <div>
                  <div className="flex items-center gap-20 justify-between mb-1">
                    <p>Git/Github</p>
                    <p>70%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-20 justify-between mb-1">
                    <p>shadcn</p>
                    <p>75%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                      style={{ width: "75%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-20 justify-between mb-1">
                    <p>VS Code</p>
                    <p>80%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-20 justify-between mb-1">
                    <p>Vercel / Netlify</p>
                    <p>80%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-sm p-5 rounded flex gap-3   flex-col w-full  ">
              <div className="mb-5 text-center text-1xl font-[500]">
                <h1>UI/UX</h1>
              </div>
              <div className="flex flex-col gap-4 text-xs">
                <div>
                  <div className="flex items-center gap-20 justify-between mb-1">
                    <p>Figma</p>
                    <p>85%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                      style={{ width: "85%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-20 justify-between mb-1">
                    <p>Canva</p>
                    <p>80%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-20 justify-between mb-1">
                    <p>Adobe</p>
                    <p>75%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                      style={{ width: "75%" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-20 justify-between mb-1">
                    <p>Prototyping / Wireframe</p>
                    <p>78%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                      style={{ width: "78%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
