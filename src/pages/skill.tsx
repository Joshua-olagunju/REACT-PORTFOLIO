// ==================================
// Skill Component
// ==================================
export function Skill() {
  // ==================================
  // Rendered JSX
  // ==================================
  return (
    <div className="flex flex-col gap-10 flex-1   !mx-5">
      <div className=" !text-center  ">
        <h1 className="text-6xl font-[500] mb-0">
          Skills & <span className="text-[#83b541]">Expertise</span>
        </h1>
      </div>

      <div className="flex-1  flex flex-col gap-10 md:flex-row justify-center items-center">
        <div className="shadow-sm p-5 rounded flex gap-3  flex-col w-full">
          <div className="mb-5 text-center font-[500]">
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
            <div>
              <div className="flex items-center gap-20 justify-between mb-1">
                <p>Bootstrap</p>
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
        <div className="shadow-sm p-5 rounded flex gap-3  flex-col w-full">
          <div className="mb-5 text-center font-[500]">
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
                <p>Postman</p>
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
        <div className="shadow-sm p-5 rounded flex gap-3  flex-col w-full">
          <div className="mb-5 text-center font-[500]">
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
                <p>Adobe XD</p>
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
                <p>User Research</p>
                <p>82%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                  style={{ width: "82%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-20 justify-between mb-1">
                <p>Accessibility</p>
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
        <div className="shadow-sm p-5 rounded flex gap-3  flex-col w-full">
          <div className="mb-5 text-center font-[500]">
            <h1>Soft Skills</h1>
          </div>
          <div className="flex flex-col gap-4 text-xs">
            <div>
              <div className="flex items-center gap-20 justify-between mb-1">
                <p>Communication</p>
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
                <p>Leadership</p>
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
                <p>Problem Solving</p>
                <p>88%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                  style={{ width: "88%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-20 justify-between mb-1">
                <p>Critical Thinking</p>
                <p>87%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                  style={{ width: "87%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-20 justify-between mb-1">
                <p>Attention to Details</p>
                <p>89%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                  style={{ width: "89%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-20 justify-between mb-1">
                <p>Teamwork</p>
                <p>86%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                  style={{ width: "86%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-20 justify-between mb-1">
                <p>Adaptability</p>
                <p>84%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#83b541] h-2 rounded-full transition-all duration-700"
                  style={{ width: "84%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
