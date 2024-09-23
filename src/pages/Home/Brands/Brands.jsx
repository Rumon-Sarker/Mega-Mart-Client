import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
// import { Autoplay, Pagination, } from 'swiper/modules';

const Brands = () => {
    return (
        <section className="container mx-auto">
            <h2 className="text-3xl font-semibold text-black my-6">Current Top Sellers:-  <Link className="underline ml-7 text-gray-500 text-base">View all</Link></h2>
            <div >
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={5}
                    spaceBetween={20}


                >

                    <SwiperSlide>
                        <div className="py-6 flex justify-center shadow-2xl my-12 rounded-full text-center transition transform hover:-translate-y-4 duration-300">
                            <div className="text-xl font-bold uppercase bg-gradient-to-r from-red-500 via-green-500 to-purple-500 bg-clip-text text-transparent">
                                Shamsung
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="py-6 flex justify-center shadow-2xl my-12 rounded-full text-center transition transform hover:-translate-y-4 duration-300">
                            <div className="text-xl font-bold uppercase bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
                                Apple
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="py-6 flex justify-center shadow-2xl my-12 rounded-full text-center transition transform hover:-translate-y-4 duration-300">
                            <div className="text-xl font-bold uppercase bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 bg-clip-text text-transparent">
                                Nokia
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="py-6 flex justify-center shadow-2xl my-12 rounded-full text-center transition transform hover:-translate-y-4 duration-300">
                            <div className="text-xl font-bold uppercase bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                                Huawei
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="py-6 flex justify-center shadow-2xl my-12 rounded-full text-center transition transform hover:-translate-y-4 duration-300">
                            <div className="text-xl font-bold uppercase bg-gradient-to-r from-purple-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                                OnePlus
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="py-6 flex justify-center shadow-2xl my-12 rounded-full text-center transition transform hover:-translate-y-4 duration-300">
                            <div className="text-xl font-bold uppercase bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                                Xiaomi
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="py-6 flex justify-center shadow-2xl my-12 rounded-full text-center transition transform hover:-translate-y-4 duration-300">
                            <div className="text-xl font-bold uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Oppo
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </section >
    );
};

export default Brands;