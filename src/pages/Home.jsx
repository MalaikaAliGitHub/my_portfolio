import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6">
        
        {/* EMAIL BADGE */}
<a 
    href="https://mail.google.com/mail/?view=cm&fs=1&to=malikaalijf1214@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="mb-6 px-4 py-1.5 border border-cyan-500/30 bg-cyan-500/5 rounded-full text-cyan-400 text-sm font-medium animate-bounce hover:bg-cyan-500/20 transition-all cursor-pointer flex items-center gap-2"
>
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
  </span>
  Available for Work 🚀
</a>

        {/* MAIN HEADING */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight">
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent italic">
            MERN Developer
          </span>
        </h1>

        {/* SUBHEADING */}
        <p className="text-gray-400 mt-6 text-lg md:text-xl max-w-2xl leading-relaxed">
          I craft <span className="text-white font-medium">high-performance</span> digital experiences. Specializing in building modern, fast, and scalable full-stack applications using the MERN ecosystem.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-5">
          
          <Link
            to="/projects"
            className="group relative px-8 py-4 bg-cyan-500 text-black font-bold rounded-2xl hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] flex items-center justify-center gap-2"
          >
            View My Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <Link
            to="/contact"
            className="px-8 py-4 border border-gray-700 bg-gray-900/50 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 flex items-center justify-center"
          >
            Contact Me
          </Link>

        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse text-gray-500">
           <p className="text-xs uppercase tracking-widest">Scroll Down</p>
        </div>

      </section>

      {/* FOOTER AREA */}
      <div className="relative z-10">
        <Footer />
      </div>
      
    </div>
  );
}

export default Home;