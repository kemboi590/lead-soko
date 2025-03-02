import MarketingFunnel from "./8.MarketingFunnel";
import { PiArrowDownLight } from "react-icons/pi";

const StepsSection = () => {
    return (
        <>
            <section className="py-12 px-6 lg:px-8 mx-auto flex flex-col md:flex-row items-center gap-10 border-b-1 border-gray-700 mb-5 global-container">
                {/* Left Side: Text & Button */}
                <div className="md:w-1/2 text-left">
                    <h3 className="font-semibold  tracking-wide uppercase NormalText">
                        How It Works
                    </h3>
                    <h2 className="text-3xl font-bold text-neutral mt-2">
                        Acquire loyal clients that pay using our proven 3-step process:
                    </h2>

                    <button className="btn button mt-6">
                        Free Case Evaluation <span className="">
                            <PiArrowDownLight size={26} />
                        </span>
                    </button>
                </div>

                {/* Right Side: 3-Step Process */}
                <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Step 1 */}
                    <div className="text-center">
                        <div className="flex justify-center">
                            <div className="w-12 h-12 border-2 border-gray-800 rounded-md flex items-center justify-center">
                                {/* Replace with actual SVG or icon */}
                                <span className="text-xl font-bold">◇</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-4 NormalText">STEP 1</p>
                        <h3 className=" heroContent">Attract Customers</h3>
                        <p className="mt-2 CardText">
                            Unlock SEO, content quality, and social media promotion.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center">
                        <div className="flex justify-center">
                            <div className="w-12 h-12 border-2 border-gray-800 rounded-md flex items-center justify-center">
                                <span className="text-xl font-bold">◇</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-4 NormalText">STEP 2</p>
                        <h3 className=" heroContent">Convert Visitors</h3>
                        <p className="mt-2 CardText">
                            Optimize targeting, improve ad creatives, and refine bidding strategies.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center">
                        <div className="flex justify-center">
                            <div className="w-12 h-12 border-2 border-gray-800 rounded-md flex items-center justify-center">
                                <span className="text-xl font-bold">◇</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-4 NormalText">STEP 3</p>
                        <h3 className=" heroContent">Automate Success</h3>
                        <p className="mt-2 CardText">
                            Consider automation tools, delegate tasks, or hire a specialist.
                        </p>
                    </div>
                </div>
            </section>
            <MarketingFunnel />
        </>
    );
};

export default StepsSection;
