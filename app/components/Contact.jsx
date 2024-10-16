"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import logo from "../images/Footer-logo.png";
import { navLinks } from "..";
import Notification from "./common/Notification "; // Import your notification component

const Contact = () => {
  const form = useRef();
  const [notification, setNotification] = useState({ message: "", type: "" });

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
          setNotification({
            message: "Email successfully sent!",
            type: "success",
          });
          form.current.reset(); // Reset the form
        },
        (error) => {
          console.log("FAILED...", error.text);
          setNotification({
            message: "Failed to send email, please try again.",
            type: "error",
          });
        }
      );

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);
  };

  return (
    <section className="bg-secondary py-20 text-white" id="contact">
      <div className=" container mx-auto grid px-4 grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="col-span-1 flex flex-col items-start">
          <Image src={logo} alt="kick Court Logo" width={180} height={50} />
          <p className="mt-5 text-left max-w-sm 2xl:text-xl">
            KICKCOURT simplifies booking sports venues like football pitches and
            tennis courts, making reservations easy and efficient.
          </p>
        </div>

        {/* Links - About & Company */}
        <div className="col-span-1 flex lg:justify-center justify-start">
          <div>
            <h3 className="font-semibold text-gray-100 text-xl 2xl:text-2xl mb-4 underline">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((nav, index) => (
                <li key={index}>
                  <a
                    href={`${nav.href}`}
                    className="hover:underline cursor-pointer"
                  >
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-span-1 md:col-span-2 relative">
          <form ref={form} onSubmit={sendEmail} className="space-y-4 relative">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 bg-[#ffffff]  rounded-lg text-black outline-none"
            />
            <textarea
              placeholder="Write your message"
              name="message"
              className="w-full px-4 py-3 bg-[#ffffff] rounded-lg text-black h-32 resize-none outline-none"
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

      {/* Notification */}
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: "", type: "" })}
      />
    </section>
  );
};

export default Contact;
