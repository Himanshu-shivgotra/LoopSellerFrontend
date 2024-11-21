/* eslint-disable react/prop-types */
import { useState } from "react";

const SellerBankDetails = ({ data = {}, errors = {}, onNext }) => {
  const [formData, setFormData] = useState({
    bankName: data.bankName || "",
    accountNumber: data.accountNumber || "",
    accountType: data.accountType || "",
    ifscCode: data.ifscCode || "",
    accountHolderName: data.accountHolderName || "",
    branchName: data.branchName || "",
    isVerified: data.isVerified || false,
  });

  const [formErrors, setFormErrors] = useState(errors);
  const [ifscDetails, setIfscDetails] = useState(null);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Bank Name Validation
    if (!formData.bankName.trim()) {
      errors.bankName = "Bank Name is required.";
      isValid = false;
    }

    // Account Number Validation
    if (!formData.accountNumber.trim() || !/^\d{8,18}$/.test(formData.accountNumber)) {
      errors.accountNumber = "Please enter a valid account number (8–18 digits).";
      isValid = false;
    }

    // Account Type Validation
    if (!formData.accountType || formData.accountType === "Select Account Type") {
      errors.accountType = "Please select an account type.";
      isValid = false;
    }

    // IFSC Code Validation
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    if (!formData.ifscCode.trim() || !ifscRegex.test(formData.ifscCode)) {
      errors.ifscCode = "Please enter a valid IFSC code.";
      isValid = false;
    }

    // Account Holder Name Validation
    if (!formData.accountHolderName.trim()) {
      errors.accountHolderName = "Account Holder Name is required.";
      isValid = false;
    }

    // Branch Name Validation
    if (!formData.branchName.trim()) {
      errors.branchName = "Branch Name is required.";
      isValid = false;
    }

    // Verification Checkbox
    if (!formData.isVerified) {
      errors.isVerified = "Please verify the details.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const fetchIfscDetails = async () => {
    const { ifscCode } = formData;

    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifscCode)) {
      setFormErrors((prev) => ({
        ...prev,
        ifscCode: "Invalid IFSC code format.",
      }));
      return;
    }

    try {
      const response = await fetch(`https://ifsc.razorpay.com/${ifscCode}`);
      if (response.ok) {
        const data = await response.json();
        setIfscDetails(data);

        // Auto-fill Bank Name and Branch Name
        setFormData((prev) => ({
          ...prev,
          bankName: data.BANK,
          branchName: data.BRANCH,
        }));
        setFormErrors((prev) => ({ ...prev, ifscCode: null })); // Clear IFSC error
      } else {
        setIfscDetails(null);
        setFormErrors((prev) => ({ ...prev, ifscCode: "Invalid IFSC code." }));
      }
    } catch (error) {
      console.error("Error fetching IFSC details:", error);
      setFormErrors((prev) => ({
        ...prev,
        ifscCode: "Unable to verify IFSC code.",
      }));
    }
  };

  const handleNextClick = () => {
    if (validateForm()) {
      onNext(formData); // Pass the validated form data to the parent
      console.log(formData)
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800">Add Your Bank Details</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Bank Name */}
        <div className="col-span-2">
          <label htmlFor="bankName" className="block text-gray-700 font-medium mb-2">
            Bank Name
          </label>
          <input
            type="text"
            id="bankName"
            value={formData.bankName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
            disabled={!!ifscDetails}
          />
          {formErrors.bankName && <p className="text-red-500 text-sm">{formErrors.bankName}</p>}
        </div>

        {/* Account Number */}
        <div>
          <label htmlFor="accountNumber" className="block text-gray-700 font-medium mb-2">
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
          />
          {formErrors.accountNumber && (
            <p className="text-red-500 text-sm">{formErrors.accountNumber}</p>
          )}
        </div>

        {/* Account Type */}
        <div>
          <label htmlFor="accountType" className="block text-gray-700 font-medium mb-2">
            Account Type
          </label>
          <select
            id="accountType"
            value={formData.accountType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
          >
            <option>Select Account Type</option>
            <option>Saving</option>
            <option>Current</option>
          </select>
          {formErrors.accountType && (
            <p className="text-red-500 text-sm">{formErrors.accountType}</p>
          )}
        </div>

        {/* IFSC Code */}
        <div>
          <label htmlFor="ifscCode" className="block text-gray-700 font-medium mb-2">
            IFSC Code
          </label>
          <input
            type="text"
            id="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            onBlur={fetchIfscDetails}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
          />
          {formErrors.ifscCode && <p className="text-red-500 text-sm">{formErrors.ifscCode}</p>}
        </div>

        {/* Account Holder Name */}
        <div>
          <label htmlFor="accountHolderName" className="block text-gray-700 font-medium mb-2">
            Account Holder Name
          </label>
          <input
            type="text"
            id="accountHolderName"
            value={formData.accountHolderName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
          />
          {formErrors.accountHolderName && (
            <p className="text-red-500 text-sm">{formErrors.accountHolderName}</p>
          )}
        </div>

        {/* Branch Name */}
        <div>
          <label htmlFor="branchName" className="block text-gray-700 font-medium mb-2">
            Branch Name
          </label>
          <input
            type="text"
            id="branchName"
            value={formData.branchName}
            onChange={handleChange}
            disabled={!!ifscDetails}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
          />
          {formErrors.branchName && (
            <p className="text-red-500 text-sm">{formErrors.branchName}</p>
          )}
        </div>
      </div>

      {/* Verification Checkbox */}
      <div className="mt-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            id="isVerified"
            checked={formData.isVerified}
            onChange={handleChange}
            className="form-checkbox text-orange-500"
          />
          <span className="ml-2 text-gray-700">I verify that the above bank details are correct.</span>
        </label>
        {formErrors.isVerified && (
          <p className="text-red-500 text-sm">{formErrors.isVerified}</p>
        )}
      </div>

      {/* Next Button */}
      <div className="mt-6">
        <button
          type="button"
          onClick={handleNextClick}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SellerBankDetails;
