import { Button } from "../components/button";
import { CiStar } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";

const RESUME_URL = "https://drive.google.com/file/d/14chbglSIXJiTZ0Tl-FDgwaa3xGLKTO35/view?usp=sharing";

// ==================================
// About Component
// ==================================
export function About() {
  return (
    <section id="about" className="py-20 px-3 mt-10 scroll-mt-[150px]">
      <div className="mb-3 text-xs text-[#83b541] bg-white/10 shadow flex items-center justify-center py-2 px-4 gap-1 rounded-full w-fit mx-auto border-[#4682A9]/20">
        <CiStar size={20} /> About Me
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center max-w-6xl mx-auto">
        {/* Image */}
        <div className="w-full max-w-sm md:w-1/2 shrink-0">
          <img
            src="/MyAboutImage.jpeg"
            alt="Joshua Olagunju working"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <h3 className="text-2xl font-semibold text-center md:text-left">
            I BUILD WITH PRODUCT IN MIND
          </h3>

          <div className="flex flex-col gap-6 items-start mt-4">
            <p className="text-sm text-gray-600 leading-loose">
              I am a Front-End Lead based in Lagos, Nigeria, open to remote
              product-focused roles. For over three years, I have built React
              and Next.js applications that balance business goals with clear,
              reliable user experiences.
            </p>

            <p className="text-sm text-gray-600 leading-loose">
              My work spans component architecture, API integration, responsive
              implementation, and design systems. I enjoy collaborating with
              designers, QA, and engineers, mentoring front-end developers, and
              making complex workflows feel simple to use.
            </p>

            <div className="grid grid-cols-3 gap-3 w-full">
              {[['3+', 'years building'], ['5+', 'developers mentored'], ['30%', 'fewer UI issues']].map(([value, label]) => (
                <div key={label} className="border-l-2 border-[#83b541] pl-3">
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
