import TeamCollaboration from "../../images/TeamCollaboration.jpeg";
import Businessman from "../../images/Businessman.avif";
import Professional from "../../images/Professional.png";
import Footer from "../../components/footer/Footer";

const SignupSection = () => {
    return (
        <>
            <section className="bg-[#eff4f8] px-6 lg:px-20 rounded-xl mx-auto mt-12 w-full lg:w-[75%]">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
                            Partner with Us for Powerful, <br className="hidden sm:block" />
                            Results-Driven Marketing Strategies
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Keep up to date with technology and innovation, now and in the future.
                        </p>

                        {/* Signup Form */}
                        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="border rounded-md px-4 py-2 w-full sm:max-w-md"
                            />
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-md whitespace-nowrap w-full sm:w-auto">
                                Sign Up
                            </button>
                        </div>

                        {/* Terms & Conditions */}
                        <p className="text-gray-500 text-sm mt-2">
                            By clicking Sign Up, you're confirming that you agree with our{" "}
                            <a href="#" className="text-blue-600 font-semibold underline">
                                Terms and Conditions.
                            </a>
                        </p>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative flex justify-center items-center h-[350px] sm:h-[400px] w-full">
                        {/* Main Image */}
                        <img
                            src={Businessman}
                            alt="Businessman"
                            className="w-40 sm:w-48 h-52 sm:h-60 object-cover rounded-xl shadow-lg absolute top-0 sm:right-10 transform sm:translate-y-4"
                        />

                        {/* Bottom Left Image */}
                        <img
                            src={TeamCollaboration}
                            alt="Team Collaboration"
                            className="w-44 sm:w-56 h-36 sm:h-40 object-cover rounded-xl shadow-lg absolute bottom-0 left-2 sm:left-4 transform sm:-translate-y-4"
                        />

                        {/* Small Top Right Image */}
                        <img
                            src={Professional}
                            alt="Professional"
                            className="w-24 sm:w-28 h-28 sm:h-32 object-cover rounded-xl shadow-lg absolute top-4 sm:top-6 right-0 sm:transform sm:translate-x-4"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default SignupSection;
