import testimonial from "../../assets/images/training/testimonial.jpg"


export const GetStartedSection = () => {
    return (
        <section className="md:max-w-[90%] mx-auto px-6 py-12">
            {/* Section Title */}
            <h3 className="text-blue-600 font-semibold text-sm">
                | How To Get Started
            </h3>

            {/* Content & Video */}
            <div className="flex flex-col md:flex-row justify-between items-start mt-2 gap-4">
                {/* Left Content */}
                <div className="md:w-2/3 md:ml-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        Take the First Step to They Ask, You Answer Mastery
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed md:w-[60%] NormalText ">
                        Book your free sales coaching session today, and discover how
                        LEADSOKO's sales training programs can help take your business
                        to the next level.
                        <br /><br />
                        <span className="font-bold">Not ready to talk just yet?</span> Then we suggest you{' '}
                        <a href="#" className="text-blue-600 font-semibold hover:underline">
                            download the 90-day They Ask, You Answer Starter Guide
                        </a>{' '}
                        which will allow you and your team to take the first steps towards
                        implementing They Ask, You Answer in your business.
                    </p>
                </div>

                {/* Right - Video Thumbnail */}
                <div className="w-full md:w-1/3">
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={testimonial}
                            alt="Leadsoko Coaching Video"
                            className="w-full object-cover"
                        />
                        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"></path>
                            </svg>
                        </button>
                        <p className="absolute bottom-2 left-2 text-white text-sm font-semibold">
                            What to expect on your call with a Leadsoko Coach
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
