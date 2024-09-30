import { Link } from "react-router-dom";
import CaruselSilde from "../../../components/CaruselSilde";
import useProductData from "../../../hooks/useProductData";

const NewProducts = () => {
    const { data } = useProductData();

    const ElectronicsData = data?.filter((item) => item?.category === "Electronics");
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-black my-6">New Products:-  <Link to={"/shop"} className="underline ml-7 text-gray-500 text-base">View all</Link></h2>

            <CaruselSilde products={ElectronicsData} />
        </div>
    );
};

export default NewProducts;