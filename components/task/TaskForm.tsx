/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-27 16:17:22
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-06-03 22:14:30
 * @description: 
 * @FilePath: /ai-task-manager/components/task/TaskForm.tsx
 */
"use client";

import { useEffect, useState } from "react";
import Input from "@/components/common/Input";
import Select from "@/components/common/Select";
import type { Task, TaskPriority, TaskStatus } from "@/types/task";

interface TaskFormProps {
    editingTask: Task | null;
    onCreateTask: (task: Task) => void;
    onUpdateTask: (task: Task) => void;
    onCancelEdit: () => void;
}

const statusOptions = [
    { label: "할 일", value: "TODO" },
    { label: "진행 중", value: "IN_PROGRESS" },
    { label: "완료", value: "DONE" },
];

const priorityOptions = [
    { label: "낮음", value: "LOW" },
    { label: "보통", value: "MEDIUM" },
    { label: "높음", value: "HIGH" },
];

export default function TaskForm({
    editingTask,
    onCreateTask,
    onUpdateTask,
    onCancelEdit,
}: TaskFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<TaskStatus>("TODO");
    const [priority, setPriority] = useState<TaskPriority>("MEDIUM");
    const [dueDate, setDueDate] = useState("");

    const isEditMode = editingTask !== null;

    useEffect(() => {
        if (!editingTask) {
            return;
        }

        setTitle(editingTask.title);
        setDescription(editingTask.description);
        setStatus(editingTask.status);
        setPriority(editingTask.priority);
        setDueDate(editingTask.dueDate === "미정" ? "" : editingTask.dueDate);
    }, [editingTask]);

    function resetForm() {
        setTitle("");
        setDescription("");
        setStatus("TODO");
        setPriority("MEDIUM");
        setDueDate("");
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!title.trim()) {
            alert("태스크 제목을 입력해 주세요.");
            return;
        }

        if (isEditMode && editingTask) {
            const updatedTask: Task = {
                ...editingTask,
                title: title.trim(),
                description: description.trim() || "설명이 없습니다.",
                status,
                priority,
                dueDate: dueDate || "미정",
            };

            onUpdateTask(updatedTask);
            resetForm();
            return;
        }

        const newTask: Task = {
            id: `task-${Date.now()}`,
            projectId: "ai-task-manager",
            title: title.trim(),
            description: description.trim() || "설명이 없습니다.",
            status,
            priority,
            dueDate: dueDate || "미정",
            createdAt: new Date().toISOString().slice(0, 10),
        };

        onCreateTask(newTask);
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
                {isEditMode ? "태스크 수정" : "새 태스크 추가"}
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
                <Input
                    id="task-title"
                    label="태스크 제목"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="예: 로그인 페이지 구현"
                />

                <Input
                    id="task-due-date"
                    label="마감일"
                    type="date"
                    value={dueDate}
                    onChange={(event) => setDueDate(event.target.value)}
                />

                <Select
                    id="task-status"
                    label="상태"
                    value={status}
                    onChange={(event) => setStatus(event.target.value as TaskStatus)}
                    options={statusOptions}
                />

                <Select
                    id="task-priority"
                    label="우선순위"
                    value={priority}
                    onChange={(event) => setPriority(event.target.value as TaskPriority)}
                    options={priorityOptions}
                />
            </div>

            <div className="mt-4">
                <Input
                    id="task-description"
                    label="설명"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="태스크에 대한 설명을 입력하세요."
                />
            </div>

            <div className="mt-6 flex gap-3">
                <button
                    type="submit"
                    className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700"
                >
                    {isEditMode ? "태스크 수정" : "태스크 추가"}
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