/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-06-03 23:00:23
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-06-03 23:00:29
 * @description: 
 * @FilePath: /ai-task-manager/components/project/ProjectForm.tsx
 */
"use client";

import { useEffect, useState } from "react";
import Input from "@/components/common/Input";
import Select from "@/components/common/Select";
import type { Project, ProjectStatus } from "@/types/project";

interface ProjectFormProps {
    editingProject: Project | null;
    onCreateProject: (project: Project) => void;
    onUpdateProject: (project: Project) => void;
    onCancelEdit: () => void;
}

const projectStatusOptions = [
    { label: "진행 중", value: "ACTIVE" },
    { label: "완료", value: "COMPLETED" },
    { label: "보류", value: "PAUSED" },
];

export default function ProjectForm({
    editingProject,
    onCreateProject,
    onUpdateProject,
    onCancelEdit,
}: ProjectFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<ProjectStatus>("ACTIVE");

    const isEditMode = editingProject !== null;

    useEffect(() => {
        if (!editingProject) {
            return;
        }

        setTitle(editingProject.title);
        setDescription(editingProject.description);
        setStatus(editingProject.status);
    }, [editingProject]);

    function resetForm() {
        setTitle("");
        setDescription("");
        setStatus("ACTIVE");
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!title.trim()) {
            alert("프로젝트 제목을 입력해 주세요.");
            return;
        }

        if (isEditMode && editingProject) {
            const updatedProject: Project = {
                ...editingProject,
                title: title.trim(),
                description: description.trim() || "설명이 없습니다.",
                status,
            };

            onUpdateProject(updatedProject);
            resetForm();
            return;
        }

        const newProject: Project = {
            id: `project-${Date.now()}`,
            title: title.trim(),
            description: description.trim() || "설명이 없습니다.",
            status,
            createdAt: new Date().toISOString().slice(0, 10),
        };

        onCreateProject(newProject);
        resetForm();
    }

    function handleCancelEdit() {
        resetForm();
        onCancelEdit();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
            <h2 className="mb-5 text-xl font-semibold text-gray-900">
                {isEditMode ? "프로젝트 수정" : "새 프로젝트 추가"}
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
                <Input
                    id="project-title"
                    label="프로젝트 제목"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="예: AI 기반 업무 태스크 관리 플랫폼"
                />

                <Select
                    id="project-status"
                    label="상태"
                    value={status}
                    onChange={(event) => setStatus(event.target.value as ProjectStatus)}
                    options={projectStatusOptions}
                />
            </div>

            <div className="mt-4">
                <Input
                    id="project-description"
                    label="설명"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="프로젝트에 대한 설명을 입력하세요."
                />
            </div>

            <div className="mt-6 flex gap-3">
                <button
                    type="submit"
                    className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700"
                >
                    {isEditMode ? "프로젝트 수정" : "프로젝트 추가"}
                </button>

                {isEditMode && (
                    <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                        수정 취소
                    </button>
                )}
            </div>
        </form>
    );
}