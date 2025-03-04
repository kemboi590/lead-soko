import { FaChalkboardTeacher, FaUsers, FaLaptop, FaLightbulb } from "react-icons/fa";
import { MdLeaderboard, MdOutlineGroupWork } from "react-icons/md";
import { IoCalendarSharp } from "react-icons/io5";
import { RiPresentationFill } from "react-icons/ri";

const trainingFormats = [
    {
        title: "Virtual Coaching & Training",
        description:
            "Virtual, bi-weekly hour-long coaching sessions, with in-person options (as needed). These sessions include role-plays, communication training, and call reviews.",
        icon: <FaChalkboardTeacher className="text-blue-600 text-4xl" />,
    },
    {
        title: "Subject Matter Expert (SME) Training Sessions",
        description:
            "These sessions help your internal team develop mastery of core skills related to all aspects of digital sales and marketing. Included is the review of your team’s progress and task completion, and lesson assignment to ensure further skill development.",
        icon: <FaLightbulb className="text-blue-600 text-4xl" />,
    },
    {
        title: "Leadership Coaching Sessions",
        description:
            "Review progress on quarterly priorities, initiatives, and learning objectives with your coach. This will also be a time to address impediments and decisions your company has made.",
        icon: <MdLeaderboard className="text-blue-600 text-4xl" />,
    },
    {
        title: "Group Training",
        description:
            "Members of your team will join groups with 3-4 individuals in similar roles at other organizations to discuss projects, troubleshoot issues, and give and receive feedback.",
        icon: <FaUsers className="text-blue-600 text-4xl" />,
    },
    {
        title: "Quarterly Planning Sessions",
        description:
            "Your quarterly planning sessions will utilize both scorecard and priority review to help you plan for achieving your upcoming goals. You will also brainstorm priorities as you develop your quarterly plan.",
        icon: <IoCalendarSharp className="text-blue-600 text-4xl" />,
    },
    {
        title: "Workshops",
        description:
            "Hands-on, immersive training that is tailored to the specific needs and challenges of each client. (Offered as needed virtually or in-person).",
        icon: <MdOutlineGroupWork className="text-blue-600 text-4xl" />,
    },
    {
        title: "Online Learning",
        description:
            "Our training programs are supported by online learning modules, tools, and assessments that reinforce key concepts.",
        icon: <FaLaptop className="text-blue-600 text-4xl" />,
    },
    {
        title: "Customized Engagement",
        description:
            "We work closely with our clients to develop a customized engagement plan that meets their unique needs and budget.",
        icon: <RiPresentationFill className="text-blue-600 text-4xl" />,
    },
];

export const TrainingFormats = () => {
    return (
        <section className="py-12 px-6 bg-[#FFFFF]">
            {/* Title Section */}
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold ">
                    What Is the Format for Coaching & Training?
                </h2>
                <p className=" mt-3 NormalText">
                    We use a mix of virtual, in-person, independent, and collaborative
                    mediums to coach and train your team. This includes:
                </p>
            </div>

            {/* Training Formats Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:w-[90%] mx-auto">
                {trainingFormats.map((format, index) => (
                    <div key={index} className="flex gap-4 items-start p-6 bg-white rounded-lg shadow-md">
                        {/* Icon */}
                        <div className="flex-shrink-0">{format.icon}</div>

                        {/* Content */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 NormalText">{format.title}</h3>
                            <p className="text-gray-600 mt-2 CardText">{format.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
