import { Button } from "../components/button";
import { CiStar } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";

const RESUME_URL = "https://drive.google.com/file/d/1WqJDj3-HU-aQKQDb9JZZkoqGfm928oWy/view?usp=sharing";

// ==================================
// About Component
// ==================================
export function About() {
  return (
    <section id="about" className="py-20 px-3 mt-10 scroll-mt-[150px]">
      <div className="mb-3 text-xs text-[#4F86C6] bg-white/10 shadow flex items-center justify-center py-2 px-4 gap-1 rounded-full w-fit mx-auto border-[#4682A9]/20">
        <CiStar size={20} /> About Me
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center max-w-6xl mx-auto">
        {/* Image */}
        <div className="w-full max-w-sm md:w-1/2 shrink-0">
          <img
            src="/linkedin_photo_clean.png"
            alt="Joshua Olagunju working"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <h3 className="text-2xl font-semibold text-center md:text-left">
            I BUILD RELIABLE DIGITAL PRODUCTS
          </h3>

          <div className="flex flex-col gap-6 items-start mt-4">
            <p className="text-sm text-gray-600 leading-loose">
              I am a Frontend Engineer based in Lagos, Nigeria, with over three
              years of experience building responsive applications with React,
              Next.js, JavaScript, and TypeScript. I focus on dependable digital
              products that make complex work feel clear and usable.
            </p>

            <p className="text-sm text-gray-600 leading-loose">
              I translate product and UI/UX designs into accessible, maintainable
              interfaces; build reusable UI components; integrate REST APIs; and
              collaborate closely with designers, backend engineers, QA, and
              product teams. I also contributed to the public launch of the
              PrimBooks finance and accounting platform.
            </p>

            <div className="grid grid-cols-3 gap-3 w-full">
              {[['3+', 'years building'], ['2026', 'PrimBooks launch'], ['React', 'to Next.js']].map(([value, label]) => (
                <div key={label} className="border-l-2 border-[#4F86C6] pl-3">
                  <p className="text-lg font-semibold">{value}</p>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
              ))}
            </div>

            <Button
              text="RESUME"
              size="small"
              className="w-[180px] py-3"
              buttonBackground="green"
              icon={<FaRegFileAlt />}
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
