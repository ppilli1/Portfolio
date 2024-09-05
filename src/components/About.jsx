import aboutMe from "../assets/aboutMe.jpg";
import { ABOUT_TEXT } from "../constants";
const About = () => {
  return (
    <section
      id="about"
      className="border-b-[2px] border-slate-700 pb-4 lg:mx-10"
    >
      <h1 className="my-20 text-center text-4xl">
        <span className="bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 bg-clip-text text-4xl tracking-tight text-transparent">
          About Me
        </span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="relative flex items-center justify-center pb-10">
            <div className="relative h-[400px] w-[400px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] lg:h-[375px] lg:w-[375px] xl:h-[500px] xl:w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 rounded-2xl z-10"></div>
              <img
                src={aboutMe}
                alt="about"
                className="rounded-2xl h-full w-full object-cover relative z-0"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 px-8 lg:px-0 lg:py-15 lg:mt-[1.6rem] xl:mt-[7.75rem] xl:px-8 tracking-tight">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
