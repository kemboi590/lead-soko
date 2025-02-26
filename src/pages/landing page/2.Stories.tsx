import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import CEO from "../../images/ceo-bg.png";
import Services from "./services/3.Services";

const testimonials = [
    {
        id: 1,
        name: "Lubin Joseph",
        role: "Founder & CEO, LeadSoko",
        company: "Co-Founder, 21lab.co",
        quote:
            "In 2020, we wrote about $66K worth of business as a result of LeadSoko’s digital efforts. In 2021, we're already at $185K. We’ve seen such incredible growth.",
        image: CEO,
    },
    {
        id: 2,
        name: "Jane Doe",
        role: "Chief Marketing Officer",
        company: "Tech Innovators Inc.",
        quote:
            "LeadSoko has transformed our marketing strategy. We've seen a 50% increase in lead generation within the first quarter.",
        image: CEO,
    },
];

export default function Stories() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <section className="bg-black text-white py-12 px-6 rounded-xl relative global-container shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-evenly gap-8">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-52 h-60 object-cover rounded-lg lg:-mt-45 "
                        />                        
                    </div>

                    {/* Right Side - Quote & Details */}
                    <div className="flex-1 text-center md:text-left max-w-lg">
                        <p className="text-xl italic leading-relaxed">"{testimonials[currentIndex].quote}"</p>
                        <div className="mt-4">
                            <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                            <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                            <p className="text-gray-400">{testimonials[currentIndex].company}</p>
                        </div>

                        {/* View All Success Stories Button */}
                        <button className="mt-6 flex items-center gap-2 px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                            VIEW ALL SUCCESS STORIES
                            <ArrowUpRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute bottom-6 right-6 flex items-center gap-4">
                    <button
                        onClick={handlePrev}
                        className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                    >
                        <ArrowLeft className="text-white" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                    >
                        <ArrowRight className="text-white" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-6 flex gap-2">
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-500"
                                }`}
                        ></span>
                    ))}
                </div>
            </section>

            <Services />
        </>
    );
}
