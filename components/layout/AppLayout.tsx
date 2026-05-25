/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 22:54:14
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 23:15:42
 * @description: 
 * @FilePath: /ai-task-manager/components/layout/AppLayout.tsx
 */
import Sidebar from "@/components/layout/Sidebar";

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />

            <main className="flex-1 px-8 py-8">{children}</main>
        </div>
    );
}