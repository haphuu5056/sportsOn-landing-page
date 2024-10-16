"use client";
import React from "react";
import { Field, ErrorMessage } from "formik";
import dynamic from "next/dynamic";

const FaEye = dynamic(() => import("react-icons/fa").then((mod) => mod.FaEye));
const FaEyeSlash = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaEyeSlash)
);
const FaChevronDown = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaChevronDown)
);

const InputField = React.memo(
  ({
    name,
    type = "text",
    as = "input",
    options,
    showPassword,
    togglePasswordVisibility,
    placeholder,
    className = "",
  }) => (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Field
          as={as}
          name={name}
          type={type}
          className={`appearance-none w-full bg-gray-50 border border-gray-300 text-gray-900 p-[0.7rem] rounded-lg focus:outline-none ${
            as === "select" ? "pr-8" : ""
          } focus:ring-2 focus:ring-primary transition duration-300 ease-in-out`}
          placeholder={
            name === "dateOfBirth" ? "Date of Birth (MM/DD/YYYY)" : placeholder
          }
        >
          {options?.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Field>
        {["password", "confirmPassword"].includes(name) && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
        {as === "select" && (
          <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500 font-extralight" />
        )}
      </div>
      <ErrorMessage
        component="div"
        name={name}
        className="text-red-500 text-sm mt-1 pl-2"
      />
    </div>
  )
);

export default InputField;
