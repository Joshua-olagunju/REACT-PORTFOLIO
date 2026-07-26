import { Button } from "../components/button";
import { MdOutlineMenu, MdCallSplit, MdCall } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills", hasCaret: true },
  { href: "#projects", label: "Projects" },
];

export function Header() {
  const [mobileBar, setMobileBar] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-[#262626] px-5 md:px-20 py-3">
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <img
            src="/Fashion_Brand_Art_Design_Logo_6_-removebg-preview.png"
            alt="Joshua Olagunju logo"
            className="w-20 h-auto object-contain"
          />
          <Button
            text="Let's Connect"
            size="small"
            buttonBackground="green"
            icon={<MdCallSplit />}
            href="#contact"
          />
        </div>
      </header>

      <div className="bg-white shadow px-3">
        <div className="max-w-5xl mx-auto flex h-12 py-7 items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-full h-12 w-12 overflow-hidden shrink-0">
              <img
                src="/MyAboutImage.jpeg"
                alt="Joshua Olagunju"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-medium text-md">Joshua Olagunju</p>
          </div>

          <button
            className="md:hidden text-3xl"
            aria-label={mobileBar ? "Close menu" : "Open menu"}
            onClick={() => setMobileBar((prev) => !prev)}
          >
            {mobileBar ? <LiaTimesSolid /> : <MdOutlineMenu />}
          </button>

          <ul className="hidden md:flex gap-8 items-center text-xs text-gray-600">
            <li>
              <a
                href="tel:+2349037498695"
                className="flex items-center gap-1 text-[#83b541] hover:underline"
              >
                <MdCall size={20} /> +234 903 749 8695
              </a>
            </li>
            {navLinks.map(({ href, label, hasCaret }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-[#83b541] transition flex items-center gap-1"
                >
                  {label} {hasCaret && <IoChevronDown size={14} />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          mobileBar ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul
          className="flex flex-col text-gray-500 text-sm px-5 gap-5 pt-2 pb-5"
          onClick={() => setMobileBar(false)}
        >
          <li>
            <a
              href="tel:+2349037498695"
              className="flex items-center gap-1 text-[#83b541]"
            >
              <MdCall size={18} /> +234 903 749 8695
            </a>
          </li>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}