function ProjectCard({ project }) {
  return (
    <a 
      href={project.link || "#"} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group bg-white dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 rounded-sm overflow-hidden hover:border-black dark:hover:border-white transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col cursor-pointer"
    >
      <div className="p-5 flex flex-col grow">
        <h3 className="text-md font-bold text-gray-900 dark:text-white mb-2 group-hover:text-black dark:group-hover:text-white transition-all tracking-tight">
          {project.title}
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed grow opacity-80">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.tech.map((t, i) => (
            <div key={i} className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 dark:bg-gray-800/30 rounded-sm border border-gray-100 dark:border-gray-800 transition-all group-hover:border-gray-200 dark:group-hover:border-gray-700">
              <img 
                src={`https://cdn.simpleicons.org/${t.icon}`} 
                alt="" 
                className="w-3 h-3 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white uppercase transition-colors">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

function Projects() {
  const featuredProjects = [
    {
      title: "Ocean Ascent",
      description: "A pixel-art underwater fishing adventure with dynamic physics and deep-sea exploration mechanics.",
      tech: [ { name: "html5", icon: "html5" }, { name: "JavaScript", icon: "javascript" }, { name: "CSS3", icon: "css3" }],
      link: "https://mrclrnzz.github.io/Ocean-Ascent/"
    },
    {
      title: "Magbibike ba?",
      description: "A basic web application that provides cycling route information and ride tracking through a simple front-end interface. Built with HTML, CSS, JavaScript, and styled with Tailwind CSS, it demonstrates core API integration and dynamic content rendering on the client side.",
      tech: [
        { name: "HTML", icon: "html5" },
        { name: "CSS", icon: "css3" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Tailwind CSS", icon: "tailwindcss" }
      ],
      link: "https://magbibike-ba.vercel.app/"
    },
    {
      title: "Monkey Gesture",
      description: "A machine learning-based gesture recognition system that leverages computer vision techniques to detect and classify hand movements in real time. Built using Python, OpenCV, and TensorFlow, it enables touchless interaction and can be extended for automation, accessibility, or smart control systems.",
      tech: [
        { name: "Python", icon: "python" },
        { name: "OpenCV", icon: "opencv" },
        { name: "TensorFlow", icon: "tensorflow" }
      ],
      link: "https://github.com/mrcLrnzZ/Monkey-Gestures"
    }
  ];

  const collaborativeProjects = [
    {
      title: "UAAGI-OneHire Website",
      description: "A web-based platform for UAAGI-OneHire that showcases its services, features, and opportunities, providing users with an accessible and responsive interface to explore hiring and collaboration solutions.",
      tech: [{ name: "GitHub", icon: "github" }, { name: "Git", icon: "git" }, { name: "PHP", icon: "php" },  { name: "MySQL", icon: "mysql" }],
      link: "https://github.com/mrcLrnzZ/UAAGI-OneHire"
    },
    {
      title: "UAAGI-OneHire Application",
      description: "A full-featured application designed to streamline hiring and team collaboration, offering tools for managing applicants, coordinating tasks, and improving workflow efficiency.",
      tech: [{ name: "Java", icon: "java" }, { name: "MySQL", icon: "mysql" }],
      link: "https://github.com/mrcLrnzZ/UAAGI_APP"
    },
    {
      title: "Terminal Library Management",
      description: "A terminal-based library management system that allows efficient handling of book records, borrowing, and returns through a fast and lightweight command-line interface.",
      tech: [{ name: "Java", icon: "java" }, { name: "JSwing", icon: "java" }],
      link: "https://github.com/mrcLrnzZ/Terminal-Library_Management-"
    }
  ];

  return (
    <div className="animate-fade-in-up mt-10 space-y-10">
      {/* Featured Projects Section */}
      <section>
        <h2 className="text-md font-semibold mb-2 text-gray-900 dark:text-gray-100 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800 pb-2">
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </section>

      {/* Collaborative Projects Section */}
      <section>
        <h2 className="text-md font-semibold mb-2 text-gray-900 dark:text-gray-100 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800 pb-2">
          Collaborative Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {collaborativeProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;