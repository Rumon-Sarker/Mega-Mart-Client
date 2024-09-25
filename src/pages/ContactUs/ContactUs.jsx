import { CiLocationOn } from "react-icons/ci";
import { MdCall, MdEmail } from "react-icons/md";


const ContactUs = () => {
    return (
        <section className="pt-40">

            {/* google Map  */}

            <div className="lg:w-full mdl:w-1/2 lg:mt-0 mdl:mt-0 sm:mt-8">
                <iframe width="100%" height="480" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rupayan%20Taj,%20Flat:%20K-3%20(3rd%20Floor)%20Plot%20No:%201,%201/1%20NayaPalton,%20Dhaka%201000,%20Bangladesh+(Waficolorsbd.com)&amp;t=p&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a className="text-3xl text-green-400" href="/">MegaMart</a></iframe>
            </div>
            <div className="container mx-auto">


                <div className="">
                    <h1 className="uppercase text-3xl my-12 font-bold">Contact Us</h1>
                    <h2 className="text-2xl font-semibold">We would love to hear from you.</h2>
                    <p className="text-base my-3 mb-5">If you’ve got great products your making or looking to work with us then drop us a line.</p>
                    {/* constct Form  */}
                    <div className="flex">
                        <form className="card-body w-full p-0 mx-auto">
                            <div className="form-control w-full ">
                                <input type="text" placeholder="Enter Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full mt-4">
                                <input type="text" placeholder="Enter Address" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full mt-4">
                                <input type="text" placeholder="Enter Phone" className="input input-bordered" required />
                            </div>

                            <label className="form-control mt-4">
                                <textarea className="textarea textarea-bordered h-48" placeholder="Message Descriptions" required></textarea>
                            </label>

                            <label className="text-base">
                                <input className="" type="checkbox" required />
                                <span> Save my name, email, and website in this browser for the next time I comment.</span>
                            </label>
                            <button className="btn p-4 mt-10 h-16 w-44 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 border-b-4 my-4 uppercase">Send</button>
                        </form>
                        <div className="w-full px-32 space-y-5">
                            <h2 className="text-xl font-bold">Get In Touch!</h2>
                            <p className="text-base font-serif">We love to hear from you - please use the form to send us your message or ideas. Or simply pop in for a cup of fresh tea and a cookie:</p>
                            <h2 className="flex  gap-2 text-base"><CiLocationOn className="text-3xl" />685 Market Street San Dhaka, <br /> CA 94105, Bangldesh</h2>
                            <h2 className="flex  gap-2 text-base"><MdCall className="text-3xl" />Call Now- 01783526467</h2>
                            <h2 className="flex  gap-2 border-b-2 pb-4 text-base"><MdEmail className="text-3xl" />mdsrrumon1234@gmail.com</h2>
                            <h2 className="text-xl">
                                Opening Hours:
                                <br />
                                MON to SAT: 9:00AM - 10:00PM
                                <br />
                                SUN: 10:00AM - 6:00PM
                            </h2>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;