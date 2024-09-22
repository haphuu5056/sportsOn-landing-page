import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import GetTheApp from "./components/GetTheApp";
import Faq from "./components/FAQ";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <GetTheApp />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
