import bkashLogo from "../../assets/FooterLogo/bkash.png";
import nagadLogo from "../../assets/FooterLogo/Nagad.png";
import dutchBanglaLogo from "../../assets/FooterLogo/dutchBangla.png";
import stripe from "../../assets/FooterLogo/stripe-iconpng.png";
import { FaFacebook, FaInstagram, FaPinterest, FaSnapchat } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdCall, MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <section className="  mx-auto pt-8">

            {/* SUBSCRIBE */}
            <div className="flex container flex-col  text-center  space-y-4 justify-center mx-auto pt-7">

                <h1 className="text-4xl font-bold">SUBSCRIBE TO OUR NEWSLETTER</h1>
                <p className="text-lg">Get the latest updates on new products and upcoming sales</p>
                <div className="flex justify-center gap- items-center rounded">
                    <input className="p-3 w-96 border border-r-0 border-gray-300 rounded-l " placeholder="Enter Your Email Addres" type="text" />
                    <button className="px-12 py-4 bg-orange-500 rounded-r uppercase text-sm text-white">Submit</button>
                </div>
            </div>





            {/* Footer section  */}
            <footer className="footer container mx-auto  text-base-content py-12">
                <nav className="space-y-3 text-gray-700">
                    <h6 className="footer-title text-black text-3xl">Shope</h6>
                    <a className="link text-base link-hover">Electronics</a>
                    <a className="link text-base link-hover">Computers & Laptops</a>
                    <a className="link text-base link-hover">Smartphones & Tablets</a>
                    <a className="link text-base link-hover">Cameras</a>
                    <a className="link text-base link-hover">Video Games & Systems</a>
                    <a className="link text-base link-hover">Home Furniture</a>
                    <a className="link text-base link-hover">Weekly Special</a>
                </nav>
                <nav className="space-y-3 text-gray-700">
                    <h6 className="footer-title text-black text-3xl">Top Brands</h6>
                    <a className="link text-base link-hover">Coco Lee</a>
                    <a className="link text-base link-hover">Anna</a>
                    <a className="link text-base link-hover">French Connection</a>
                    <a className="link text-base link-hover">Jimmy Choo</a>
                    <a className="link text-base link-hover">Chanel</a>
                    <a className="link text-base link-hover">Collette</a>
                    <a className="link text-base link-hover">View All</a>
                </nav>
                <nav className="space-y-3 text-gray-700">
                    <h6 className="footer-title text-black text-3xl">Further Info.</h6>
                    <a className="link text-base link-hover">About Us</a>
                    <a className="link text-base link-hover">Contact Us</a>
                    <a className="link text-base link-hover">Shipping & Return</a>
                    <a className="link text-base link-hover">Privacy Policy</a>
                    <a className="link text-base link-hover">Terms & Conditions</a>
                    <a className="link text-base link-hover">Blog</a>

                </nav>
                <nav className="space-y-5 mt-16 text-gray-700">

                    <h2 className="flex  gap-2 text-base"><CiLocationOn className="text-3xl" />685 Market Street San Dhaka, <br /> CA 94105, Bangldesh</h2>
                    <h2 className="flex  gap-2 text-base"><MdCall className="text-3xl" />Call Now- 01783526467</h2>
                    <h2 className="flex  gap-2 text-base"><MdEmail className="text-3xl" />mdsrrumon1234@gmail.com</h2>

                    <div className="flex gap-2 items-center">
                        <Link>
                            <h1 className="p-4 border border-black text-xl rounded-full"><FaFacebook /></h1>
                        </Link>
                        <Link>
                            <h1 className="p-4 border border-black text-xl rounded-full"><FaInstagram /></h1>
                        </Link>
                        <Link>
                            <h1 className="p-4 border border-black text-xl rounded-full"><FaPinterest /></h1>
                        </Link>
                        <Link>
                            <h1 className="p-4 border border-black text-xl rounded-full"><FaSnapchat /></h1>
                        </Link>
                        <Link>
                            <h1 className="p-4 border border-black text-xl rounded-full"><FaTwitter /></h1>
                        </Link>
                    </div>
                </nav>

            </footer>


            {/* Bottom Footer Sections  */}
            <footer className="footer container mx-auto  text-base-content  border-t-2 border-gray-400  py-4">
                <aside className="grid-flow-col  items-center text-gray-600">

                    <p>
                        @ MegaMart Industries Ltd. Providing reliable tech since #2024
                        <br />
                        Developer by @@Rumon Sarker Rubel
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col items-center gap-4">

                        <a>
                            <img className="w-8 cursor-pointer" src={bkashLogo} alt="bkashLogo" />
                        </a>

                        <a>
                            <img className="w-8 cursor-pointer" src={dutchBanglaLogo} alt="dutchBanglaLogo" />
                        </a>
                        <a>
                            <img className="w-8 cursor-pointer" src={stripe} alt="dutchBanglaLogo" />
                        </a>
                        <a>
                            <img className="w-8 cursor-pointer" src={nagadLogo} alt="nagadLogo" />
                        </a>

                    </div>
                </nav>
            </footer>

        </section>
    );
};

export default Footer;