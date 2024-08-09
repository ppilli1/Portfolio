import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { SiFirebase } from "react-icons/si";
import { BiLogoDjango } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b-[2px] border-neutral-900 pb-24 lg:mx-10">
      <h1 className="my-20 text-center text-4xl">
        <span className="bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 bg-clip-text text-4xl tracking-tight text-transparent">
          Technologies
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="relative rounded-2xl border-4 border-neutral-800 p-4 group h-30 w-30">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600 rounded-xl -z-10 before:ease before:absolute before:-left-2 before:mt-[3.75rem] before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 group-hover:before:-rotate-180 group-hover:shadow-2xl group-hover:shadow-sky-600 overflow-hidden transition-shadow duration-300 ease-in-out"></div>
          <TbBrandNextjs className="text-7xl text-white transition-opacity duration-300 group-hover:opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-bold text-xl">Next JS</span>
          </div>
        </div>
        <div className="relative rounded-2xl border-4 border-neutral-800 p-4 group h-30 w-30">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600 rounded-xl -z-10 before:ease before:absolute before:-left-2 before:mt-[3.75rem] before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 group-hover:before:-rotate-180 group-hover:shadow-2xl group-hover:shadow-sky-600 overflow-hidden transition-shadow duration-300 ease-in-out"></div>
          <BiLogoDjango className="text-7xl text-[#092e20] transition-opacity duration-300 group-hover:opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-bold text-xl">Django</span>
          </div>
        </div>
        <div className="relative rounded-2xl border-4 border-neutral-800 p-4 group h-30 w-30">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-400 to-green-600 rounded-xl -z-10 before:ease before:absolute before:-left-2 before:mt-[3.75rem] before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 group-hover:before:-rotate-180 group-hover:shadow-2xl group-hover:shadow-green-600 overflow-hidden transition-shadow duration-300 ease-in-out"></div>
          <GrGraphQl className="text-7xl text-[#E10098] transition-opacity duration-300 group-hover:opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-bold text-xl">GraphQL</span>
          </div>
        </div>
        <div className="relative rounded-2xl border-4 border-neutral-800 p-4 group h-30 w-30">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-400 to-green-600 rounded-xl -z-10 before:ease before:absolute before:-left-2 before:mt-[3.75rem] before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 group-hover:before:-rotate-180 group-hover:shadow-2xl group-hover:shadow-green-600 overflow-hidden transition-shadow duration-300 ease-in-out"></div>
          <SiFirebase className="text-7xl text-[#FFA611] transition-opacity duration-300 group-hover:opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-bold text-xl text-center">Google Firebase</span>
          </div>
        </div>
        <div className="relative rounded-2xl border-4 border-neutral-800 p-4 group h-30 w-30">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-xl -z-10 before:ease before:absolute before:-left-2 before:mt-[3.75rem] before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 group-hover:before:-rotate-180 group-hover:shadow-2xl group-hover:shadow-red-600 overflow-hidden transition-shadow duration-300 ease-in-out"></div>
          <SiMicrosoftazure className="text-7xl text-[#008AD7] transition-opacity duration-300 group-hover:opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-bold text-xl text-center">Microsoft Azure</span>
          </div>
        </div>
        <div className="relative rounded-2xl border-4 border-neutral-800 p-4 group h-30 w-30">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-xl -z-10 before:ease before:absolute before:-left-2 before:mt-[3.75rem] before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 group-hover:before:-rotate-180 group-hover:shadow-2xl group-hover:shadow-red-600 overflow-hidden transition-shadow duration-300 ease-in-out"></div>
          <RiReactjsLine className="text-7xl text-cyan-400 transition-opacity duration-300 group-hover:opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-bold text-xl">React JS</span>
          </div>
        </div>
        <div className="relative rounded-2xl border-4 border-neutral-800 p-4 group h-30 w-30">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-xl -z-10 before:ease before:absolute before:-left-2 before:mt-[3.75rem] before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 group-hover:before:-rotate-180 group-hover:shadow-2xl group-hover:shadow-yellow-600 overflow-hidden transition-shadow duration-300 ease-in-out"></div>
          <SiOpenai className="text-7xl text-[#74AA9C] transition-opacity duration-300 group-hover:opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-bold text-xl text-center">OpenAI <br/> ChatGPT</span>
          </div>
        </div>
        <div className="relative rounded-2xl border-4 border-neutral-800 p-4 group h-30 w-30">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-xl -z-10 before:ease before:absolute before:-left-2 before:mt-[3.75rem] before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 group-hover:before:-rotate-180 group-hover:shadow-2xl group-hover:shadow-yellow-600 overflow-hidden transition-shadow duration-300 ease-in-out"></div>
          <FaNodeJs className="text-7xl text-green-500 transition-opacity duration-300 group-hover:opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-bold text-xl">Node JS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
