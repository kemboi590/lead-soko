import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import NewsList from "./NewsList";

const MoreNews = () => {
    return (
        <>
            <Navbar />
            <section className="bg-[#070606] text-white py-12 md:py-24 px-6 lg:px-20 mt-24 global-container mx-auto">
                <div className="mx-auto md:max-w-[80%] ">
                    <h1 className="text-4xl md:text-5xl font-bold md:mb-12">Latest News & Insights</h1>

                    <div className="mt-6 flex flex-col sm:flex-row justify-self-start items-center gap-8 text-center">
                        <Link to="/schedule-call">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                                Talk to our Experts <span>↗</span>
                            </button>
                        </Link>
                        <p className=" NormalText">
                            Here’s how our marketing advisors can bring your idea to life.
                        </p>
                    </div>
                </div>
            </section>
            <NewsList />
        </>
    );
};

export default MoreNews;
