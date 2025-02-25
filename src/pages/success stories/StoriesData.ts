import Stories1 from "../../images/Stories1.png"
import Stories2 from "../../images/stories2.jpg"
import Stories3 from "../../images/stories3.webp"
export const filters = {
    companyType: ["B2C", "B2B"],
    industry: [
        "Building Materials",
        "Business Services",
        "Construction & Home Improvement",
        "Education",
        "Financial Services",
        "Health Services",
        "Insurance",
        "IT & Managed Services",
        "Professional Services",
        "Retail",
        "Software/SaaS",
    ],
    service: [
        "They Ask, You Answer",
        "Sales Coaching & Training",
        "Web Design & Optimization",
        "HubSpot Training & Enablement",
        "Indispensable Coaching",
    ],
};

export const stories = [
    {
        id: 1,
        title: "Dental Billing Company Pulls The Plug On Bad Marketing",
        company: "Dental Claim Support",
        image: Stories2,
        tags: ["They Ask, You Answer", "HubSpot Training & Enablement", "B2B", "Business Services"],
    },
    {
        id: 2,
        title: "Digital Curriculum Business Generates 30,000 Organic Leads Per Year",
        company: "Applied Educational Systems",
        image: Stories3,
        tags: ["They Ask, You Answer", "Web Design & Optimization", "HubSpot Training & Enablement", "B2B", "Education"],
    },
    {
        id: 3,
        title: "Building Materials Company Sees 50% Increase in Sales",
        company: "BuildPro",
        image: Stories2,
        tags: ["Sales Coaching & Training", "B2B", "Building Materials"],
    },
    {
        id: 4,
        title: "Health Services Provider Doubles Patient Engagement",
        company: "HealthFirst",
        image: Stories1,
        tags: ["Indispensable Coaching", "B2C", "Health Services"],
    },
    {
        id: 5,
        title: "Insurance Firm Boosts Client Retention by 40%",
        company: "SecureLife",
        image: Stories3,
        tags: ["Sales Coaching & Training", "B2C", "Insurance"],
    },
    {
        id: 6,
        title: "IT Services Company Triples Revenue in One Year",
        company: "TechSolutions",
        image: Stories1,
        tags: ["Web Design & Optimization", "B2B", "IT & Managed Services"],
    },
    {
        id: 7,
        title: "Retailer Increases Online Sales by 60%",
        company: "ShopSmart",
        image: Stories2,
        tags: ["They Ask, You Answer", "B2C", "Retail"],
    },
    {
        id: 8,
        title: "Software Company Achieves 200% Growth",
        company: "SoftWareHouse",
        image: Stories3,
        tags: ["HubSpot Training & Enablement", "B2B", "Software/SaaS"],
    },
];
