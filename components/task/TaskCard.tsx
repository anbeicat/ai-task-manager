/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 23:22:48
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 23:23:40
 * @description: 
 * @FilePath: /ai-task-manager/components/task/TaskCard.tsx
 */
import type { Task } from "@/types/task";

interface TaskCardProps {
    task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
    return (
        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-gray-900">{task.title}</h2>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                    {task.status}
                </span>
            </div>

            <p className="mb-4 text-sm leading-6 text-gray-600">
                {task.description}
            </p>

            <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                <span>Priority: {task.priority}</span>
                <span>Due: {task.dueDate}</span>
            </div>
        </article>
    );
}