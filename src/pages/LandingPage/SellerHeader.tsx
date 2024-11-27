import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const SellerNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen)
    }

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    const navLinks = [
        {
            name: "Dashboard",
            path: "/"
        },
        {
            name: "Products",
            path: "/"
        },
        {
            name: "Orders",
            path: "/"
        },
        {
            name: "Account",
            path: "/"
        }
    ]
    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500 ease-in-out ${isScrolled ? "bg-[#141414] shadow-md" : "bg-transparent"
                }`}
        >
            <div className="container px-2">
                <nav className="flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2">
                        <Link to="/">
                            <img
                                src="https://loopin.netlify.app/static/media/logo.245df7adb7de257385e2.png"
                                alt="Logo"
                                className="h-20"
                            />
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map(link => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="group relative text-white hover:text-orange-400"
                            >
                                {link.name}
                                {/* Underline on hover */}
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={handleMenuToggle}
                            className="text-white focus:outline-none"
                        >
                            <span
                                className={`block w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"
                                    }`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                                    }`}
                            ></span>
                        </button>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex space-x-4">
                        <Link to="/auth/signin">
                            <button
                            className="bg-[#ff7722] text-white border-2 border-white  font-bold py-2 px-4 hover:text-black hover:bg-white"
                            >
                                Login
                            </button>
                        </Link>
                        <Link to="/auth/signup">
                            <button
                                className="bg-transparent text-white border-2-white font-bold py-2 px-4 hover:text-black hover:bg-white"
                            >
                                Start Selling
                            </button>
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden bg-[#141414] transition-all duration-500 ease-in-out ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                        }`}
                    style={{
                        overflow: "hidden"
                    }}
                >
                    <div className="text-white py-4 px-6 text-center">
                        {navLinks.map(link => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block py-2 text-white group hover:text-orange-500 relative"
                                onClick={() => setMenuOpen(false)} // Close menu on click
                            >
                                {link.name}
                                {/* Underline on hover */}
                                <span className="absolute left-1/2 bottom-0 w-1/4 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transform -translate-x-1/2 transition-transform duration-300 ease-in-out"></span>
                            </Link>
                        ))}
                        <div className="flex flex-col items-center space-y-4 mt-4">
                            <Link to="/auth/signin">
                            <button
                            className="bg-[#ff7722] text-white border-2-white font-bold py-2 px-4 hover:text-black hover:bg-white"
                            >
                                Login
                            </button>
                            </Link>
                            <Link to="/auth/signup">
                            <button
                                className="bg-transparent text-white border-2-white font-bold py-2 px-4 hover:text-black hover:bg-white"
                            >
                                Start Selling
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerNavbar
