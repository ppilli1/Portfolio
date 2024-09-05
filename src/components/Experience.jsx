import { EXPERIENCES } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';


const Experience = () => {
  // Define breakpoints for responsive design
  const isMobile = useMediaQuery({ maxWidth: 1023 }); // Tailwind's sm breakpoint (mobile)
  const isTablet = useMediaQuery({ minWidth: 1024, maxWidth: 1535 }); // Tailwind's md breakpoint (tablet)
  const isDesktop = useMediaQuery({ minWidth: 1536 }); // Tailwind's lg breakpoint and larger

  // Configure slider settings based on screen size
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3, // Show 1 slide on mobile, 2 on tablet, 3 on desktop
    slidesToScroll: 1,
  };

  return (
    <section id = "experience" className="border-b-[2px] border-slate-700 pb-12 lg:mx-10">
      <h2 className="my-20 text-center text-4xl">
        <span className="bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 bg-clip-text text-4xl tracking-tight text-transparent">
          Experience
        </span>
      </h2>
      <div className="w-full xl:w-3/4 m-auto mb-12">
          <Slider {...settings}>
            {EXPERIENCES.map((experience, index) => (
              <div className="px-4 max-w-full group">
                {/*For whatever reason, adding padding acts like a margin without disrupting the central layout of the React Slider cards */}
                <div
                  key={index}
                  className="h-[450px] 2xl:w-auto 2xl:mx-0 xl:w-[350px] xl:mx-auto lg:w-[350px] lg:mx-auto md:w-[350px] md:mx-auto sm:w-[325px] sm:mx-[6.8rem] sm:h-[600px] w-[250px] mx-auto text-black rounded-2xl flex flex-col justify-between border-[0.25rem] border-slate-700 group-hover:shadow-lg group-hover:shadow-slate-400 group-hover:ease-in-out group-hover:duration-300 transition-all group-hover:border-slate-400"
                >
                  <div className = "relative">
                  <div className="absolute inset-0 rounded-t-xl bg-gradient-to-r from-blue-900 to-blue-600 -z-10"></div>
                  <div className="flex justify-center items-center">
                      <div className="relative overflow-hidden rounded-full sm:h-[8rem] sm:w-[8rem] h-[4rem] w-[4rem]">
                        <div className={experience.gradient}></div>
                        <img
                          src={experience.image}
                          alt={experience.alt}
                          className={experience.imageClassName}
                        />
                      </div>
                  </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-slate-50 to-slate-500 flex flex-col items-center justify-start sm:gap-4 px-[6px] w-full h-full">
                    <p className="text-xl font-semibold">
                      {experience.company}
                    </p>
                    <p className="text-sm font-semibold">{experience.role}</p>
                    <p className="text-sm font-semibold">{experience.year}</p>
                    <p className="text-[0.8rem] sm:text-sm text-black tracking-tight">
                      {experience.description}
                    </p>
                    {/* <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                      Read More
                    </button> */}
                  </div>
                  <div className="relative sm:h-[200px] h-[80px]">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 rounded-b-xl bg-gradient-to-r from-blue-600 to-blue-900 z-10"></div>

                    {/* Grid Container */}
                    <div className="grid grid-cols-2 h-full justify-items-center items-center">
                      {experience.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-[0.8rem] sm:text-[1rem] font-medium z-20 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 bg-clip-text text-transparent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
      </div>
    </section>
  );
};

export default Experience;
