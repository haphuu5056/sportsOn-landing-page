import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { testimonials } from "..";

const Testimonials = () => {
  

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto  flex flex-col items-center text-center mb-12">
          <h2 className="text-[28px] font-medium uppercase text-primary mb-3">
            Testimonials
          </h2>
          <p className="text-[45px] text-secondary font-bold uppercase">
            Hear From Our KICK C<span className="text-primary ">O</span>URT App
            Users{" "}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* First Testimonial */}
          <div className="p-6 rounded-lg flex-1">
            <p className="text-lg leading-8 text-gray-900 mb-4">
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
            <p className="text-lg leading-8 text-gray-900 mb-4">
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
