import Image from "next/image";
import logo from "../images/footer-logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 text-white" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <Image src={logo} alt="Sportson Logo" width={150} height={50} />
          <p className="mt-5 text-center md:text-left max-w-sm">
            SPORTSON simplifies booking sports venues like football pitches and
            tennis courts, making reservations easy and efficient.
          </p>
          <div className="flex space-x-6 mt-4">
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
        <div className="flex justify-around">
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Menu
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Why SPORTSON
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Partner with Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-[#F6F7F9] rounded-lg text-black"
            />
            <textarea
              placeholder="Write your message"
              className="w-full px-4 py-3 bg-[#F6F7F9] rounded-lg text-black h-24"
            ></textarea>
            <button
              type="submit"
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
