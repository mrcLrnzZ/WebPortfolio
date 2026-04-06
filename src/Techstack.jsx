function Techstack() {
  const stack = [
    {
      category: "Frontend Development",
      items: [
        { name: "React", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "JavaScript (ES6+)", icon: "javascript" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
        { name: "Vite", icon: "vite" },
        { name: "Bootstrap", icon: "bootstrap" }
      ]
    },
    {
      category: "Backend & Infrastructure",
      items: [
        { name: "Node.js", icon: "nodedotjs" },
        { name: "Express.js", icon: "express" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" }
      ]
    },
    {
      category: "AI-Augmented Development",
      items: [
        { name: "ChatGPT", icon: "openai" },
        { name: "Claude", icon: "anthropic" },
        { name: "Gemini", icon: "googlegemini" },
        { name: "Grok", icon: "x" }
      ]
    }
  ];

  return (
    <div className="py-2 p-4 dark:bg-mauve-950">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-2">
        Techstack & Tools
      </h2>
      
      <div className="space-y-10">
        {stack.map((group, idx) => (
          <div key={idx} className="group">
            <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4 transition-colors group-hover:text-black dark:group-hover:text-white">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item, i) => (
                <div 
                  key={i} 
                  className="px-3 py-2 bg-white dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 rounded-lg flex items-center gap-2.5 hover:border-black dark:hover:border-white transition-all duration-300 cursor-default shadow-sm hover:shadow-md group/item"
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${item.icon}`} 
                    alt="" 
                    className="w-3 h-3 transition-all group-hover/item:scale-110"
                  />


                  <span className="text-xs font-medium text-gray-800 dark:text-gray-200 group-hover/item:text-black dark:group-hover/item:text-white transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techstack;
