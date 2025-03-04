import testimonial from "../../assets/images/training/testimonial.jpg";

export const Testimonial2 = () => {
    return (
        <section className="relative bg-white shadow-lg rounded-lg overflow-hidden mx-auto mt-10 max-w-[90%]">

            <div className="flex flex-col md:flex-row items-center">
                {/* Left - Text Content */}
                <div className="p-6 md:p-12 md:w-2/3">
                    <p className="text-gray-900 text-xl md:text-2xl font-bold">
                        “I love the fact that we invested in this.”
                    </p>
                    <p className="text-gray-700 leading-relaxed text-xl md:text-3xl mt-3">
                        “Initially, we saw an increase of about 3 points in our close rate,
                        and an increase of about $3,000 in our average sale size.”
                    </p>
                    <div className="mt-4">
                        <span className="font-bold text-gray-900">Ryan Shutt</span>,
                        <span className="text-gray-600"> CEO, Southwest Exteriors</span>
                    </div>
                </div>

                {/* Right - Video Thumbnail with Slanted Effect */}
                <div className="relative w-full md:w-1/3 overflow-hidden">
                    <div className="relative">
                        <img
                            src={testimonial}
                            alt="Testimonial Video"
                            className="w-full h-full object-cover transform origin-bottom-right rotate-2 scale-105"
                        />
                        {/* Play Button */}
                        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition">
                            <div className="bg-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform">
                                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
