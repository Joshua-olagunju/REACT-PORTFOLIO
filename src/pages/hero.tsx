import { Button } from "../components/button";
import { useState, useEffect } from "react";
import { IoChevronForward } from "react-icons/io5";

const ROLES = ["Front-End Lead", "React & Next.js Developer", "Product-Focused Builder"];
const RESUME_URL = "https://drive.google.com/file/d/14chbglSIXJiTZ0Tl-FDgwaa3xGLKTO35/view?usp=sharing";

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
    <section id="home" className="pt-24 md:pt-36 pb-16 md:pb-20 px-3">
      <div className="flex flex-col items-center justify-center text-center gap-2">
        <h2 className="text-5xl font-semibold mb-2 max-w-3xl">
          Building Thoughtful <span className="text-[#83b541]">Digital</span>{" "}
          <span className="text-[#83b541]">Products.</span>
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
          I lead front-end development for responsive, accessible React and
          Next.js products - translating designs into fast interfaces that work
          beautifully for real people.
        </p>
      </div>

      <div className="flex gap-4 mt-5 items-center justify-center">
        <Button
          text="Resume"
          buttonBackground="black"
          size="small"
          outline={true}
          outlineBlack="black"
          href={RESUME_URL}
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
