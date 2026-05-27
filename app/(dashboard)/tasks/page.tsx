/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 22:52:23
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-27 15:08:11
 * @description: 
 * @FilePath: /ai-task-manager/app/(dashboard)/tasks/page.tsx
 */
import TaskList from "@/components/task/TaskList";
import { tasks } from "@/lib/data";

export default function TasksPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="mb-2 text-3xl font-bold text-gray-900">Tasks</h1>
                <p className="text-gray-600">업무 태스크를 관리합니다.</p>
            </div>

            <TaskList tasks={tasks} />
        </>
    );
}