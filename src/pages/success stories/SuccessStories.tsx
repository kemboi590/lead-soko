import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import SucessPhoto from "../../assets/images/successPhoto.png";
import Navbar from "../../components/navbar/Navbar";
import StoriesofSuccess from "./StoriesofSuccess";

const images = [
    SucessPhoto,
    SucessPhoto,
    SucessPhoto,
    SucessPhoto,
];

const SuccessStories = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === "left") {
                current.scrollLeft -= scrollAmount;
            } else {
                current.scrollLeft += scrollAmount;
            }
        }
    };

    return (
        <>

            <Navbar />
            <section className="bg-gray-100 py-12 px-2 md:px-20 text-center pt-28 lg:pt-32">
                <h2 className="text-3xl lg:text-5xl font-medium lg:mb-6">Success Stories</h2>
                <p className="mt-4 mb-6  NormalText">
                    We've helped hundreds of companies around the world achieve remarkable digital sales and marketing results. <br />
                    Below, we invite you to learn about their stories of incredible business growth and success, in their words.
                </p>

                {/* Scrollable Section */}
                <div className="relative max-w-[70%] mx-auto">
                    {/* Left Button */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                    >
                        <FaArrowLeft size={20} />
                    </button>

                    {/* Image Scroll Wrapper */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth md:px-10"
                    >
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="min-w-[500px] h-[250px] rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 object-fill"
                            >
                                <img src={img} alt={`Story ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                    >
                        <FaArrowRight size={20} />
                    </button>
                </div>

                {/* Call to Action */}
                <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="border-t w-24 hidden md:block"></div>
                    <p className="text-gray-700 NormalText">Ready to talk about how you can achieve similar results?</p>
                    <a
                        href="#"
                        className="btn btn-primary rounded-lg shadow-md button"
                    >
                        Start with a free coaching session <span>
                            <GoArrowUpRight size={20} />
                        </span>
                    </a>
                </div>
            </section>
            <StoriesofSuccess />
        </>
    );
};

export default SuccessStories;
