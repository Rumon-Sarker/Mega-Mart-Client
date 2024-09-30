
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/ProductCard';
import useProductData from '../../../hooks/useProductData';

import rewordImg from "../.././../assets/AllSubBannerPngImg/rewords.png";
import ledTv from "../.././../assets/AllSubBannerPngImg/LedTv.png";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination } from 'swiper/modules';


const CurrentTopSells = () => {
    const { data, loading, error } = useProductData();
    if (loading) {
        return <p>Loading.......</p>
    }
    if (error) {
        alert(error.message)
    }

    const filterData = data?.slice(2, 9);

    return (
        <section className="flex flex-col container mx-auto">
            <h2 className="text-3xl font-semibold text-black my-6">Current Top Sellers:-  <Link to={"/shop"} className="underline ml-7 text-gray-500 text-base">View all</Link></h2>
            <div>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={6}
                    loop={true}

                    pagination={{ clickable: true }}



                >
                    {
                        filterData && filterData.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div>
                                    <ProductCard product={product} />
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>

            <div className='flex gap-12 my-12'>
                <div className='w-full h-[250px] rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-12 shadow-lg'>
                    <div className="w-full h-[200px]   transform transition hover:scale-105 duration-700 rounded-lg  flex  items-center">
                        {/* Left Side: Product Information */}
                        <div className="flex-1 text-white space-y-3">
                            <h2 className="text-4xl font-bold">World Fist HD LED Tv</h2>
                            <p className="text-2xl font-semibold">First Order and Take this offer.Not miss this offers</p>
                            <button className="px-6 py-4 bg-gradient-to-r from-purple-700 to-pink-500 font-semibold rounded-full hover:bg-purple-100 transition">
                                Shop Now
                            </button>
                        </div>

                        {/* Right Side: Product Image with same gradient background */}
                        <div className="flex-shrink-0  rounded-lg">
                            <div className="relative w-[250px] h-[200px] rounded-lg">
                                <img
                                    src={ledTv} // Replace with your PNG image URL
                                    alt="ledTv"
                                    className="absolute inset-0 w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[250px] rounded-lg bg-gradient-to-r from-yellow-500 to-pink-500 p-12 shadow-lg'>
                    <div className="w-full h-[200px]   transform transition hover:scale-105 duration-700 rounded-lg  flex  items-center">
                        {/* Left Side: Product Information */}
                        <div className="flex-1 text-white space-y-3">
                            <h2 className="text-4xl font-bold">Rewords Programs</h2>
                            <p className="text-xl font-semibold">Welcome to megamart and Take to Your Rewords</p>
                            <button className="px-6 py-4 bg-gradient-to-r from-yellow-500 to-pink-500 font-semibold rounded-full hover:bg-purple-100 transition">
                                Shop Now
                            </button>
                        </div>

                        {/* Right Side: Product Image with same gradient background */}
                        <div className="flex-shrink-0  rounded-lg">
                            <div className="relative w-[250px] h-[200px] rounded-lg">
                                <img
                                    src={rewordImg} // Replace with your PNG image URL
                                    alt="rewordImg"
                                    className="absolute inset-0 w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </section>
    );
};

export default CurrentTopSells;