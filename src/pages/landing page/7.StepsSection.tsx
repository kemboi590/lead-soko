import MarketingFunnel from "./8.MarketingFunnel";

const StepsSection = () => {
    return (
        <>
            <section className="py-12 px-6 mx-auto flex flex-col md:flex-row items-center gap-10 border-b-1 border-gray-700 mb-5 global-container">
                {/* Left Side: Text & Button */}
                <div className="md:w-1/2 text-left">
                    <h3 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
                        How It Works
                    </h3>
                    <h2 className="text-3xl font-bold text-neutral mt-2">
                        Acquire loyal clients that pay using our proven 3-step process:
                    </h2>

                    <button className="button mt-6">
                        Free Case Evaluation <span className="ml-2">⬇</span>
                    </button>
                </div>

                {/* Right Side: 3-Step Process */}
                <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Step 1 */}
                    <div className="text-center">
                        <div className="flex justify-center">
                            <div className="w-12 h-12 border-2 border-gray-800 rounded-md flex items-center justify-center">
                                {/* Replace with actual SVG or icon */}
                                <span className="text-xl font-bold">◇</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">STEP 1</p>
                        <h3 className="font-semibold text-lg mt-1">Attract Customers</h3>
                        <p className="text-gray-600 mt-2 text-sm">
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
                        <p className="text-xs text-gray-500 mt-4">STEP 2</p>
                        <h3 className="font-semibold text-lg mt-1">Convert Visitors</h3>
                        <p className="text-gray-600 mt-2 text-sm">
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
                        <p className="text-xs text-gray-500 mt-4">STEP 3</p>
                        <h3 className="font-semibold text-lg mt-1">Automate Success</h3>
                        <p className="text-gray-600 mt-2 text-sm">
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
