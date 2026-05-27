/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 23:22:48
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-27 16:03:12
 * @description: 
 * @FilePath: /ai-task-manager/components/task/TaskCard.tsx
 */
import Badge from "@/components/common/Badge";
import type { Task } from "@/types/task";
import {
    getTaskPriorityClassName,
    getTaskPriorityLabel,
    getTaskStatusClassName,
    getTaskStatusLabel,
} from "@/utils/task";

interface TaskCardProps {
    task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
    return (
        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-3 flex items-start justify-between gap-4">
                <div>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">
                        {task.title}
                    </h2>

                    <p className="text-sm leading-6 text-gray-600">
                        {task.description}
                    </p>
                </div>

                <Badge className={getTaskStatusClassName(task.status)}>
                    {getTaskStatusLabel(task.status)}
                </Badge>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
                <Badge className={getTaskPriorityClassName(task.priority)}>
                    우선순위: {getTaskPriorityLabel(task.priority)}
                </Badge>

                <Badge className="bg-gray-100 text-gray-700">
                    마감일: {task.dueDate}
                </Badge>
            </div>
        </article>
    );
}