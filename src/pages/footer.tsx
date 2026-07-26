import { GrLinkedin } from "react-icons/gr";
import { MdOutlineWhatsapp, MdEmail } from "react-icons/md";
import { Button } from "../components/button";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

const socials = [
  { icon: GrLinkedin, href: "https://www.linkedin.com/in/joshuaolagunju/", label: "LinkedIn" },
  { icon: MdOutlineWhatsapp, href: "https://wa.me/2349037498695", label: "WhatsApp" },
  { icon: MdEmail, href: "mailto:olagunjujoshua11@gmail.com", label: "Email" },
];

// ==================================
// Footer Component
// ==================================
export function Footer() {
  return (
    <div>
      <section className="bg-[#262626] flex items-center justify-center">
        <footer className="max-w-5xl mx-auto text-gray-300 px-3 w-full py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <div>
              <img
                src="/Fashion_Brand_Art_Design_Logo_6_-removebg-preview.png"
                alt="Joshua Olagunju logo"
                className="w-28 h-auto object-contain"
              />
              <Button
                text="Hire Me"
                size="medium"
                buttonBackground="green"
                href="#contact"
                className="mt-5 px-10"
              />
            </div>

            <div>
              <h4 className="text-[#83b541] text-xl">Contact</h4>
              <div className="flex flex-col gap-3 mt-4 text-sm">
                <a href="tel:+2349037498695" className="hover:text-[#83b541] transition">
                  +234 903 749 8695
                </a>
                <a
                  href="mailto:olagunjujoshua11@gmail.com"
                  className="hover:text-[#83b541] transition"
                >
                  olagunjujoshua11@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[#83b541] text-xl">Quick links</h4>
              <ul className="flex flex-col gap-3 mt-4 text-sm">
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className="hover:text-[#83b541] transition">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#83b541] text-xl">Socials</h4>
              <div className="flex items-center gap-3 mt-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="text-2xl text-[#83b541] hover:opacity-70 transition"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </section>

      <div className="bg-[#83b541] py-4 flex items-center justify-center">
        <p className="text-center text-sm text-white">
          &copy; 2026 Joshua Olagunju. All rights reserved.
        </p>
      </div>
    </div>
  );
}