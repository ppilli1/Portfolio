import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { BiLogoDjango } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { SiFirebase } from "react-icons/si";
import { FaGithub, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import favCar from "../assets/favCar.jpg";
import favCity from "../assets/favCity.jpg";
import favMovie from "../assets/favMovie.webp";
import favSport from "../assets/favSport.jpg";
import { IoCarSportSharp } from "react-icons/io5";
import { BiSolidCameraMovie } from "react-icons/bi";
import { GiModernCity } from "react-icons/gi";
import { MdOutlineSportsTennis } from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.occupation) errors.occupation = "Occupation is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_l9aigmg",
          "template_lwktevv",
          formData,
          "h3-jA54nN48Mfs3F7"
        )
        .then((response) => {
          toast.success("Message sent successfully");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            occupation: "",
            message: "",
          });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <section className="border-b-[2px] border-slate-700 pb-[75px] lg:mx-10" id="connect">
      <Toaster />
      <h1 className="my-20 text-center text-4xl">
        <span className="bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 bg-clip-text text-4xl tracking-tight text-transparent">
          Let's Connect
        </span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className = "flex items-center justify-center mb-10">
            <span className = "sm:text-3xl text-2xl caveat-font font-semibold">
                More About Me... Outside of Tech!
            </span>
          </div>
          <div className="flex gap-6 justify-center items-center">
            <div className="rounded-2xl border-4 border-slate-700 hover:shadow-2xl hover:shadow-white transition-all hover:border-slate-400 duration-500">
              <div className="relative flex sm:h-[180px] sm:w-[180px] h-[135px] w-[135px] items-center justify-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 font-medium text-white rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 hover:opacity-0 transition-opacity duration-300">
                  <span className="text-black caveat-font font-bold sm:text-2xl text-xl text-center">
                    Favorite Car
                  </span>
                  <IoCarSportSharp className = "text-3xl text-black"/>
                </div>
                <img
                  src={favCar}
                  alt="Favorite Movie"
                  className="opacity-0 hover:opacity-100 transition-opacity z-10 rounded-xl"
                />
              </div>
            </div>
            <div className="rounded-2xl border-4 border-slate-700 hover:shadow-2xl hover:shadow-fuchsia-600 transition-all hover:border-fuchsia-800 duration-500">
              <div className="relative flex sm:h-[180px] sm:w-[180px] h-[135px] w-[135px] items-center justify-center bg-gradient-to-r from-amber-500 to-pink-500 font-medium text-white rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 hover:opacity-0 transition-opacity duration-300">
                  <span className="text-black caveat-font font-bold sm:text-2xl text-xl text-center">
                    Favorite City
                  </span>
                  <GiModernCity className = "text-3xl text-black"/>
                </div>
                <img
                  src={favCity}
                  alt="Favorite Movie"
                  className="opacity-0 hover:opacity-100 transition-opacity z-10 rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="flex mt-6 gap-6 items-center justify-center">
            <div className="rounded-2xl border-4 border-slate-700 hover:shadow-2xl hover:shadow-[#5778ad] transition-all hover:border-[#7185b7] duration-300">
              <div className="relative flex sm:h-[180px] sm:w-[180px] h-[135px] w-[135px] items-center justify-center bg-gradient-to-r from-cyan-300 to-blue-500 font-medium text-white rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 hover:opacity-0 transition-opacity duration-300">
                  <span className="text-black caveat-font font-bold sm:text-2xl text-xl text-center">
                    Favorite Movie
                  </span>
                  <BiSolidCameraMovie className = "text-3xl text-black"/>
                </div>
                <img
                  src={favMovie}
                  alt="Favorite Movie"
                  className="opacity-0 hover:opacity-100 transition-opacity z-10 rounded-xl"
                />
              </div>
            </div>
            <div className="rounded-2xl border-4 border-slate-700 hover:shadow-2xl hover:shadow-orange-600 transition-all hover:border-orange-300 duration-300">
              <div className="relative flex sm:h-[180px] sm:w-[180px] h-[135px] w-[135px] items-center justify-center bg-gradient-to-r from-teal-400 to-yellow-200 font-medium text-white rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 hover:opacity-0 transition-opacity duration-300">
                  <span className="text-black caveat-font font-bold sm:text-2xl text-xl text-center">
                    Favorite Sport
                  </span>
                  <MdOutlineSportsTennis className = "text-3xl text-black"/>
                </div>              
                <img
                  src={favSport}
                  alt="Favorite Movie"
                  className="absolute inset-0 h-full w-full opacity-0 hover:opacity-100 transition-opacity z-10 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2 mt-20 lg:mt-0">
        <div className = "flex items-center justify-center mb-10">
            <span className = "sm:text-3xl text-2xl caveat-font font-semibold">
                Reach Out With a Message!
            </span>
          </div>
          <div className="mb-4 flex space-x-4 justify-center">
            <div className="lg:w-1/2 w-full">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                placeholder="First Name"
                onChange={handleChange}
                className="mb-8 w-full appearance-none rounded-2xl border-[2px] border-slate-50/30 bg-transparent px-3 py-5 text-md focus:bg-white focus:text-black focus:border-slate-400 focus:outline-none transition-colors duration-300"
              />
              {errors.firstName && (
                <p className="text-sm text-rose-800">{errors.firstName}</p>
              )}
            </div>
            <div className="lg:w-1/2 w-full">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                placeholder="Last Name"
                onChange={handleChange}
                className="mb-8 w-full appearance-none rounded-2xl border-[2px] border-slate-50/30 bg-transparent px-3 py-5 text-md focus:bg-white focus:text-black focus:border-slate-400 focus:outline-none transition-colors duration-300"
              />
              {errors.lastName && (
                <p className="text-sm text-rose-800">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="mb-4 flex space-x-4 justify-center">
            <div className="lg:w-1/2 w-full">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="mb-8 w-full appearance-none rounded-2xl border-[2px] border-slate-50/30 bg-transparent px-3 py-5 text-md focus:bg-white focus:text-black focus:border-slate-400 focus:outline-none transition-colors duration-300"
              />
              {errors.email && (
                <p className="text-sm text-rose-800">{errors.email}</p>
              )}
            </div>
            <div className="lg:w-1/2 w-full">
              <input
                type="text"
                id="occupation"
                name="occupation"
                value={formData.occupation}
                placeholder="School/Company"
                onChange={handleChange}
                className="mb-8 w-full appearance-none rounded-2xl border-[2px] border-slate-50/30 bg-transparent px-3 py-5 text-md focus:bg-white focus:text-black focus:border-slate-400 focus:outline-none transition-colors duration-300"
              />
              {errors.occupation && (
                <p className="text-sm text-rose-800">{errors.occupation}</p>
              )}
            </div>
          </div>
          <div className="mb-4 flex flex-col items-center justify-center">
            <textarea
              type="message"
              id="message"
              name="message"
              value={formData.message}
              placeholder="Message"
              onChange={handleChange}
              className="mb-8 lg:w-full w-full appearance-none rounded-2xl border-[2px] border-slate-50/30 bg-transparent px-3 py-3 text-md focus:bg-white focus:text-black focus:border-slate-400 focus:outline-none transition-colors duration-300"
              rows="6"
            />
            {errors.message && (
              <p className="text-sm text-rose-800">{errors.message}</p>
            )}
          </div>
          <div className = "flex items-center justify-center">
          <button
            type="submit"
            className={`mb-8 w-1/2 rounded-2xl border-[2px] border-stone-600 bg-white px-4 py-5 text-sm font-semibold text-stone-900 hover:bg-slate-300 active:bg-stone-300/50 transition-colors duration-300 ${
              isSending ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSending}
          >
            <div className="flex items-center justify-center gap-2">
              {isSending ? "Sending..." : "Send"}
              {isSending ? "" : <FiSend/>}
            </div>
          </button>
          
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
