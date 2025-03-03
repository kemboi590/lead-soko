
import IMGG from "../../assets/images/hero.webp"
import StepsSection from "./7.StepsSection";
import { GoArrowUpRight } from "react-icons/go";

const RevenueSection = () => {
    return (
        <>
            <section className="bg-[#EFF4F8] py-10 md:py-20 px-6 rounded-xl global-container mx-auto ">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-neutral">How We Drive Revenue</h2>
                    <p className=" mt-4 NormalText">
                        Looking to power up your digital strategy? LeadSoko offers a wide
                        range of digital marketing services that work together to attract,
                        delight, and convert leads. Toss in our proprietary tech-powered suite
                        of tools, and your campaign is unbeatable.
                    </p>
                    <button className="button btn btn-primary mt-6">
                        Talk to an Expert? <span className="">
                            <GoArrowUpRight size={24} />
                        </span>
                    </button>
                </div>
                <div className="mt-8 flex justify-center">
                    <div className="relative w-full max-w-2xl">
                        <img
                            src={IMGG}
                            alt="How we drive revenue"
                            className="rounded-xl shadow-lg"
                        />
                        <button className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-full flex items-center">
                            ▶ <span className="ml-2">How we drive Revenue</span>
                        </button>
                    </div>
                </div>
            </section>
            <StepsSection />
        </>
    );
};

export default RevenueSection