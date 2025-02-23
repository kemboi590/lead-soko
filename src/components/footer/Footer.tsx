import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 lg:w-[75%] mt-3 mx-auto rounded-t-3xl">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                    {/* Contact Info */}
                    <div className="flex flex-col gap-4">
                        <button className="bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2">
                            <span className="text-sm">⚙️ 1-800-D2C</span>
                            <span className="text-yellow-400 text-xs">Recommended Tool</span>
                        </button>
                        <button className="bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2">
                            <span className="text-sm">⭐️⭐️⭐️⭐️⭐️ Read our Reviews</span>
                        </button>
                        <button className="bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2">
                            <span className="text-sm">⭐️⭐️⭐️⭐️⭐️ Reviewed on Clutch</span>
                        </button>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        <div>
                            <h4 className="font-semibold mb-2">ENROLL NOW</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#">Read Testimonials</a></li>
                                <li><a href="#">Book a consultation</a></li>
                                <li><a href="#">Support center</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">PARTNER WITH US</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#">Become a member</a></li>
                                <li><a href="#">Explore Programs</a></li>
                                <li><a href="#">Accelerate Growth</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">CONTACT FACILITATORS</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Expert Advise</a></li>
                                <li><a href="#">Resource Library</a></li>
                                <li><a href="#">Get in Touch 👋</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Floating Adviser Button */}
                    <div className="relative">
                        <div className="absolute -top-10 right-0">
                            <button className="w-28 h-28 bg-blue-600 text-white rounded-full flex flex-col items-center justify-center shadow-lg">
                                📞 <span className="text-sm">Talk to an adviser?</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between items-center">
                    {/* Branding */}
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">⚡ leadsoko</span>
                        <span className="text-gray-500 text-sm">All rights © Leadsoko</span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4 lg:mt-0">
                        <FaInstagram className="text-white text-2xl cursor-pointer" />
                        <FaYoutube className="text-white text-2xl cursor-pointer" />
                        <FaLinkedin className="text-white text-2xl cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;