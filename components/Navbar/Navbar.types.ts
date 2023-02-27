export interface NavBarProps {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactNode;
    navItems: {
        label: string;
        route: string;
    }[]
}