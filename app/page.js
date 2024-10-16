import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import GetTheApp from "./components/GetTheApp";
import Faq from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import ProviderRequirements from "./components/ProviderRequirements";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <ProviderRequirements />
      <Testimonials />
      <GetTheApp />
      <Faq />
      <Contact />
    </>
  );
}
