import { useState } from "react";
import { navbarData } from "./dropDownData";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import icon from "../../images/icon.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);

    return (
        <nav className="bg-white w-[88%] mx-auto fixed top-5 left-1/2 transform -translate-x-1/2 z-50 border-2 border-gray-100 rounded-lg shadow-md">
            <div className="container mx-auto flex justify-between items-center p-2">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={icon} alt="Miro Clone" className="h-14 w-auto" />
                    {/* Leadsoko */}
                    <h2 className="text-2xl font-semibold text-gray-800 ml-2">Leadsoko </h2>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-6 gap-6">
                    <Dropdown title="Product" categories={navbarData.productCategories} />
                    <Link to="/pricing" className="text-gray-700 hover:text-gray-900">Success Stories</Link>
                    <Link to="/pricing" className="text-gray-700 hover:text-gray-900">Training</Link>
                </div>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-4 ml-5">
                    <button className="border-2 px-5 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300">
                        Company
                    </button>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 ml-4">
                        Schedule Your Call
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="lg:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="lg:hidden flex flex-col bg-white shadow-md text-lg p-4">
                    <button
                        className="flex items-center justify-between px-4 py-2 border-b"
                        onClick={() => setIsProductOpen(!isProductOpen)}
                    >
                        Product <MdKeyboardArrowDown size={24} />
                    </button>
                    {isProductOpen && (
                        <div className="flex flex-col px-4 py-2">
                            {navbarData.productCategories.map((category, index) => (
                                <div key={index} className="flex flex-col mb-2">
                                    <p className="font-semibold text-gray-700 mb-2">{category.title}</p>
                                    {category.items.map((item, idx) => (
                                        <Link
                                            key={idx}
                                            to={item.link}
                                            className="text-gray-900 px-2 py-1 transition-all duration-300 hover:bg-gray-100 rounded-lg"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                    <Link to="/pricing" className="px-4 py-2 border-b">Success Stories</Link>
                    <Link to="/training" className="px-4 py-2 border-b">Training</Link>
                    <button className="px-4 py-2 border-b">Company</button>
                    <button className="bg-blue-600 text-white px-4 py-2 mx-4 my-2 rounded-lg">Schedule Your Call</button>
                </div>
            )}
        </nav>
    );
};

interface DropdownProps {
    title: string;
    categories: { title: string; items: { name: string; link: string }[] }[];
    mobile?: boolean;
}

const Dropdown = ({ title, categories, mobile }: DropdownProps) => {
    return (
        <div className="relative group">
            <button className="text-gray-700 hover:text-gray-900 flex items-center transition-all duration-300">
                {title} <span className="ml-1"> <MdKeyboardArrowDown size={26} /> </span>
            </button>

            {/* Dropdown Menu */}
            <div
                className={`absolute left-0 mt-8 bg-white shadow-lg rounded-lg p-4 w-auto hidden group-hover:flex opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out ${mobile ? "block relative w-full flex-col" : ""}`}
            >
                <div className="flex gap-8">
                    {categories.map((category, index) => (
                        <div key={index} className="flex flex-col min-w-[180px]">
                            <p className="font-semibold text-gray-700 mb-2">{category.title}</p>
                            <div className="flex flex-col gap-1">
                                {category.items.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        to={item.link}
                                        className="text-gray-900 px-2 py-1 transition-all duration-300 hover:bg-gray-100 rounded-lg"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;