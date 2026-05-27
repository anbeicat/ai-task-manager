/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-27 15:05:10
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-27 15:07:42
 * @description: 
 * @FilePath: /ai-task-manager/components/task/TaskList.tsx
 */
"use client";

import { useMemo, useState } from "react";
import TaskCard from "@/components/task/TaskCard";
import type { Task, TaskPriority, TaskStatus } from "@/types/task";

type StatusFilter = TaskStatus | "ALL";
type PriorityFilter = TaskPriority | "ALL";

interface TaskListProps {
    tasks: Task[];
}

const statusOptions: { label: string; value: StatusFilter }[] = [
    { label: "전체", value: "ALL" },
    { label: "할 일", value: "TODO" },
    { label: "진행 중", value: "IN_PROGRESS" },
    { label: "완료", value: "DONE" },
];

const priorityOptions: { label: string; value: PriorityFilter }[] = [
    { label: "전체", value: "ALL" },
    { label: "낮음", value: "LOW" },
    { label: "보통", value: "MEDIUM" },
    { label: "높음", value: "HIGH" },
];

export default function TaskList({ tasks }: TaskListProps) {
    const [statusFilter, setStatusFilter] = useState<StatusFilter>("ALL");
    const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>("ALL");

    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => {
            const matchesStatus =
                statusFilter === "ALL" || task.status === statusFilter;
            const matchesPriority =
                priorityFilter === "ALL" || task.priority === priorityFilter;

            return matchesStatus && matchesPriority;
        });
    }, [tasks, statusFilter, priorityFilter]);

    return (
        <div>
            <div className="mb-6 flex flex-wrap gap-3">
                <select
                    value={statusFilter}
                    onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 outline-none focus:border-blue-500"
                >
                    {statusOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            상태: {option.label}
                        </option>
                    ))}
                </select>

                <select
                    value={priorityFilter}
                    onChange={(event) =>
                        setPriorityFilter(event.target.value as PriorityFilter)
                    }
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 outline-none focus:border-blue-500"
                >
                    {priorityOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            우선순위: {option.label}
                        </option>
                    ))}
                </select>
            </div>

            {filteredTasks.length > 0 ? (
                <section className="grid gap-6">
                    {filteredTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </section>
            ) : (
                <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-500">
                    조건에 맞는 태스크가 없습니다.
                </div>
            )}
        </div>
    );
}