import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import loginImg from "../../assets/LoginImg/loginImg.png";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signupUser } from "../../features/user/userSlice";

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [showPass, setShowPass] = useState(false); // State to manage password visibility
    const handlePassShow = () => {
        setShowPass(!showPass); // Toggle password visibility
    };
    const dispatch = useDispatch();
    const handaleSignUp = (data) => {
        dispatch(signupUser({ email: data.email, password: data.password }))
        console.log("from data is", data);
    }



    return (
        <section className="pt-40 container mx-auto">
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="flex w-full max-w-4xl bg-white shadow-md rounded-lg">

                    {/* Left side  - Image */}
                    <div className="hidden md:block md:w-1/2">
                        <img
                            src={loginImg}
                            alt="Side illustration"
                            className="object-cover w-full h-full rounded-r-lg"
                        />
                    </div>


                    {/* Right side - Login Form */}
                    <div className="w-full md:w-1/2 p-8 space-y-6">
                        {/* Top Icon */}
                        <div className="flex justify-center text-center ">
                            <FaLock className="text-4xl text-indigo-500" />
                        </div>

                        <h1 className='text-3xl text-center font-bold  pt-5'>Welcome to Our Shope!</h1>
                        <p className="text-lg text-center font-serif">Enter to get unlimited services</p>

                        <form onSubmit={handleSubmit(handaleSignUp)} className="space-y-6">
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-600">Full Name <span className="text-xl text-red-500">*</span></label>
                                <input
                                    type="text"
                                    {...register("name", { required: true, })}
                                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter your Full Name"

                                />
                                {errors.name && <span className="text-red-500 text-sm">Full name is Required</span>}

                            </div>


                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-600">Email <span className="text-xl text-red-500">*</span></label>
                                <input
                                    type="email"

                                    {...register("email", { required: true })}
                                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter your email"

                                />
                                {errors.email && <span className="text-red-500 text-sm">Email is Required</span>}
                            </div>

                            <div className="relative">
                                <label className="block mb-1 text-sm font-medium text-gray-600">Password <span className="text-xl text-red-500">*</span></label>
                                <input
                                    type={showPass ? "password" : "password"} // Toggle input type

                                    {...register("password", { required: true, minLength: 8 })}
                                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter your password"

                                />

                                <button
                                    type="button" // Prevent form submission
                                    onClick={handlePassShow}
                                    className="absolute right-3 top-11 text-gray-500 focus:outline-none"
                                >
                                    {showPass ? <FaEye /> : <FaEyeSlash />} {/* Toggle eye icon */}
                                </button>
                                {errors.password?.type == "required" && <span className="text-red-500 text-sm">Password is Required</span>}
                                {errors.password?.type == "minLength" && <span className="text-red-500 text-sm">Password Mustbe 6 character</span>}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                                >
                                    SignUp
                                </button>
                            </div>
                        </form>

                        {/* Divider */}
                        <div className="relative flex items-center justify-center my-4">
                            <div className="absolute w-full border-t border-gray-300"></div>
                            <span className="relative px-2 text-sm text-gray-600 bg-white">Or</span>
                        </div>

                        {/* Google Sign-In */}
                        <SocialLogin />
                        <p className="text-base">{"Already have an account ?"} <Link className="text-indigo-500 font-bold" to={"/signin"}>SignIn</Link></p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default SignUp;