import { useState, useEffect } from "react"
import "./index.css"
import Footer from "./Footer"
import Header from "./Header"
import About from "./about"
import Experience from "./Experience"
import Techstack from "./Techstack"
import Projects from "./Projects"
import Certificate from "./Certificate"
import ContactModal from "./ContactModal"
import Reveal from "./Reveal"

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-100 selection:bg-indigo-100 dark:selection:bg-indigo-900/30">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10 overflow-x-hidden">
        <Reveal>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} onContactClick={() => setIsContactOpen(true)} />
        </Reveal>
        
        <div className="flex flex-col md:grid md:grid-cols-6 gap-8">
          <div className="md:col-span-4">
            <Reveal delay={100}>
                <About />
            </Reveal>
          </div>
          <div className="md:col-span-2">
            <Reveal delay={200}>
                <Experience />
            </Reveal>
          </div>
          <div className="col-span-6">
            <Reveal delay={100}>
                <Techstack />
            </Reveal>
          </div>
          <div className="col-span-6">
            <Reveal delay={100}>
                <Projects />
            </Reveal>
          </div>
          <div className="col-span-6">
            <Reveal delay={100}>
                <Certificate />
            </Reveal>
          </div>
        </div>

        <Reveal delay={100}>
            <Footer />
        </Reveal>
      </div>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}


export default App
