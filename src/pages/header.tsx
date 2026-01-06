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
                src="/Fashion_Brand_Art_Design_Logo_6_-removebg-preview.png"
                alt=""
                className="w-20 h-auto object-contain"
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
          <ul className=" text-gray-500 cursor-pointer text-xs flex h-12 space-x-4  py-7 gap-10 items-center justify-between ">
            <div className="flex items-center gap-5 hidden md:flex">
              <h1 className="font-[500]">
                  FRONT-END DEVELOPER &{" "}
                  <span className="text-[#83b541]">UI/UX DESIGNER</span>{" "}
                </h1>
            </div>
            <div className="flex w-full items-center justify-between md:hidden ">
              <div className="md:hidden w-full font-[600] text-gray-500  text-md">
                <h1>
                  FRONT-END DEVELOPER &{" "}
                  <span className="text-[#83b541]">UI/UX DESIGNER</span>{" "}
                </h1>
              </div>
              <MdOutlineMenu
                className="text-3xl text-gray-500    cursor-pointer "
                onClick={() => setMobileBar((prev) => !prev)}
              />
            </div>
            <div className="hidden md:flex gap-15 items-center justify-center flex-1">
              <li>
                <a
                  href="#home"
                  className="bg-[#83b541] px-3 py-2 rounded-full text-white"
                >
                  HOME
                </a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#projects">PROJECTS</a>
              </li>
              <li>
                <a href="#experience">EXPERIENCE</a>
              </li>
            </div>
            
          </ul>
        </div>
        {mobileBar && (
          <div className="mb-0 bg-[#ffffff] shadow-sm rounded-b-lg">
            {/* Mobile Menu can be implemented here */}
            <hr className="!mx-5 text-gray-500 " />
            <ul
              className="flex flex-col   text-gray-500    text-sm px-5   gap-5 pt-5  pb-5"
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
        )}
      </div>
    </>
  );
}
