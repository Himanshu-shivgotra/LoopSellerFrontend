const StartSellingSection = () => {
    return (
        <div className=" container mx-auto py-16 px-2">
            <div className="flex flex-wrap lg:flex-nowrap gap-4">
            <div className="text-start mt-20 px-0 lg:px-8">
                <h1 className="text-4xl font-bold mb-4">Start Selling on Our Platform</h1>
                <p className="text-gray-300 mb-6">
                    Join thousands of sellers growing their businesses with our platform.
                    List your products, track your sales, and access powerful tools to boost your success.
                </p>
                <button className="bg-orange-500 px-6 py-3 text-black font-medium rounded hover:bg-orange-400">
                    Start Selling
                </button>
            </div>

            {/* Right Content (Image) */}
            <div className="mt-14 md:w-1/2 flex justify-center">
                <img
                    src="https://loopin.netlify.app/static/media/seller.950fb2364d15df947190d05adb0f73fb.svg" // Replace with your image link
                    alt="Start Selling"
                    className="w-full max-w-sm md:max-w-md"
                />
            </div>
            </div>
           
        </div>
    );
};

export default StartSellingSection;
