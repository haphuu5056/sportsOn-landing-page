"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import logo from "../images/footer-logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { navLinks } from "..";

const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "sportsOn", // Service ID
        "contact-form", // Template ID
        form.current, // Form reference
        "3fdRU0HZZeApUndz6" // Public key (user ID)
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Email successfully sent!"); 
          form.current.reset(); 
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send email, please try again.");
        }
      );
  };

  return (
    <footer className="bg-secondary py-16 text-white" id="contact">
      <div className="max-w-6.5xl mx-auto grid px-4 grid-cols-1 md:grid-cols-4 gap-8 2xl:max-w-7xl">
        {/* Logo and Description */}
        <div className="col-span-1 flex flex-col items-start">
          <Image src={logo} alt="Sportson Logo" width={150} height={50} />
          <p className="mt-5 text-left max-w-sm mb-4">
            SPORTSON simplifies booking sports venues like football pitches and
            tennis courts, making reservations easy and efficient.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-light-green"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-light-green"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-light-green"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Links - About & Company */}
        <div className="col-span-1 flex lg:justify-center justify-start">
          <div>
            <h3 className="font-semibold text-gray-300 text-xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((nav, index) => (
                <li key={index}>
                  <a href={nav.url} className="hover:underline cursor-pointer">
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-span-1 md:col-span-2">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-[#F6F7F9] rounded-lg text-black"
            />
            <textarea
              placeholder="Write your message"
              name="message"
              className="w-full px-4 py-3 bg-[#F6F7F9] rounded-lg text-black h-24"
            ></textarea>
            <button
              type="submit"
              name="message"
              className="bg-primary text-white px-6 py-3 rounded-lg w-full font-bold"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
