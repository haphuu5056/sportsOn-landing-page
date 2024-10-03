"use client";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { faqs } from "..";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-7xl">
        {/* FAQ Title */}
        <div className="text-center mb-10">
          <h2 className="text-center text-4xl font-semibold text-secondary uppercase mb-4">
            Got Questions? We’ve Got Answers!
          </h2>
          <p className="text-center text-lg text-gray-700 ">
            Find the answers to the most frequently asked questions below.
          </p>{" "}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {/* FAQ 1 */}
          {faqs.map((faq, index) => (
            <div key={index} className={`border-b-2 border-gray-200 pb-4`}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-medium text-secondary leading-normal">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <IoIosArrowUp className="text-primary text-6xl" size={30} />
                ) : (
                  <IoIosArrowDown className="text-primary" size={30} />
                )}
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-3 text-lg">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
