
import aboutImg from "../../assets/AboutUs/Aboutus.png";
const AboutUs = () => {
    return (
        <section className="pt-40">
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6 text-gray-800">
                    {/* About Us Section */}
                    <div className=" mb-12">
                        <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
                        <p className="mt-4 text-xl">
                            Welcome to MegaMart, where passion meets precision in delivering the finest products to you.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row  justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img
                                src={aboutImg}
                                alt="About us"
                                className="rounded-lg w-full h-[500px] shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-12 pt-12">
                            <h1 className="text-xl font-bold">Welcome,</h1>
                            <p className="text-lg mb-6">
                                At MegaMart, we believe in quality, innovation, and customer satisfaction. Founded in 2024, our journey began with a mission to create a seamless online shopping experience.
                            </p>
                            <p className="text-lg mb-6">
                                From sourcing the best materials to delivering them to your doorstep, we ensure every step of the process is perfect. Our team is dedicated to curating collections that resonate with your style and needs.
                            </p>
                            <p className="text-lg">
                                We are more than just a store; we are a community of like-minded individuals who value craftsmanship and care. Thank you for being a part of our story.
                            </p>
                            <p className="text-lg">
                                At MegaMart, we believe in quality, innovation, and customer satisfaction. Founded in 2024, our journey began with a mission to create a seamless online shopping experience.
                            </p>

                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="mt-16">
                        <h3 className="text-3xl font-bold text-center text-gray-900">Our Features</h3>
                        <p className="mt-4 text-lg text-center mb-12">
                            What sets us apart from the competition
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <div className="mb-4">
                                    <svg
                                        className="w-12 h-12 mx-auto text-indigo-500"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M5 7l7 5 7-5"></path>
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold mb-4">Free Shipping</h4>
                                <p className="text-gray-600">
                                    Enjoy free shipping on all orders with no minimum purchase required, making shopping easier for you.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <div className="mb-4">
                                    <svg
                                        className="w-12 h-12 mx-auto text-indigo-500"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.326 0-2.418.835-2.83 2H3.17a2 2 0 100 4h6.002c.412 1.165 1.504 2 2.828 2s2.417-.835 2.828-2h6.002a2 2 0 100-4h-6.002c-.412-1.165-1.504-2-2.828-2z"></path>
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold mb-4">Secure Payments</h4>
                                <p className="text-gray-600">
                                    Your security is our top priority. We offer encrypted payment options to ensure a safe shopping experience.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <div className="mb-4">
                                    <svg
                                        className="w-12 h-12 mx-auto text-indigo-500"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12 12 0 01-.168 6.787L12 21l-6.14-3.635a12 12 0 01-.168-6.787L12 14z"></path>
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold mb-4">Quality Assurance</h4>
                                <p className="text-gray-600">
                                    Every product we offer goes through rigorous testing to ensure it meets our high standards for quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default AboutUs;