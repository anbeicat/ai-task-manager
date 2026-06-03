/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 23:22:48
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-06-03 19:21:57
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
    onCompleteTask: (taskId: string) => void;
    onEditTask: (task: Task) => void;
    onDeleteTask: (taskId: string) => void;
}

export default function TaskCard({
    task,
    onCompleteTask,
    onEditTask,
    onDeleteTask,
}: TaskCardProps) {
    const isDone = task.status === "DONE";

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

            <div className="mt-6 flex flex-wrap gap-3">
                <button
                    type="button"
                    onClick={() => onCompleteTask(task.id)}
                    disabled={isDone}
                    className={
                        isDone
                            ? "rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-400"
                            : "rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                    }
                >
                    {isDone ? "완료됨" : "완료 처리"}
                </button>

                <button
                    type="button"
                    onClick={() => onEditTask(task)}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                    수정
                </button>

                <button
                    type="button"
                    onClick={() => onDeleteTask(task.id)}
                    className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                    삭제
                </button>
            </div>
        </article>
    );
}