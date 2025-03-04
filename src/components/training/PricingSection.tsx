import { FaPlay } from "react-icons/fa";
import pricingImage from "../../assets/images/training/pricing.webp"

const PricingSection = () => {
    return (
        <section className="md:max-w-[70%]  mx-auto px-4 py-12">
            {/* Pricing Heading */}
            <div className="text-blue-600 font-semibold text-sm mb-2">Pricing</div>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                How Much Do LEADSOKO's Coaching <br /> and Training Services Cost?
            </h2>

            {/* Video Placeholder */}
            <div className="mt-6 relative rounded-lg overflow-hidden shadow-lg">
                <img
                    src={pricingImage}
                    alt="Coaching and Training Video"
                    className="w-[35%] h-auto"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition">
                    <FaPlay className="text-white text-3xl" />
                </button>
            </div>

            {/* Pricing Description */}
            <p className="mt-6 py-2 text-xl lg:text-3xl;">
                Our coaching and training services can vary with respect to costs, as
                there are many factors that will drive the overall budget.
            </p>

            {/* Factors List */}
            <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex items-start">
                    <span className="text-green-500">✔</span>
                    <span className="ml-2 NormalText">The size and scale of your team</span>
                </li>
                <li className="flex items-start">
                    <span className="text-green-500">✔</span>
                    <span className="ml-2 NormalText">
                        The speed at which you need to achieve results
                    </span>
                </li>
                <li className="flex items-start">
                    <span className="text-green-500">✔</span>
                    <span className="ml-2 NormalText">
                        Current or available staffing and software resources
                    </span>
                </li>
            </ul>

            {/* Pricing Range */}
            <p className="mt-6 NormalText">
                With that in mind, budgets will range from{" "}
                <strong>$3,500 per month</strong> for smaller organizations just getting
                started, all the way up to <strong>$25,000+ per month</strong> for
                larger organizations that require more coaching and training. A typical
                client, on average, will invest around <strong>$10,000 per month</strong>.
            </p>

            {/* Call to Action */}
            <p className="mt-4 CardText">
                You can view more specific price, plan and budget details for these
                services (as well as our other services) on our{" "}
                <a href="#" className="text-blue-600 font-semibold underline">
                    pricing page
                </a>
                .
            </p>

            <div className="mt-6">
                <a
                    href="#"
                    className="inline-block bg-blue-600 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
                >
                    View full pricing details & breakdown →
                </a>
            </div>
        </section>
    );
};

export default PricingSection;
