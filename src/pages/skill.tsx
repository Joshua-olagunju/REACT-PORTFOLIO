// ==================================
// Skill Component
// ==================================
export function Skill() {
  // ==================================
  // Rendered JSX
  // ==================================
  return (
    <>
      <div className="flex flex-col gap-10  " id="skills">
        <div className=" !text-center  flex flex-col gap-5 !mx-5">
          <h1 className="text-6xl text-start md:text-center font-[500] mb-0">
            Skills & <span className="text-[#83b541]">Expertise</span>
          </h1>

          <div className="flex flex-col gap-2 items-center text-start md:text-center justify-center  ">
            <h3 className="text-1xl font-[500] text-gray-500">
              A comprehensive overview of my technical skills and proficiency
              level across various technologies and tools
            </h3>
          </div>
        </div>

        <div className="  !mx-5  flex flex-col gap-5 md:flex-row justify-center items-center">
          <div className="shadow-sm p-5 rounded flex gap-3  flex-col w-full md:w-1/2">
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
                  <p>TypeScript</p>
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
                  <p>JavaScript</p>
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
                  <p>CSS</p>
                  <p>90%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                    style={{ width: "90%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-20 justify-between mb-1">
                  <p>Tailwind</p>
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
          <div className="shadow-sm p-5 rounded flex gap-3  flex-col w-full md:w-1/2">
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
                  <p>XAMPP</p>
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
                  <p>Netlify</p>
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
                  <p>Vercel</p>
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
          <div className="shadow-sm p-5 rounded flex gap-3  flex-col w-full md:w-1/2">
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
                  <p>Wireframing</p>
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
                  <p>Prototyping</p>
                  <p>78%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                    style={{ width: "78%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-20 justify-between mb-1">
                  <p>Research</p>
                  <p>82%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                    style={{ width: "82%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
