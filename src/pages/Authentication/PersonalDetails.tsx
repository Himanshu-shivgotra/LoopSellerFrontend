import React, { useState } from "react";

const PersonalDetails: React.FC<{
  data: any;
  onChange: (data: any) => void;
  onNext: () => void;
}> = ({ data, onChange, onNext }) => {
  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });

    // Clear the error for the field if it was corrected
    setErrors((prev: any) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let formErrors: any = {};
    if (!data.fullName) formErrors.fullName = "Full Name is required.";
    if (!data.email) {
      formErrors.email = "Email is required.";
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(data.email)) {
      formErrors.email = "Invalid email format.";
    }
    if (!data.password) {
      formErrors.password = "Password is required.";
    } else if (data.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
    }
    if (!data.phoneNumber) {
      formErrors.phoneNumber = "Phone Number is required.";
    } else if (!/^\d{10}$/.test(data.phoneNumber)) {
      formErrors.phoneNumber = "Phone Number must be 10 digits.";
    }
    if (!data.address) formErrors.address = "Address is required.";

    setErrors(formErrors);

    // Return true if there are no errors
    return Object.keys(formErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <div className="rounded-sm  flex items-center justify-center w-full">
      <div className="w-full mx-auto max-w-180 shadow-default bg-white dark:border-strokedark h-full dark:bg-boxdark">
        <div className="w-full border-stroke dark:border-strokedark xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <h2 className="mb-9 text-2xl font-bold text-orange-500 dark:text-white sm:text-title-xl2">
              Sign Up to Loop
            </h2>

            <form>
              <span className="mb-1.5 block font-medium">Seller Personal Details</span>

              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-12 lg:col-span-3">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={data.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full rounded-lg border py-4 pl-6 text-black outline-none dark:border-form-strokedark dark:bg-form-input dark:text-white ${errors.fullName ? "border-red-500" : "focus:border-orange-500"
                      }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
                <div className="col-span-12 lg:col-span-3">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={`w-full rounded-lg border py-4 pl-6 text-black outline-none dark:border-form-strokedark dark:bg-form-input dark:text-white ${errors.email ? "border-red-500" : "focus:border-orange-500"
                      }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="mb-4 col-span-12 lg:col-span-3">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className={`w-full rounded-lg border py-4 pl-6 text-black outline-none dark:border-form-strokedark dark:bg-form-input dark:text-white ${errors.password ? "border-red-500" : "focus:border-orange-500"
                      }`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>


                <div className="mb-4 col-span-12 lg:col-span-3">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={data.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    min="0"
                    className={`w-full rounded-lg border py-4 pl-6 text-black outline-none dark:border-form-strokedark dark:bg-form-input dark:text-white ${errors.phoneNumber ? "border-red-500" : "focus:border-orange-500"
                      }`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                  )}
                </div>
              </div>



              {/* Address */}
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Address
                </label>
                <textarea
                  name="address"
                  value={data.address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                  className={`w-full rounded-lg border py-4 pl-6 text-black outline-none dark:border-form-strokedark dark:bg-form-input dark:text-white ${errors.address ? "border-red-500" : "focus:border-orange-500"
                    }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">{errors.address}</p>
                )}
              </div>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="w-full cursor-pointer rounded-lg bg-primary p-4 text-white hover:bg-opacity-90"
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

export default PersonalDetails;
