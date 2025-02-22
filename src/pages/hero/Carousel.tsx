import { useState, useRef } from "react";
import { carouselData } from "./CarouselData";

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollToSlide = (index: number) => {
        setCurrentIndex(index);
        scrollRef.current?.scrollTo({
            left: index * scrollRef.current.clientWidth * 0.75, // Adjust scrolling
            behavior: "smooth",
        });
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto py-6 overflow-x-hidden">
            {/* Carousel Wrapper */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
            >
                {carouselData.map((item, index) => (
                    <div
                        key={item.id}
                        className="flex-shrink-0 w-3/4 lg:w-1/3 bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <div className="flex">
                            {/* Left Half - Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-1/2 object-cover rounded-l-xl"
                            />
                            {/* Right Half - Content */}
                            <div className="w-1/2 flex flex-col justify-center p-4">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <a href={item.link} className="mt-2 text-gray-600 hover:underline">
                                    ↗
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
                {carouselData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToSlide(index)}
                        className={`h-1.5 w-8 rounded-full transition ${currentIndex === index ? "bg-black" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}