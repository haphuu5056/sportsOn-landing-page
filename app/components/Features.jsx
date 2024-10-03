"use client";
import Image from "next/image";
import img from "../images/mobile.png"; 
import { features } from "..";

const Features = () => {
  // Split the features into two halves for left and right
  const leftFeatures = features.slice(0, Math.ceil(features.length / 2));
  const rightFeatures = features.slice(Math.ceil(features.length / 2));

  return (
    <section className="container mx-auto px-4 py-20" id="features">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4 uppercase">
          Explore Sportson Features
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Enhance your sports field rental experience with a variety of features
          tailored for both users and venue providers.
        </p>
      </div>

      {/* Features Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Features (for large screens) */}
        <div className="hidden lg:flex flex-col items-end space-y-2 w-full lg:w-1/2 mb-8 lg:mb-0">
          {leftFeatures.map((feature, index) => (
            <div
              key={index}
              className="py-4 px-4 transition-transform duration-200 flex flex-col items-end text-right"
            >
              <h3 className="text-2xl font-medium text-primary mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-base">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Center Mobile Image (hidden on small screens) */}
        <div className="hidden lg:flex justify-center mb-8 lg:mb-0">
          <Image
            src={img}
            alt="Mobile Booking App"
            width={300}
            height={400}
            className="z-10"
          />
        </div>

        {/* Right Features (for large screens) */}
        <div className="hidden lg:flex flex-col items-start space-y-2 w-full lg:w-1/2 mb-8 lg:mb-0">
          {rightFeatures.map((feature, index) => (
            <div
              key={index}
              className="py-4 px-4 transition-transform duration-200 flex flex-col items-start text-left"
            >
              <h3 className="text-2xl font-medium text-primary mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Features Layout for small screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:hidden px-6">
        {[...leftFeatures, ...rightFeatures].map((feature, index) => (
          <div
            key={index}
            className="py-4 px-4 transition-transform duration-200 flex flex-col justify-center items-center text-center bg-gray-50 rounded-md shadow-md"
          >
            <h3 className="text-xl font-medium text-primary mb-3 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-base text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
