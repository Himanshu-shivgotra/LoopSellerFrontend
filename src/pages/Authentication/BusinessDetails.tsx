import React, { useState } from "react";

const BusinessDetails: React.FC<{
  data: any;
  onChange: (data: any) => void;
  onNext: () => void;
  onPrevious: () => void;
}> = ({ data, onChange, onNext, onPrevious }) => {
  const [formErrors, setFormErrors] = useState<any>({});

  // GST validation regex
  const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value }); // Update the parent component's state
  };

  // Validate the form
  const validateForm = () => {
    const errors: any = {};
    let isValid = true;

    // Business Name Validation
    if (!data.businessName || data.businessName.trim() === "") {
      errors.businessName = "Business Name is required.";
      isValid = false;
    }

    // Business Type Validation
    if (!data.businessType || data.businessType === "") {
      errors.businessType = "Please select a valid business type.";
      isValid = false;
    }

    // Business Phone Validation
    if (!data.businessPhone || !/^\d{10}$/.test(data.businessPhone)) {
      errors.businessPhone = "Please enter a valid 10-digit phone number.";
      isValid = false;
    }

    // Business Email Validation
    if (!data.businessEmail || !/\S+@\S+\.\S+/.test(data.businessEmail)) {
      errors.businessEmail = "Please enter a valid email address.";
      isValid = false;
    }

    // GST Number Validation
    if (!data.gstNumber || data.gstNumber.trim() === "") {
      errors.gstNumber = "GST Number is required.";
      isValid = false;
    } else if (!gstRegex.test(data.gstNumber)) {
      errors.gstNumber = "Invalid GST Number.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // Handle the Next button click
  const handleNext = () => {
    if (validateForm()) {
      onNext(); // Proceed to the next step
    }
  };

  return (
    <div className="rounded-sm flex items-center justify-center w-full">
      <div className="w-full mx-auto max-w-180 shadow-default bg-white dark:border-strokedark h-full dark:bg-boxdark">
        <div className="w-full border-stroke dark:border-strokedark xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <h2 className="mb-9 text-2xl font-bold text-orange-500 dark:text-white sm:text-title-xl2">
              Sign Up to Loop
            </h2>

            <form>
              <span className="mb-1.5 block font-medium">Seller Business Details</span>
              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-12 lg:col-span-3">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Business Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="businessName"
                      value={data.businessName || ""}
                      onChange={handleInputChange}
                      placeholder="Enter your Business name"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                    />
                    {formErrors.businessName && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.businessName}</p>
                    )}
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Business Type
                  </label>
                  <div className="relative">
                    <select
                      name="businessType"
                      value={data.businessType || ""}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                    >
                      <option value="" disabled>
                        Select Business Type
                      </option>
                      <option value="Retailer">Retailer</option>
                      <option value="Wholesaler">Wholesaler</option>
                      <option value="Manufacturer">Manufacturer</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Service Provider">Service Provider</option>
                      <option value="Other">Other</option>
                    </select>
                    {formErrors.businessType && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.businessType}</p>
                    )}
                  </div>
                </div>
              </div>


              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="col-span-12 lg:col-span-3">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Business Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="businessPhone"
                      value={data.businessPhone || ""}
                      onChange={handleInputChange}
                      placeholder="Enter your Business Phone Number"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                    />
                    {formErrors.businessPhone && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.businessPhone}</p>
                    )}
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Business Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="businessEmail"
                      value={data.businessEmail || ""}
                      onChange={handleInputChange}
                      placeholder="Business Email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                    />
                    {formErrors.businessEmail && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.businessEmail}</p>
                    )}
                  </div>
                </div>
              </div>


              {/* GST Number */}
              <div className="mt-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Company GST Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="gstNumber"
                    value={data.gstNumber || ""}
                    onChange={handleInputChange}
                    placeholder="Enter your GST Number"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                  />
                  {formErrors.gstNumber && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.gstNumber}</p>
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="mt-6 flex justify-between">
                <button
                  type="button"
                  className="w-24 cursor-pointer rounded-lg border border-gray bg-gray p-4 text-dark transition hover:bg-opacity-90"
                  onClick={onPrevious}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="w-24 cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
