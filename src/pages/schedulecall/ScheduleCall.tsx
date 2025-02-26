import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const ScheduleCall = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        organization: "",
        phone: "",
        option: "",
        agree: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col px-6 md:px-20 py-24 lg:py-32 global-container">
                {/* Header Section */}
                <div className="border-b border-gray-300 pb-16">
                    <h1 className="text-4xl font-bold text-gray-900 lg:ml-12">Thanks for your interest.</h1>
                    <h2 className="text-4xl font-bold text-gray-900 mt-1 lg:ml-12">How can we help?</h2>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mt-4 lg:ml-auto lg:mr-28">
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                            Explore our coaching services and industry expertise. Need something else?
                            See below for more ways to get in touch.
                        </p>
                        <button className="border border-blue-700 bg-white text-blue-700 font-bold px-6 py-3 rounded-lg shadow-sm hover:bg-gray-200 transition-all">
                            WhatsApp Us <span className="text-xl">↗</span>
                        </button>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-lg p-6 md:p-10 w-full mt-12">
                    <div className="flex flex-col lg:flex-row items-start justify-normal gap-6 lg:gap-12 lg:ml-12">
                        <h1 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                            HOW CAN WE HELP?
                        </h1>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900">
                                Have a request for proposal or just looking to connect?
                            </h2>
                            <p className="text-gray-600 text-lg mt-2">
                                Please fill out the form below and we'll get in touch with the best contact.
                            </p>

                            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                                {/* Full Name & Organization */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="w-full border-b border-gray-300">
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="Full Name *"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full border-none bg-transparent py-3 px-4 text-gray-900 focus:outline-none"
                                            required
                                        />
                                    </div>
                                    <div className="w-full border-b border-gray-300">
                                        <input
                                            type="text"
                                            name="organization"
                                            placeholder="Organization *"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            className="w-full border-none bg-transparent py-3 px-4 text-gray-900 focus:outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email & Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="w-full border-b border-gray-300">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Work Email Address *"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full border-none bg-transparent py-3 px-4 text-gray-900 focus:outline-none"
                                            required
                                        />
                                    </div>
                                    <div className="w-full border-b border-gray-300">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number *"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full border-none bg-transparent py-3 px-4 text-gray-900 focus:outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Select Option */}
                                <div className="w-full border-b border-gray-300">
                                    <select
                                        name="option"
                                        value={formData.option}
                                        onChange={handleChange}
                                        className="w-full border-none bg-transparent py-3 px-4 text-gray-900 focus:outline-none"
                                        required
                                    >
                                        <option value="">— Please Choose an Option —</option>
                                        <option value="consultation">Consultation</option>
                                        <option value="proposal">Request a Proposal</option>
                                        <option value="support">General Support</option>
                                    </select>
                                </div>

                                {/* Checkbox */}
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        name="agree"
                                        checked={formData.agree}
                                        onChange={handleChange}
                                        className="w-5 h-5 border-gray-300 text-blue-600"
                                    />
                                    <label className="text-gray-600 text-sm">
                                        I agree to receive communications from Leadsdoox2llab.
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="button w-full lg:w-auto">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ScheduleCall;
