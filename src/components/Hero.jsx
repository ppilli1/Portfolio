import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilePic.jpg";

const Hero = () => {
  return (
    <div className="border-b-[2px] border-neutral-900 pb-4 lg:mb-35 lg:mx-10">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl text-white font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Pratham Pilli
            </h1>
            <span className="bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter xl:mt-[3.5rem]">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center pb-5">
            <div className = "relative h-[200px] w-[200px] sm:h-[500px] sm:w-[500px] md:h-[500px] md:w-[500px] lg:h-[375px] lg:w-[375px] lg:mt-[4.5rem] xl:h-[500px] xl:w-[500px] xl:mt-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-75 rounded-2xl z-10"></div>
              <img
                src={profilePic}
                alt="Pratham Pilli"
                className="rounded-2xl h-full w-full object-cover relative z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
