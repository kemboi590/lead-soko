import AmazonVisa from "../../images/AmazonVisa.webp";
import Banking from "../../images/Banking.webp";
import PayPal from "../../images/PayPal.avif";
import SignupSection from "./SignupSection";

const NewsSection = () => {
    return (
        <>
            <section className="py-12 px-6 lg:px-20 lg:w-[75%] mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-semibold">Latest News & Market Insights</h2>
                    <button className="btn btn-outline flex items-center gap-2">
                        VIEW ALL POSTS <span>↗</span>
                    </button>
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Large Main News */}
                    <div className="md:col-span-2">
                        <div className="rounded-lg overflow-hidden">
                            <img src={AmazonVisa} alt="Amazon vs Visa" className="w-full h-60 object-cover" />
                        </div>
                        <div className="mt-4">
                            <p className="text-blue-500 text-sm font-semibold">MARKETING</p>
                            <h3 className="text-xl font-semibold mt-1">
                                Amazon vs Visa: what does it mean for the BNPL market?
                            </h3>
                            <p className="text-gray-600 mt-2">
                                The thriving BNPL market has seen setbacks in recent months. Yet, could embedded lending be a
                                solution for lenders avoiding high-profile disputes...
                            </p>
                        </div>
                    </div>

                    {/* Side News */}
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <img src={Banking} alt="Banking" className="w-1/2 h-24 rounded-lg object-cover" />
                            <div className="w-1/2">
                                <p className="text-blue-500 text-sm font-semibold">MARKETING</p>
                                <h3 className="text-lg font-semibold">
                                    A Guide to Embracing Meaningful Change in Banking
                                </h3>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <img src={PayPal} alt="PayPal" className="w-24 h-24 rounded-lg object-cover" />
                            <div>
                                <p className="text-blue-500 text-sm font-semibold">BRANDING</p>
                                <h3 className="text-lg font-semibold">
                                    PayPal launches PYUSD stablecoin for payments and transfers
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tags Section */}
                <div className="mt-8 border-t pt-6">
                    <p className="text-gray-500 font-semibold mb-4">HOT TOPIC:</p>
                    <div className="flex flex-wrap gap-3">
                        <button className="btn btn-sm btn-outline"># Business News</button>
                        <button className="btn btn-sm btn-outline"># Marketing</button>
                        <button className="btn btn-sm btn-outline"># Innovation</button>
                        <button className="btn btn-sm btn-outline"># Payment</button>
                        <button className="btn btn-sm btn-outline"># Uncategorized</button>
                    </div>
                </div>
            </section>
            <SignupSection />
        </>

    );
};

export default NewsSection;