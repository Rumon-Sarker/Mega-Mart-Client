import { Link } from "react-router-dom";
import CaruselSilde from "../../../components/CaruselSilde";

import img1 from "../../../assets/AllSubBannerPngImg/file.png";

import vest from "../../../assets/AllSubBannerPngImg/vest.png";
import tady from "../../../assets/AllSubBannerPngImg/tady.png";
import kidapLay from "../../../assets/AllSubBannerPngImg/kidsPlays.png";
import ketly from "../../../assets/AllSubBannerPngImg/kettle_PNG8711.png";
import cooker from "../../../assets/AllSubBannerPngImg/cooker.png";
import offerToy from "../../../assets/AllSubBannerPngImg/offerToy.png";

import CategoryBottomBanner from "../../../components/CategoryBottomBanner";
import useProductData from "../../../hooks/useProductData";


const Kids = () => {


    const { data } = useProductData();

    const KidsKitchen = data?.filter((item) => item?.category === "Kids&Kitchen");
    return (
        <section className="container mx-auto my-12  ">
            <h2 className="text-3xl font-semibold text-black my-6">Kids, Household & Kitchens
                :-  <Link to={"/shop"} className="underline ml-7 text-gray-500 text-base">View all</Link></h2>

            {/* left side  */}
            <div className="flex container mx-auto   justify-between items-center">
                <div>
                    <div className='w-[350px] h-[460px] rounded-lg bg-gradient-to-r from-orange-500 to-blue-500 p-12 shadow-lg'>
                        <div className="flex flex-col gap-5 transform transition hover:scale-105 duration-700 rounded-lg   items-center">
                            {/* Left Side: Product Information */}
                            <div className="flex-1 text-center text-white space-y-3">
                                <p className="uppercase text-3xl font-bold">Sale up to </p>
                                <h2 className="text-8xl font-bold text-yellow-400">25%</h2>
                                <p className="text-xl font-semibold">sit amet consecSuscipit, repudiandae.</p>

                            </div>

                            {/* Right Side: Product Image with same gradient background */}
                            <div className="flex-shrink-0  rounded-lg">
                                <div className="relative w-[150px] h-[180px] rounded-lg">
                                    <img
                                        src={offerToy} // Replace with your PNG image URL
                                        alt="Product"
                                        className="absolute inset-0 w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* middale side */}

                <CaruselSilde products={KidsKitchen} />

                {/* Right side */}

                <div className=" shadow-lg">
                    <div className="w-[400px] h-32 rounded-lg flex items-center justify-between shadow-lg">
                        <div className=" flex flex-col gap-3 mx-auto">
                            <h1 className="text-3xl font-bold">KITCHENS</h1>
                            <Link className="hover:underline">Shop Now</Link>
                        </div>
                        <div className="flex mx-auto">
                            <img className="h-20" src={ketly} alt="" />
                        </div>
                    </div>
                    <div className="w-[400px] h-32 rounded-lg flex items-center justify-between shadow-lg ">
                        <div className=" flex flex-col gap-3 mx-auto">
                            <h1 className="text-3xl font-bold">KID TOYS</h1>
                            <Link className="hover:underline">Shop Now</Link>
                        </div>
                        <div className="flex mx-auto">
                            <img className="h-20" src={tady} alt="" />
                        </div>
                    </div>
                    <div className="w-[400px] h-32 rounded-lg flex items-center justify-between  shadow-lg">
                        <div className=" flex flex-col gap-3 mx-auto">
                            <h1 className="text-3xl font-bold">HOUSEHOLD</h1>
                            <Link className="hover:underline">Shop Now</Link>
                        </div>
                        <div className="flex mx-auto">
                            <img className="h-20" src={cooker} alt="" />
                        </div>
                    </div>
                    <Link>
                        <div className="w-[400px] h-32 hover:underline rounded-lg flex items-center justify-center shadow-lg">
                            <p className="text-2xl"><Link to={"/shop"}>View all categories</Link></p>
                        </div>
                    </Link>
                </div>

            </div>


            <div className='flex gap-2 my-12'>

                <CategoryBottomBanner img={img1} bgColor={"from-lime-600 to-orange-300"} name={"Keep It Warm"} subName={"Starting at $2400"} />

                <CategoryBottomBanner img={kidapLay} bgColor={"from-orange-500 to-blue-500"} name={"Toys Set For Kids"} subName={"Starting at $400"} />

                <CategoryBottomBanner img={vest} bgColor={"from-orange-500 to-blue-500"} name={"ARK Vest"} subName={"Starting at $3200"} />

            </div>
        </section>
    );
};

export default Kids;