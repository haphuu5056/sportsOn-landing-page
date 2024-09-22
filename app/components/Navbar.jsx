"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../images/Logo.png";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu

  // Function to handle setting the active link
  const handleSetActive = (section) => {
    setActive(section);
    setMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <nav className=" fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={logo} alt="Logo" width={150} height={60} />
            </Link>
          </div>

          {/* Navigation Links for larger screens */}
          <div className="hidden md:flex space-x-6 items-center">
            {["Home", "Services", "Features", "Contact"].map((section) => (
              <Link
                key={section}
                href={`#${section.toLowerCase()}`}
                className={`${
                  active === section ? "text-primary" : "text-[#525252]"
                } px-3 py-2 text-base font-semibold hover:text-primary`}
                onClick={() => handleSetActive(section)}
              >
                {section}
              </Link>
            ))}
          </div>
          <Link
            href="/Sporton-app"
            className="hidden md:block bg-primary text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-primary-dark"
          >
            Get the App
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full shadow-md">
          <div className="px-6 py-4 space-y-4">
            {["Home", "Services", "Features", "Contact"].map((section) => (
              <Link
                key={section}
                href={`#${section.toLowerCase()}`}
                className={`block text-lg ${
                  active === section ? "text-primary" : "text-[#525252]"
                }`}
                onClick={() => handleSetActive(section)}
              >
                {section}
              </Link>
            ))}

            <Link
              href="/Sporton-app"
              className="block bg-primary text-white text-center px-4 py-2 rounded-md text-lg font-medium hover:bg-primary-dark"
              onClick={() => setMenuOpen(false)}
            >
              Get the App
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
