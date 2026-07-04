import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        
        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            ABOUT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ME</span>
          </h1>
          <div className="w-20 h-1.5 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* INTRO CARD */}
        <div className="grid md:grid-cols-12 gap-10 items-center mb-24">
          <div className="md:col-span-7 bg-gray-900/50 border border-gray-800 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">
              Hi, I'm <span className="text-cyan-400">Malaika Ali</span> 👋
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a passionate <span className="text-white font-medium">Full Stack Developer</span> who loves building modern, 
              responsive, and scalable web applications. My journey is driven by a deep curiosity for how the web works 
              and a commitment to writing clean, efficient code.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              With the <span className="text-cyan-400 font-medium">MERN Stack</span> as my foundation, I bridge the gap between 
              elegant frontend designs and robust backend logic.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-4">
             <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl text-center">
                <p className="text-3xl font-bold text-cyan-400">10+</p>
                <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Projects</p>
             </div>
             <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl text-center">
                <p className="text-3xl font-bold text-blue-400">Ready</p>
                <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">To Work</p>
             </div>
             <div className="col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 p-6 rounded-3xl">
                <p className="text-gray-400 italic">"Turning complex problems into simple, beautiful digital solutions."</p>
             </div>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Technical <span className="text-cyan-400 italic">Arsenal</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Category Component Helper */}
            {[
              { title: "Frontend Core", skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap"] },
              { title: "Frontend Modern", skills: ["React.js", "Tailwind CSS", "Responsive Design", "Vite"] },
              { title: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"] },
              { title: "Database", skills: ["MongoDB", "Mongoose", "SQL","PHP Basics"] },
              { title: "Tools", skills: ["Git & GitHub", "VS Code", "Postman", "NPM"] },
              { title: "Design", skills: ["UI/UX Basics", "Figma", "Canva"] }
            ].map((cat, index) => (
              <div key={index} className="group bg-gray-900/30 border border-gray-800 p-8 rounded-3xl hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700 group-hover:border-cyan-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* GOAL SECTION */}
        <div className="relative group overflow-hidden bg-gray-900 border border-gray-800 p-12 rounded-[3rem] text-center shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <span className="text-4xl mb-4 block">🚀</span>
            <h2 className="text-3xl font-black mb-4">My Ultimate Goal</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              To evolve into a <span className="text-white font-bold text-2xl px-2">Senior Full Stack Architect</span>, 
              building scalable, world-class applications that make a meaningful impact on users worldwide.
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default About;