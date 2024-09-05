import About from './components/About'
import Hero from './components/Hero'
import Navbar1 from './components/Navbar1'
import Technologies from './components/Technologies'
import ParticlesBackground from './components/ParticlesBackground'
import Experience from './components/Experience'
import Idea from './components/Idea'
import Project from './components/Project'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className = "relative min-h-screen overflow-x-hidden text-white antialiased selection:bg-rose-300 selection:text-rose-800">
      <div className = "fixed top-0 z-0 h-full w-full">
        <ParticlesBackground/>
      </div>
      <div className="absolute -z-10 h-full w-full bg-gradient-to-r from-[#01000d] to-[#08066b]"></div> 
      {/* To give the background a little more pop, give the following background colors - from-[#01000d] to-[#08066b]*/}
      <div className = "relative z-10 container mx-auto px-8">
        {/* <Navbar1/> */}
        <Navbar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        {/* <Idea/> */}
        {/* <Project/> */}
        <Projects/>
        <ContactForm/>
        <Footer/>
      </div>
    </div>
  )
}

export default App