import { FaCheckCircle, FaBriefcase } from "react-icons/fa";

import { Button } from "../components/button";
import { useState, useEffect } from "react";

// ==================================
// Hero Component
// ==================================
export function Hero() {
  const [isFrontEnd, setIsFrontEnd] = useState(true);

  // Switch text every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFrontEnd((prev) => !prev);
    }, 2000); // 2000ms = 2 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // ==================================
  // Rendered JSX
  // ==================================
  return (
    <section
      id="home"
      className="border-b-2 rounded-b-[5rem] md:rounded-b-[20rem]  border-[#275b8f] bg-cover bg-center bg-no-repeat py-20 md:py-30 flex items-center justify-center gap-20 !px-5 !px:md-20"
    >
      <div className="flex flex-col gap-5 ">
        <h2 className="text-3xl font-[600]  mb-4">
          I'm <span className="">Joshua Olagunju</span>
          <h2 className="!mt-2">
            {isFrontEnd ? "Front-end Developer" : "UI/UX Designer"}
          </h2>
        </h2>

        <p className="text-sm border-l-5   pl-3 max-w-3xl">
          I build user interfaces with a focus on clean, efficient code and
          intuitive design.
        </p>

        <div className="flex text-xs   gap-6 mt-4">
          <div className="mt-4 flex flex-col gap-3  ">
            <div className="flex items-center gap-2">
              <FaCheckCircle />
              <p>Web Development</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-pink-300" />
              <p>UI/UX Design</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-300" />
              <p>Responsive Design</p>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-3  ">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-orange-300" />
              <p>Clean Code</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-purple-300" />
              <p>User Friendly</p>
            </div>
          </div>
        </div>

        <div>
          <Button
            text="Hire Me"
            size="small"
            className="w-50"
            buttonBackground="blue"
            icon={<FaBriefcase />}
          />
        </div>
        <div className="flex items-center gap-4 ">
          <div className="mt-6 text-xs   space-y-2  flex items-center">
            <p> 3+ Years Experience</p>
          </div>
          <div className="mt-6 text-xs   space-y-2 border-l-3 pl-3 flex items-center">
            <p>20+ Projects Completed</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex rounded-full overflow-hidden h-80 w-80">
        <img
          src="/ProfileImage.jpeg"
          alt="Joshua Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
