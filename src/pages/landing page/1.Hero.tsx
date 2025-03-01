import { FaArrowRight } from "react-icons/fa";
import Navbar from '../../components/navbar/Navbar';
import hero from "../../assets/images/hero.webp"
import Stories from "./2.Stories";
import { MdStarRate } from "react-icons/md";


const Hero = () => {
    return (
        <>
            <Navbar />
            <section className="bg-white lg:py-12 py-10 px-4 lg:px-6 md:px-12 mt-22 lg:pb-22">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between global-container">
                    {/* Left Side */}
                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 lg:py-6">
                            Create a Flourishing Business in Any Economy
                        </h1>
                        <p className="text-gray-700 text-lg py-4">
                            <strong>Growing business revenue</strong> is challenging. We simplify the
                            process, making it <strong>more predictable, less stressful, and even enjoyable!</strong>
                        </p>
                        <button className="button btn">
                            Free Coaching Session <FaArrowRight className="ml-2" />
                        </button>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">REVIEWED ON</span>
                            <span className="text-lg font-bold text-blue-600">Clutch</span>
                            <span className="text-red-500">
                                {[...Array(5)].map((_, i) => (
                                    <MdStarRate key={i} className="inline-block" />
                                ))}
                            </span>
                            <span className="text-gray-500">5/5</span>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="md:w-[45%] mt-8 md:mt-0 relative w-600px">
                        <img
                            src={hero}
                            alt="Business Building"
                            className="rounded-2xl shadow-lg w-full object-contain h-full"
                        />
                        {/* <button className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-3 rounded-full">
                            <FaPlay className="w-5 h-5" />
                        </button> */}
                    </div>
                </div>
            </section>

            <Stories />
        </>
    );
};

export default Hero;