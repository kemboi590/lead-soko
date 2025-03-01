import phone from "../../assets/images/phone.jpg";
import TrustedBrands from "./10.TrustedBrands";
import { GoArrowUpRight } from "react-icons/go";
import { PiArrowDownLight } from "react-icons/pi";


const BusinessGrowthSection = () => {
    return (
        <>
            <section className="bg-gray-900 text-white py-16 px-6 global-container mx-auto mt-12 rounded-xl">
                {/* Heading Section */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-semibold">Get Ready To Grow Your Business?</h2>
                    <p className="text-gray-400 mt-4">
                        Backed by decades of industry experience, we have the marketing technology skills and
                        can-do attitude to take your business to the next level.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Card 1 */}
                    <div className="relative bg-gray-800 rounded-lg flex overflow-hidden">
                        <div className="w-1/2 p-6 flex flex-col justify-between">
                            <p className="text-sm font-medium">Leads Delivered</p>
                            <h3 className="text-2xl sm:text-3xl font-bold">$250.12</h3>
                            <span className="text-xl">
                                <GoArrowUpRight size={24} />
                            </span>
                        </div>
                        <div className="w-1/2 relative">
                            <img
                                src={phone}
                                alt="Leads"
                                className="absolute inset-0 w-full h-full object-cover opacity-40"
                            />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative bg-gray-800 rounded-lg flex overflow-hidden">
                        <div className="w-1/2 p-6 flex flex-col justify-between">
                            <p className="text-sm font-medium">In Revenue Generated</p>
                            <h3 className="text-2xl sm:text-3xl font-bold">130M</h3>
                            <span className="text-xl">
                                <GoArrowUpRight size={24} />
                            </span>
                        </div>
                        <div className="w-1/2 relative">
                            <img
                                src={phone}
                                alt="Revenue"
                                className="absolute inset-0 w-full h-full object-cover opacity-40"
                            />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative bg-gray-800 rounded-lg flex overflow-hidden">
                        <div className="w-1/2 p-6 flex flex-col justify-between">
                            <p className="text-sm font-medium">Searches</p>
                            <h3 className="text-2xl sm:text-3xl font-bold">150k</h3>
                            <span className="text-xl">
                                <GoArrowUpRight size={24} />
                            </span>
                        </div>
                        <div className="w-1/2 relative">
                            <img
                                src={phone}
                                alt="Searches"
                                className="absolute inset-0 w-full h-full object-cover opacity-40"
                            />
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center lg:w-[75%]  mx-auto">
                    <p className="text-xs font-semibold text-gray-400 uppercase">Seize Your Potential Now!</p>
                    <p className="mt-2 text-lg">
                        Schedule a call today to learn how LeadSoko can help you achieve your
                        marketing & sales goals.
                    </p>

                    <button className="btn btn-primary button mt-6 ">
                        Talk to Expert <span><PiArrowDownLight size={24} /></span>
                    </button>
                </div>

                {/* Additional Info */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-gray-400">
                    <div>
                        <h4 className="text-white font-semibold">Leads Delivered</h4>
                        <p className="mt-2">
                            Say goodbye to No leads. High-quality, targeted, multi-channel lead generation.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold">Searches</h4>
                        <p className="mt-2">Targeted, data-driven lead generation for any businesses anywhere.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold">In Revenue Generated</h4>
                        <p className="mt-2">Seamlessly boost revenue without extra cost; maximize growth.</p>
                    </div>
                </div>
            </section>
            <TrustedBrands />
        </>
    );
};

export default BusinessGrowthSection;