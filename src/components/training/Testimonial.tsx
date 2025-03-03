import testimonial from "../../assets/images/training/testimonial.jpg"

export const Testimonial = () => {
    return (
        <section className="relative bg-white shadow-lg rounded-lg overflow-hidden mx-auto mt-10 global-container">
            <div className="flex flex-col md:flex-row items-center md:items-start md:px-22">
                {/* Left - Text Content */}
                <div className="p-8 md:p-12 md:w-2/3 ">
                    <p className=" text-gray-700 leading-relaxed text-xl md:text-3xl ">
                        “The skills that we've learned have <span className="font-bold">leadsoaked</span> our
                        business by making us very quick & nimble in the way we answer our customers.
                        It's <span className="font-bold">broadened</span> our horizon in what we can do with content.”
                    </p>
                    <div className="mt-auto pt-4">
                        <span className="font-bold text-gray-900">Richard Jones</span>, <span className="text-gray-600">CEO, MoveMobility</span>
                    </div>
                </div>

                {/* Right - Video Thumbnail */}
                <div className="relative w-full md:w-1/3 flex justify-center items-center">
                    <img
                        src={testimonial}
                        alt="Testimonial Video"
                        className="w-full h-auto object-cover rounded-r-lg"
                    />
                    {/* Play Button */}
                    <button className="absolute flex items-center justify-center bg-white shadow-md rounded-full p-4 hover:scale-105 transition-transform">
                        <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};
