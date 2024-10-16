import React from "react";
import { Field, ErrorMessage } from "formik";
import {FaChevronDown} from 'react-icons/fa'
const SelectField = ({ name, options, handleSelectChange }) => (
  <div className="relative">
    <Field
      as="select"
      name={name}
      onChange={handleSelectChange}
      className="appearance-none w-full bg-gray-50 border border-gray-300 text-gray-900 p-[0.7rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 ease-in-out pr-8 "
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Field>
    <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500 font-extralight" />
    <ErrorMessage
      component="div"
      name={name}
      className="text-red-500 text-sm mt-1 pl-2"
    />
  </div>
);

export default SelectField;
