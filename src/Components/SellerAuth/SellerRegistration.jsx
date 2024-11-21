import { Link } from "react-router-dom";
import PersonalDetailsForm from "./PersonalDetailsForm";
import SellerPreview from "./SellerPreview";
import BusinessDetailsForm from "./BusinessDetailsForm";
import BankDetailForm from "./BankDetailsForm";
import { useState } from "react";

const steps = [
  { id: 1, name: "Personal Details", component: PersonalDetailsForm },
  { id: 2, name: "Business Details", component: BusinessDetailsForm },
  { id: 3, name: "Bank Details", component: BankDetailForm },
  { id: 4, name: "Preview And Submit", component: SellerPreview },
];

const SellerRegistration = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personalDetails: {},
    businessDetails: {},
    bankDetails: {},
  });

  const [errors, setErrors] = useState({});

  const CurrentComponent = steps[currentStep].component;

  const validateStep = (stepData) => {
    let validationErrors = {};

    if (currentStep === 0) {
      if (!stepData.fullName || stepData.fullName.trim() === "") {
        validationErrors.fullName = "Full Name is required.";
      }
      if (!stepData.email || !/\S+@\S+\.\S+/.test(stepData.email)) {
        validationErrors.email = "Valid email is required.";
      }
    }

    if (currentStep === 1) {
      if (!stepData.businessName || stepData.businessName.trim() === "") {
        validationErrors.businessName = "Business name is required.";
      }
    }

    if (currentStep === 2) {
      if (!stepData.bankName || stepData.bankName.trim() === "") {
        validationErrors.bankName = "Bank Name is required.";
      }
      if (!stepData.accountNumber || !/^\d{8,18}$/.test(stepData.accountNumber)) {
        validationErrors.accountNumber = "Valid account number is required.";
      }
      if (!stepData.ifscCode || !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(stepData.ifscCode)) {
        validationErrors.ifscCode = "Valid IFSC Code is required.";
      }
    }

    return validationErrors;
  };

  const handleNext = (stepData) => {
    const currentStepKey =
      steps[currentStep]?.name?.toLowerCase().replace(" ", "") || "";
    const updatedData = { ...formData, [currentStepKey]: stepData };

    const validationErrors = validateStep(stepData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setFormData(updatedData);
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    alert("Registration Completed!");
    // You can add API calls here to submit the `formData`.
  };

  return (
    <div className="bg-white min-h-[100vh] py-6 px-4 max-w-auto mx-auto">
      {/* Logo */}
      <Link className="flex justify-start" to="/">
        <img
          src="https://loopin.netlify.app/static/media/logo.245df7adb7de257385e2.png"
          alt="Logo"
          className="h-20"
        />
      </Link>

      {/* Steps */}
      <div className="flex items-center justify-center mb-6">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`text-center py-2 px-4 mx-2 rounded ${
              currentStep === index
                ? "bg-orange-700 font-semibold border-2 border-white text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {step.name}
          </div>
        ))}
      </div>

      {/* Current Step */}
      <div className="rounded p-4">
        <CurrentComponent
          data={
            currentStep === steps.length - 1
              ? formData
              : formData[steps[currentStep]?.name?.toLowerCase().replace(" ", "")] || {}
          }
          errors={errors}
          onNext={(stepData) => handleNext(stepData)}
          onSubmit={handleSubmit}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-around items-center mx-auto mt-4 space-x-4">
        {currentStep > 0 && (
          <button
            onClick={handlePrevious}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
          >
            Previous
          </button>
        )}
        {currentStep < steps.length - 1 && (
          <button
            onClick={() => handleNext(formData[steps[currentStep]?.name?.toLowerCase().replace(" ", "")] || {})}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Next
          </button>
        )}
        {currentStep === steps.length - 1 && (
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default SellerRegistration;
