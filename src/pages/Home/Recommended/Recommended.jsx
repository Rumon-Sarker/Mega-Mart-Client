import { Link } from "react-router-dom";
import useProductData from "../../../hooks/useProductData";
import ProductCard from "../../../components/ProductCard";

const Recommended = () => {

    const { data } = useProductData();

    const sliceData = data && data.slice(1, 9);
    return (
        <section className="container mx-auto my-12">
            <h2 className="text-3xl font-semibold text-black my-6">Recommended For You
                :-  <Link to={"/shop"} className="underline ml-7 text-gray-500 text-base">View all</Link></h2>
            <div className="grid grid-cols-4 gap-4">
                {
                    sliceData && sliceData.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </section>
    );
};

export default Recommended;