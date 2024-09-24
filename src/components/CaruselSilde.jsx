
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import ProductCard from './ProductCard';
import useProductData from '../hooks/useProductData';

const CaruselSilde = () => {
    const { data } = useProductData();

    return (
        <div className='w-[770px] container mx-auto shadow-2xl  px-4'>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={20}


            >
                {
                    data && data.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>

                    ))
                }

            </Swiper>
        </div>
    );
};

export default CaruselSilde;