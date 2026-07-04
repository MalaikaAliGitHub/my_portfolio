function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden">

      {/* Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="relative bg-gray-950 text-white py-16 md:py-24 px-5 md:px-8 rounded-t-[2rem] md:rounded-t-[3rem] border-t border-gray-800">

        <div className="max-w-5xcll mx-auto text-center">

          {/* SMALL TITLE */}
          <div className="inline-block px-4 py-2 mb-6 rounded-full border border-gray-800 bg-gray-900 text-xs md:text-sm font-bold tracking-widest text-cyan-400 uppercase">
            Have a project in mind?
          </div>

          {/* MAIN HEADING */}
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight mb-10">
            Let’s turn your{" "}
            <span className="text-gray-500 italic font-light">
              ideas
            </span>
            <br />
            into{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              reality.
            </span>
          </h2>

          {/* EMAIL BUTTON */}
          <div className="flex flex-col items-center gap-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=malaikaalijf1214@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-bold transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span>Contact Me via Gmail</span>
              <div className="bg-cyan-500 text-white rounded-lg p-2 group-hover:rotate-45 transition duration-300">
                ↗
              </div>
            </a>

            <p className="text-gray-500 text-sm break-all">
              malaikaalijf1214@gmail.com
            </p>
          </div>

          {/* LINE */}
          <div className="w-full h-px bg-gray-800 my-12"></div>

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="text-white font-semibold">
                Malaika Ali
              </span>
              . All Rights Reserved.
            </p>

            {/* SOCIAL BUTTONS WITH FONT AWESOME ICONS */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

              {/* LINKEDIN BUTTON */}
              <a
                href="https://www.linkedin.com/in/malaika-ali-1015b12b4?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition duration-300 text-center"
              >
                <i className="fa-brands fa-linkedin-in text-lg group-hover:scale-110 transition-transform duration-300"></i>
                <span>LinkedIn</span>
              </a>

              {/* GITHUB BUTTON */}
              <a
                href="https://github.com/MalaikaAliGitHub/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-gray-700 text-gray-400 hover:border-white hover:text-white hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition duration-300 text-center"
              >
                <i className="fa-brands fa-github text-lg group-hover:scale-110 transition-transform duration-300"></i>
                <span>GitHub</span>
              </a>

            </div>

          </div>

        </div>

        {/* Glow Effects */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full"></div>

      </div>
    </footer>
  );
}

export default Footer;