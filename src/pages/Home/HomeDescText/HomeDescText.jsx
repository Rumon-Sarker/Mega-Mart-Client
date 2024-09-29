import { useState } from "react";


const HomeDescText = () => {
    const [show, setShow] = useState(false);

    // Toggle the expansion state
    const handaleShowData = () => {
        setShow(!show)
    }


    return (
        <div className="container mx-auto bg-white p-4">
            {/* This part is always visible */}
            <div>
                <p>
                    Embodying centuries of history, our product is a testament to timeless craftsmanship. With origins dating back to the 1500s, each piece has been designed to capture the essence of classic elegance while transitioning seamlessly into the digital age. Perfect for those who appreciate the blend of tradition and modernity, our product is both a nod to the past and a step into the future.
                </p>
                <br />
                <p>
                    From the age of print to the dawn of the digital era, we have consistently led the way in innovation. As pioneers in the industry, we’ve embraced every leap forward, whether it was the rise of desktop publishing or the evolution of e-commerce. Our platform combines cutting-edge technology with a commitment to provide a seamless shopping experience that honors the traditions of quality craftsmanship..
                </p>
                <br />
                <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
            </div>
            <br />


            <div className={`transition-all duration-500  overflow-hidden ${show ? 'max-h-screen' : 'max-h-0'} mt-5 `}>
                <h1 className="text-3xl">Whay MegaMart ?</h1>
                <br />
                <p>
                    Our journey began over five centuries ago, evolving with the times while staying true to our roots in craftsmanship and innovation. From the printing press to modern digital platforms, we’ve embraced every leap in technology. Our commitment to quality is timeless, ensuring that no matter how the industry changes, our products remain the standard. Discover the heritage and passion behind every item we offer, crafted with care and precision for the modern shopper
                </p>
            </div>
            <div className="text-center text-xl font-serif my-4">
                <button className="btn btn-outline" onClick={handaleShowData}>
                    {show ? "See Less" : "See More..."}
                </button>
            </div>

            {/* This part is hidden by default and shown only when 'See More' is clicked */}
            {/* <div className={`${isExpanded ? 'block' : 'hidden'} mt-5`}>
             
            </div>

            {/* Button to toggle visibility */}
            {/* <div className="text-center mt-4">
                <button
                    onClick={handleToggle}
                    className="text-black hover:text-blue-700 font-bold"
                >
                    {isExpanded ? 'See Less' : 'See More'}
                </button>
            </div>  */}
        </div>
    );
};

export default HomeDescText;