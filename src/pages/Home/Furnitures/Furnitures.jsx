import { Link } from "react-router-dom";
import CaruselSilde from "../../../components/CaruselSilde";
import badRoom from "../../../assets/AllSubBannerPngImg/badRoom.png";
import dChair from "../../../assets/AllSubBannerPngImg/DChair.png";
import Dtable from "../../../assets/AllSubBannerPngImg/DTable.png";
import Rak from "../../../assets/AllSubBannerPngImg/Rak.png";
import sofa from "../../../assets/AllSubBannerPngImg/sofa.png";
import mora from "../../../assets/AllSubBannerPngImg/chair-png-40525.png";

import CategoryBottomBanner from "../../../components/CategoryBottomBanner";
import useProductData from "../../../hooks/useProductData";

const Furnitures = () => {

    const { data } = useProductData();

    const ElectronicsData = data?.filter((item) => item?.category === "Furnitures");

    return (
        <section className="container mx-auto my-12  ">
            <h2 className="text-3xl font-semibold text-black my-6">Home, Furnitures & Decor
                :-  <Link to={"/shop"} className="underline ml-7 text-gray-500 text-base">View all</Link></h2>

            {/* left side  */}
            <div className="flex container mx-auto   justify-between items-center">
                <div>
                    <div className='w-[350px] h-[460px] rounded-lg bg-gradient-to-r from-orange-500 to-red-300 p-12 shadow-lg'>
                        <div className="flex flex-col gap-5 transform transition hover:scale-105 duration-700 rounded-lg   items-center">
                            {/* Left Side: Product Information */}
                            <div className="flex-1 text-center text-white space-y-3">
                                <p className="uppercase text-3xl font-bold">Sale up to </p>
                                <h2 className="text-8xl font-bold text-yellow-400">30%</h2>
                                <p className="text-xl font-semibold">sit amet consecSuscipit, repudiandae.</p>

                            </div>

                            {/* Right Side: Product Image with same gradient background */}
                            <div className="flex-shrink-0  rounded-lg">
                                <div className="relative w-[150px] h-[180px] rounded-lg">
                                    <img
                                        src={Dtable} // Replace with your PNG image URL
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
                            <h1 className="text-3xl font-bold">LIVING ROOM</h1>
                            <Link className="hover:underline">Shop Now</Link>
                        </div>
                        <div className="flex mx-auto">
                            <img className="h-20" src={mora} alt="" />
                        </div>
                    </div>
                    <div className="w-[400px] h-32 rounded-lg flex items-center justify-between shadow-lg ">
                        <div className=" flex flex-col gap-3 mx-auto">
                            <h1 className="text-3xl font-bold">BED ROOM</h1>
                            <Link className="hover:underline">Shop Now</Link>
                        </div>
                        <div className="flex mx-auto">
                            <img className="h-20" src={badRoom} alt="" />
                        </div>
                    </div>
                    <div className="w-[400px] h-32 rounded-lg flex items-center justify-between  shadow-lg">
                        <div className=" flex flex-col gap-3 mx-auto">
                            <h1 className="text-3xl font-bold">DECOR</h1>
                            <Link className="hover:underline">Shop Now</Link>
                        </div>
                        <div className="flex mx-auto">
                            <img className="h-20" src={sofa} alt="" />
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

                <CategoryBottomBanner img={sofa} bgColor={"from-red-500 to-orange-500"} name={"Retro Furniture"} subName={"Starting at $2400"} />

                <CategoryBottomBanner img={dChair} bgColor={"from-red-500 to-orange-300"} name={"Daining Chair Combo"} subName={"Starting at $400"} />

                <CategoryBottomBanner img={Rak} bgColor={"from-red-500 to-orange-500"} name={"Win Rack Bottle "} subName={"Starting at $3200"} />

            </div>
        </section>
    );
};

export default Furnitures;