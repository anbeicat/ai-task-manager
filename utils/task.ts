/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-27 15:02:33
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-27 15:03:07
 * @description: 
 * @FilePath: /ai-task-manager/utils/task.ts
 */
import type { TaskPriority, TaskStatus } from "@/types/task";

export function getTaskStatusLabel(status: TaskStatus) {
    switch (status) {
        case "TODO":
            return "할 일";
        case "IN_PROGRESS":
            return "진행 중";
        case "DONE":
            return "완료";
        default:
            return status;
    }
}

export function getTaskPriorityLabel(priority: TaskPriority) {
    switch (priority) {
        case "LOW":
            return "낮음";
        case "MEDIUM":
            return "보통";
        case "HIGH":
            return "높음";
        default:
            return priority;
    }
}

export function getTaskStatusClassName(status: TaskStatus) {
    switch (status) {
        case "TODO":
            return "bg-gray-100 text-gray-700";
        case "IN_PROGRESS":
            return "bg-blue-50 text-blue-700";
        case "DONE":
            return "bg-green-50 text-green-700";
        default:
            return "bg-gray-100 text-gray-700";
    }
}

export function getTaskPriorityClassName(priority: TaskPriority) {
    switch (priority) {
        case "LOW":
            return "bg-gray-100 text-gray-700";
        case "MEDIUM":
            return "bg-yellow-50 text-yellow-700";
        case "HIGH":
            return "bg-red-50 text-red-700";
        default:
            return "bg-gray-100 text-gray-700";
    }
}