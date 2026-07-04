import Footer from "../components/Footer";

function Services() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      
      {/* DECORATIVE BACKGROUND ELEMENTS */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        
        {/* TITLE SECTION */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            MY <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent italic">SERVICES</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I provide modern web development solutions to help businesses build 
            <span className="text-white"> fast, responsive, and scalable</span> applications with cutting-edge tech.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {[
            { title: "Web Development", desc: "Full-stack MERN applications with modern UI and high-performance backend APIs.", icon: "🌐" },
            { title: "Frontend Design", desc: "Responsive and attractive user interfaces using React.js and Tailwind CSS.", icon: "🎨" },
            { title: "Backend APIs", desc: "Secure and robust RESTful APIs built with Node.js, Express, and JWT Auth.", icon: "⚙️" },
            { title: "Database Design", desc: "Efficient MongoDB schema design for optimal data management and speed.", icon: "💾" },
            { title: "Responsive UI", desc: "Mobile-first, pixel-perfect design ensuring your site looks great on every screen.", icon: "📱" },
            { title: "Deployment", desc: "Seamless hosting and CI/CD setup on platforms like Vercel, Netlify, and Render.", icon: "🚀" }
          ].map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-900/40 border border-gray-800 p-8 rounded-[2rem] hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-4xl mb-6 block">{service.icon}</span>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

        {/* WHY WORK WITH ME SECTION */}
        <div className="mt-32">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-16">
            <h2 className="text-4xl font-black tracking-tight shrink-0">WHY WORK WITH <span className="text-cyan-500">ME?</span></h2>
            <div className="h-px bg-gray-800 w-full hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {[
              { 
                title: "Growth-Oriented Mindset", 
                desc: "I’m constantly evolving with the latest web technologies to provide you with the most modern and impactful solutions." 
              },
              { 
                title: "Creative Vision", 
                desc: "I blend design and functionality to craft visually appealing, user-friendly websites with a strong brand identity." 
              },
              { 
                title: "Technical Expertise", 
                desc: "Skilled in the MERN stack, I build scalable applications with clean frontend and rock-solid backend logic." 
              },
              { 
                title: "Reliable & Professional", 
                desc: "You can count on timely delivery, clear communication, and professional handling of every single project." 
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 p-8 bg-gray-900/20 border border-gray-800 rounded-3xl hover:bg-gray-900/40 transition-all">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 font-bold text-xl">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;