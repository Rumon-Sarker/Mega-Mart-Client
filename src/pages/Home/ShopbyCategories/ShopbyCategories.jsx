
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, } from 'swiper/modules';
import useDataFetch from "../../../hooks/useDataFetch";

const ShopbyCategories = () => {
    const { data } = useDataFetch("category.json");

    const fixedData = data?.slice(0, 9);

    return (
        <section className="flex flex-col container mx-auto">
            <h2 className="text-3xl font-semibold text-black my-6">Shop by Categories:-  <Link to={"/shop"} className="underline ml-7 text-gray-500 text-base">View all</Link></h2>

            <div>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={6}
                    loop={true}
                    autoplay={{ delay: 4000 }}
                    pagination={{ clickable: true }}




                >
                    {
                        fixedData && fixedData.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="items-center p-3 pb-12 flex flex-col justify-center">
                                    <div className="w-52 h-52 flex flex-col rounded-full  justify-center items-center mx-auto " >
                                        <img className="w-44 h-44 rounded-full p-4 shadow-2xl" src={product.image} alt="Caegory Img" />
                                        <h2 className="text-gray-600 text-lg font-serif my-4 p-2">{product.name}</h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>



        </section>
    );
};

export default ShopbyCategories;