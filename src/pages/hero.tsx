import { FaCheckCircle } from "react-icons/fa";
 
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
    <section id="home" className="bg-[url('/Hero-Wallpaper.jpg')] bg-cover bg-center bg-no-repeat !py-30  flex items-center justify-center gap-20 !px-5 !px:md-20">
      <div className="flex flex-col gap-5 ">
        <h2 className="text-6xl font-[500]  mb-4">
          I'm <span className="text-[#eafab4]">Joshua Olagunju</span>
          <h2 className="!mt-5">
            {isFrontEnd ? "Front-end Developer" : "UI/UX Designer"}
          </h2>
        </h2>

        <p className="text-md border-l-5 border-[#eafab4] pl-3 max-w-3xl">
          I build user interfaces with a focus on clean, efficient code and
          intuitive design.
        </p>

        <div className="flex   gap-6 mt-4">
          <div className="mt-4 flex flex-col gap-3 text-sm">
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
          <div className="mt-4 flex flex-col gap-3 text-sm">
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
            size="medium"
            className="w-50"
            outline={true}
            outlineBlack="yellow"
          />
        </div>
        <div className="flex items-center gap-4 ">
              
            <div className="mt-6 text-sm text-gray-200 space-y-2 border-l-3 pl-3 flex items-center">
            <p> 3+ Years Experience</p>
          </div>
          <div className="mt-6 text-sm text-gray-200 space-y-2 border-l-3 pl-3 flex items-center">
            <p>
               20+
              Projects Completed
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex rounded-full overflow-hidden h-80 w-80  ">
        <img src="/ProfileImage.jpeg" alt="Joshua Image" />
      </div>
    </section>
  );
}
