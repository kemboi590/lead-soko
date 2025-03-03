import bookpen from "../../assets/images/training/bookpen.png";

export interface Topic {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export const topicsData: Topic[] = [
    {
        id: 1,
        title: "Content Marketing Training",
        description:
            "Build your content marketing competency in-house, and learn how to use The Big 5 approach to create content that attracts potential customers, empowers your sales team, and generates revenue.",
        icon: bookpen
    },
    {
        id: 2,
        title: "Video Training",
        description:
            "The program covers video strategy and on-camera performance to help your team produce high-quality marketing and sales videos that engage your audience and drive revenue.",
        icon: bookpen
    },
    {
        id: 3,
        title: "Sales Training",
        description:
            "The program also includes training for your sales team on assignment selling, 1-1 video, and virtual selling best practices.",
        icon: bookpen
    },
    {
        id: 4,
        title: "HubSpot Training",
        description:
            "The program includes HubSpot training to help your sales & marketing teams master the platform and use it effectively to grow your business.",
        icon: bookpen
    },
    {
        id: 5,
        title: "StoryBrand Training",
        description:
            "We believe that StoryBrand and They Ask, You Answer are the perfect complementary frameworks when it comes to mastering sales and marketing within an organization.",
        icon: bookpen
    },
];
