/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 22:40:14
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-26 00:00:52
 * @description: 
 * @FilePath: /ai-task-manager/app/layout.tsx
 */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "AI Task Manager",
    description: "AI 기반 업무 태스크 관리 플랫폼",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}