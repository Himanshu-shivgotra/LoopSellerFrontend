/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const SellerPreview = ({ data, onSubmit }) => {
    const { personaldetails, businessdetails, bankdetails } = data || {};

    // Local state to handle loading
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (data && Object.keys(data).length > 0) {
            setIsLoading(false);
        }
    }, [data]);

    // Skip rendering if data is empty or undefined
    if (isLoading) {
        return <div className="bg-white p-6 rounded shadow text-center">Loading...</div>;
    }

    // Only log when we actually have data
    if (process.env.NODE_ENV === 'development') {
        console.log('Personal Details:', personaldetails);
        console.log('Business Details:', businessdetails);
        console.log('Bank Details:', bankdetails);
        console.log('Full Data Object:', data);
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center text-orange-700">Preview Your Details</h2>

            {/* Personal Details */}
            <div className="mb-6 p-4 border-b">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Details</h3>
                <p className="text-sm text-gray-700"><span className="font-medium">Full Name:</span> {personaldetails?.fullName || "N/A"}</p>
                <p className="text-sm text-gray-700 mt-2"><span className="font-medium">Email:</span> {personaldetails?.email || "N/A"}</p>
                <p className="text-sm text-gray-700 mt-2"><span className="font-medium">Phone Number:</span> {personaldetails?.phoneNumber || "N/A"}</p>
            </div>

            {/* Business Details */}
            <div className="mb-6 p-4 border-b">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Details</h3>
                <p className="text-sm text-gray-700"><span className="font-medium">Business Name:</span> {businessdetails?.businessName || "N/A"}</p>
                <p className="text-sm text-gray-700 mt-2"><span className="font-medium">GST Number:</span> {businessdetails?.gstNumber || "N/A"}</p>
                <p className="text-sm text-gray-700 mt-2"><span className="font-medium">Business Address:</span> {businessdetails?.businessAddress || "N/A"}</p>
            </div>

            {/* Bank Details */}
            <div className="mb-6 p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Bank Details</h3>
                <p className="text-sm text-gray-700"><span className="font-medium">Bank Name:</span> {bankdetails?.bankName || "N/A"}</p>
                <p className="text-sm text-gray-700 mt-2"><span className="font-medium">Account Number:</span> {bankdetails?.accountNumber || "N/A"}</p>
                <p className="text-sm text-gray-700 mt-2"><span className="font-medium">IFSC Code:</span> {bankdetails?.ifscCode || "N/A"}</p>
                <p className="text-sm text-gray-700 mt-2"><span className="font-medium">Account Holder Name:</span> {bankdetails?.accountHolderName || "N/A"}</p>
                <p className="text-sm text-gray-700 mt-2"><span className="font-medium">Branch Name:</span> {bankdetails?.branchName || "N/A"}</p>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
                <button
                    onClick={onSubmit}
                    className="px-6 py-3 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default SellerPreview;
