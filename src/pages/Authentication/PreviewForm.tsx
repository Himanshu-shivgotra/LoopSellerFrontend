import React from "react";

interface PreviewFormProps {
    data: any;
    onPrevious: () => void;
    onSubmit: () => void;
}

const PreviewForm: React.FC<PreviewFormProps> = ({ data, onPrevious, onSubmit }) => {
    const { personalDetails, businessDetails, bankDetails } = data;

    return (
        <div className="rounded-sm flex items-center justify-center w-full">
            <div className="w-full mx-auto max-w-180 shadow-default bg-white dark:border-strokedark h-full dark:bg-boxdark p-4">
                <h2 className="text-center text-3xl font-bold text-orange-500 mb-6">Preview Your Details</h2>

                {/* Personal Details */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Personal Details</h3>
                    <div className="space-y-2">
                        <p className="flex justify-between"><strong>Full Name:</strong> {personalDetails.fullName}</p>
                        <p className="flex justify-between"><strong>Email:</strong> {personalDetails.email}</p>
                        <p className="flex justify-between"><strong>Phone Number:</strong> {personalDetails.phoneNumber}</p>
                    </div>
                </div>

                {/* Business Details */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Business Details</h3>
                    <div className="space-y-2">
                        <p className="flex justify-between"><strong>Business Name:</strong> {businessDetails.businessName}</p>
                        <p className="flex justify-between"><strong>GST Number:</strong> {businessDetails.gstNumber}</p>
                        <p className="flex justify-between"><strong>Business Address:</strong> {businessDetails.businessAddress || 'N/A'}</p>
                    </div>
                </div>

                {/* Bank Details */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Bank Details</h3>
                    <div className="space-y-2">
                        <p className="flex justify-between"><strong>Bank Name:</strong> {bankDetails.bankName}</p>
                        <p className="flex justify-between"><strong>Account Number:</strong> {bankDetails.accountNumber}</p>
                        <p className="flex justify-between"><strong>Account Type:</strong> {bankDetails.accountType}</p>
                        <p className="flex justify-between"><strong>IFSC Code:</strong> {bankDetails.ifscCode}</p>
                        <p className="flex justify-between"><strong>Branch Name:</strong> {bankDetails.branchName}</p>
                        <p className="flex justify-between"><strong>Account Holder Name:</strong> {bankDetails.accountHolderName}</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={onPrevious}
                        className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
                    >
                        Previous
                    </button>
                    <button
                        onClick={onSubmit}
                        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PreviewForm;
