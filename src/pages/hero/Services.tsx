import { services } from "../servicesData";
import Carousel from "./Carousel";

export default function Services() {
    return (
        <>
            <section className="mx-auto py-16 px-6 text-center lg:w-[75%]">
                {/* Heading Section */}
                <h3 className="text-sm font-semibold tracking-widest text-gray-500">
                    OUR SERVICES
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                    Elevate Your Brand with Leadsoko To{" "}
                    <span className="text-black">#1Market Trusted Voice</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Leadsoko offers a world of digital marketing possibilities. From new to
                    existing enterprise, we've got you covered. Join us and unlock your
                    marketing potential today.
                </p>

                {/* Services Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex justify-start">
                                <div className="w-10 h-10 border-2 border-blue-500 rotate-45"></div>
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-gray-900">
                                “{service.title}”
                            </h3>
                            <p className="mt-2 text-gray-600">{service.description}</p>
                            <a
                                href={service.linkHref}
                                className="mt-4 inline-block text-blue-600 font-medium hover:underline"
                            >
                                {service.linkText}
                            </a>
                        </div>
                    ))}
                </div>
            </section>
            <Carousel />
        </>

    );
}
