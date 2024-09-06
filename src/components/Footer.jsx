import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center px-2 py-2">
      <div className="flex items-center m-8 justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/prathampilli/"
          className="relative flex h-6 w-6 items-center justify-center overflow-hidden bg-transparent text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300 before:ease-out hover:shadow-white hover:before:h-5 hover:before:w-5 hover:text-[#0072b1]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="relative z-10" />
        </a>
        <a
          href="https://www.github.com/ppilli1"
          className="relative flex h-6 w-6 items-center justify-center overflow-hidden bg-transparent text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-300 before:ease-out before:overflow-hidden hover:shadow-white hover:before:h-[1.417rem] hover:before:w-[1.25rem] hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="relative z-10" />
        </a>
        <a
          href="https://www.pinterest.com/prathampilli04/"
          className="relative flex h-6 w-6 items-center justify-center overflow-hidden bg-transparent text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-300 before:ease-out before:overflow-hidden hover:shadow-white hover:before:h-[1.417rem] hover:before:w-[1.4rem] hover:before:overflow-hidden hover:text-[#BD081C]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterest className="relative z-10" />
        </a>
        <a
          href="https://www.instagram.com/pxlli8055/"
          className="relative flex h-6 w-6 items-center justify-center overflow-hidden text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-md before:bg-white before:duration-300 before:ease-out hover:before:h-6 hover:before:w-6 hover:before:bg-gradient-to-b hover:before:from-[#833AB4] hover:before:via-[#FD1D1D] hover:before:to-[#FCB045]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="relative z-10 bg-clip-text hover:bg-gradient-to-b hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045] hover:bg-clip-text" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
