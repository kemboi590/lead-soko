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
                { name: 'Intelligent Canvas™', link: '/intelligent-canvas' },
                { name: 'AI', link: '/ai' },
                { name: 'Integrations', link: '/integrations' },
                { name: 'Security', link: '/security' },
                { name: 'Developer Platform', link: '/developer-platform' },
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
