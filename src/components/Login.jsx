import { Netflix_Logo } from "../utils/constants";
import { useState } from "react";

const Login = () => {

    const [IsSignInPage, setIsSignInPage] = useState(true);
    const handleToggle = () => {
        setIsSignInPage(!IsSignInPage);
    };

    return (
        <div className="relative h-screen">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    className=""
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_small.jpg"
                    alt="bg-img"
                />
            </div>

            {/* Netflix Logo */}
            <div className="absolute top-0 left-0 z-10 bg-gradient-to-b from-black">
                <img className="w-60" src={Netflix_Logo} alt="logo" />
            </div>

            {/* Form Container */}
            <div className="absolute w-115 h-140 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/85 p-14
      rounded-lg mt-8">
                <h3 className="text-white text-3xl font-bold">{IsSignInPage ? "Sign In" : "Sign Up"}</h3>
                <form action="" className="flex flex-col pt-8 gap-4">
                    {!IsSignInPage &&
                        <div className="flex gap-3">
                            <input type="text" placeholder="First Name" className="text-lg text-white border-[0.1px] rounded-s p-3 w-1/2 " />
                            <input type="text" placeholder="Last Name" className="text-lg text-white border-[0.1px] rounded-s p-3 w-1/2" />
                        </div>}
                    <input type="text" placeholder="Email or mobile number" className="text-lg text-white border-[0.1px] rounded-s p-3 " />
                    <input type="password" placeholder={IsSignInPage ? "Password" : "Create Password"} className="text-lg text-white border-[0.1px] rounded-s p-3 " />
                    <button className="text-white font-medium bg-red-600 rounded-lg p-3 cursor-pointer">{IsSignInPage ? "Sign In" : "Sign Up"}</button>
                    <div className="space-x-2 my-4">
                        <span className="text-gray-300">New to Netflix ?</span>
                        <span className="text-white font-semibold cursor-pointer" onClick={handleToggle}>Sign up now</span>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;
