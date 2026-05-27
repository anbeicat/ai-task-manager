"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/projects", label: "Projects" },
    { href: "/tasks", label: "Tasks" },
    { href: "/ai", label: "AI Assistant" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="min-h-screen w-64 border-r border-gray-200 bg-white px-6 py-8">
            <h1 className="mb-10 text-xl font-bold text-gray-900">
                AI Task Manager
            </h1>

            <nav className="space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.href);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={
                                isActive
                                    ? "block rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white"
                                    : "block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            }
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}