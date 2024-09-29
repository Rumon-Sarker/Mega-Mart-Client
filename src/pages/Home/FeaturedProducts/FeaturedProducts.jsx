import { Link } from "react-router-dom";
import CaruselSilde from "../../../components/CaruselSilde";
import useProductData from "../../../hooks/useProductData";

const FeaturedProducts = () => {
    const { data } = useProductData();

    const Clothing = data?.filter((item) => item?.category === "Clothings");
    return (
        <div className="">
            <h2 className="text-3xl font-semibold text-black my-6">Featured Products:-  <Link className="underline ml-7 text-gray-500 text-base">View all</Link></h2>
            <CaruselSilde products={Clothing} />
        </div>
    );
};

export default FeaturedProducts;