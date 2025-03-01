import { useNavigate } from "react-router-dom";
import AmazonVisa from "../../../assets/images/AmazonVisa.webp";
import Banking from "../../../assets/images/Banking.webp";
import PayPal from "../../../assets/images/PayPal.avif";
import SignupSection from "../12.SignupSection";
import { GoArrowUpRight } from "react-icons/go";

const NewsSection = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="py-12 px-6 lg:px-20 global-container mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Latest News & Market Insights
                    </h2>
                    <button
                        className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
                        onClick={() => navigate("/more-news")}
                    >
                        VIEW ALL POSTS <GoArrowUpRight size={18} />
                    </button>
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Large Main News */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src={AmazonVisa}
                                alt="Amazon vs Visa"
                                className="w-full h-[250px] object-cover rounded-lg"
                            />
                        </div>
                        <p className="text-blue-500 text-xs font-bold uppercase">
                            Marketing
                        </p>
                        <h3 className="text-xl font-semibold">
                            Amazon vs Visa: what does it mean for the BNPL market?
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            The thriving BNPL market has seen setbacks in recent months. Yet,
                            could embedded lending be a solution for lenders avoiding high-profile
                            disputes like that between Amazon and Visa? In November...
                        </p>
                    </div>

                    {/* Side News */}
                    <div className="space-y-6">
                        {/* First Small News */}
                        <div className="flex gap-4 items-center">
                            <img
                                src={Banking}
                                alt="Banking"
                                className="w-24 h-24 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                                <p className="text-blue-500 text-xs font-bold uppercase">
                                    Marketing
                                </p>
                                <h3 className="text-sm font-semibold leading-normal">
                                    A Guide to Embracing Meaningful Change in Banking
                                </h3>
                            </div>
                        </div>

                        {/* Second Small News */}
                        <div className="flex gap-4 items-center">
                            <img
                                src={PayPal}
                                alt="PayPal"
                                className="w-24 h-24 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                                <p className="text-blue-500 text-xs font-bold uppercase">
                                    Branding
                                </p>
                                <h3 className="text-sm font-semibold leading-normal">
                                    PayPal launches PYUSD stablecoin for payments and transfers
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hot Topics Section */}
                <div className="mt-8 border-t pt-6">
                    <p className="text-gray-500 font-semibold mb-4 text-sm">HOT TOPIC:</p>
                    <div className="flex flex-wrap gap-3">
                        {["Business News", "Marketing", "Innovation", "Payment", "Uncategorized"].map((topic, index) => (
                            <button
                                key={index}
                                className="px-3 py-1 border rounded-full text-gray-600 text-xs font-medium hover:bg-gray-100"
                            >
                                #{topic}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            <SignupSection />
        </>
    );
};

export default NewsSection;
