
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative text-sm md:text-base font-medium transition-all duration-300 pb-1 ${
      isActive
        ? "text-cyan-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-cyan-400 after:rounded-full"
        : "text-gray-400 hover:text-white"
    }`;

  const mobileLink =
    "text-xl text-gray-300 hover:text-cyan-400 transition duration-300";

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800 px-6 py-4">

        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">

            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center font-black text-black group-hover:rotate-12 transition-transform">
              MA
            </div>

            <span className="text-xl font-black tracking-tighter text-white">
              Developers<span className="text-cyan-500">.</span>
            </span>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">

            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>

            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>

            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>


          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-2xl text-white"
          >
            <i className="fas fa-bars"></i>
          </button>

        </div>

      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-950 border-l border-gray-800 z-50 transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex justify-between items-center p-6 border-b border-gray-800">

          <h2 className="text-xl font-bold text-cyan-400">
            Menu
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-white hover:text-red-500 transition"
          >
            <i className="fas fa-times"></i>
          </button>

        </div>

        <div className="flex flex-col gap-8 p-8">

          <NavLink
            to="/"
            className={mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>

          <NavLink
            to="/projects"
            className={mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          
        </div>

      </div>
    </>
  );
}

export default Navbar;
