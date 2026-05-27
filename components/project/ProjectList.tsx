/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-27 16:05:17
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-27 16:05:23
 * @description: 
 * @FilePath: /ai-task-manager/components/project/ProjectList.tsx
 */
"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/project/ProjectCard";
import type { Project, ProjectStatus } from "@/types/project";

type ProjectStatusFilter = ProjectStatus | "ALL";

interface ProjectListProps {
    projects: Project[];
}

const projectStatusOptions: { label: string; value: ProjectStatusFilter }[] = [
    { label: "전체", value: "ALL" },
    { label: "진행 중", value: "ACTIVE" },
    { label: "완료", value: "COMPLETED" },
    { label: "보류", value: "PAUSED" },
];

export default function ProjectList({ projects }: ProjectListProps) {
    const [statusFilter, setStatusFilter] =
        useState<ProjectStatusFilter>("ALL");

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            return statusFilter === "ALL" || project.status === statusFilter;
        });
    }, [projects, statusFilter]);

    return (
        <div>
            <div className="mb-6">
                <select
                    value={statusFilter}
                    onChange={(event) =>
                        setStatusFilter(event.target.value as ProjectStatusFilter)
                    }
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 outline-none focus:border-blue-500"
                >
                    {projectStatusOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            상태: {option.label}
                        </option>
                    ))}
                </select>
            </div>

            {filteredProjects.length > 0 ? (
                <section className="grid gap-6 md:grid-cols-2">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </section>
            ) : (
                <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-500">
                    조건에 맞는 프로젝트가 없습니다.
                </div>
            )}
        </div>
    );
}