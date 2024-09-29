import { Link } from "react-router-dom";

import headphone from "../../../assets/AllSubBannerPngImg/headphone.png";
import laptop from "../../../assets/AllSubBannerPngImg/laptop.png";
import ledTv from "../../../assets/AllSubBannerPngImg/LedTv.png";
import smartPhone from "../../../assets/AllSubBannerPngImg/smartPhone.png";
import tv from "../../../assets/AllSubBannerPngImg/Tv.png";
import offerTv from "../../../assets/AllSubBannerPngImg/offerTv.png";
import watch from "../../../assets/AllSubBannerPngImg/watch.png";


import CaruselSilde from "../../../components/CaruselSilde";
import CategoryBottomBanner from "../../../components/CategoryBottomBanner";
import useProductData from "../../../hooks/useProductData";

const Electronics = () => {

    const { data } = useProductData();

    const ElectronicsData = data?.filter((item) => item?.category === "Electronics");

    return (
        <section className="container mx-auto my-12  ">
            <h2 className="text-3xl font-semibold text-black my-6">Electronics & Offices
                :-  <Link className="underline ml-7 text-gray-500 text-base">View all</Link></h2>

            {/* left side  */}
            <div className="flex container mx-auto   justify-between items-center">
                <div>
                    <div className='w-[350px] h-[460px] rounded-lg bg-gradient-to-r from-green-500 to-blue-500 p-12 shadow-lg'>
                        <div className="flex flex-col gap-5 transform transition hover:scale-105 duration-700 rounded-lg   items-center">
                            {/* Left Side: Product Information */}
                            <div className="flex-1 text-center text-white space-y-3">
                                <p className="uppercase text-3xl font-bold">Sale up to </p>
                                <h2 className="text-8xl font-bold text-yellow-400">60%</h2>
                                <p className="text-xl font-semibold">sit amet consecSuscipit, repudiandae.</p>

                            </div>

                            {/* Right Side: Product Image with same gradient background */}
                            <div className="flex-shrink-0  rounded-lg">
                                <div className="relative w-[150px] h-[180px] rounded-lg">
                                    <img
                                        src={offerTv} // Replace with your PNG image URL
                                        alt="Product"
                                        className="absolute inset-0 w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* middale side */}

                <CaruselSilde products={ElectronicsData} />

                {/* Right side */}

                <div className=" shadow-lg">
                    <div className="w-[400px] h-32 rounded-lg flex items-center justify-between shadow-lg">
                        <div className=" flex flex-col gap-3 mx-auto">
                            <h1 className="text-3xl font-bold">SMARTPHONE</h1>
                            <Link className="hover:underline">Shop Now</Link>
                        </div>
                        <div className="flex mx-auto">
                            <img className="h-20" src={smartPhone} alt="" />
                        </div>
                    </div>
                    <div className="w-[400px] h-32 rounded-lg flex items-center justify-between shadow-lg ">
                        <div className=" flex flex-col gap-3 mx-auto">
                            <h1 className="text-3xl font-bold">LAPTOPS</h1>
                            <Link className="hover:underline">Shop Now</Link>
                        </div>
                        <div className="flex mx-auto">
                            <img className="h-20" src={laptop} alt="" />
                        </div>
                    </div>
                    <div className="w-[400px] h-32 rounded-lg flex items-center justify-between  shadow-lg">
                        <div className=" flex flex-col gap-3 mx-auto">
                            <h1 className="text-3xl font-bold">TELEVISIONS</h1>
                            <Link className="hover:underline">Shop Now</Link>
                        </div>
                        <div className="flex mx-auto">
                            <img className="h-20" src={ledTv} alt="" />
                        </div>
                    </div>
                    <Link>
                        <div className="w-[400px] h-32 hover:underline rounded-lg flex items-center justify-center shadow-lg">
                            <p className="text-2xl">View all categories</p>
                        </div>
                    </Link>
                </div>

            </div>


            <div className='flex gap-2 my-12'>

                <CategoryBottomBanner img={watch} bgColor={"from-blue-500 to-green-300"} name={"Alays All Time"} subName={"Starting at $2400"} />

                <CategoryBottomBanner img={headphone} bgColor={"from-blue-500 to-green-300"} name={"HeadPhones"} subName={"Starting at $400"} />

                <CategoryBottomBanner img={tv} bgColor={"from-blue-500 to-green-300"} name={"Led TVs "} subName={"Starting at $3200"} />

            </div>
        </section>
    );
};

export default Electronics;