import { FaPlay } from "react-icons/fa";
import testimonial from "../../assets/images/training/testimonial.jpg"
import { FaArrowRight } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const coaches = [
    {
        name: "Chris Duprey",
        role: "Chief Customer Officer",
        image: testimonial,
        linkedin: "#",
        bio: "#",
    },
    {
        name: "Allison Riggs",
        role: "Head Coach",
        image: testimonial,
        linkedin: "#",
        bio: "#",
    },
    {
        name: "Brian Casey",
        role: "Head Coach",
        image: testimonial,
        linkedin: "#",
        bio: "#",
    },
];

export const ProgramPage = () => {
    return (
        <div className="bg-white px-6 py-12 lg:px-16">
            {/* Duration Section */}
            <div className="md:w-[80%] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-700 pb-4">
                    What Is the Duration of the Program?
                </h2>

                {/* Video Button */}
                <div className="mt-4 flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-sm">
                    <img
                        src={testimonial}
                        alt="Video Thumbnail"
                        className="w-20 h-16 object-cover rounded"
                    />
                    <button className="flex items-center gap-2 text-blue-700 font-semibold">
                        <FaPlay className="text-gray-700" />
                        Watch the Duration
                    </button>
                </div>

                {/* Description */}
                <p className="mt-4 NormalText">
                    Our program requires a commitment of 18 months to fully experience the
                    program’s benefits through training, feedback, and continuous
                    reinforcement. If at any point you feel like you’re not getting value,
                    you can opt out of the program. At the same time, if we feel like
                    you’re not doing what you need to do to get value, we will end the
                    engagement at that time.
                </p>
            </div>

            {/* Coaches Section */}
            <div className="mt-12 md:w-[80%] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
                    Who Will I Be Working With?
                </h2>
                <p className="mt-3 NormalText">
                    You’ll be aligning with a coach who fully grasps the challenges you
                    confront daily. Just like you and your team, they too are responsible
                    for closing deals and managing their own book of business; they don’t
                    merely instruct, but also 'walk the walk.'
                </p>
            </div>

            {/* Coaches Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:w-[80%] mx-auto">
                {coaches.map((coach, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-4 text-center">
                        {/* Profile Image */}
                        <div className="relative">
                            <img
                                src={coach.image}
                                alt={coach.name}
                                className="w-full h-56 object-cover rounded-lg"
                            />
                            <a
                                href={coach.linkedin}
                                className="absolute bottom-3 left-3 bg-white p-2 rounded-full shadow-md"
                            >
                                <CiLinkedin className="text-blue-600 text-2xl" />
                            </a>
                        </div>

                        {/* Details */}
                        <h3 className="text-lg font-bold text-gray-900 mt-3">{coach.name}</h3>
                        <p className="text-gray-600">{coach.role}</p>

                        {/* Bio Link */}
                        <a
                            href={coach.bio}
                            className="text-blue-600 font-semibold mt-2 inline-block"
                        >
                            Read Full Bio
                            <FaArrowRight className="inline-block" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
