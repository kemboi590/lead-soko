import { useEffect, useRef } from "react";
import msLogo from "../../images/mslogo.jpg";
import NewsSection from "./News/11.NewsSection";

const brands = [msLogo, msLogo, msLogo, msLogo, msLogo];

const TrustedBrands = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollSpeed = 1; // Adjust speed

        const scrollLogos = () => {
            if (scrollContainer) {
                scrollContainer.scrollLeft += scrollSpeed;
                scrollAmount += scrollSpeed;

                if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                    scrollAmount = 0;
                }
            }
        };

        const interval = setInterval(scrollLogos, 30); // Adjust speed

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="py-10 px-6 lg:px-8 global-container mx-auto">
                <h2 className="text-center text-2xl font-semibold mb-6">
                    Trusted by Leading Brands
                </h2>
                <div
                    ref={scrollRef}
                    className="relative overflow-hidden whitespace-nowrap scrollbar-hide"
                >
                    <div className="flex space-x-8 justify-center items-center">
                        {/* Duplicate logos for smooth looping */}
                        {[...brands, ...brands].map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt="Brand Logo"
                                className="h-16 w-auto sm:h-20 md:h-24 lg:h-32 xl:h-40"
                            />
                        ))}
                    </div>
                </div>
            </section>
            <NewsSection />
        </>

    );
};

export default TrustedBrands;