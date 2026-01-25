import { Button } from "../components/button";
import { useState, useEffect } from "react";
import { IoChevronForward } from "react-icons/io5";
// ==================================
// Hero Component
// ==================================
export function Hero() {
  const [isFrontEnd, setIsFrontEnd] = useState(true);

  // Switch text every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFrontEnd((prev) => !prev);
    }, 3500); // 2000ms = 2 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // ==================================
  // Rendered JSX
  // ==================================
  return (
    <>
      <section id="home" className="  py-40  px-3">
        <div className=" flex flex-col items-center justify-center text-center   gap-2">
          <h2 className="text-5xl  font-[500] mb-2 max-w-3xl">
            Where <span className="text-[#83b541]"> Code </span>Meets{" "}
            <span className="text-[#83b541]">Design.</span>
          </h2>

          <h2 className="text-xl md:text-2xl font-medium tracking-wide text-gray-600">
            {isFrontEnd ? "Frontend Developer" : "UI / UX Designer"}
          </h2>

          <p className="text-sm max-w-2xl text-gray-600 leading-loose">
            I design and build clean, responsive web interfaces with a strong
            focus on usability, performance, and real-world user experience.
          </p>
        </div>

        <div className="flex gap-4 mt-5 items-center justify-center">
          <Button
            text="Resume"
            buttonBackground="black"
            size="small"
            outline={true}
            outlineBlack="black"
            href="https://drive.google.com/file/d/1F5_aK8NCaFkAE-BxBaQgNYMu4h78Ps9_/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className=" px-10 py-3"
          />
          <Button
            text="Hire Me"
            buttonBackground="green"
            size="small"
            className=" px-10 py-3  "
            icon={<IoChevronForward />}
            href="#contact"
          />
        </div>
      </section>
    </>
  );
}
