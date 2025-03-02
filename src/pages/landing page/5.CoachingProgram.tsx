import SuccesStoryIMG from "../../assets/images/success-stories.jpg";
import videoRPT from "../../assets/images/hero.webp";
import RevenueSection from "./6.RevenueSection";

export default function CoachingProgram() {
    const successStories = [
        {
            id: 1,
            name: "Laura’s Story",
            quote: "We are excited to tap into Leadsoko’s network of entrepreneurs and startups in the Marketing arena.",
            image: SuccesStoryIMG
        },
        {
            id: 2,
            name: "Leon Isaac’s Story",
            quote: "As an early-stage startup, Leadsoko truly accelerated our business and made us part of a global network.",
            image: SuccesStoryIMG
        },
        {
            id: 3,
            name: "Sarah’s Story",
            quote: "Being surrounded by corporates, partners, and other startups is the place you want to be. No other place like it.",
            image: SuccesStoryIMG
        },
        {
            id: 4,
            name: "Sarah’s Story",
            quote: "Being surrounded by corporates, partners, and other startups is the place you want to be. No other place like it.",
            image: SuccesStoryIMG
        },
    ];

    return (

        <>
            <section className="bg-gray-900 text-white p-8 rounded-lg mx-auto shadow-lg global-container ">
                {/* Main Section */}
                <div className="flex flex-col md:flex-row items-center justify-between lg:px-8">
                    {/* Left Side - Text & CTA */}
                    <div className="max-w-lg">
                        <h2 className="text-4xl font-bold">Join Our Coaching Program</h2>
                        <p className="mt-2 NormalText">
                            This is your time to be heard and understood — to talk about the sales, marketing, or other
                            business challenges that have been keeping you up at night.
                        </p>
                        <a
                            href="#"
                            className="button bg-blue-600 text-white mt-4 inline-block"
                        >
                            Free Coaching Session ↗
                        </a>
                    </div>

                    {/* Right Side - Video Thumbnail */}
                    <div className="relative mt-6 md:mt-0">
                        <img
                            src={videoRPT}
                            alt="Coaching Video"
                            className="w-80 h-64 object-cover rounded-lg shadow-md"
                        />
                        <button className="absolute inset-0 flex items-center justify-center">
                            <span className="w-12 h-12 bg-black/60 backdrop-blur-lg rounded-full flex items-center justify-center">
                                ▶
                            </span>
                        </button>
                        <p className="absolute -top-6 left-8 italic text-sm text-gray-400">Don’t skip the first step.</p>
                    </div>
                </div>

                {/* Success Stories */}
                <div className="mt-8 border-t border-gray-700 pt-6 lg:px-8">
                    <h3 className="text-lg font-semibold mb-4">SUCCESS STORIES</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {successStories.map((story) => (
                            <div key={story.id} className="bg-gray-800 rounded-lg p-4 shadow-sm">
                                <img src={story.image} alt={story.name} className="w-full h-28 object-cover rounded-md" />
                                <h4 className="mt-2 font-semibold italic underline">{story.name}</h4>
                                <p className=" text-sm CardText">{story.quote}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <RevenueSection />
        </>
    );
}
