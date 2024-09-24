

const CategoryBottomBanner = ({ img, name, subName, bgColor }) => {
    return (
        <div className={`w-full h-[280px] rounded-lg bg-gradient-to-r ${bgColor} p-12 shadow-lg`}>
            <div className="w-full h-[200px]   transform transition hover:scale-105 duration-700 rounded-lg  flex  items-center">
                {/* Left Side: Product Information */}
                <div className="flex-1 text-white space-y-3">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <p className="text-xl font-semibold">{subName}</p>
                    <button className={`px-6 py-4 bg-gradient-to-r ${bgColor} font-semibold rounded-full hover:bg-purple-100 transition`}>
                        Shop Now
                    </button>
                </div>

                {/* Right Side: Product Image with same gradient background */}
                <div className="flex-shrink-0  rounded-lg">
                    <div className="relative w-[220px] h-[200px] rounded-lg">
                        <img
                            src={img} // Replace with your PNG image URL
                            alt="Product"
                            className="absolute inset-0 w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryBottomBanner;