/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 22:56:29
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 23:02:53
 * @description: 
 * @FilePath: /ai-task-manager/types/project.ts
 */
export interface Project {
    id: string;
    title: string;
    description: string;
    status: "ACTIVE" | "COMPLETED" | "PAUSED";
    createdAt: string;
}