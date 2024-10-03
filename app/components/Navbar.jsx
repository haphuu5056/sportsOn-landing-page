"use client";
import { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LiaTimesSolid, LiaBarsSolid } from "react-icons/lia";
import logo from "../images/Logo.png";
import ContactDetail from "./ContactDetail";
import { renderMenuLinks, renderSocialLinks } from "../utils/menuHelpers";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false); // Track scroll state

  const handleSetActive = (section) => {
    setActive(section);
    setMenuOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-white ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      {!scrolled && <ContactDetail />}
      {/* Navbar */}
      <nav
        className={`max-w-6.5xl mx-auto px-4 sm:px-6 lg:px-8 ${
          scrolled ? "py-2" : "py-8"
        } transition-all duration-700 ease-out 2xl:max-w-7xl`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={60}
              className="sm:w-[140px] lg:w-[150px] h-auto"
            />
          </Link>
          {/* Navigation Links for Larger Screens */}
          <div className="hidden md:flex space-x-6 items-center">
            {renderMenuLinks(
              active,
              handleSetActive,
              "px-3 py-2 font-medium text-gray-900"
            )}
          </div>
          <Link
            href="/Sporton-app"
            className="hidden md:block bg-primary text-white px-4 py-2 rounded-md lg:text-lg font-medium hover:bg-primary-dark"
          >
            Get the App
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 focus:outline-none z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <LiaTimesSolid
                  size={28}
                  className="text-gray-700 cursor-pointer z-50"
                />
              ) : (
                <LiaBarsSolid size={30} />
              )}
            </button>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black opacity-50 transition-opacity duration-500 ${
              menuOpen ? "opacity-0" : "opacity-50"
            }`}
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed top-0 right-0 h-full bg-white w-64 border-l shadow-md transform transition-transform duration-500 ease-in-out ${
              menuClosing ? "animate-slide-out" : "animate-slide-in"
            }`}
          >
            <div className="px-6 py-4 mt-12 ">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Logo"
                  width={150}
                  height={60}
                  className="mb-10"
                />
              </Link>
              <div className="space-y-6 mb-10">
                {renderMenuLinks(active, handleSetActive, "block text-lg")}
              </div>

              {/* Social Media Icons */}
              <div className=" flex space-x-6 mb-12">
                {renderSocialLinks("text-gray-500 text-2xl hover:text-primary")}
              </div>

              {/* Get the App Button */}
              <Link
                href="/Sporton-app"
                className="block bg-primary text-white text-center px-4 py-2 rounded-md text-lg font-medium hover:bg-primary-dark"
                onClick={() => setMenuOpen(false)}
              >
                Get the App
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
