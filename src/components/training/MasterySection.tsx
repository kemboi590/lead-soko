import testimonial from "../../assets/images/training/testimonial.jpg"

export const MasterySection = () => {
    return (
        <section className="md:w-[90%] mx-auto px-6 md:px-24 py-12">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
                Is They Ask, You Answer Mastery Right for You?
            </h2>

            {/* Video Button */}
            <div className="mt-4 flex items-center gap-4  bg-gray-100 p-4 rounded-lg shadow-sm">
                <img
                    src={testimonial}
                    alt="Watch Is It Right For You"
                    className="w-16 h-16 rounded-md object-cover"
                />
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                    </svg>
                    Watch Is It Right For You
                </button>
            </div>

            {/* Fit Criteria */}
            <h3 className="mt-8 text-xl lg:text-3xl  font-bold text-gray-900">
                Our program may be a good fit for you if you’re facing any of the following:
            </h3>

            <div className="mt-4 grid md:grid-cols-2 gap-4 md:gap-12 text-gray-700 md:w-[60%] CardText">
                <ul className="space-y-2 ">
                    <li>Not getting enough leads</li>
                    <li>Marketing strategy seems a bit lost or without a clear direction</li>
                    <li>Company has plateaued in revenue and size</li>
                    <li>Having trouble communicating what you do with your audience</li>
                    <li>Sales team is struggling to adapt to today’s digital buyer</li>
                </ul>
                <ul className="space-y-2">
                    <li>Aren’t closing deals (or are closing them too slowly)</li>
                    <li>Want to use AI but aren’t sure where to get started</li>
                    <li>Having trouble retaining clients</li>
                    <li>Spending on ads, but not seeing results</li>
                    <li>Feel like you’re not getting the value out of HubSpot and other tools</li>
                </ul>
            </div>

            {/* Leadership Expectations */}
            <h3 className="mt-8 text-xl lg:text-3xl  font-bold text-gray-900">
                Leadership Expectations
            </h3>
            <p className="mt-2 text-gray-700 leading-relaxed md:w-[60%] NormalText ">
                It’s critical to note our best clients have the most aware and engaged CEOs.
                Although we don’t expect your CEO to be at every meeting, we do expect them
                to attend our quarterly planning sessions. They should be aware, engaged,
                and invested in the entire They Ask, You Answer initiative. If you are unable
                to make this commitment, then we won’t be a good long-term partner and fit.
            </p>

            {/* Mastery Program Disclaimer */}
            <h3 className="mt-8 text-xl lg:text-3xl font-bold text-gray-900">
                Our Mastery program is NOT for everyone.
            </h3>
            <p className="mt-2 text-gray-700 leading-relaxed md:w-[60%] NormalText">
                Some businesses shy away from feedback, coaching, and candid performance assessments.
                Others flourish in an environment of honesty, transparency, and accountability, craving
                a structured framework and the push to step out of their comfort zones. If you identify
                more with the first group, we’re likely not the best fit for you — and that’s perfectly okay.
            </p>
        </section>
    );
};
