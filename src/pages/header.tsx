import { Button } from "../components/button";
import { MdOutlineMenu } from "react-icons/md";
import { MdCallSplit } from "react-icons/md";

import { useState } from "react";
// ==================================
// Header Component
// ==================================
export function Header() {
  const [mobileBar, setMobileBar] = useState(false);
  return (
    <>
      <div className="sticky top-0 z-50">
        <header className=" bg-[#262626]   !px-5 !md:px-20 py-3">
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
              icon={<MdCallSplit />}
              className=" "
            />
          </div>
        </header>

        <div className="bg-[#FFFFFF] shadow   !px-5">
          <ul className="   cursor-pointer text-sm flex h-12 space-x-4  py-7 gap-10 items-center justify-between ">
            <div className="flex items-center gap-4">
            <div className="rounded-full h-12 w-12 overflow-hidden">
              <img
                src="public/MyAboutImage.jpeg"
                alt=""
                className="rounded-full object-fit-cover"
              />
            </div>
            <div className="flex items-center ">
              <p className="font-[500] text-md">Joshua Olagunju</p>
            </div>
            </div>

            <MdOutlineMenu
              className="text-3xl   block md:hidden   cursor-pointer "
              onClick={() => setMobileBar((prev) => !prev)}
            />

            <div className="hidden md:flex gap-15 items-center justify-center flex-1  ">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </div>
          </ul>
        </div>
        {mobileBar && (
          <div className="mb-0 bg-[#ffffff] shadow-sm rounded-b-lg">
            {/* Mobile Menu can be implemented here */}

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
                <a href="# ">SKILLS</a>
              </li>
              <li>
                {" "}
                <a href="#projects">PROJECTS</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
