import { FaHome, FaShippingFast, FaStar } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";


const WhyShop = () => {
    return (
        <section className=" bg-gradient-to-tr from-blue-400 to-green-300  py-12 flex flex-col items-center">
            <h1 className="text-5xl container mx-auto text-center font-bold">Why shop with us?</h1>
            <div className="flex container mx-auto justify-center pt-12 gap-4">
                <div className="w-96 p-12 text-center border bg-slate-50 rounded-lg shadow-2xl ">
                    <h1 className="text-8xl  items-center justify-center text-orange-500 flex"><FaStar /></h1>
                    <h1 className="text-xl font-serif my-2">QUALITY AND SAVING</h1>
                    <p className="text-lg">Comprehensive quality control and affordable prices</p>
                </div>
                <div className="w-96 p-12 text-center border bg-slate-50 rounded-lg shadow-2xl ">
                    <h1 className="text-8xl  items-center justify-center text-orange-500 flex"><FaHome /></h1>
                    <h1 className="text-xl font-serif my-2">GLOBAL WAREHOUSE</h1>
                    <p className="text-lg">37 overseas warehouses</p>
                </div>
                <div className="w-96 p-12 text-center border bg-slate-50 rounded-lg shadow-2xl ">
                    <h1 className="text-8xl  items-center justify-center text-orange-500 flex"><FaShippingFast /></h1>
                    <h1 className="text-xl font-serif my-2">FAST SHIPPING</h1>
                    <p className="text-lg">Fast and convenient door to door delivery</p>
                </div>
                <div className="w-96 p-12 text-center border bg-slate-50 rounded-lg shadow-2xl ">
                    <h1 className="text-8xl  items-center justify-center text-orange-500 flex"><MdOutlineSecurity /></h1>
                    <h1 className="text-xl font-serif my-2">PAYMENT SECURITY</h1>
                    <p className="text-lg">More than 10 different secure payment methods</p>
                </div>

            </div>
        </section>
    );
};

export default WhyShop;