import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";

const MoreNews = () => {
    return (
        <>
            <Navbar />
            <section className="bg-black text-white py-16 px-6 lg:px-20">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold">Latest News & Insights</h1>
                    <p className="text-gray-400 mt-4">
                        Here’s how our marketing advisors can bring your idea to life.
                    </p>
                    <div className="mt-6">
                        <Link to="/contact">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                                Talk to our Experts <span>↗</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MoreNews;
