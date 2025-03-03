import { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { newsData } from "./newsData";
import Footer from "../../../components/footer/Footer";

const NewsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Get current items for the page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem);

    // Pagination logic
    const totalPages = Math.ceil(newsData.length / itemsPerPage);

    return (
        <>
            <section className="py-12 px-6 lg:px-20 bg-white text-black min-h-screen">
                <div className="md:max-w-[80%] mx-auto">

                    {/* News Grid */}
                    <div className="grid md:grid-cols-3 gap-8 ">
                        {currentItems.map((news) => (
                            <div key={news.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:scale-105 p-2">
                                {/* Image with overlay label */}
                                <div className="relative">
                                    <h3 className=" font-semibold heroContent">{news.title}</h3>
                                    <p className="text-gray-500 text-xs flex items-center pb-4">
                                        <FaRegClock className="mr-1" /> {news.author} • {news.date}
                                    </p>

                                    <img src={news.image} alt={news.title} className="w-full h-44 object-cover rounded-t-lg" />
                                    <div className="absolute bottom-1 left-2 bg-white text-gray-800 px-2 py-1 text-xs font-semibold rounded">
                                        {news.categoryLabel}
                                    </div>
                                    <div className="absolute bottom-1 right-2 bg-white text-gray-800 px-2 py-1 text-xs font-semibold rounded">
                                        {news.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-2">
                                    <p className="text-sm Descriptions">{news.description}</p>
                                    {/* Tags */}
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {news.tags.map((tag, index) => (
                                            <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 text-xs rounded-full">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-8 flex justify-start items-center space-x-3">
                        {[...Array(totalPages)].map((_, index) => {
                            const pageNumber = index + 1;
                            return (
                                <button
                                    key={pageNumber}
                                    onClick={() => setCurrentPage(pageNumber)}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold transition-all
          ${currentPage === pageNumber ? "bg-black text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}
                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
};

export default NewsList;
