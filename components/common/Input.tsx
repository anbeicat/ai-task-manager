/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-27 16:14:17
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-27 16:15:18
 * @description: 
 * @FilePath: /ai-task-manager/components/common/Input.tsx
 */
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function Input({ label, id, className = "", ...props }: InputProps) {
    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-700">
                {label}
            </label>

            <input
                id={id}
                className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${className}`}
                {...props}
            />
        </div>
    );
}