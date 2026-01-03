import {FaBriefcase, } from "react-icons/fa";

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
    <>
      <div id="home"  className="flex flex-col gap-5 justify-center items-center relative ">
        <img
          src="/HeroImage.jpg"
          alt=""
          className="w-full h-70 md:h-100 object-cover"
        />
        <div className="absolute top-10 md:top-30 flex flex-col items-center justify-center text-center text-white gap-4 px-3">
          <h2 className="text-5xl md:text-6xl font-[600] mb-2">
            I'm <span className="text-[#83b541]">Joshua Olagunju</span>
          </h2>

          <h2 className="text-3xl md:text-4xl font-[500] mb-2">
            {isFrontEnd ? "FRONT-END DEVELOPER" : "UI/UX DESIGNER"}
          </h2>

          <p className="text-sm max-w-3xl">
            I build user interfaces with a focus on clean, efficient code and
            intuitive design.
          </p>
        </div>

          <div className="flex items-center gap-4 block md:hidden mt-10">
            <div className="mt-6 text-sm   space-y-2  flex items-center">
              <p> 3+ Years Experience</p>
            </div>
            <div className="mt-6 text-xs   space-y-2 border-l-3 pl-3 flex items-center">
              <p>20+ Projects Completed</p>
            </div>
          </div>
        <div className="absolute top-85 md:top-93">
          <Button
            text="HIRE ME"
            buttonBackground="green"
            size="medium"
            className=" px-10 py-5"
            icon={<FaBriefcase />}
          />
        </div>
      </div>
{/* 
      <section
        
        className="border-b-2 rounded-b-[5rem]   bg-cover bg-center bg-no-repeat py-25 md:py-30 flex items-center justify-center gap-20 !px-5 !px:md-20"
      > */}
        {/* <div className="flex flex-col items-center justify-center gap-5 ">
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

        </div> */}
        {/* <div className="hidden lg:flex rounded-full overflow-hidden h-80 w-80">
          <img
            src="/ProfileImage.jpeg"
            alt="Joshua Image"
            className="w-full h-full object-cover"
          />
        </div> */}
      {/* </section> */}
    </>
  );
}
