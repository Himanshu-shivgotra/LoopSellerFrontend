/* eslint-disable react/prop-types */
import { useState } from "react";

const GSTVerificationForm = ({ onNext }) => {
  const [gstNumber, setGstNumber] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({ gstNumber: "", file: "" });

  const handleGstNumberChange = (e) => {
    setGstNumber(e.target.value);
    setErrors({ ...errors, gstNumber: "" }); // Clear error when the user types
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setErrors({ ...errors, file: "" }); // Clear error on file selection
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate GST Number
    const gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
    if (!gstNumber) {
      newErrors.gstNumber = "GST Number is required.";
      isValid = false;
    } else if (!gstPattern.test(gstNumber)) {
      newErrors.gstNumber = "Enter a valid 15-digit GST Number.";
      isValid = false;
    }

    // Validate File Upload
    if (!file) {
      newErrors.file = "Please upload the GST certificate.";
      isValid = false;
    } else {
      const allowedExtensions = ["pdf", "jpg", "png", "doc"];
      const fileSizeLimit = 10 * 1024 * 1024; // 10 MB
      const fileExtension = file.name.split(".").pop().toLowerCase();

      if (!allowedExtensions.includes(fileExtension)) {
        newErrors.file = "Allowed file types: PDF, JPG, PNG, DOC.";
        isValid = false;
      }

      if (file.size > fileSizeLimit) {
        newErrors.file = "File size must not exceed 10 MB.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("GST Number:", gstNumber);
      console.log("Uploaded File:", file);

      // Call onNext with valid data
      onNext({ gstDetails: { gstNumber, file } });
      
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow rounded-md">
      <h2 className="text-2xl font-bold mb-2">Enter GST Number</h2>
      <p className="text-gray-600 mb-4">
        GST number is mandatory to sell online.
      </p>
      <form onSubmit={handleFormSubmit}>
        {/* GST Number Input */}
        <label className="block font-medium mb-1" htmlFor="gstNumber">
          15-digit GST Number
        </label>
        <input
          type="text"
          id="gstNumber"
          value={gstNumber}
          onChange={handleGstNumberChange}
          placeholder="Enter your GST number"
          className={`border p-2 w-full rounded mb-2 ${
            errors.gstNumber ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.gstNumber && (
          <p className="text-red-500 text-sm mb-4">{errors.gstNumber}</p>
        )}

        {/* File Upload */}
        <label className="block font-medium mb-1">
          Upload GST certificate (Reg-06 with Annexure A & B)
        </label>
        <div
          className={`border-2 p-4 rounded mb-2 text-center cursor-pointer ${
            errors.file ? "border-red-500" : "border-gray-300"
          }`}
        >
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="fileUpload"
          />
          <label htmlFor="fileUpload" className="block cursor-pointer">
            <div className="text-gray-500">
              Drag and Drop your files here or click to browse
            </div>
          </label>
        </div>
        {errors.file && <p className="text-red-500 text-sm mb-4">{errors.file}</p>}

        <p className="text-sm text-gray-500 mb-2">
          Allowed extensions: pdf, jpg, png, doc.
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Maximum file size: 10 MB.
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 text-white font-semibold py-2 px-4 rounded w-full hover:bg-orange-600"
        >
          Verify GST Details
        </button>
      </form>
    </div>
  );
};

export default GSTVerificationForm;
