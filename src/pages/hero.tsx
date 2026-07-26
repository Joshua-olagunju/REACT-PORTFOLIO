import { Button } from "../components/button";
import { useState, useEffect } from "react";
import { IoChevronForward } from "react-icons/io5";

const ROLES = ["Frontend Developer", "UI / UX Designer"];

// ==================================
// Hero Component
// ==================================
export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  // Crossfade between roles every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setVisible(true);
      }, 300); // matches the fade-out duration below
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-40 pb-20 px-3">
      <div className="flex flex-col items-center justify-center text-center gap-2">
        <h2 className="text-5xl font-semibold mb-2 max-w-3xl">
          Where <span className="text-[#83b541]">Code</span> Meets{" "}
          <span className="text-[#83b541]">Design.</span>
        </h2>

        <p
          aria-live="polite"
          className={`text-xl md:text-2xl font-medium tracking-wide text-gray-600 transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {ROLES[roleIndex]}
        </p>

        <p className="text-md max-w-2xl text-gray-600 leading-loose">
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
          href="https://drive.google.com/file/d/1xmDOcGymJqc8sD0MwYc2BbRLIdZ6iHNn/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3"
        />
        <Button
          text="Hire Me"
          buttonBackground="green"
          size="small"
          className="px-10 py-3"
          icon={<IoChevronForward />}
          href="#contact"
        />
      </div>
    </section>
  );
}
