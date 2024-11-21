import { Container } from '@mui/material';
import React, { useState } from 'react';

const steps = ['Login', 'Personal Details', 'Business Details', 'Bank Details', 'Confirmation'];

const SellerStepper = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <Container className=''>
            <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm  sm:text-base  sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                {steps.map((step, index) => (
                    <li
                        key={index}
                        className={`flex items-center ${index <= currentStep ? 'text-orange-400' : 'text-gray-500'}`}
                    >
                        <span
                            className={`flex items-center justify-center w-5 h-5 me-2 text-xs border ${index <= currentStep ? 'border-orange-500 dark:' : 'border-gray-500'} rounded-full shrink-0`}
                        >
                            {index + 1}
                        </span>
                        {step}
                        {index < steps.length - 1 && (
                            <svg
                                className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 12 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m7 9 4-4-4-4M1 9l4-4-4-4"
                                />
                            </svg>
                        )}
                    </li>
                ))}
            </ol>

            <div className="mt-6">
                {currentStep === 0 && <div>Step 1: Login Info</div>}
                {currentStep === 1 && <div>Step 2: Personal Details</div>}
                {currentStep === 2 && <div>Step 3: Business Details</div>}
                {/* {currentStep === 3 && <div>Step 4: GST Details</div>} */}
                {currentStep === 3 && <div>Step 4: Bank Details</div>}
                {currentStep === 4 && <div>Step 5: Confirmation</div>}
            </div>

            <div className="mt-6 flex justify-between">
                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded"
                    onClick={handlePrevStep}
                    disabled={currentStep === 0}
                >
                    Back
                </button>
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                    onClick={handleNextStep}
                    disabled={currentStep === steps.length - 1}
                >
                    Next
                </button>
            </div>
        </Container>
    );
};

export default SellerStepper;
