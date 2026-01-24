// import { Button } from "../components/button";
import { MdOutlineWhatsapp } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";

// ==================================
// Project Component
// ==================================
export function Contact() {

//     const handleEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
//   e.preventDefault(); // prevent form submission
//   alert("Coming soon");
// };

  // ==================================
  // Rendered JSX
  // ==================================
  return (
    <section id="contact" className="px-3 py-10 max-w-2xl mx-auto">
      <h1 className="text-start md:text-center text-3xl font-[500] mb-0">
        Get in touch with me
      </h1>
      <p className="text-sm text-gray-500 text-start md:text-center">
        I will be glad to hear from you
      </p>
      <div className="  mt-10">
        <div className="grid grid-cols-2 mt-5 gap-4 justify-center items-center">
          <div className="text-center space-y-2">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
              <MdEmail className="text-4xl text-[#83b541] mx-auto" />
            </div>
            <h6>I am happy to help.</h6>
            <p className="text-sm text-gray-600">
              <a
                href="mailto:olagunjujoshua11@gmail.com"
                className="hover:underline  text-[#83b541] "
              >
                olagunjujoshua11@gmail.com
              </a>
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
              <MdOutlineWhatsapp className="text-4xl text-[#83b541] mx-auto" />
            </div>
            <h6>WhatsApp</h6>
            <p className="text-sm text-gray-600">
              <a
                href="https://wa.me/2349037498695"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#83b541]"
              >
                +234 903 749 8695
              </a>
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
              <GrLinkedin className="text-4xl text-[#83b541] mx-auto" />
            </div>
            <h6>Connect with me </h6>
            <p className="text-sm text-gray-600">
              <a
                href="https://www.linkedin.com/in/your-profile/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#83b541] "
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
