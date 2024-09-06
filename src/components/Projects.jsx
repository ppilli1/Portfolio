import { MdArrowOutward } from "react-icons/md";
import { PROJECT } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="border-b-[2px] border-slate-700 pb-24 lg:mx-10">
      <h2 className="my-20 text-center text-4xl">
        <span className="bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 bg-clip-text text-4xl tracking-tight text-transparent">
          Projects
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 lg:mx-20">
        {PROJECT.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-3xl md:mx-auto sm:mx-20 mx-10"
          >
            <img
              src={project.image}
              alt={project.name}
              className={project.imageClassName}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="2xl:text-xl 2xl:mb-6 xl:text-[0.95rem] xl:mb-2 lg:text-[1.05rem] lg:mb-6 md:text-[1.05rem] md:mb-4 sm:text-xl sm:mb-8 mb-2 text-lg tracking-tight text-center">
                {project.name}
              </h3>
              <p className="p-4 2xl:text-[1rem] 2xl:mb-8 xl:text-[0.85rem] xl:mb-4 lg:text-[0.92rem] lg:mb-8 md:text-[0.92rem] md:mb-6 sm:text-[1rem] sm:mb-10 text-sm mb-0 tracking-tight font-light">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={project.buttonClassName}
              >
                <div className="z-10 flex items-center">
                  <span className="2xl:text-[1rem] xl:text-sm lg:text-[1rem] md:text-sm sm:text-[1rem] text-sm">
                    View on Github
                  </span>
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;