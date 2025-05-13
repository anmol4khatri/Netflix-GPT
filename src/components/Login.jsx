import { Netflix_Logo } from "../utils/constants";
import { useRef, useState } from "react";
import {checkValidData} from "../utils/loginValidation"

const Login = () => {

    //Switch btw SignIn/SignUp
    const [IsSignInPage, setIsSignInPage] = useState(true);
    const handleToggle = () => {
        setIsSignInPage(!IsSignInPage);
    };

    //Form Validation
    const email = useRef();
    const password = useRef();
    const[ErrorMessage,setErrorMessage] = useState(null);
    const handleSubmit = () => {
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
    };

    return (
        <div className="relative h-screen">

            {/* Background Image */}
            <div className="absolute inset-0 max-sm:hidden">
                <img
                    className=""
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_small.jpg"
                    alt="bg-img"
                />
            </div>

            {/* Netflix Logo */}
            <div className="absolute top-0 left-0 z-10 bg-gradient-to-b from-black">
                <img className="w-60 max-sm:w-30 max-sm:m-3" src={Netflix_Logo} alt="logo" />
            </div>

            {/* Form Container */}
            <div className="absolute w-4/12 h-9/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/85 p-14
      rounded-lg mt-8 max-sm:bg-black max-sm:w-full max-sm:h-full max-sm:mt-0 max-sm:rounded-none max-sm:p-7">
                <h3 className="text-white text-3xl font-bold max-sm:pt-12">{IsSignInPage ? "Sign In" : "Sign Up"}</h3>
                <form onSubmit={(e) => e.preventDefault()} action="" className="flex flex-col pt-8 gap-4">
                    <p className="text-red-400 font-bold text-lg">{ErrorMessage}</p>
                    {!IsSignInPage &&
                        <div className="flex gap-3">
                            <input type="text" placeholder="First Name" className="text-lg text-white border-[0.1px] rounded-lg p-3 w-1/2 " />
                            <input type="text" placeholder="Last Name" className="text-lg text-white border-[0.1px] rounded-lg p-3 w-1/2" />
                        </div>}
                    <input ref={email} type="text" placeholder="Email or mobile number" className="text-lg text-white border-[0.1px] rounded-lg p-3" />
                    <input ref={password} type="password" placeholder={IsSignInPage ? "Password" : "Create Password"} className="text-lg text-white border-[0.1px] rounded-lg p-3 " />
                    <button onClick={handleSubmit} className="text-white font-medium bg-red-600 rounded-lg p-3 cursor-pointer">{IsSignInPage ? "Sign In" : "Sign Up"}</button>
                    <div className="space-x-2 my-4">
                        <span className="text-gray-300">{IsSignInPage ? "New to Netflix ?" : "Already have a account ?"}</span>
                        <span className="text-white font-semibold cursor-pointer" onClick={handleToggle}>{IsSignInPage ? "Sign up now" : "Sign in"}</span>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;
