import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const WishList = () => {
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: 'Wishlist Product 1',
            price: 29.99,
            image: 'https://via.placeholder.com/100',
        },
        {
            id: 2,
            name: 'Wishlist Product 2',
            price: 19.99,
            image: 'https://via.placeholder.com/100',
        },
    ]);

    const removeItem = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    const addToCart = (id) => {
        const item = wishlistItems.find(item => item.id === id);
        // Logic to add the item to the cart
        console.log('Added to cart:', item);
        alert(`${item.name} has been added to the cart.`);
    };

    return (
        <div className="container pt-40 mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>

            {wishlistItems.length === 0 ? (
                <p className="text-gray-500">Your wishlist is empty.</p>
            ) : (
                <div className="flex flex-col space-y-4">
                    {wishlistItems.map(item => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg"
                        >
                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                            <div className="flex-1 ml-4">
                                <h2 className="text-lg font-semibold">{item.name}</h2>
                                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                            </div>
                            <div className="flex space-x-4">
                                <button
                                    onClick={() => addToCart(item.id)}
                                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishList;