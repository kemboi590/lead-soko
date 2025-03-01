import marketingFunnel from "../../assets/images/marketingFunnel.png";
import BusinessGrowthSection from "./9.BusinessGrowthSection";

const MarketingFunnel = () => {
    return (
        <>
            <section className="py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8 global-container mx-auto text-center">
                {/* Heading Section */}
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-900 max-w-4xl mx-auto leading-relaxed">
                    Everything we do and teach is based on simple, fundamental principles and habits
                    that improve a company’s sales and marketing results. If you and your team
                    commit to us, we promise that you will{" "}
                    <span className="font-bold">Attract, Convert</span> and{" "}
                    <span className="font-bold">Automate Customer Success</span>.
                </h2>

                {/* Image Section */}
                <div className="relative mt-8 sm:mt-12 flex justify-center">
                    <img
                        src={marketingFunnel}
                        alt="Marketing Funnel"
                        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl rounded-lg"
                    />
                </div>
            </section>
            <BusinessGrowthSection />
        </>
    );
};

export default MarketingFunnel;