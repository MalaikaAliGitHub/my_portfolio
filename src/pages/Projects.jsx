import React from "react";
import { localProjects } from "../data/projectsData"; // Hardcoded data import kiya
import Footer from "../components/Footer";

function Projects() {
  // Direct static list use ho rahi hai bina axios overhead ke
  const projects = localProjects;

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            MY <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">WORKS</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            A collection of projects where I've turned complex ideas into 
            <span className="text-white font-medium"> clean and functional</span> digital solutions.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length === 0 ? (
            <div className="col-span-full py-20 text-center">
              <div className="inline-block p-4 rounded-full bg-gray-900 border border-gray-800 mb-4">
                🚀
              </div>
              <p className="text-gray-500 text-xl font-medium tracking-tight">
                No projects added yet. Something awesome is coming!
              </p>
            </div>
          ) : (
            projects.map((project) => (
              <div
                key={project._id}
                className="group bg-gray-900/40 border border-gray-800 rounded-[2rem] overflow-hidden hover:border-cyan-500/50 transition-all duration-500 flex flex-col h-full hover:-translate-y-2 shadow-2xl"
              >
                {/* PROJECT CONTENT */}
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* TECH STACK BADGES */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.split(",").map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-gray-800 text-cyan-400 border border-gray-700 rounded-lg"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ACTION BUTTONS (FOOTER OF CARD) */}
                <div className="px-8 pb-8 flex gap-4">
                  {/* GITHUB LINK */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-3 bg-gray-800 text-white font-bold rounded-xl border border-gray-700 hover:bg-gray-700 transition-all"
                  >
                    GitHub
                  </a>

                  {/* LIVE LINK */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-cyan-500 text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                    Live
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;