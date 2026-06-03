/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 22:55:48
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-06-03 23:00:08
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
    onEditProject: (project: Project) => void;
    onDeleteProject: (projectId: string) => void;
}

export default function ProjectCard({
    project,
    onEditProject,
    onDeleteProject,
}: ProjectCardProps) {
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

            <div className="mt-6 flex flex-wrap gap-3">
                <button
                    type="button"
                    onClick={() => onEditProject(project)}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                    수정
                </button>

                <button
                    type="button"
                    onClick={() => onDeleteProject(project.id)}
                    className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                    삭제
                </button>
            </div>
        </article>
    );
}