import Image from "next/image";
import customer1 from "../images/cus1.png";
import customer2 from "../images/cus2.png";
import { FaStar } from "react-icons/fa"; // Import star icon from react-icons

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marwa Ali",
      role: "Sports Enthusiast",
      feedback:
        "SPORTSON made booking a football pitch so simple! The process was smooth, and I had my reservation confirmed in minutes. Highly recommend for all sports lovers!",
      image: customer1,
      rating: 5, // 5 stars
    },
    {
      name: "Mohamed Ahmed",
      role: "Tennis Player",
      feedback:
        "Finding and booking a tennis court through SPORTSON was a breeze. The convenience and speed of the platform really stand out. Will definitely use it again!",
      image: customer2,
      rating: 4, // 4 stars
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto pt-16 flex flex-col items-center text-center mb-12">
          <h2 className="text-[28px] font-medium uppercase text-primary mb-3">
            Testimonials
          </h2>
          <p className="text-[45px] text-secondary font-bold uppercase">
            Hear From Our SPORTSON App Users{" "}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* First Testimonial */}
          <div className="p-6 rounded-lg flex-1">
            <p className="text-xl leading-9 text-gray-900 mb-4">
              "{testimonials[0].feedback}"
            </p>

            <div className="flex items-center">
              <Image
                src={testimonials[0].image}
                alt={testimonials[0].name}
                width={58}
                height={58}
                className="rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonials[0].name}
                </h3>
                <p className="text-primary mb-1">{testimonials[0].role}</p>
                <div className="flex items-center">
                  {Array(testimonials[0].rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 mr-1" />
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Second Testimonial with offset */}
          <div className="p-6 rounded-lg flex-1 md:mt-16">
            <p className="text-xl leading-9 text-gray-900 mb-4">
              "{testimonials[1].feedback}"
            </p>

            <div className="flex items-center">
              <Image
                src={testimonials[1].image}
                alt={testimonials[1].name}
                width={58}
                height={58}
                className="rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonials[1].name}
                </h3>
                <p className="text-primary mb-1">{testimonials[1].role}</p>
                <div className="flex items-center">
                  {Array(testimonials[0].rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 mr-1" />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
