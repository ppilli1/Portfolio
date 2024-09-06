import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import bmwLogo from "../assets/bmw.webp"
import nsfLogo from "../assets/nsfLogo.png"
import theCoderSchoolLogo from "../assets/theCoderSchoolLogo.png"
import mathnasiumLogo from "../assets/mathnasiumLogo.webp"
import projectImage1 from "../assets/project1.jpeg"
import projectImage2 from "../assets/project2.jpeg"
import projectImage3 from "../assets/project3.jpeg"
import projectImage4 from "../assets/project4.jpeg"
import projectImage5 from "../assets/project5.jpeg"
import projectImage6 from "../assets/project6.jpeg"

export const NAVIGATION_LINKS = [
  { label: "About Me", href: "#about" },
  { label: "Technologies", href: "#technologies" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Connect", href: "#connect" },
];

export const HERO_CONTENT = `Hi there! Welcome to my digital haven! I'm a dedicated full-stack developer with a flair for crafting intuitive and scalable web and mobile applications. With over 3 years of hands-on experience, I've sharpened my aptitude in front-end technologies, including React Native, React.js and Next.js, alongside back-end technologies like Django REST Framework, GraphQL, and Google Firebase. My mission is to channel my skills and creativity into developing disruptive solutions that challenge the status quo and deliver unprecedented, yet alluring user experiences.`;

export const ABOUT_TEXT = `I am a Computer Science major with a minor in Business Administration at Rutgers University-New Brunswick, driven by a passion for innovation and technology. My experience at BMW Group involved developing in-car app prototypes and automating testing processes, showcasing my expertise in Kotlin, Android Studio, and Python scripting. As a co-founder of SynthSense, I spearheaded the creation of Minderva, a health-tech solution using computer vision to improve patient care and nursing efficiency. I also won first place at Rutgers' HackRU with a navigation mobile app for NJ Transit, demonstrating my skills in React Native, MySQL, and API integrations. For a comprehensive overview of my projects and experiences, please explore the sections below.`;

export const EXPERIENCES = [
  {
    id: 1,
    year: "Jan'24 - Feb'24",
    role: "Product Dev. Infotainment Intern",
    company: "BMW Group",
    image: bmwLogo,
    alt: "BMW Logo",
    imageClassName: "object-cover w-full h-full",
    gradient: "absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50 rounded-full z-10",
    description: `Developed in-car app prototypes for Android Automotive, utilizing Kotlin and Java, while concurrently designing and implementing Python scripts to bolster automated testing and facilitate rapid prototyping. Provided crucial support to the engineering team by testing Sirius XM radio functions in the new Android-powered BMW infotainment system.`,
    technologies: [
      {
        id: 1,
        name: "Automotive"
      }, 
      {
        id: 2,
        name: "Android Studio"
      }, 
      {
        id: 3,
        name: "Kotlin"
      }, 
      {
        id: 4,
        name: "Python"
      }
    ],
  },
  {
    id: 2,
    year: "Jan'24 - Apr'24",
    role: "SynthSense Startup Founder",
    company: "NSF I-Corps",
    image: nsfLogo,
    alt: "NSF Logo",
    imageClassName: "object-cover object-center w-full h-full",
    gradient: "absolute sm:inset-5 inset-[10px] bg-gradient-to-b from-black via-transparent to-black opacity-50 rounded-full z-10",
    description: `Founded SynthSense, a computer vision startup focused on tracking patient cognitive behavior in hospital and residential settings. Represented startup at CES 2024 in Las Vegas, conducting interviews and fostering connections with 50+ industry leaders to develop market-driven product focus points, and adeptly managed financial resources ($3,000) granted by the National Science Foundation's Innovation-Corps.`,
    technologies: [
      {
        id: 1,
        name: "Startup"
      }, 
      {
        id: 2,
        name: "Medical-tech"
      }, 
      {
        id: 3,
        name: "Computer Vision"
      }, 
      {
        id: 4,
        name: "React Native"
      }
    ],
  },
  {
    id: 3,
    year: "May'23 - Feb'24",
    role: "Coding Instructor",
    company: "theCoderSchool",
    image: theCoderSchoolLogo,
    alt: "theCoderSchool Logo",
    imageClassName: "object-cover object-center w-full h-full",
    gradient: "absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50 rounded-full z-10",
    description: `Conducted one-on-one courses in Python and Scratch, facilitating significant growth in students' coding proficiency. Designed and led a two-week summer camp program, the first week covering Python fundamentals (loops, conditionals, and Turtle graphics) and the second week for React Native app development integrated with Google Firebase (buttons, navigation, data querying).`,
    technologies: [
      {
        id: 1,
        name: "React Native"
      }, 
      {
        id: 2,
        name: "Python"
      }, 
      {
        id: 3,
        name: "Firebase"
      }, 
      {
        id: 4,
        name: "Scratch"
      }
    ],
  },
  {
    id: 4,
    year: "May'21 - Aug'22",
    role: "Math Instructor",
    company: "Mathnasium",
    image: mathnasiumLogo,
    alt: "Mathnasium Logo",
    imageClassName: "object-cover object-center w-full h-full",
    gradient: "",
    description: `Provided comprehensive math instruction to students in grades K-10, covering topics from basic arithmetic to advanced geometry and algebra 2. Implemented a personalized approach to student engagement, fostering strong connections by incorporating students' interests, such as discussing popular culture topics, to create a supportive learning environment and enhance student motivation and focus.`,
    technologies: [
      {
        id: 1,
        name: "SAT Math"
      }, 
      {
        id: 2,
        name: "Geometry"
      }, 
      {
        id: 3,
        name: "Algebra"
      }, 
      {
        id: 4,
        name: "Arithmetic"
      }
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const PROJECT = [
  {
    id: 1,
    name: "University of Maryland Bitcamp - TaxCut",
    description:
      "An AI-powered web platform that guides business owners in optimizing tax savings by identifying the most advantageous tax codes given their company’s expenses, loans, and finances.",
    image: projectImage1,
    imageClassName: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
    githubLink: "https://github.com/ppilli1/TaxCut",
    buttonClassName: "relative flex items-center justify-center px-0 rounded-full 2xl:h-[50px] 2xl:w-[180px] xl:h-[40px] xl:w-[144px] lg:h-[50px] lg:w-[180px] md:h-[40px] md:w-[144px] sm:h-[50px] sm:w-[180px] h-[40px] w-[144px] bg-white border border-orange-400 text-orange-400 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-orange-400 hover:before:w-2/4 hover:before:bg-orange-400 hover:after:w-2/4 hover:after:bg-orange-400 overflow-hidden"
  },
  {
    id: 2,
    name: "Disney+ Web App",
    description:
      "A full-stack web app utilizing Azure OpenAI for AI-powered movie recommendations. Implemented data caching and loaders for efficient API calls and designed the UI with Tailwind CSS.",
    image: projectImage2,
    imageClassName: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
    githubLink: "https://disney-clone-eta-ten.vercel.app/",
    buttonClassName: "relative flex items-center justify-center px-0 rounded-full 2xl:h-[50px] 2xl:w-[180px] xl:h-[40px] xl:w-[144px] lg:h-[50px] lg:w-[180px] md:h-[40px] md:w-[144px] sm:h-[50px] sm:w-[180px] h-[40px] w-[144px] bg-white border border-blue-900 text-blue-900 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-blue-900 hover:before:w-2/4 hover:before:bg-blue-900 hover:after:w-2/4 hover:after:bg-blue-900 overflow-hidden"
  },
  {
    id: 3,
    name: "Georgetown Hoya Hacks - RUAdmitted",
    description:
      "An AI-powered admissions assistant that predicts a student's acceptance rate to Rutgers University. Includes AI-powered ratings, campus carousels, major diagrams, and FAQ chatbots.",
    image: projectImage3,
    imageClassName: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
    githubLink: "https://github.com/ppilli1/RuAdmitted",
    buttonClassName: "relative flex items-center justify-center px-0 rounded-full 2xl:h-[50px] 2xl:w-[180px] xl:h-[40px] xl:w-[144px] lg:h-[50px] lg:w-[180px] md:h-[40px] md:w-[144px] sm:h-[50px] sm:w-[180px] h-[40px] w-[144px] bg-white border border-sky-300 text-sky-300 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-sky-300 hover:before:w-2/4 hover:before:bg-sky-300 hover:after:w-2/4 hover:after:bg-sky-300 overflow-hidden"
  },
  {
    id: 4,
    name: "Rutgers HackRU Winner - NJ Trip Planner",
    description:
      "A mobile app that helps NJ Transit passengers identify bus timings and routes with integrated Google Maps API Services, and an AI-generated full day trip planner for their chosen destinations.",
    image: projectImage4,
    imageClassName: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
    githubLink: "https://github.com/ppilli1/HackRuOpenAI",
    buttonClassName: "relative flex items-center justify-center px-0 rounded-full 2xl:h-[50px] 2xl:w-[180px] xl:h-[40px] xl:w-[144px] lg:h-[50px] lg:w-[180px] md:h-[40px] md:w-[144px] sm:h-[50px] sm:w-[180px] h-[40px] w-[144px] bg-white border border-purple-500 text-purple-500 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-purple-500 hover:before:w-2/4 hover:before:bg-purple-500 hover:after:w-2/4 hover:after:bg-purple-500 overflow-hidden"
  },
  {
    id: 5,
    name: "Doctor Appointment Booking Website",
    description:
      "A MERN Stack website integrated with Stripe Payments to conveniently book appointments with doctors nationwide, and a medically trained AI-chatbot to assist patients in their specialist search.",
    image: projectImage5,
    imageClassName: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
    githubLink: "https://github.com/ppilli1/MedicareBooking",
    buttonClassName: "relative flex items-center justify-center px-0 rounded-full 2xl:h-[50px] 2xl:w-[180px] xl:h-[40px] xl:w-[144px] lg:h-[50px] lg:w-[180px] md:h-[40px] md:w-[144px] sm:h-[50px] sm:w-[180px] h-[40px] w-[144px] bg-white border border-pink-500 text-pink-500 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-pink-500 hover:before:w-2/4 hover:before:bg-pink-500 hover:after:w-2/4 hover:after:bg-pink-500 overflow-hidden"
  },
  {
    id: 6,
    name: "Instagram Clone",
    description:
      "A full-stack Instagram mobile app clone that optimizes user post uploads with Formik and Yup, contains a bottom-tab bar for screen navigation, and Google Firestore for storing user posts.",
    image: projectImage6,
    imageClassName: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
    githubLink: "https://github.com/ppilli1/Instagram-Clone",
    buttonClassName: "relative flex items-center justify-center px-0 rounded-full 2xl:h-[50px] 2xl:w-[180px] xl:h-[40px] xl:w-[144px] lg:h-[50px] lg:w-[180px] md:h-[40px] md:w-[144px] sm:h-[50px] sm:w-[180px] h-[40px] w-[144px] bg-white border border-purple-400 text-purple-400 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-purple-400 hover:before:w-2/4 hover:before:bg-purple-400 hover:after:w-2/4 hover:after:bg-purple-400 overflow-hidden"
  },
];