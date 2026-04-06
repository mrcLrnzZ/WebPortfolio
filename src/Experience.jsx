function Experience() {
  const experiences = [
    {
      title: "Management Information System Staff",
      company: "University of Caloocan City",
      year: "2024",
      isCurrent: true
    },
    {
      title: "Special Program for Employment of Students",
      company: "Government of Caloocan City",
      year: "2024",
      isCurrent: false
    },
    {
      title: "Bachelor of Science in Computer Science",
      company: "University of Caloocan City",
      year: "2023",
      isCurrent: false
    }
  
  ];

  return (
    <div className="py-2">
      <div className="flex items-center gap-3 mb-10">

        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
          Experience
        </h2>
      </div>

      <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-2 space-y-4 pb-4">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-5 group">
            {/* Timeline Dot */}
            <div className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-gray-950 transition-all duration-300 group-hover:scale-125 ${
              exp.isCurrent 
                ? 'bg-black dark:bg-white shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_15px_rgba(255,255,255,0.2)] animate-pulse' 
                : 'bg-gray-200 dark:bg-gray-700'
            }`}></div>
            
            {/* Content Card */}
            <div className=" dark:bg-mauve-950  p-4 border-gray-100 dark:border-gray-800 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] dark:hover:bg-gray-800/60 transition-all duration-500 hover:-translate-y-1 group-hover:border-gray-300 dark:group-hover:border-gray-700">
              <div className="flex flex-col sm:flex-row  justify-between mb-2">
                <h3 className="text-md text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors font-medium">
                  {exp.title}
                </h3>
                <span className="text-sm font-bold text-black dark:text-white flex-start mt-2">
                  {exp.year}
                </span>
              </div>

              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-md  text-gray-700 dark:text-gray-300">
                  {exp.company}
                </span>
                <span className="w-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}


export default Experience;
