import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-10">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo Section */}
                    <div className="flex flex-col items-start">
                        <img
                            src="https://loopin.netlify.app/static/media/logo.245df7adb7de257385e2.png"
                            alt="Logo"
                            className="w-32 mb-4"
                        />
                        <p className="text-gray-300">
                            Empowering sellers to grow and manage their businesses with ease.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li>
                                <a href="#" className="hover:text-orange-500">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500">
                                    Sell on Platform
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul>
                            <li>Email: support@platform.com</li>
                            <li>Phone: +123 456 7890</li>
                            <li>Location: 123 Business St., City</li>
                        </ul>
                    </div>

                    {/* Follow Us Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="bg-gray-700 p-2 rounded-full hover:bg-orange-500"
                            >
                                <FaFacebookF className="text-white" />
                            </a>
                            <a
                                href="#"
                                className="bg-gray-700 p-2 rounded-full hover:bg-orange-500"
                            >
                                <FaTwitter className="text-white" />
                            </a>
                            <a
                                href="#"
                                className="bg-gray-700 p-2 rounded-full hover:bg-orange-500"
                            >
                                <FaInstagram className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <p className="text-center mt-10 text-gray-600">
                    © {new Date().getFullYear()} Your Platform Name. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
