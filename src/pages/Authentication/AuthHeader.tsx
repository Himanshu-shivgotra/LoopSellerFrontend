import { Link } from "react-router-dom"
export const AuthHeader = () => {

    return (
        <>
            <div
            className={`w-full z-50 text-white transition-all duration-500 ease-in-out bg-transparent mb-10 
                }`}
        >
            <div className="container mx-auto">
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

                </nav>
            </div>
        </div>
        </>
    )
}
