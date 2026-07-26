import { MdOutlineWhatsapp, MdEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { IoChevronForward } from "react-icons/io5";

const contactMethods = [
  {
    icon: MdEmail,
    label: "Email",
    sublabel: "I am happy to help.",
    href: "mailto:olagunjujoshua11@gmail.com",
    display: "olagunjujoshua11@gmail.com",
    external: false,
  },
  {
    icon: MdOutlineWhatsapp,
    label: "WhatsApp",
    sublabel: "Message me anytime.",
    href: "https://wa.me/2349037498695",
    display: "+234 903 749 8695",
    external: true,
  },
  {
    icon: GrLinkedin,
    label: "LinkedIn",
    sublabel: "Let's connect professionally.",
    href: "https://www.linkedin.com/in/joshuaolagunju/",
    display: "View profile",
    external: true,
  },
];

// ==================================
// Contact Component
// ==================================
export function Contact() {
  return (
    <section id="contact" className="px-3 py-10 max-w-2xl mx-auto scroll-mt-[150px]">
      <h3 className="text-start md:text-center text-3xl font-medium mb-0">
        Get in touch with me
      </h3>
      <p className="text-sm text-gray-500 text-start md:text-center">
        I will be glad to hear from you
      </p>

      <div className="flex flex-col gap-3 mt-10">
        {contactMethods.map(({ icon: Icon, label, sublabel, href, display, external }) => (
          <a  
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 border border-gray-200 rounded-md p-4 hover:border-[#83b541] transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 bg-[#83b541]/10 rounded-full flex items-center justify-center">
                <Icon className="text-2xl text-[#83b541]" />
              </div>

              <div className="flex-1 sm:flex-none text-start">
                <p className="font-medium">{label}</p>
                <p className="text-xs text-gray-500">{sublabel}</p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:ml-auto sm:justify-end gap-2 pl-16 sm:pl-0">
              <p className="text-sm text-[#83b541] truncate max-w-[220px] sm:max-w-none">
                {display}
              </p>
              <IoChevronForward className="shrink-0 text-gray-400 group-hover:text-[#83b541] group-hover:translate-x-1 transition-all" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}