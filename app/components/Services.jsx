import { services } from "..";
import { RiServiceLine } from "react-icons/ri";

const Services = () => {
  return (
    <section id="services" className="py-16">
      <div className="max-w-6.5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start lg:flex-row lg:gap-12 2xl:gap-16  2xl:max-w-7xl">
        {/* Left Side: Title and Description */}
        <div className="lg:w-1/3 max-w-4xl mx-auto px-4 flex flex-col justify-center items-center lg:items-start mb-12 lg:mb-0 text-center lg:text-left">
          <div className="flex  justify-center  items-center text-center w-14 h-14 bg-lightGreenBackground rounded-full mb-4">
            <div className="w-10 h-10 bg-[#56D9B9] rounded-full flex justify-center items-center">
              <RiServiceLine className="text-2xl text-white" />
            </div>
          </div>

          <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 uppercase mb-5">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Customers can search for futsal Venues near them with a seamless and
            user-friendly interface. Explore different options, check
            availability, and book time slots in just a few clicks.
          </p>
        </div>

        {/* Right Side: Service Cards */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Services */}
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-lightGreenBackground shadow-lg rounded-lg p-6 flex flex-col items-start gap-4"
            >
              <div className="w-10 h-10 bg-[#56D9B9] rounded-xl flex justify-center items-center">
                <service.icon className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
