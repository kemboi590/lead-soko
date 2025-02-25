import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import icon from "../../images/icon.png";
import { MdStarRate } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 w-full mt-3 lg:w-[75%] mx-auto">
            <div className="container mx-auto relative lg:px-12 px-4">
                {/* Footer Links (Left-Aligned, Tighter Spacing) */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* ENROLL NOW */}
                    <div className="text-left">
                        <h4 className="font-semibold mb-2">ENROLL NOW</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#">Read Testimonials</a></li>
                            <li><a href="#">Book a consultation</a></li>
                            <li><a href="#">Support center</a></li>
                        </ul>
                    </div>

                    {/* PARTNER WITH US */}
                    <div className="text-left">
                        <h4 className="font-semibold mb-2">PARTNER WITH US</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#">Become a member</a></li>
                            <li><a href="#">Explore Programs</a></li>
                            <li><a href="#">Accelerate Growth</a></li>
                        </ul>
                    </div>

                    {/* CONTACT FACILITATORS */}
                    <div className="text-left">
                        <h4 className="font-semibold mb-2">CONTACT FACILITATORS</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Expert Advice</a></li>
                            <li><a href="#">Resource Library</a></li>
                            <li><a href="#">Get in Touch 👋</a></li>
                        </ul>
                    </div>
                </div>

                {/* Top Section (Trust Indicators) - Horizontal Alignment */}
                <div className="flex flex-col lg:flex-row justify-start gap-4 mb-8 mt-8 lg:mt-5 lg:order-none order-2">
                    <button className="bg-gray-800 px-4 py-2 rounded-lg flex items-center justify-between w-full lg:w-48">
                        <span className="text-sm">1-800-D2C</span>
                        <span className="text-yellow-400 text-xs">Recommended Tool</span>
                    </button>
                    <button className="bg-gray-800 px-4 py-2 rounded-lg flex items-center justify-center w-full lg:w-48">
                        <span className="text-sm flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <MdStarRate key={i} className="text-yellow-400" size={24} />
                            ))}
                            Read our Reviews
                        </span>
                    </button>
                    <button className="bg-gray-800 px-4 py-2 rounded-lg flex items-center justify-center w-full lg:w-48">
                        <span className="text-sm flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <MdStarRate key={i} className="text-orange-900" size={24} />
                            ))}
                            Reviewed on Clutch
                        </span>
                    </button>
                </div>

                {/* Adviser Button - Top Right Overlap */}
                <div className="absolute top-0 right-0 mt-[-20px] mr-8">
                    <button className="w-28 h-28 bg-blue-600 text-white rounded-full flex flex-col items-center justify-center shadow-lg">
                        📞 <span className="text-sm text-center">Talk to an adviser?</span>
                    </button>
                </div>

                {/* Terms & Conditions and Private Statement */}
                <div className="mt-8 flex flex-col gap-2 justify-center items-center">
                    <a href="#" className="text-gray-400 text-sm">Terms & conditions</a>
                    <a href="#" className="text-gray-400 text-sm">Private statement</a>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-6 flex flex-col lg:flex-row items-center justify-center gap-8">
                    {/* Branding */}
                    <div className="flex items-center gap-4 mb-4 justify-center mt-3">
                        <span className="text-lg font-bold">
                            <img src={icon} alt="Leadsoko" className="h-8 w-auto" />
                        </span>
                        <span className="text-gray-500 text-sm">All rights © Leadsoko</span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-row gap-4 items-center justify-center">
                        <div className="flex items-center gap-2">
                            <FaInstagram className="text-white text-2xl cursor-pointer" />
                            <span className="text-white cursor-pointer">Instagram</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaYoutube className="text-white text-2xl cursor-pointer" />
                            <span className="text-white cursor-pointer">YouTube</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaLinkedin className="text-white text-2xl cursor-pointer" />
                            <span className="text-white cursor-pointer">LinkedIn</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;