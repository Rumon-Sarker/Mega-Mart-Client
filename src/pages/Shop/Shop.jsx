import ProductCard from "../../components/ProductCard";
import useProductData from "../../hooks/useProductData";

const Shop = () => {


    const { data } = useProductData();
    return (
        <section className="md:flex md:px-52 pt-40">
            {/* Category Sections  */}
            <div className="md:w-3/12 p-4 bg-slate-100">
                <h1 className="text-xl font-bold border-b pb-4">SEARCH FOR PRODUCT</h1>
                <label className="input input-bordered flex my-3 items-center gap-2">
                    <input type="text" className="grow border-r" placeholder="Search Products.." />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
                <h1 className="text-xl font-bold border-b my-4 pb-4">PRODUCT CATEGORIES</h1>
                <div className="flex flex-col items-start space-y-3">
                    <button >All Products-- (24) </button>
                    <button>Accessories-- (5)</button>
                    <button >Bracelets-- (7) </button>
                    <button >Engajements-- (3) </button>
                    <button >Gift- (8)</button>
                    <button >Jewelry-- (3)</button>
                    <button >Watches-- (9) </button>
                </div>
            </div>
            {/* Product Sections  */}
            <div className="md:w-9/12 mx-auto bg-gray-50">
                <h1 className="text-2xl md:text-4xl md:font-bold border-b-2  pb-3 uppercase ">All Products</h1>
                <div className="flex items-center justify-between my-12">
                    <h1> SHOWING  Out OF  RESULT</h1>
                    <select className="select select-bordered max-w-xs">
                        <option disabled selected defaultValue={""}>SORTING</option>
                        <option value={"name"}>Sort By Name</option>
                        <option value={"price"}>Sort By Price</option>
                    </select>
                </div>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    {data?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Shop;