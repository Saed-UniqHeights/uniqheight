import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  const goToSection = (section: "services" | "about") => {
    navigate("/", { state: { section } });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center group">
            <div className="flex items-center space-x-2">
              <img
                src="../assets/logo-2.png"
                alt="Logo"
                className="h-12 w-auto      transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              onClick={() => goToSection("services")}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              onClick={() => goToSection("about")}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/blog"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <div className="flex items-center space-x-3 ml-4">
              <a
                href="/book-demo"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow hover:shadow-md"
              >
                Book Demo
              </a>
              <a
                href="/try-demo"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-blue-200"
              >
                Try Demo
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2  rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } transition-all duration-300`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/60 backdrop-blur-xl rounded-lg mx-4 shadow-xl">
          <a
            href="#services"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            onClick={() => goToSection("services")}
          >
            Services
          </a>
          <a
            href="#about"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            onClick={() => goToSection("about")}
          >
            About
          </a>
          <a
            href="/blog"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </a>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <a
              href="/book-demo"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-3 rounded-md text-base font-medium text-center transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book Demo
            </a>
            <a
              href="/try-demo"
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 rounded-md text-base font-medium text-center transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Try Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
