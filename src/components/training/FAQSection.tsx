import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    {
        question: "Who is LEADSOKO?",
        answer: "LEADSOKO is a platform that helps businesses with marketing solutions."
    },
    {
        question: "What is LEADSOKO+?",
        answer: "LEADSOKO+ is an advanced service offering additional marketing tools."
    },
    {
        question: "What countries does LEADSOKO work with?",
        answer: "LEADSOKO operates in multiple countries across the globe."
    },
    {
        question: "What happens if I’m not satisfied with the service?",
        answer: "If you’re not satisfied, you can contact support for assistance."
    },
    {
        question: "Does LEADSOKO work with marketing agencies?",
        answer: "Yes, LEADSOKO partners with marketing agencies to enhance reach."
    },
    {
        question: "My business is unique, how can I know your services will work for me?",
        answer: "We offer customized solutions based on your business needs."
    },
    {
        question: "If I’m an agency, can I help my clients do They Ask, You Answer?",
        answer: "Yes, agencies can integrate They Ask, You Answer for their clients."
    },
    {
        question: "If I wanted to DIY They Ask, You Answer at my company, how can LEADSOKO help?",
        answer: "LEADSOKO provides training and support for businesses."
    }
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="md:max-w-[80%] mx-auto my-8 p-4">
            {/* FAQ Title */}
            <h2 className="text-blue-600 font-semibold">Frequently Asked Questions</h2>
            <h1 className="text-3xl font-bold mt-1">You Ask, We Answer</h1>

            {/* FAQ List */}
            <div className="mt-6 space-y-4 md:px-22 ">
                {faqs.map((faq, index) => (
                    <div key={index} className="pb-3 border-b border-gray-800 transition-colors duration-300 hover:border-black">

                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center py-4 text-lg font-medium focus:outline-none"
                        >
                            <span className="text-xl lg:text-2xl">{faq.question}</span>
                            {openIndex === index ? (
                                <FaMinus className="text-gray-600" />
                            ) : (
                                <FaPlus className="text-gray-600" />
                            )}
                        </button>

                        {/* Answer */}
                        {openIndex === index && (
                            <p className="text-gray-700 text-sm mt-2 NormalText">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
