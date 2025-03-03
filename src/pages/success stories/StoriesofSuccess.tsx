import { useState } from "react";
import { filters, stories } from "./StoriesData";
import Footer from "../../components/footer/Footer";


const StoriesofSuccess = () => {
    const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({
        companyType: [],
        industry: [],
        service: [],
    });

    const handleFilterChange = (category: string, value: string) => {
        setSelectedFilters((prev) => {
            const isSelected = prev[category].includes(value);
            return {
                ...prev,
                [category]: isSelected
                    ? prev[category].filter((item) => item !== value)
                    : [...prev[category], value],
            };
        });
    };

    const filteredStories = stories.filter((story) =>
        Object.keys(selectedFilters).every((category) =>
            selectedFilters[category].length === 0 ||
            selectedFilters[category].some((tag) => story.tags.includes(tag))
        )
    );

    return (
        <>
            <div className="flex flex-col md:flex-row gap-8 px-6 md:px-20 py-10 global-container bg-[#FFFFFF]">
                {/* Filters */}
                <aside className="md:w-1/4 w-full">
                    {Object.entries(filters).map(([category, items]) => (
                        <div key={category} className="mb-6">
                            <h3 className="text-lg font-semibold capitalize mb-2">Filter by {category.replace(/([A-Z])/g, " $1")}:</h3>
                            {items.map((item) => (
                                <label key={item} className="flex items-center gap-2 cursor-pointer text-gray-700">
                                    <input
                                        type="checkbox"
                                        checked={selectedFilters[category].includes(item)}
                                        onChange={() => handleFilterChange(category, item)}
                                        className="checkbox checkbox-sm checkbox-primary"
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>
                    ))}
                </aside>

                {/* Stories */}
                <div className="md:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16">
                    {filteredStories.length > 0 ? (
                        filteredStories.map((story) => (
                            <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                                <img src={story.image} alt={story.title} className="w-full h-48 object-cover " />
                                <div className="p-4">
                                    <h4 className="text-sm font-semibold text-gray-600">{story.company}</h4>
                                    <h3 className=" font-semibold NormalText">{story.title}</h3>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {story.tags.map((tag) => (
                                            <span key={tag} className="badge badge-outline">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center">No results found.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default StoriesofSuccess;
