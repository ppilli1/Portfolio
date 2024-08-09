import { EXPERIENCES } from "../constants"

const Idea = () => {
  return (
    <div className = "border-b-[2px] border-neutral-900 pb-4 lg:mx-10">
        <h2 className="my-20 text-center text-4xl">
            <span className="bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 bg-clip-text text-4xl tracking-tight text-transparent">
                Experience
            </span>
        </h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key = {index} className = "mb-8 flex flex-wrap lg:justify-center">
                    <div className = "w-full lg:w-1/4 justify-center lg:justify-start">
                        <div className = "flex justify-center lg:justify-start">
                            <p className = "mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </div>
                        <div className = "flex justify-center lg:justify-start">
                            <div className = "relative w-[7.12rem] h-[7.12rem] overflow-hidden rounded-full">
                                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75 rounded-full z-10"></div>
                                <img
                                    src = {experience.image}
                                    alt = {experience.alt}
                                    className = {experience.imageClassName}
                                />
                            </div>
                        </div>
                    </div>
                    <div className = "w-full max-w-xl lg:w-3/4">
                        <h6 className = "mb-2 font-semibold">
                            {experience.role} - <span className = "text-sm text-purple-100">
                                {experience.company}
                            </span>
                        </h6>
                        <p className = "mb-4 text-neutral-400 font-light tracking-tight">{experience.description}</p>
                        {experience.technologies.map((tech, index) => (
                            <span key = {index} className = "mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Idea