import { GrLinkedin } from "react-icons/gr";
import { MdOutlineWhatsapp, MdEmail } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

const socials = [
  { icon: GrLinkedin, href: "https://www.linkedin.com/in/joshuaolagunju/", label: "LinkedIn" },
  { icon: MdOutlineWhatsapp, href: "https://wa.me/2349037498695", label: "WhatsApp" },
  { icon: MdEmail, href: "mailto:olagunjujoshua11@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-[#262626] text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_0.8fr_1fr] gap-12 pb-14 border-b border-white/10">
          <div>
            <img
              src="/Fashion_Brand_Art_Design_Logo_6_-removebg-preview.png"
              alt="Joshua Olagunju logo"
              className="w-28 h-auto object-contain mb-6"
            />
            <h3 className="text-2xl md:text-3xl font-semibold text-white max-w-md leading-tight">
              Let&apos;s make your next digital product feel effortless.
            </h3>
            <p className="text-sm text-gray-400 leading-6 mt-4 max-w-md">
              Available for front-end roles, freelance work, and product collaborations.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#a6d366] hover:text-white transition-colors"
            >
              Start a conversation <FiArrowUpRight />
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#a6d366] mb-5">Explore</p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3 text-sm">
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className="hover:text-[#a6d366] transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#a6d366] mb-5">Get in touch</p>
            <div className="space-y-3 text-sm">
              <a href="mailto:olagunjujoshua11@gmail.com" className="block hover:text-[#a6d366] transition-colors break-all">
                olagunjujoshua11@gmail.com
              </a>
              <a href="tel:+2349037498695" className="block hover:text-[#a6d366] transition-colors">
                +234 903 749 8695
              </a>
              <p className="text-gray-500">Lagos, Nigeria · Open to remote</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-[#a6d366] hover:border-[#a6d366] hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 text-xs text-gray-500">
          <p>© 2026 Joshua Olagunju. All rights reserved.</p>
          <p>Designed and built with care.</p>
        </div>
      </div>
    </footer>
  );
}
