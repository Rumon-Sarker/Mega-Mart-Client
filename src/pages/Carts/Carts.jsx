import { useState } from "react";

const Carts = () => {

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Lotto Premium Flip Flop Extra Soft",
            brand: "No Brand",
            size: "EU:39",
            price: 145,
            originalPrice: 290,
            quantity: 1,
            image: "https://i.ibb.co.com/R66V2Fn/home-20-categories-1-5-170x.jpg",
        },
        {
            id: 2,
            name: "Sports Shoes",
            brand: "Lotto",
            size: "EU:42",
            price: 299,
            originalPrice: 599,
            quantity: 2,
            image: "https://i.ibb.co.com/B2m739F/home-20-categories-1-2-170x-1.jpg",
        },
        {
            id: 3,
            name: "Sports Shoes",
            brand: "Lotto",
            size: "EU:42",
            price: 299,
            originalPrice: 599,
            quantity: 2,
            image: "https://i.ibb.co.com/R66V2Fn/home-20-categories-1-5-170x.jpg",
        },
        {
            id: 4,
            name: "Sports Shoes",
            brand: "Lotto",
            size: "EU:42",
            price: 299,
            originalPrice: 599,
            quantity: 2,
            image: "https://i.ibb.co.com/B2m739F/home-20-categories-1-2-170x-1.jpg",
        },
        {
            id: 5,
            name: "Sports Shoes",
            brand: "Lotto",
            size: "EU:42",
            price: 299,
            originalPrice: 599,
            quantity: 2,
            image: "https://i.ibb.co.com/W2MZfLV/home-20-categories-1-4-170x.jpg",
        },
    ]);

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleQuantityChange = (id, quantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: quantity } : item
        ));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="bg-gray-100 pt-48 py-10 min-h-screen">
            <div className="container mx-auto flex flex-col lg:flex-row gap-8">

                {/* Cart Items Section */}
                <div className="lg:w-8/12 bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-semibold mb-6">Your Shopping Cart</h1>
                    {cartItems.length === 0 ? (
                        <p className="text-center text-gray-600">Your cart is empty.</p>
                    ) : (
                        <div className="grid gap-6">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md border"
                                >
                                    {/* Product Image */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 object-cover rounded-md"
                                        />
                                        <div>
                                            <h2 className="text-lg font-semibold">{item.name}</h2>
                                            <p className="text-sm text-gray-500">
                                                Brand: {item.brand}, Size: {item.size}
                                            </p>
                                            <p className="text-lg font-semibold text-red-500">৳ {item.price}</p>
                                            <p className="text-sm text-gray-500 line-through">৳ {item.originalPrice}</p>
                                        </div>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex  justify-between gap-11">
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                className="px-3 py-1 border border-gray-300 text-gray-600 hover:bg-gray-100"
                                                disabled={item.quantity <= 1} // Disable button when quantity <= 1
                                            >
                                                -
                                            </button>
                                            <span className="text-lg">{item.quantity}</span>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                className="px-3 py-1 border border-gray-300 text-gray-600 hover:bg-gray-100"
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Delete Button */}
                                        <button
                                            onClick={() => handleRemoveItem(item.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    </div>


                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Order Summary Section */}
                <div className="lg:w-4/12 bg-gray-50 p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-2">
                        <p className="text-gray-600">Subtotal ({cartItems.length} item{cartItems.length > 1 ? 's' : ''})</p>
                        <p className="font-semibold">৳ {getTotalPrice()}</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p className="text-gray-600">Shipping Fee</p>
                        <p className="font-semibold">৳ 0</p>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-600 mb-1">Enter Voucher Code</label>
                        <div className="flex">
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
                                placeholder="Voucher Code"
                            />
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600">
                                APPLY
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between text-lg font-semibold">
                        <p>Total</p>
                        <p>৳ {getTotalPrice()}</p>
                    </div>
                    <button className="mt-4 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-200">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carts;