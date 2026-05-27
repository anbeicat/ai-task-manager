/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 22:56:29
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-27 16:02:36
 * @description: 
 * @FilePath: /ai-task-manager/types/project.ts
 */
export type ProjectStatus = "ACTIVE" | "COMPLETED" | "PAUSED";

export interface Project {
    id: string;
    title: string;
    description: string;
    status: ProjectStatus;
    createdAt: string;
}