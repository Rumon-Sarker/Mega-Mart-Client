import {
    FaGift, FaRegUser,
} from "react-icons/fa";

import { GiSelfLove } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const TopNavbar = () => {
    return (
        <section className="navbar bg-orange-500 fixed z-30 py-3 px-8 text-white">
            <div className="flex container mx-auto justify-between items-center">
                <h3 className="text-4xl font-bold italic font-mono border-b-2">MegaMart</h3>
                <h2>Available 24/7 at <br /> 091 234-ELLA</h2>
                <div className="w-5/12">
                    <label className="input  input-bordered rounded-full flex items-center gap-2">
                        <input type="text" className="grow text-black" placeholder="Search the store" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-full w-8  text-orange-500  opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                <div>
                    <div className="flex gap-12">
                        <Link to={"/wishlist"}>
                            <h2 className="flex flex-col text-sm gap-1 items-center">
                                <GiSelfLove className="text-2xl" />
                                Wish List
                            </h2>
                        </Link>
                        <Link to={"/gifts"}>
                            <p className="flex flex-col text-sm  gap-1 items-center">
                                <FaGift className="text-2xl" />
                                Gift Cards

                            </p>
                        </Link>
                        <Link to={"/signin"}>
                            <p className="flex flex-col text-sm gap-1 items-center">
                                <FaRegUser className="text-2xl" />
                                Sign In

                            </p>
                        </Link>
                        <Link to="/carts">
                            <p className="flex flex-col gap-1 text-sm items-center">
                                <IoCartOutline className="text-2xl" />
                                Cart

                            </p>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default TopNavbar;