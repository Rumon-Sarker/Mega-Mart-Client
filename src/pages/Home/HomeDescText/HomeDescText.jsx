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
                    Custom CMS Block - Phasellus volutpat magna id mauris sodales et ornare urna molestie. Mauris non sem tincidunt, hendrerit nisi quis honcus felis. Suspendisse tempus mi durna in mattis nisl egestas quis. Proin nisi justo consectetur sed lacus an bibendum commodo diam. Praesent vulputate arcu eros quis accumsan odio malesuada at. Nulla vel ante magna. Cras ultricies nulla porttitor metus cursus malesuada. Sed convallis tempor ante ac semperos.
                </p>
                <br />
                <p>
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis fermentum turpis diam, sed volutpat nibh sagittis eget. Phasellus eu justo est. Curabitur tortor magna, faucibus ut nunc euismod, placerat placerat arcu. Morbi vitae mauris consequat, feugiat velit suscipit, imperdiet nunc. Integer rhoncus sagittis tincidunt. Suspendisse finibus quam euismod est mollis, quis lobortis arcu consectetur. Mauris tincidunt ante molestie, tempor turpis vitae, fermentum magna. Vestibulum mattis hendrerit vulputate. Sed pulvinar accumsan ex, et vulputate eros sagittis sit amet.
                </p>
                <br />
                <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
            </div>
            <br />


            <div className={`transition-all duration-500  overflow-hidden ${show ? 'max-h-screen' : 'max-h-0'} mt-5 `}>
                <h1 className="text-3xl">What is Lorem Ipsum ?</h1>
                <br />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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