"use client";
import { requirements } from "..";

const ProviderRequirements = () => {
  return (
    <section className="py-16 max-w-6.5xl mx-auto px-6 lg:px-4 2xl:max-w-7xl">
      {/* Section Title */}
      <div className=" flex flex-col justify-center items-center text-center lg:items-start mb-10 ">
        <span className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-secondary transition mb-4">
          Requirements
        </span>
        <h2 className="text-5xl font-semibold  text-secondary mb-4">
          For Stadium Providers
        </h2>
        <p className="text-lightGray max-w-xl text-center lg:text-left">
          Join our platform and make your venue accessible to a wide range of
          customers. Here’s what you’ll need:
        </p>
      </div>

      {/* Requirements List in Responsive Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {requirements.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-center flex-col py-4 px-6 bg-gray-50 shadow-lg rounded-lg transition transform hover:scale-105"
          >
            <item.icon className="mb-3 w-8 h-8 text-primary" />
            <div>
              <h3 className="text-lg font-semibold text-secondary">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base font-medium mt-2">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Redesigned Call to Action */}
      <div className="mt-12 p-8 text-center bg-gradient-to-l from-primary to-secondary text-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold">
          Interested in partnering with us?
        </h3>
        <p className="mt-2 text-lg">
          Contact us to learn more about how we can help you manage and promote
          your stadium efficiently.
        </p>
        <a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 bg-white text-primary font-medium rounded hover:bg-secondary hover:text-white transition duration-500"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default ProviderRequirements;
