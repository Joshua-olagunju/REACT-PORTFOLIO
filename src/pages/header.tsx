import { Button } from "../components/button";
import { MdOutlineMenu } from "react-icons/md";
// ==================================
// Header Component
// ==================================
export function Header() {
  return (
    <header className="  sticky top-0 z-50 bg-black !px-5 !md:px-20 !py-5  ">
      <div className="flex justify-between items-center ">
        <div className="font-[600] text-lg text-[#eafab4]">JOSHUA .O</div>
        <ul className="hidden md:flex cursor-pointer text-sm flex h-16 space-x-4 text-white py-10 gap-10 items-center justify-center">
          <li className="hover:text-[#eafab4]">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-[#eafab4]">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#eafab4]">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-[#eafab4]">
            <a href="#experience">Experience</a>
          </li>
        </ul>
     
          <Button
            text="Let's Connect"
            size="small"
            outline={true}
            outlineBlack="yellow"
            className="hidden md:block"
          /> 
     
 
        <MdOutlineMenu className="text-3xl text-white md:hidden cursor-pointer" />
      </div>
    </header>
  );
}
