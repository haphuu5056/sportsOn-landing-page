import React, { useState } from "react";
import axios from "axios"; // Ensure axios is imported
import { CiLock } from "react-icons/ci";
import SuccessMessage from "./SuccessMessage";

const VerifyOTP = ({ phoneNumber }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join(""); // Combine the OTP digits

    try {
      const response = await axios.post(
        "https://spondias.com/sporton/api/v1/authenticate/verifyOTP",
        {
          phoneNumber,
          otp: otpValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("OTP Verified:", response.data);
      setIsVerified(true);
      setError(""); // Clear any previous error message
    } catch (error) {
      console.error(
        "Error during OTP verification:",
        error.response?.data || error.message
      );
      setError("Incorrect OTP. Please try again."); // Set error message
    }
  };

  return (
    <div className="max-w-xl mx-auto py-24 ">
      {isVerified ? (
        <SuccessMessage />
      ) : (
        <>
          <div className="flex flex-col justify-center items-center mb-8">
            <div className="w-14 h-14 bg-lightGreenBackground flex justify-center items-center text-center rounded-full mb-2">
              <CiLock className="text-3xl" />
            </div>
            <h2 className="text-4xl font-semibold text-center text-primary mb-2">
              Verify Your Phone Number
            </h2>
            <p className="text-center text-gray-600 ">
              Please enter the 6-digit code sent to your phone number{" "}
              <span className="italic text-sm">
                {phoneNumber.substring(0, 3)}*****{phoneNumber.substring(8, 10)}
              </span>
              .
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
            <div className="flex justify-center mb-5">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  className="m-2 text-center h-12 w-12 rounded border border-lightGray focus:outline-none focus:ring-2 focus:ring-primary text-2xl"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>
            <button
              type="submit"
              className=" bg-primary hover:bg-primary-dark text-white py-2 px-8 text-center rounded-lg shadow-md transition cursor-pointer text-2xl mb-3"
            >
              Verify
            </button>
          </form>
          {error && <p className="text-red-500 text-center mb-6">{error}</p>}
          <p className="text-center text-gray-500">
            Did not receive the code?{" "}
            <button
              //   onClick={handleResendCode}
              className="text-primary underline font-semibold"
              disabled={loading}
            >
              Resend Code
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default VerifyOTP;
