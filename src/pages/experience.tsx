export function Experience() {
  return (
    <section
      id="experience"
      className="   !py-10   flex flex-col  justify-center gap-10 !px-5 !px:md-20 "
    >
      <div className=" !text-start  flex flex-col gap-2">
        <div className="   text-start md:text-center flex flex-col gap-2">
          <h1 className="text-6xl font-[500] mb-0">
            Professional <span className="text-[#83b541]">Experience</span>
          </h1>
        </div>
      </div>

      <div className="flex  gap-10 items-center justify-center flex-1 ">
        <h3 className="text-2xl font-[600]">Frontend Developer</h3>
    
        <div>
          <p className="text-md max-w-3xl font-[500]">
            Abvakon Mobile Solutions
          </p>
          <p className="text-sm max-w-3xl ">Jan 2025 - PRESENT</p>
          <p className="text-sm max-w-3xl text-[#83b541] font-[500]">
            Lagos, Nigeria{" "}
          </p>
        </div>
      </div>
      <div className="flex  gap-10 items-center justify-center flex-1 ">
        <h3 className="text-2xl font-[600]">Web Content Uploader</h3>
        <div>
          <p className="text-md max-w-3xl font-[500]">
          GAOTek Inc.
          </p>
          <p className="text-sm max-w-3xl ">JUNE 2025 - Dec 2025</p>
          <p className="text-sm max-w-3xl text-[#83b541] font-[500]">
            Lagos, Nigeria{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
