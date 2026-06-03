/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-27 16:05:17
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-06-03 23:00:41
 * @description: 
 * @FilePath: /ai-task-manager/components/project/ProjectList.tsx
 */
"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/project/ProjectCard";
import ProjectForm from "@/components/project/ProjectForm";
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
    const [projectItems, setProjectItems] = useState<Project[]>(projects);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [statusFilter, setStatusFilter] = useState<ProjectStatusFilter>("ALL");

    function handleCreateProject(newProject: Project) {
        setProjectItems((prevProjects) => [newProject, ...prevProjects]);
    }

    function handleEditProject(project: Project) {
        setEditingProject(project);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function handleUpdateProject(updatedProject: Project) {
        setProjectItems((prevProjects) =>
            prevProjects.map((project) =>
                project.id === updatedProject.id ? updatedProject : project,
            ),
        );

        setEditingProject(null);
    }

    function handleDeleteProject(projectId: string) {
        const shouldDelete = confirm("정말 이 프로젝트를 삭제하시겠습니까?");

        if (!shouldDelete) {
            return;
        }

        setProjectItems((prevProjects) =>
            prevProjects.filter((project) => project.id !== projectId),
        );

        if (editingProject?.id === projectId) {
            setEditingProject(null);
        }
    }

    function handleCancelEdit() {
        setEditingProject(null);
    }

    const filteredProjects = useMemo(() => {
        return projectItems.filter((project) => {
            return statusFilter === "ALL" || project.status === statusFilter;
        });
    }, [projectItems, statusFilter]);

    return (
        <div>
            <ProjectForm
                editingProject={editingProject}
                onCreateProject={handleCreateProject}
                onUpdateProject={handleUpdateProject}
                onCancelEdit={handleCancelEdit}
            />

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
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onEditProject={handleEditProject}
                            onDeleteProject={handleDeleteProject}
                        />
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