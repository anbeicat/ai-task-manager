/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-27 16:01:23
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-27 16:01:34
 * @description: 
 * @FilePath: /ai-task-manager/components/common/Badge.tsx
 */
interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
    return (
        <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${className}`}
        >
            {children}
        </span>
    );
}