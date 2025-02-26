interface NavItem {
    name: string;
    link: string;
}

interface NavCategory {
    title: string;
    items: NavItem[];
}

interface NavbarData {
    productCategories: NavCategory[];
}

export const navbarData: NavbarData = {
    productCategories: [
        {
            title: 'Platform',
            items: [
                { name: 'Sales', link: '/sales' },
                { name: 'Coaching', link: '/coaching' },
                { name: 'Training', link: '/training' },
                { name: 'FAQs', link: '/frequently-ask-questions' }
            ],
        },
        {
            title: 'Capabilities',
            items: [
                { name: 'Docs', link: '/docs' },
                { name: 'Tables', link: '/tables' },
                { name: 'Spaces', link: '/spaces' },
                { name: 'Presentations', link: '/presentations' },
            ],
        },
    ]
};
