import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Technologies from './components/Technologies'
import ParticlesBackground from './components/ParticlesBackground'
import Experience from './components/Experience'
import Idea from './components/Idea'
import { Projects } from './components/Projects'

const App = () => {
  return (
    <div className = "relative min-h-screen overflow-x-hidden text-white antialiased selection:bg-red-300 selection:text-red-800">
      <div className = "fixed top-0 z-0 h-full w-full">
        <ParticlesBackground/>
      </div>
      <div className="absolute -z-10 h-full w-full bg-gradient-to-r from-slate-700 to-slate-900"></div>
      <div className = "relative z-10 container mx-auto px-8">
        <div className = "sticky">
          <Navbar/>
        </div>
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        {/* <Idea/> */}
        <Projects/>
      </div>
    </div>
  )
}

export default App