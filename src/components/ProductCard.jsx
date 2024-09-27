import { GiSelfLove } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const { name, price, image, discountPrice, category, id } = product;


    const dispatch = useDispatch();

    const handlaeAddToCart = () => {
        if (user) {
            dispatch(addToCart({
                id,
                name,
                price: Number(product.price),
                image,
                discountPrice,
                category,
                quantity: 1,

            }));
            toast.success(`${name} add to cart Success`, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
        }
        else {
            navigate("/signin")
        }




    }

    return (
        <div className="container mx-auto">
            <div className="max-w-sm mx-auto mb-12 p-4 m-3 transform hover:scale-105  bg-white shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
                {/* Product Image */}
                <img
                    src={image}
                    alt="product"
                    className="w-full p-3 h-48 transform transition duration-300 hover:scale-105  object-cover rounded-lg"
                />
                <div className="text-xl font-bold mt-4">
                    <h2 className="text-lg font-bold text-gray-800">{name}</h2>
                    <div className="flex gap-2">
                        <p className="text-gray-500 line-through">${discountPrice}</p>
                        <span> form </span>
                        <p className="text-red-500 text-xl font-semibold">${price}</p>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-gray-700">Select Color:</p>
                    <div className="flex  gap-2 mt-2">
                        {/* Red Color Option */}
                        <label>
                            <input
                                type="radio"
                                name="color"
                                value="red"
                                className="hidden"
                            />
                            <span
                                className={`inline-block w-6 h-6 rounded-full bg-gray-500 cursor-pointer border-2`}
                            ></span>
                        </label>

                        {/* Blue Color Option */}
                        <label>
                            <input
                                type="radio"
                                name="color"
                                value="blue"
                                className="hidden"
                            />
                            <span
                                className={`inline-block w-6 h-6 rounded-full cursor-pointer border-2`}
                            ></span>
                        </label>

                        {/* Green Color Option */}
                        <label>
                            <input
                                type="radio"
                                name="color"
                                value="green"
                                className="hidden"
                            />
                            <span
                                className={`inline-block w-6 h-6 bg-green-500 rounded-full cursor-pointer border-2 `}

                            ></span>
                        </label>
                    </div>
                </div>

                <div className="mt-6 flex gap-12 text-center">
                    <button onClick={() => handlaeAddToCart(product)} className="px-4 py-2 btn-outline border-green-400 border rounded-full text-black  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
                    >
                        Add To Card
                    </button>
                    <button className="text-2xl">
                        <Link> <GiSelfLove /></Link>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;