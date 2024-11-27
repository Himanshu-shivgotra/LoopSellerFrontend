import React, { useState } from "react";

const BankDetails: React.FC<{
    data: any;
    onChange: (data: any) => void;
    onNext: () => void;
    onPrevious: () => void;
}> = ({ data, onChange, onNext, onPrevious }) => {
    const [errors, setErrors] = useState<any>({});
    const [isVerified, setIsVerified] = useState(false);

    // Validate function
    const validate = () => {
        const newErrors: any = {};

        // Basic validation for required fields
        if (!data.bankName) newErrors.bankName = "Bank Name is required.";
        if (!data.accountNumber || !/^\d+$/.test(data.accountNumber)) {
            newErrors.accountNumber = "Bank Account Number must be numeric.";
        }
        if (!data.accountType) newErrors.accountType = "Account Type is required.";
        if (!data.businessPhone || !/^\d{10}$/.test(data.businessPhone)) {
            newErrors.businessPhone = "Business Phone must be 10 digits.";
        }
        if (!data.ifscCode || !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(data.ifscCode)) {
            newErrors.ifscCode = "Invalid IFSC Code format.";
        }
        if (!data.branchName) newErrors.branchName = "Branch Name is required.";
        if (!data.accountHolderName) newErrors.accountHolderName = "Account Holder Name is required.";
        if (!isVerified) newErrors.isVerified = "Please verify the bank details.";

        setErrors(newErrors);
        console.log("Validation Errors:", newErrors); // Debug validation errors
        return Object.keys(newErrors).length === 0;
    };

    // Fetch branch details using IFSC code
    const fetchBranchDetails = async (ifsc: string) => {
        try {
            const response = await fetch(`https://ifsc.razorpay.com/${ifsc}`);
            if (response.ok) {
                const branchData = await response.json();
                onChange({
                    branchName: branchData.BRANCH,
                    bankName: branchData.BANK,
                });
                setErrors({ ...errors, ifscCode: "" }); // Clear IFSC-related error
            } else {
                onChange({ branchName: "", bankName: "" });
                setErrors({
                    ...errors,
                    ifscCode: "Invalid IFSC Code or unable to fetch details.",
                });
            }
        } catch (err) {
            setErrors({
                ...errors,
                ifscCode: "Failed to fetch branch details. Please try again.",
            });
        }
    };

    // Handle input change
    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        onChange({ [name]: value });
        setErrors({ ...errors, [name]: "" }); // Clear error for the field

        // Fetch branch details if IFSC code is updated
        if (name === "ifscCode" && /^[A-Z]{4}0[A-Z0-9]{6}$/.test(value)) {
            await fetchBranchDetails(value);
        }
    };

    // Handle checkbox change for verification
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsVerified(e.target.checked);
        setErrors({ ...errors, isVerified: "" }); // Clear error for checkbox
    };

    // Handle Next button click
    const handleNext = async () => {
        console.log("Handle Next called"); // Debug to see if onNext is triggered
        if (validate()) {
            console.log("Validation passed. Proceeding to next step.");
            await onNext(); // Proceed only after validation passes
        } else {
            console.log("Validation failed. Can't proceed.");
        }
    };

    return (
        <div className="rounded-sm  flex items-center justify-center w-full">
            <div className="w-full mx-auto max-w-180 shadow-default bg-white dark:border-strokedark h-full dark:bg-boxdark">
                <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                    <h2 className="mb-9 text-2xl font-bold text-orange-500 dark:text-white sm:text-title-xl2">
                        Sign Up to Loop
                    </h2>
                    <form>
                    <span className="mb-1.5 block font-medium">Seller Bank Details</span>
                        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-12 lg:col-span-3">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Account Holder Name
                                </label>
                                <input
                                    type="text"
                                    name="accountHolderName"
                                    value={data.accountHolderName || ""}
                                    onChange={handleInputChange}
                                    placeholder="Enter Account Holder Name"
                                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                                />
                                {errors.accountHolderName && <p className="text-red-500 text-sm">{errors.accountHolderName}</p>}
                            </div>

                            <div className="col-span-12 lg:col-span-3">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Account holder's Phone
                                </label>
                                <input
                                    type="text"
                                    name="businessPhone"
                                    value={data.businessPhone || ""}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your Phone Number"
                                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                                />
                                {errors.businessPhone && <p className="text-red-500 text-sm">{errors.businessPhone}</p>}
                            </div>
                        </div>
                        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-12 lg:col-span-3">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Bank Account Type
                                </label>
                                <select
                                    name="accountType"
                                    value={data.accountType || ""}
                                    onChange={handleInputChange}
                                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                                >
                                    <option value="" disabled>
                                        Select Account Type
                                    </option>
                                    <option value="savings">Savings</option>
                                    <option value="current">Current</option>
                                    <option value="salary">Salary</option>
                                </select>
                                {errors.accountType && <p className="text-red-500 text-sm">{errors.accountType}</p>}
                            </div>


                            <div className="col-span-12 lg:col-span-3">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Bank IFSC Code
                                </label>
                                <input
                                    type="text"
                                    name="ifscCode"
                                    value={data.ifscCode || ""}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your IFSC Code"
                                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                                />
                                {errors.ifscCode && <p className="text-red-500 text-sm">{errors.ifscCode}</p>}
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-12 lg:col-span-3">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Bank Name
                                </label>
                                <input
                                    type="text"
                                    name="bankName"
                                    value={data.bankName || ""}
                                    onChange={handleInputChange}
                                    placeholder="Enter your Bank name"
                                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                                    disabled // Disable since it is fetched
                                />
                                {errors.bankName && <p className="text-red-500 text-sm">{errors.bankName}</p>}
                            </div>
                            <div className="col-span-12 lg:col-span-3">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Branch Name
                                </label>
                                <input
                                    type="text"
                                    name="branchName"
                                    value={data.branchName || ""}
                                    onChange={handleInputChange}
                                    placeholder="Enter your Branch Name"
                                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                                    disabled // Disable since it is fetched
                                />
                                {errors.branchName && <p className="text-red-500 text-sm">{errors.branchName}</p>}
                            </div>
                        </div>


                        <div className="mt-4">
                            <label className="mb-2.5 block font-medium text-black dark:text-white">
                                Bank Account Number
                            </label>
                            <input
                                type="text"
                                name="accountNumber"
                                value={data.accountNumber || ""}
                                onChange={handleInputChange}
                                placeholder="Enter your Bank Account Number"
                                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                            />
                            {errors.accountNumber && <p className="text-red-500 text-sm">{errors.accountNumber}</p>}
                        </div>

                        {/* Checkbox for Verification */}
                        <div className="my-4">
                            <label className="flex items-center gap-x-2 font-medium text-black dark:text-white">
                                <input
                                    type="checkbox"
                                    name="isVerified"
                                    checked={isVerified}
                                    onChange={handleCheckboxChange}
                                    className="w-5 h-5"
                                />
                                Verify your bank details
                            </label>
                            {errors.isVerified && <p className="text-red-500 text-sm">{errors.isVerified}</p>}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={onPrevious}
                                className="w-1/4 py-3 px-4 bg-gray-300 text-black rounded-lg"
                            >
                                Previous
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="w-1/4 py-3 px-4 bg-orange-500 text-white rounded-lg"
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BankDetails;
