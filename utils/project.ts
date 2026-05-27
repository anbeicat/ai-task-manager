/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-27 16:02:00
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-27 16:02:11
 * @description: 
 * @FilePath: /ai-task-manager/utils/project.ts
 */
import type { ProjectStatus } from "@/types/project";

export function getProjectStatusLabel(status: ProjectStatus) {
    switch (status) {
        case "ACTIVE":
            return "진행 중";
        case "COMPLETED":
            return "완료";
        case "PAUSED":
            return "보류";
        default:
            return status;
    }
}

export function getProjectStatusClassName(status: ProjectStatus) {
    switch (status) {
        case "ACTIVE":
            return "bg-blue-50 text-blue-700";
        case "COMPLETED":
            return "bg-green-50 text-green-700";
        case "PAUSED":
            return "bg-gray-100 text-gray-700";
        default:
            return "bg-gray-100 text-gray-700";
    }
}