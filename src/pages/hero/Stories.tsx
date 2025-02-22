import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import CEO from "../../images/ceo-bg.png";
import Services from "./Services";

const testimonials = [
    {
        id: 1,
        name: "Jane Doe",
        role: "Chief Marketing Officer",
        company: "Tech Innovators Inc.",
        quote:
            "LeadSoko has transformed our marketing strategy. We've seen a 50% increase in lead generation within the first quarter.",
        image: CEO,
    },
    {
        id: 2,
        name: "John Smith",
        role: "Head of Sales",
        company: "SalesForce Solutions",
        quote:
            "Thanks to LeadSoko, our sales team is more efficient and effective. Our sales have increased by 30% in just six months.",
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
            <section className="bg-black text-white py-12 px-6 rounded-xl relative max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Image */}
                    <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-52 h-60 rounded-lg object-cover -mt-44"
                    />

                    {/* Testimonial Content */}
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-lg italic">"{testimonials[currentIndex].quote}"</p>
                        <p className="mt-4 font-bold">{testimonials[currentIndex].name}</p>
                        <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                        <p className="text-gray-400">{testimonials[currentIndex].company}</p>

                        {/* View All Success Stories Button */}
                        <button className="mt-6 flex items-center gap-2 px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                            VIEW ALL SUCCESS STORIES
                            <ArrowUpRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Arrows Positioned to the Right */}
                <div className="absolute bottom-6 right-6 flex items-center gap-4">
                    <button
                        onClick={handlePrev}
                        className="p-3 bg-gray-800 rounded-full hover:bg-gray-700"
                    >
                        <ArrowLeft className="text-white" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-3 bg-gray-800 rounded-full hover:bg-gray-700"
                    >
                        <ArrowRight className="text-white" />
                    </button>
                </div>
            </section>
            <Services />
        </>

    );
}
