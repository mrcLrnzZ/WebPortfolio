import { useState, useEffect } from "react"
import "./index.css"
import Footer from "./Footer"
import Header from "./Header"
import About from "./about"

function App() {
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
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 mt-10">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <About />
        <Footer />
      </div>
    </div>
  )
}

export default App
