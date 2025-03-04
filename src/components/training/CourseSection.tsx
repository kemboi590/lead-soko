import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import courseIMG from "../../assets/images/training/course.jpg";

// Course Data
const courses = [
    {
        id: 1,
        title: "Bringing They Ask, You Answer to Your Organization",
        author: "Bob Ruffolo",
        image: courseIMG,
    },
    {
        id: 2,
        title: "They Ask, You Answer Fundamentals with Marcus Sheridan",
        author: "Marcus Sheridan",
        image: courseIMG,
    },
    {
        id: 3,
        title: "What a High Performing They Ask, You Answer Company Looks Like",
        author: "Bob Ruffolo",
        image: courseIMG,
    },
    {
        id: 4,
        title: "Bringing They Ask, You Answer to Your Organization",
        author: "Bob Ruffolo",
        image: courseIMG,
    },
    {
        id: 5,
        title: "They Ask, You Answer Fundamentals with Marcus Sheridan",
        author: "Marcus Sheridan",
        image: courseIMG,
    },
    {
        id: 6,
        title: "What a High Performing They Ask, You Answer Company Looks Like",
        author: "Bob Ruffolo",
        image: courseIMG,
    },
];

export const CourseSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Scroll Handler
    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="md:max-w-[80%] mx-auto mt-8 p-4">
            {/* Title */}
            <h2 className="text-blue-600 font-semibold">Courses & Additional Insights</h2>
            <h1 className="text-3xl font-bold mt-1">Free Resources to Get You Started</h1>

            {/* Scroll Buttons */}
            <div className="relative mt-6">
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
                >
                    <FaChevronLeft size={20} />
                </button>

                {/* Course Cards */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-10"
                >
                    {courses.map((course) => (
                        <div key={course.id} className="min-w-[300px] flex-shrink-0 bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <p className="text-gray-500 text-sm">📚 Course</p>
                                <h3 className="text-lg font-bold">{course.title}</h3>
                                <p className="mt-2 text-gray-600">👤 {course.author}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
                >
                    <FaChevronRight size={20} />
                </button>
            </div>
        </section>
    );
};
