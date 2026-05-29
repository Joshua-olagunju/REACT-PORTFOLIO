import { GrLinkedin } from "react-icons/gr";
import { MdOutlineWhatsapp, MdEmail } from "react-icons/md";
import { Button } from "../components/button";

// ==================================
// Project Component
// ==================================
export function Footer() {
  // ==================================
  // Rendered JSX
  // ==================================
  return (
    <>
      <section className="bg-[#262626] flex items-center justify-center ">
        <footer className="max-w-5xl mx-auto my-auto  text-gray-300 px-3 w-full py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <div>
              <img
                src="/Fashion_Brand_Art_Design_Logo_6_-removebg-preview.png"
                alt=""
                className="w-30 h-auto object-contain"
              />

              <Button
                text="Hire Me"
                size="medium"
                buttonBackground="green"
                href="#contact"
                className=" mt-5 px-10 "
              />
            </div>

            <div>
              <h2 className="text-[#83b541] text-xl">Contact</h2>
              <div className="flex flex-col gap-3 mt-4 text-sm">
                <p>+234 903 749 8695</p>
                <p>olagunjujoshua11@gmail.com</p>
              </div>
            </div>
            <div>
              <h2 className="text-[#83b541] text-xl">Quick Links</h2>

              <ul className="flex flex-col gap-3 mt-4 text-sm">
                <li>
                  <a href="#home" className="hover:text-[#83b541] transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-[#83b541] transition">
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-[#83b541] transition"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[#83b541] text-xl">Socials</h2>
              <div className="flex  items-center gap-3 mt-4  ">
                <GrLinkedin className="text-2xl text-[#83b541]  " />
                <MdOutlineWhatsapp className="text-2xl text-[#83b541] " />
                <MdEmail className="text-2xl text-[#83b541]" />
              </div>
            </div>
          </div>
        </footer>
      </section>
      <div className="  mb-auto bg-[#83b541] py-4 flex items-center justify-center">
        <p className="text-center text-sm text-white  ">
          &copy; 2026 Joshua Olagunju. All rights reserved.
        </p>
      </div>
    </>
  );
}
