import { useState } from "react";


const Gifts = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            quantity: 1,
            image: 'https://i.ibb.co.com/GVd49sF/home-20-categories-1-6-170x.jpg',
            giftMessage: '',
            giftWrap: false,
        },
        {
            id: 2,
            name: 'Product 2',
            price: 19.99,
            quantity: 2,
            image: 'https://i.ibb.co.com/GVd49sF/home-20-categories-1-6-170x.jpg',
            giftMessage: '',
            giftWrap: false,
        },
    ]);

    const updateGiftMessage = (id, message) => {
        setCartItems(
            cartItems.map(item =>
                item.id === id ? { ...item, giftMessage: message } : item
            )
        );
    };

    const toggleGiftWrap = (id) => {
        setCartItems(
            cartItems.map(item =>
                item.id === id ? { ...item, giftWrap: !item.giftWrap } : item
            )
        );
    };

    const getTotalPrice = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity + (item.giftWrap ? 5 : 0),
            0
        ).toFixed(2);
    };

    const handleCheckout = () => {
        // Logic for handling checkout
        console.log("Proceeding to checkout with gift options.");
        alert("Proceeding to checkout.");
    };

    return (
        <div className="container pt-40 mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Gift Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="flex flex-col space-y-4">
                    {cartItems.map(item => (
                        <div
                            key={item.id}
                            className="flex flex-col p-4 bg-white shadow-md rounded-lg"
                        >
                            <div className="flex items-center justify-between">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover"
                                />
                                <div className="flex-1 ml-4">
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                </div>
                                <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>

                            {/* Gift Options */}
                            <div className="mt-4">
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Gift Message (Optional)
                                </label>
                                <textarea
                                    value={item.giftMessage}
                                    onChange={(e) => updateGiftMessage(item.id, e.target.value)}
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="Write a message to include with the gift"
                                />
                            </div>

                            <div className="flex items-center mt-4">
                                <input
                                    id={`giftWrap-${item.id}`}
                                    type="checkbox"
                                    checked={item.giftWrap}
                                    onChange={() => toggleGiftWrap(item.id)}
                                    className="mr-2"
                                />
                                <label htmlFor={`giftWrap-${item.id}`} className="text-gray-700 font-semibold">
                                    Add Gift Wrapping for $5.00
                                </label>
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-end mt-6">
                        <h2 className="text-xl font-bold">Total: ${getTotalPrice()}</h2>
                    </div>

                    <button
                        onClick={handleCheckout}
                        className="self-end px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Gifts;