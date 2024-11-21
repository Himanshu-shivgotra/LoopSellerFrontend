/* eslint-disable react/prop-types */
import { useState } from "react";

const BusinessDetailsForm = ({ data = {}, errors = {}, onNext }) => {
  const [formData, setFormData] = useState({
    businessName: data.businessName || "",
    businessType: data.businessType || "",
    phoneNumber: data.phoneNumber || "",
    emailAddress: data.emailAddress || "",
    businessAddress: data.businessAddress || "",
    gstNumber: data.gstNumber || "",
    isVerified: data.isVerified || false,
  });

  const [formErrors, setFormErrors] = useState(errors);

  const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const formErrors = {};
    let isValid = true;

    // Business Name Validation
    if (!formData.businessName.trim()) {
      formErrors.businessName = "Business Name is required.";
      isValid = false;
    }

    // Business Type Validation
    if (
      !formData.businessType ||
      formData.businessType === "Select Business Type"
    ) {
      formErrors.businessType = "Please select a business type.";
      isValid = false;
    }

    // Phone Number Validation
    if (
      !formData.phoneNumber.trim() ||
      !/^\d{10}$/.test(formData.phoneNumber)
    ) {
      formErrors.phoneNumber = "Please enter a valid 10-digit phone number.";
      isValid = false;
    }

    // Email Address Validation
    if (
      !formData.emailAddress.trim() ||
      !/\S+@\S+\.\S+/.test(formData.emailAddress)
    ) {
      formErrors.emailAddress = "Please enter a valid email address.";
      isValid = false;
    }

    // GST Number Validation 
    if (!formData.gstNumber.trim()) {
      formErrors.gstNumber = "GST Number is required.";
      isValid = false;
    } else if (!gstRegex.test(formData.gstNumber)) {
      formErrors.gstNumber = "Invalid GST Number.";
      isValid = false;
    }

    // Verification Checkbox
    if (!formData.isVerified) {
      formErrors.isVerified = "Please verify the details.";
      isValid = false;
    }

    setFormErrors(formErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext(formData); // Pass the form data to the parent component
      console.log(formData)
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Add Your Business Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Business Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="businessName"
          >
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Enter your business name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {formErrors.businessName && (
            <p className="text-red-500 text-sm">{formErrors.businessName}</p>
          )}
        </div>

        {/* Business Type */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="businessType"
          >
            Business Type
          </label>
          <select
            id="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option>Select Business Type</option>
            <option>Retailer</option>
            <option>Wholesaler</option>
            <option>Manufacturer</option>
            <option>Distributor</option>
            <option>Service Provider</option>
            <option>Other</option>
          </select>
          {formErrors.businessType && (
            <p className="text-red-500 text-sm">{formErrors.businessType}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {formErrors.phoneNumber && (
            <p className="text-red-500 text-sm">{formErrors.phoneNumber}</p>
          )}
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="emailAddress"
          >
            Email Address
          </label>
          <input
            type="email"
            id="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {formErrors.emailAddress && (
            <p className="text-red-500 text-sm">{formErrors.emailAddress}</p>
          )}
        </div>

        {/* GST Number */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="gstNumber"
          >
            GST Number
          </label>
          <input
            type="text"
            id="gstNumber"
            value={formData.gstNumber}
            onChange={handleChange}
            placeholder="Enter GST number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {formErrors.gstNumber && (
            <p className="text-red-500 text-sm">{formErrors.gstNumber}</p>
          )}
        </div>

        {/* Verification Checkbox */}
        <div className="col-span-1 md:col-span-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              id="isVerified"
              checked={formData.isVerified}
              onChange={handleChange}
              className="form-checkbox text-orange-500"
            />
            <span className="ml-2 text-gray-700">
              I verify that the above details are correct.
            </span>
          </label>
          {formErrors.isVerified && (
            <p className="text-red-500 text-sm">{formErrors.isVerified}</p>
          )}
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-4">
        <button
          type="button"
          onClick={handleNext}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Validate & Proceed
        </button>
      </div>
    </div>
  );
};

export default BusinessDetailsForm;
