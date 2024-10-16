"use client";
import axios from "axios";
import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import { RegistrationSchema } from "../utils/validationSchema";
import dynamic from "next/dynamic";
import VerifyOTP from "./VerifyOTP";
import LoadingSpinner from "../Loading";
import SelectField from "./forms/SelectField";

const InputField = dynamic(() => import("../components/forms/InputField"), {
  ssr: false,
});

const initialValues = {
  fullName: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  email: "",
  gender: "",
  dateOfBirth: "",
  city: "",
  regionId: "",
};

const ProviderRegistration = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await axios.get(
          "https://spondias.com/sporton/api/v1/region/getAll"
        );
        setRegions(response.data); // Assuming the data is an array
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    };
    fetchRegions();
  }, []);
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          "https://spondias.com/sporton/api/v1/cities"
        );
        setCities(response.data); // Assuming the data is an array
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
  }, []);

  const handleRegionChange = async (regionId, setFieldValue) => {
    try {
      const response = await axios.get(
        `https://spondias.com/sporton/api/v1/cities/${regionId}`
      );
      setCities(response.data); // Assuming the data is an array
      setFieldValue("regionId", regionId); // Update Formik state with selected region
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const handleSubmit = async (values, { setFieldError }) => {
    setLoading(true); // Start loading
    try {
      const response = await axios.post(
        "https://spondias.com/sporton/api/v1/authenticate/signUp",
        values, // form data
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MTI1MTgzNjgiLCJpYXQiOjE3MjIwNzUzODksImV4cCI6MjAzNzQzNTM4OX0.nmRVmFO1LUl9g2aWfsZIaCWgoPoPIklTuwVcWftBC-4`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Registration Successful:", response.data);
      setIsRegistered(true);
      setPhoneNumber(values.phoneNumber);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong!";
      console.error("Error during registration:", errorMessage);
      if (error.response?.data?.message.includes("email")) {
        setFieldError("email", "This User with this email already exists");
      } else if (error.response?.data?.message.includes("number")) {
        setFieldError(
          "phoneNumber",
          "This User with this number already exists"
        );
      }
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="">
      {isRegistered ? (
        <VerifyOTP phoneNumber={phoneNumber} />
      ) : loading ? (
        <LoadingSpinner />
      ) : (
        <div className="max-w-2xl mx-auto py-6 px-8 mt-4 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-semibold mb-3 text-primary">
            Register as a Provider
          </h1>
          <p className="mb-10 text-gray-500">
            Join our network of providers and unlock exclusive features. <br />
            Complete the form below to get started!
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={RegistrationSchema}
            onSubmit={handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}
              >
            {({ setFieldValue }) => (
              <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField name="fullName" placeholder="Full Name" />
                <InputField name="phoneNumber" placeholder="Phone Number" />
                <InputField
                  name="email"
                  placeholder="Email"
                  className="col-span-2"
                />
                <InputField
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  showPassword={showPassword}
                  togglePasswordVisibility={togglePasswordVisibility}
                />
                <InputField
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  showPassword={showConfirmPassword}
                  togglePasswordVisibility={toggleConfirmPasswordVisibility}
                  placeholder="Confirm Password"
                />
                <InputField
                  name="dateOfBirth"
                  type="date"
                  placeholder="Date of Birth"
                  className="text-gray-400"
                />
                <InputField
                  name="gender"
                  as="select"
                  options={[
                    { value: "", label: "Select Gender" },
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                  ]}
                />
                <SelectField
                  name="regionId"
                  options={
                    regions.length === 0
                      ? [{ value: "", label: "--Select a Regions--" }]
                      : regions.map((region) => ({
                          value: region.regionId,
                          label: region.name,
                        }))
                  }
                  handleSelectChange={(e) => {
                    const selectedRegionId = e.target.value;
                    handleRegionChange(selectedRegionId, setFieldValue);
                  }}
                />
                <InputField
                  name="city"
                  as="select"
                  options={
                    cities.length === 0
                      ? [{ value: "", label: "--Select a City--" }]
                      : cities.map((city) => ({
                          value: city.id,
                          label: city.name,
                        }))
                  }
                />
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-dark text-white p-3 rounded-lg w-full text-lg transition hover:shadow-lg"
                    disabled={loading}
                  >
                    Sign Up
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default ProviderRegistration;
