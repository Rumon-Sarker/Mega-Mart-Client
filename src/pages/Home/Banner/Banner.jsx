import { CiTablets1 } from "react-icons/ci";
import { FaTv } from "react-icons/fa";
import { GiBabyBottle, GiBusDoors, GiEmeraldNecklace, GiGardeningShears, } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineLocalMovies, } from "react-icons/md";
import { PiBowlFoodThin, PiTShirtThin } from "react-icons/pi";

import bannerImg1 from "../../../assets/HomePageImg/BannerImg/home-20-slider-1.jpg"
import bannerImg2 from "../../../assets/HomePageImg/BannerImg/Home-20-slider-banner-1.avif"
import bannerImg3 from "../../../assets/HomePageImg/BannerImg/Home-20-slider-banner-2.avif"
import bannerImg4 from "../../../assets/HomePageImg/BannerImg/Home-20-slider-banner-3.avif"
import bannerImg5 from "../../../assets/HomePageImg/BannerImg/Home-20-slider-banner-4.avif"
import offerImg from "../../../assets/HomePageImg/BannerImg/home-20-banner-large-1.webp"


import { Link } from "react-router-dom";


const Banner = () => {
    const styles = "flex flex-col gap-1 border-b pb-2 hover:text-orange-500 transition-colors duration-300 items-center text-center";

    return (
        <section className="mx-auto container">
            <div className="flex flex-row justify-center gap-4 items-center mx-auto">
                {/* category  */}
                <div className="w-96 shadow-xl p-4">
                    <h1 className=" w-72 text-xl font-bold rounded-t-lg p-3 text-white bg-orange-500">SHOP BY CATEGORIES</h1>
                    <div className="grid grid-cols-2 gap-3 border-t-4 border-orange-500  text-gray-700 p-6 ">

                        <Link className={`${styles}`}><FaTv className="text-3xl" /> Electronics </Link>
                        <Link className={`${styles}`}><PiTShirtThin className="text-3xl" /> Clothing / Shoes </Link>
                        <Link className={`${styles}`}><GiBabyBottle className="text-3xl" />Mother & Kids </Link>
                        <Link className={`${styles}`}><PiBowlFoodThin className="text-3xl" />Food </Link>
                        <Link className={`${styles}`}><IoGameControllerOutline className="text-3xl" />  Toys / Games </Link>
                        <Link className={`${styles}`}><GiGardeningShears className="text-3xl" /> Garden & Pets </Link>
                        <Link className={`${styles}`}><GiBusDoors className="text-3xl" />Home / Furniture</Link>
                        <Link className={`${styles}`}><CiTablets1 className="text-3xl" /> Pharmacy </Link>
                        <Link className={`${styles}`}><GiEmeraldNecklace className="text-3xl" /> Beauty / Jewelry </Link>
                        <Link className={`${styles}`}><MdOutlineLocalMovies className="text-3xl" /> Movies </Link>

                    </div>
                </div>
                {/* banner  */}
                <div>
                    <Link><img src={bannerImg1} alt="Bannder img" /></Link>
                </div>
                {/* Discount Img  */}
                <div>
                    <Link><img src={bannerImg2} alt="discount" /></Link>
                    <Link><img src={bannerImg3} alt="discount" /></Link>
                </div>
                <div>
                    <Link><img src={bannerImg4} alt="discount" /></Link>
                    <Link><img src={bannerImg5} alt="discount" /></Link>
                </div>
            </div>
            {/* new customer offer  */}
            <div className="flex items-center justify-center my-12">
                <Link><img src={offerImg} alt="" /></Link>
            </div>
        </section>
    );
};

export default Banner;