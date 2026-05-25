import Link from "next/link";

const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/projects", label: "Projects" },
    { href: "/tasks", label: "Tasks" },
    { href: "/ai", label: "AI Assistant" },
];

export default function Sidebar() {
    return (
        <aside className="min-h-screen w-64 border-r border-gray-200 bg-white px-6 py-8">
            <h1 className="mb-10 text-xl font-bold text-gray-900">
                AI Task Manager
            </h1>

            <nav className="space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}