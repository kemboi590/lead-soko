import msLogo from "../../assets/images/training/mslogo.jpg"

const partners = [
    { src: msLogo, alt: "Move Mobility" },
    { src: msLogo, alt: "Custom Built" },
    { src: msLogo, alt: "Southwest Exteriors" },
];

export const Partners = () => {
    return (
        <section className="bg-[#F6F9FC] py-6">
            <div className="container mx-auto flex justify-around items-center gap-8">
                {partners.map((partner, index) => (
                    <img
                        key={index}
                        src={partner.src}
                        alt={partner.alt}
                        className="h-16 object-contain"
                    />
                ))}
            </div>
        </section>
    );
};
