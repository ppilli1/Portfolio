import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
const About = () => {
  return (
    <div className = "border-b-[2px] border-neutral-900 pb-4 lg:mx-10">
        <h1 className = "my-20 text-center text-4xl">
            <span className = "bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 bg-clip-text text-4xl tracking-tight text-transparent">About Me</span>
        </h1>
        <div className = "flex flex-wrap">
            <div className = "w-full lg:w-1/2 p-8">
                <div className = "flex items-center justify-center">
                    <img src = {aboutImg} alt = "about" className = "rounded-2xl"/>
                </div>
            </div>
            <div className = "w-full lg:w-1/2">
                <div className = "flex justify-center lg:justify-start">
                    <p className = "my-2 max-w-xl py-6 lg:py-15 lg:mt-[0.75rem] xl:py-[5.25rem] xl:mt-[4.25rem]">
                        {ABOUT_TEXT}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About