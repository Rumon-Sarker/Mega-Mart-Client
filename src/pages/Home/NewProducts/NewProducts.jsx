import { Link } from "react-router-dom";
import CaruselSilde from "../../../components/CaruselSilde";

const NewProducts = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-black my-6">New Products:-  <Link className="underline ml-7 text-gray-500 text-base">View all</Link></h2>

            <CaruselSilde />
        </div>
    );
};

export default NewProducts;