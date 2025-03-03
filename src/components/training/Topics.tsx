import { topicsData } from "./topicsData";

export const Topics = () => {
    return (
        <section className="py-12 px-6 lg:px-20 global-container mx-auto mt-20 md:mt-24">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold mb-8 ">
                What Topics Are Covered?
            </h2>

            {/* Topics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 md:gap-12">
                {topicsData.map((topic) => (
                    <div key={topic.id} className="flex flex-col items-start gap-4">
                        {/* Icon */}
                        <img
                            src={topic.icon}
                            alt={topic.title}
                            className="w-14 h-14object-contain"
                        />

                        {/* Content */}
                        <div>
                            <h3 className=" font-semibold NormalText">{topic.title}</h3>
                            <p className=" BalancedText">{topic.description}</p>
                            <a href="#" className="text-[#3383FF] text-sm font-medium mt-2 inline-block BalancedText">
                                Learn More →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
