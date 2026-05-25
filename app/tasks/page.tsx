/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 22:52:23
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 23:24:16
 * @description: 
 * @FilePath: /ai-task-manager/app/tasks/page.tsx
 */
import AppLayout from "@/components/layout/AppLayout";
import TaskCard from "@/components/task/TaskCard";
import { tasks } from "@/lib/data";

export default function TasksPage() {
    return (
        <AppLayout>
            <div className="mb-8">
                <h1 className="mb-2 text-3xl font-bold text-gray-900">Tasks</h1>
                <p className="text-gray-600">업무 태스크를 관리합니다.</p>
            </div>

            <section className="grid gap-6">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </section>
        </AppLayout>
    );
}