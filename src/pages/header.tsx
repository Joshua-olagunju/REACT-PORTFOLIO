import { Button } from "../components/button";
import { MdOutlineMenu, MdOutlineConnectWithoutContact } from "react-icons/md";
import { useState } from "react";
// ==================================
// Header Component
// ==================================
export function Header() {
  const [mobileBar, setMobileBar] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#275b8f] px-5 md:px-20 py-5 md:py-0">
      <div className="flex justify-between items-center ">
        <div className="font-[500] text-[#eafab4] text-lg">JOSHUA .O</div>
        <ul className="hidden md:flex text-[#eafab4] cursor-pointer font-[500] text-sm flex h-16 space-x-4  py-10 gap-10 items-center justify-center">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
        </ul>

        <Button
          text="Let's Connect"
          size="small"
          outline={true}
          outlineBlack="blue"
          icon={<MdOutlineConnectWithoutContact />}
          className="hidden md:block"
        />

        <MdOutlineMenu
          className="text-3xl text-[#eafab4]   md:hidden cursor-pointer border-2 p-1 rounded-md"
          onClick={() => setMobileBar((prev) => !prev)}
        />
      </div>
      <div
        className={`absolute top-16 left-0 right-0 z-40 overflow-hidden transition-all duration-500 ease-in-out ${
          mobileBar ? "max-h-screen" : "max-h-0"
        }`}
      >
        {/* Mobile Menu can be implemented here */}
        <ul
          className="flex flex-col font-[400] border-b-1 border-[#eafab4] bg-white text-sm gap-5 shadow pb-5 px-5 md:px-20 pt-5"
          onClick={() => setMobileBar(false)}
        >
          <li>
            {" "}
            <a href="#home">HOME</a>
          </li>
          <li>
            {" "}
            <a href="#about">ABOUT</a>
          </li>
          <li>
            {" "}
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            {" "}
            <a href="#experience">EXPERIENCE</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
