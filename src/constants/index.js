import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import bmwLogo from "../assets/bmw.webp"
import nsfLogo from "../assets/nsfLogo.png"
import theCoderSchoolLogo from "../assets/theCoderSchoolLogo.png"
import mathnasiumLogo from "../assets/mathnasiumLogo.webp"

export const HERO_CONTENT = `Hi there! Welcome to my digital haven! I'm a dedicated full-stack developer with a flair for crafting intuitive and scalable web and mobile applications. With over 3 years of hands-on experience, I've sharpened my aptitude in front-end technologies, including React Native, React.js and Next.js, alongside back-end technologies like Django REST Framework, GraphQL, and Google Firebase. My mission is to channel my skills and creativity into developing disruptive solutions that challenge the status quo and deliver unprecedented, yet alluring user experiences.`;

export const ABOUT_TEXT = `I am a Computer Science major with a minor in Business Administration at Rutgers University-New Brunswick, driven by a passion for innovation and technology. My experience at BMW Group involved developing in-car app prototypes and automating testing processes, showcasing my expertise in Kotlin, Android Studio, and Python scripting. As a co-founder of SynthSense, I spearheaded the creation of Minderva, a health-tech solution using computer vision to improve patient care and nursing efficiency. I also won first place at Rutgers' HackRU with a navigation mobile app for NJ Transit, demonstrating my skills in React Native, MySQL, and API integrations. For a comprehensive overview of my projects and experiences, please explore the sections below.`;

export const EXPERIENCES = [
  {
    year: "Jan'24 - Feb'24",
    role: "Product Dev. Infotainment Intern",
    company: "BMW Group",
    image: bmwLogo,
    alt: "BMW Logo",
    imageClassName: "object-cover w-full h-full",
    gradient: "absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50 rounded-full z-10",
    description: `Developed in-car app prototypes for Android Automotive, utilizing Kotlin and Java, while concurrently designing and implementing Python scripts to bolster automated testing and facilitate rapid prototyping. Provided crucial support to the engineering team by testing Sirius XM radio functions in the new Android-powered BMW infotainment system.`,
    technologies: ["Automotive", "Android Studio", "Kotlin", "Python"],
  },
  {
    year: "Jan'24 - Apr'24",
    role: "SynthSense Startup Founder",
    company: "NSF I-Corps",
    image: nsfLogo,
    alt: "NSF Logo",
    imageClassName: "object-cover object-center w-full h-full",
    gradient: "absolute sm:inset-5 inset-[10px] bg-gradient-to-b from-black via-transparent to-black opacity-50 rounded-full z-10",
    description: `Founded SynthSense, a computer vision startup focused on cognitive solutions across healthcare and residential settings. Represented startup at CES 2024 in Las Vegas, conducting interviews and fostering connections with 50+ industry leaders to develop market-driven product focus points, and adeptly managed financial resources ($3,000) granted by the National Science Foundation's Innovation-Corps.`,
    technologies: ["Startup", "Medical-tech", "Computer Vision", "React Native"],
  },
  {
    year: "May'23 - Feb'24",
    role: "Coding Instructor",
    company: "theCoderSchool",
    image: theCoderSchoolLogo,
    alt: "theCoderSchool Logo",
    imageClassName: "object-cover object-center w-full h-full",
    gradient: "absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50 rounded-full z-10",
    description: `Conducted one-on-one courses in Python and Scratch, facilitating significant growth in students' coding proficiency. Designed and led a two-week summer camp program, the first week covering Python fundamentals (loops, conditionals, and Turtle graphics) and the second week for React Native app development integrated with Google Firebase (buttons, navigation, data querying).`,
    technologies: ["React Native", "Python", "Firebase", "Scratch"],
  },
  {
    year: "May'21 - Aug'22",
    role: "Math Instructor",
    company: "Mathnasium",
    image: mathnasiumLogo,
    alt: "Mathnasium Logo",
    imageClassName: "object-cover object-center w-full h-full",
    gradient: "",
    description: `Provided comprehensive math instruction to students in grades K-10, covering topics from basic arithmetic to advanced geometry and algebra 2. Implemented a personalized approach to student engagement, fostering strong connections by incorporating students' interests, such as discussing popular culture topics, to create a supportive learning environment and enhance student motivation and focus.`,
    technologies: ["SAT Math", "Geometry", "Algebra", "Arithmetic",],
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
