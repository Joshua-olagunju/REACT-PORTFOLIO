import { Button } from "../components/button";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
// ==================================
// Header Component
// ==================================
export function Header() {
  const [mobileBar, setMobileBar] = useState(false);
  return (
    <>
      <div className="sticky top-0 z-50">
        <header className=" bg-[#262626] !shadow-lg !px-5 !md:px-20 py-3">
          <div className="flex justify-between items-center ">
            <div>
              <img
                src="/MyLogo.png"
                alt=""
                className="w-20  filter invert brightness-0  h-auto object-contain"
              />
            </div>

            <Button
              text="Let's Connect"
              size="small"
              buttonBackground="green"
              className=" "
            />
          </div>
        </header>

        <div className="bg-[#FFFFFF] !shadow-lg  !px-5">
          <ul className="font-[500] cursor-pointer text-xs flex h-12 space-x-4  py-7 gap-10 items-center justify-center ">
            <div className="hidden md:flex font-[600]  text-md">
              <h1 className="!font[600]">FRONT-END DEVELOPER</h1>
            </div>
            <div className="flex w-full items-center justify-between md:hidden ">
              <div className=" md:hidden font-[600]   text-md">
                <h1>FRONT-END DEVELOPER</h1>
              </div>
              <MdOutlineMenu
                className="text-3xl    cursor-pointer "
                onClick={() => setMobileBar((prev) => !prev)}
              />
            </div>
            <li className="hidden md:block">
              <a
                href="#home"
                className="bg-[#83b541] px-3 py-2 rounded-full text-white"
              >
                HOME
              </a>
            </li>
            <li className="hidden md:block">
              <a href="#about">ABOUT</a>
            </li>
            <li className="hidden md:block">
              <a href="#projects">PROJECTS</a>
            </li>
            <li className="hidden md:block">
              <a href="#experience">EXPERIENCE</a>
            </li>
          </ul>
        </div>
        {mobileBar && (
          <div className="mb-0 bg-[#212121]">
            {/* Mobile Menu can be implemented here */}
            <ul
              className="flex flex-col font-[400]  text-white text-sm px-5   gap-5 border-t pt-5 border-white  pb-5"
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
      </div>
    </>
  );
}
