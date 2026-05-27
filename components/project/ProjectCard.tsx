/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 22:55:48
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-27 16:04:19
 * @description: 
 * @FilePath: /ai-task-manager/components/project/ProjectCard.tsx
 */
import Badge from "@/components/common/Badge";
import type { Project } from "@/types/project";
import {
    getProjectStatusClassName,
    getProjectStatusLabel,
} from "@/utils/project";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-3 flex items-start justify-between gap-4">
                <h2 className="text-lg font-semibold text-gray-900">
                    {project.title}
                </h2>

                <Badge className={getProjectStatusClassName(project.status)}>
                    {getProjectStatusLabel(project.status)}
                </Badge>
            </div>

            <p className="mb-4 text-sm leading-6 text-gray-600">
                {project.description}
            </p>

            <p className="text-xs text-gray-400">Created: {project.createdAt}</p>
        </article>
    );
}