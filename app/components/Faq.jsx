"use client";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Title */}
        <div className="text-center mb-10">
          <h2 className="text-center text-4xl font-semibold text-primary mb-4">
            Got Questions? We’ve Got Answers!
          </h2>
          <p className="text-center text-lg text-gray-700 ">
            Find the answers to the most frequently asked questions below.
          </p>{" "}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {/* FAQ 1 */}
          <div className="border-b-2 border-gray-200 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(0)}
            >
              <h3 className="text-xl font-medium text-secondary leading-normal">
                Is SPORTSON safe to use?
              </h3>

              {openIndex === 0 ? (
                <IoIosArrowUp className="text-primary text-6xl" size={30} />
              ) : (
                <IoIosArrowDown className="text-primary" size={30} />
              )}
            </div>
            {openIndex === 0 && (
              <p className="text-gray-600 mt-2 text-lg">
                Most reputable fintech apps implement robust security measures,
                including encryption, two-factor authentication (2FA), and
                regular security audits to protect user data and transactions.
              </p>
            )}
          </div>

          {/* FAQ 2 */}
          <div className="border-b-2 border-gray-200 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(1)}
            >
              <h3 className="text-xl font-normal text-secondary leading-normal">
                How do I sign up for Remit Exchange?
              </h3>
              {openIndex === 1 ? (
                <IoIosArrowUp className="text-primary text-6xl" size={30} />
              ) : (
                <IoIosArrowDown className="text-primary" size={30} />
              )}
            </div>
            {openIndex === 1 && (
              <p className="text-gray-600 mt-2 text-lg">
                You can sign up by downloading the app, providing your details,
                and verifying your account via email or phone number.
              </p>
            )}
          </div>

          {/* FAQ 3 */}
          <div className="border-b-2 border-gray-200 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(2)}
            >
              <h3 className="text-xl font-normal text-secondary leading-normal">
                What should I do if I forget my password?
              </h3>
              {openIndex === 2 ? (
                <IoIosArrowUp className="text-primary text-6xl" size={30} />
              ) : (
                <IoIosArrowDown className="text-primary" size={30} />
              )}
            </div>
            {openIndex === 2 && (
              <p className="text-gray-600 mt-2 text-lg">
                Use the "Forgot Password" feature on the login page, and follow
                the steps to reset your password via email.
              </p>
            )}
          </div>

          {/* FAQ 4 */}
          <div className="border-b-2 border-gray-200 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(3)}
            >
              <h3 className="text-xl font-normal text-secondary leading-normal">
                How do I sign up for Remit Exchange?
              </h3>
              {openIndex === 3 ? (
                <IoIosArrowUp className="text-primary text-6xl" size={30} />
              ) : (
                <IoIosArrowDown className="text-primary" size={30} />
              )}
            </div>
            {openIndex === 3 && (
              <p className="text-gray-600 mt-2 text-lg">
                Follow the sign-up process through the app, complete all
                necessary verifications, and you're ready to go.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
