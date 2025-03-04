import testimonial from "../../assets/images/training/testimonial.jpg"


export const SuccessStory = () => {
    return (
        <section className="max-w-[70%] mx-auto px-6 py-12">
            {/* Section Title */}
            <h3 className="text-blue-600 font-semibold text-sm">
                | Results & Success Stories
            </h3>

            {/* Heading & Video */}
            <div className="flex flex-col md:flex-row justify-between items-start mt-2">
                <div className="md:w-2/3 ">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Improvement Firm Bucks The Trend and Commits to Buyer Education
                    </h2>
                    <p className="mt-2 text-gray-700 NormalText ">
                        Southwest Exteriors is a home services company focused <br /> on windows and siding.
                    </p>
                </div>

                <div className="mt-4 md:mt-0">
                    <div className="relative w-48 h-32 md:w-56 md:h-36 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={testimonial}
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover"
                        />
                        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Challenge | Solution | Result */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
                {/* Challenge */}
                <div className="text-center md:pr-6 last:border-r-0">
                    <div className="flex justify-center mb-2">
                        <span className="text-blue-600 text-3xl">💬</span>
                    </div>
                    <h4 className="font-bold text-lg text-gray-900">Challenge</h4>
                    <p className="mt-2 text-sm CardText text-left">
                        Southwest Exteriors exists in a highly competitive market, going up against
                        national brands and cost-cutting local outfits. But despite the competition
                        in the home improvement industry, no one seemed to be putting buyers first.
                        The hard-sell approach created a trust deficit that kept buyers on edge.
                    </p>
                </div>

                {/* Solution */}
                <div className="text-center md:pr-6 last:border-r-0">
                    <div className="flex justify-center mb-2">
                        <span className="text-blue-600 text-3xl">🛠️</span>
                    </div>
                    <h4 className="font-bold text-lg text-gray-900">Solution</h4>
                    <p className="mt-2 text-sm CardText text-left">
                        Southwest Exteriors exists in a highly competitive market, going up against
                        national brands and cost-cutting local outfits. But despite the competition
                        in the home improvement industry, no one seemed to be putting buyers first.
                        The hard-sell approach created a trust deficit that kept buyers on edge.
                    </p>
                </div>

                {/* Result */}
                <div className="text-center md:pr-6">
                    <div className="flex justify-center mb-2">
                        <span className="text-blue-600 text-3xl">📈</span>
                    </div>
                    <h4 className="font-bold text-lg text-gray-900">Result</h4>
                    <p className="mt-2 text-sm CardText text-left">
                        Southwest Exteriors exists in a highly competitive market, going up against
                        national brands and cost-cutting local outfits. But despite the competition
                        in the home improvement industry, no one seemed to be putting buyers first.
                        The hard-sell approach created a trust deficit that kept buyers on edge.
                    </p>
                </div>
            </div>
        </section>
    );
};
