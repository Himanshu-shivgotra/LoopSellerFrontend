import { useState, useEffect } from "react";
import { Link, } from "react-router-dom";

const SellerLogin = () => {
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({});
    // const navigate = useNavigate();

    // Load remembered email/phone on component mount
    useEffect(() => {
        const savedEmailOrPhone = localStorage.getItem("rememberedEmailOrPhone");
        if (savedEmailOrPhone) {
            setEmailOrPhone(savedEmailOrPhone);
            setRememberMe(true);
        }
    }, []);

    // Function to validate email or phone
    const validateEmailOrPhone = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;
        if (!value) return "Email or phone is required.";
        if (!emailRegex.test(value) && !phoneRegex.test(value))
            return "Enter a valid email or 10-digit phone number.";
        return "";
    };

    // Function to validate password
    const validatePassword = (value) => {
        if (!value) return "Password is required.";
        if (value.length < 6) return "Password must be at least 6 characters long.";
        return "";
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const emailOrPhoneError = validateEmailOrPhone(emailOrPhone);
        const passwordError = validatePassword(password);

        if (emailOrPhoneError || passwordError) {
            setErrors({
                emailOrPhone: emailOrPhoneError,
                password: passwordError,
            });
            return;
        }

        setErrors({});

        // Save email/phone if Remember Me is checked
        if (rememberMe) {
            localStorage.setItem("rememberedEmailOrPhone", emailOrPhone);
        } else {
            localStorage.removeItem("rememberedEmailOrPhone");
        }

        // Call an API to handle login (add your API logic here)
        console.log("Logging in with:", { emailOrPhone, password });
        // navigate("/dashboard"); // Redirect to dashboard after successful login
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            {/* Logo Section */}
            <img
                src="https://loopin.netlify.app/static/media/logo.245df7adb7de257385e2.png"
                alt="Logo"
                className="mb-8 h-20"
            />

            {/* Login Form */}
            <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
                <h2 className="text-4xl font-bold text-center my-8 text-[#ff7722]">
                    Login to Your Account
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Email or Phone Input */}
                    <div>
                        <label
                            htmlFor="emailOrPhone"
                            className="block text-sm font-semibold text-gray-700"
                        >
                            Email Address or Phone Number
                        </label>
                        <input
                            id="emailOrPhone"
                            type="text"
                            value={emailOrPhone}
                            onChange={(e) => setEmailOrPhone(e.target.value)}
                            placeholder="Enter your email or phone"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        />
                        {errors.emailOrPhone && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.emailOrPhone}
                            </p>
                        )}
                    </div>

                    {/* Password Input */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        />
                        {errors.password && (
                            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
                        )}
                    </div>

                    {/* Remember Me and Forgot Password */}
                    <div className="flex items-center justify-between">
                        <div>
                            <label className="inline-flex items-center text-sm text-gray-700">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                                />
                                <span className="ml-2">Remember Me</span>
                            </label>
                        </div>
                        <Link
                            to="/forgot-password"
                            className="text-sm text-orange-500 hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold"
                    >
                        Log In
                    </button>
                </form>

                {/* Registration Link */}
                <p className="mt-6 text-center text-sm text-gray-700">
                    Don’t have an account?{" "}
                    <Link
                        to="/sellerRegistration"
                        className="text-orange-500 font-semibold hover:underline"
                    >
                        Register Here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SellerLogin;
