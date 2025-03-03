import bookpen from "../../assets/images/training/bookpen.png";

const steps = [
    {
        title: "Book a Call With an LEADSOKO Coach",
        description:
            "You’ll speak directly with one of our certified, They Ask, You Answer coaches. You’ll be able to assess the coach’s fit to work with your team, and similarly, we’ll be assessing your fit for working with LEADSOKO to implement They Ask, You Answer.",
        buttonText: "Book a Call With an LEADSOKO Coach",
        highlight: true,
        image: bookpen
    },
    {
        title: "Kickoff and Planning",
        description:
            "Once an agreement is signed, your TAYA mastery engagement will then begin. Your coach will begin working with your leadership team to evaluate the current state of your organization, establish coaching and training schedules, and get you looped into all the tools (we provide) needed to be successful (LEADSOKO+).",
        highlight: false,
    },
    {
        title: "Training & Continuous Improvement",
        description:
            "Based on your unique needs, we’ll help you hire and onboard key roles like a content manager and a videographer. Then, we dive into personalized training in areas such as content creation, video production, HubSpot, and sales. Leadership benefits from bi-weekly coaching calls that zero in on accountability, strategic planning, and organizational priorities.",
        highlight: false,
    },
];

export const ProcessSteps = () => {
    return (
        <section className="py-12 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8">
                What Does the Process Look Like?
            </h2>
            <div className="space-y-8">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`flex items-start gap-4 ${step.highlight
                                ? "border-2 border-blue-500 p-6 rounded-lg relative bg-white shadow-lg"
                                : ""
                            }`}
                    >
                        {/* Blue Bullet */}
                        <div className="w-4 h-4 bg-blue-600 rounded-full mt-2" />

                        {/* Text Content */}
                        <div className="flex-1">
                            <h3 className="text-lg font-bold">{step.title}</h3>
                            <p className="text-gray-600 mt-2">{step.description}</p>

                            {/* Call to Action Button */}
                            {step.buttonText && (
                                <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
                                    {step.buttonText}
                                </button>
                            )}
                        </div>

                        {/* Image for Highlighted Step */}
                        {step.highlight && step.image && (
                            <div className="absolute top-6 right-6">
                                <img
                                    src={step.image}
                                    alt="Coaches"
                                    className="w-32 h-auto rounded-lg shadow-lg"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
