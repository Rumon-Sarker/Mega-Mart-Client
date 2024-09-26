
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <section className={`navbar  z-30 mt-20 w-full shadow-xl bg-white `}>
            <div className="container mx-auto flex justify-between">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-lg font-bold'><Link to="/">Home</Link></li>
                            <li className='text-lg font-bold'><Link to="/shop"> Shop</Link></li>
                            <li>
                                <details>
                                    <summary className="lg:text-lg font-bold">Products</summary>
                                    <ul className="font-semibold">
                                        <li className='text-sm '><Link to="/">New Product</Link></li>
                                        <li className='text-sm '><Link to="/">Old Product</Link></li>
                                        <li className='text-sm '><Link to="/shop">All Product</Link></li>
                                        <li className='text-sm '><Link to="/shop">UpComaing Product</Link></li>
                                    </ul>
                                </details>
                            </li>

                            <li className='text-lg font-bold'><Link to="/blogs">Blog</Link></li>
                            <li className='text-lg font-bold'><Link to="/contact">Contact us</Link></li>
                            <li className='text-lg font-bold'><Link to="/contact">About us</Link></li>
                        </ul>
                    </div>
                    <Link to={"/"}>
                        <p className="">Megha Mart logo</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-lg font-bold'><Link to="/">Home</Link></li>
                        <li className='text-lg font-bold'><Link to="/shop"> Shop</Link></li>
                        <li >
                            <details>
                                <summary className="lg:text-lg font-bold">Products</summary>
                                <ul className="w-48">
                                    <li className='text-sm '><Link to="/shop">UpComaing Product</Link></li>
                                    <li className='text-sm '><Link to="/">New Product</Link></li>
                                    <li className='text-sm '><Link to="/">Old Product</Link></li>
                                    <li className='text-sm '><Link to="/shop">All Product</Link></li>

                                </ul>
                            </details>
                        </li>
                        <li className='text-lg font-bold'><Link to="/collections">Collaction</Link></li>
                        <li className='text-lg font-bold'><Link to="/blogs">Blog</Link></li>
                        <li className='text-lg font-bold'><Link to="/contact">Contact us</Link></li>

                        <li className='text-lg font-bold'><Link to="/about">About us</Link></li>
                    </ul>
                </div>

                <div className="navbar-end flex justify-end ">
                    <Link className="flex items-center  gap-2"><FaUser className="text-xl text-orange-500 " /> Help</Link>
                </div>
            </div>
        </section>
    );
};

export default Navbar;