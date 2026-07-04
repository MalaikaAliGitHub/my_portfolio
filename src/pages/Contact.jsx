import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute top-20 right-[-10%] w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 left-[-10%] w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        
        {/* TITLE SECTION */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have a question or want to work together? My inbox is always open. 
            <span className="text-white block mt-2 font-medium italic">Let’s build something amazing together!</span>
          </p>
        </div>

        {/* CONTACT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

          {/* LINKEDIN CARD */}
          <div className="group bg-gray-900/40 border border-gray-800 p-10 rounded-[2.5rem] text-center hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
            <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform">
              🔗
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">LinkedIn</h2>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Let's connect professionally and share insights.
            </p>
            <a
              href="https://www.linkedin.com/in/malaika-ali-1015b12b4?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 rounded-xl border border-cyan-500/50 text-cyan-400 font-bold hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              Open Profile
            </a>
          </div>

          {/* WHATSAPP CARD */}
          <div className="group bg-gray-900/40 border border-gray-800 p-10 rounded-[2.5rem] text-center hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform">
              💬
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">WhatsApp</h2>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Available for quick chats and instant collaboration.
            </p>
            <a
              href="https://wa.me/923224720525"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 rounded-xl border border-green-500/50 text-green-400 font-bold hover:bg-green-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              Message Me
            </a>
          </div>

          {/* EMAIL CARD */}
          <div className="group bg-gray-900/40 border border-gray-800 p-10 rounded-[2.5rem] text-center hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform">
              ✉️
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Email</h2>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Send me a detailed inquiry for your next project.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=malaikaalijf1214@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 rounded-xl border border-purple-500/50 text-purple-400 font-bold hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20_rgba(168,85,247,0.4)]"
            >
              Send Email
            </a>
          </div>

        </div>

        {/* BOTTOM TAGLINE */}
        <div className="text-center bg-gray-900/20 border border-gray-800/50 p-8 rounded-3xl backdrop-blur-md">
          <p className="text-gray-400 italic">
            "Based in <span className="text-white">Pakistan</span>, working with clients <span className="text-cyan-400">Worldwide</span>."
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Contact;