import { CiClock1, CiStar } from "react-icons/ci";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";

const Services = () => {
  return (
    <section id="services" className="py-20 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row  lg:gap-12 items-start">
        {/* Left Side: Title and Description */}
        <div className="lg:w-1/3 mb-12 lg:mb-0 lg:pt-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 uppercase mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Customers can search for futsal Venues near them with a seamless and
            user-friendly interface. Explore different options, check
            availability, and book time slots in just a few clicks.
          </p>
        </div>

        {/* Right Side: Service Cards */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="bg-lightGreenBackground shadow-lg rounded-lg p-6 flex flex-col items-start gap-5">
            <div className="w-14 h-14 bg-[#56D9B9] rounded-xl flex justify-center items-center text-center ">
              <CiStar className="text-3xl text-white " />
            </div>
            <div className="">
              <h3 className="text-xl font-bold text-secondary mb-3">
                Compare Venues Based on Reviews and Ratings
              </h3>
              <p className="text-gray-600 ">
                Whether you have a team of 2 or 200, our shared inboxes make
                keeping everyone in the loop simple and easy.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-lightGreenBackground shadow-lg rounded-lg p-6 flex flex-col items-start gap-5">
            <div className="w-14 h-14 bg-[#56D9B9] rounded-xl flex justify-center items-center text-center ">
              <MdOutlineSubscriptions className="text-3xl text-white " />
            </div>
            <div className="">
              <h3 className="text-xl font-bold text-secondary mb-3">
                Subscription-Based Platform{" "}
              </h3>
              <p className="text-gray-600 ">
                Our flexible subscription plans allow you to choose between
                monthly and yearly options. Providers only pay a subscription
                fee to list and manage their venues.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-lightGreenBackground shadow-lg rounded-lg p-6 flex flex-col items-start gap-5">
            <div className="w-14 h-14 bg-[#56D9B9] rounded-xl flex justify-center items-center text-center ">
              <CiClock1 className="text-3xl text-white " />
            </div>
            <div className="">
              <h3 className="text-xl font-bold text-secondary mb-3">
                Real-Time Booking Management{" "}
              </h3>
              <p className="text-gray-600 ">
                Keep track of all bookings in real-time. You’ll get instant
                notifications when a booking is made, canceled, or modified.
              </p>
            </div>
          </div>

          <div className="bg-lightGreenBackground shadow-lg rounded-lg p-6 flex flex-col items-start gap-5">
            <div className="w-14 h-14 bg-[#56D9B9] rounded-xl flex justify-center items-center text-center ">
              <RiCustomerServiceLine className="text-3xl text-white " />
            </div>
            <div className="">
              <h3 className="text-xl font-bold text-secondary mb-3">
                Customer Relationship Management{" "}
              </h3>
              <p className="text-gray-600 ">
                Build better relationships with your customers by accessing
                their feedback, preferences, and booking history. Provide
                tailored offers and special discounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
