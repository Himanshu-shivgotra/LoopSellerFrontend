import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StartSellingSection = () => {
    return (
        <Container className=" text-white flex flex-col md:flex-row items-center justify-between px-8 py-10 mt-24">
            {/* Left Content */}
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4">
                    Start Selling on Our Platform
                </h1>
                <p className="text-gray-300 mb-6 tracking-wider">
                    Join thousands of sellers growing their businesses with our platform.
                    List your products, track your sales, and access powerful tools to
                    boost your success.
                </p>
                <Link to="/sellerRegistration">
                <button className="bg-orange-500 hover:bg-orange-600 my-6 text-white px-6 py-3 rounded font-semibold transition ease-in-out duration-300">
                    Start Selling
                </button>
                </Link>

            </div>

            {/* Right Content (Image) */}
            <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
                <img
                    src="https://loopin.netlify.app/static/media/seller.950fb2364d15df947190d05adb0f73fb.svg" // Replace with your image link
                    alt="Start Selling"
                    className="w-full max-w-sm md:max-w-md"
                />
            </div>
        </Container>
    );
};

export default StartSellingSection;
