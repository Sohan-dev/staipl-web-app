import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Solutions & Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const activeClass =
    "text-blue-700 font-semibold border-b-2 border-blue-700 pb-1";
  const normalClass =
    "text-slate-600 hover:text-blue-700 transition-colors pb-1";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* <div className="p-1.5 rounded-lg bg-blue-50 border border-blue-200 group-hover:border-blue-400 transition-colors flex items-center justify-center"> */}
          <img
            src={logo}
            alt="STAIPL Logo"
            className="h-12 w-auto max-w-[160px] object-contain"
          />
          {/* </div> */}
          <div>
            <span className="text-xl font-bold tracking-wider text-slate-900 block leading-none">
              Startrack Automation India Private Limited
            </span>
            <span className="text-[10px] tracking-widest text-blue-700 font-semibold uppercase">
              Automation &amp; IoT
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-all shadow-sm"
          >
            Request Quote
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-700 hover:text-slate-950 p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-4 shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 ${isActive ? "text-blue-700 font-semibold" : "text-slate-700"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
