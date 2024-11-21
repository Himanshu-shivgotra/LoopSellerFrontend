/* eslint-disable react/prop-types */
import { useState } from "react";

const PersonalDetailsForm = ({ data = {}, errors = {}, onNext }) => {
  const [formData, setFormData] = useState({
    fullName: data?.fullName || "",
    email: data?.email || "",
    phoneNumber: data?.phoneNumber || "",
    address: data?.address || "",
  });

  const [formErrors, setFormErrors] = useState(errors);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePersonalDetails = () => {
    const errors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required.";
      isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Valid email is required.";
      isValid = false;
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number must be 10 digits.";
      isValid = false;
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleFormSubmit = () => {
    if (validatePersonalDetails()) {
      onNext(formData); // Pass only the form data, not wrapped in an object
      console.log(formData)
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-orange-500 mb-6">
        Seller Personal Details
      </h2>

      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
        />
        {formErrors.fullName && (
          <p className="text-red-500 text-xs mt-1">{formErrors.fullName}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email address"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
        />
        {formErrors.email && (
          <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
        />
        {formErrors.phoneNumber && (
          <p className="text-red-500 text-xs mt-1">{formErrors.phoneNumber}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Address
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Enter your address"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
        />
        {formErrors.address && (
          <p className="text-red-500 text-xs mt-1">{formErrors.address}</p>
        )}
      </div>

      <button
        type="button"
        onClick={handleFormSubmit}
        className="bg-orange-700 text-white py-2 px-4 rounded hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        Validate & Proceed
      </button>
    </div>
  );
};

export default PersonalDetailsForm;
