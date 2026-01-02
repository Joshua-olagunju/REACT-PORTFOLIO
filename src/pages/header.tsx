import { Button } from "../components/button";
import { MdOutlineMenu, MdOutlineConnectWithoutContact } from "react-icons/md";
import { useState } from "react";
// ==================================
// Header Component
// ==================================
export function Header() {
  const [mobileBar, setMobileBar] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#275b8f] !px-5 !md:px-20 py-5 md:py-0   ">
      <div className="flex justify-between items-center ">
        <div className="font-[500] text-[#ffffff] text-lg">JOSHUA .O</div>
        <ul className="hidden md:flex text-[#ffffff] cursor-pointer font-[500] text-sm flex h-16 space-x-4  py-10 gap-10 items-center justify-center">
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
          className="text-3xl text-[#ffffff]   md:hidden cursor-pointer "
          onClick={() => setMobileBar((prev) => !prev)}
        />
      </div>
      {mobileBar && (
        <div className="mb-0">
          {/* Mobile Menu can be implemented here */}
          <ul
            className="flex flex-col font-[400] bg-[#275b8f] text-white text-sm !mt-5 gap-5 border-t pt-5 border-white]  pb-5"
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
            <li>
              {" "}
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
