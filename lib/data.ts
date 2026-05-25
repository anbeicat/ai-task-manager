import type { Project } from "@/types/project";
import type { Task } from "@/types/task";

export const projects: Project[] = [
    {
        id: "ai-task-manager",
        title: "AI 기반 업무 태스크 관리 플랫폼",
        description:
            "React, Next.js, TypeScript를 기반으로 개발하는 AI 업무 관리 서비스입니다.",
        status: "ACTIVE",
        createdAt: "2026-05-26",
    },
    {
        id: "portfolio-blog",
        title: "개인 기술 블로그 및 포트폴리오",
        description:
            "Next.js와 TypeScript를 활용하여 개발한 개인 포트폴리오 프로젝트입니다.",
        status: "COMPLETED",
        createdAt: "2026-05-25",
    },
];

export const tasks: Task[] = [
    {
        id: "task-1",
        projectId: "ai-task-manager",
        title: "프로젝트 기본 구조 생성",
        description: "Next.js App Router 기반 프로젝트 구조를 생성합니다.",
        status: "DONE",
        priority: "HIGH",
        dueDate: "2026-05-26",
        createdAt: "2026-05-26",
    },
    {
        id: "task-2",
        projectId: "ai-task-manager",
        title: "Dashboard 페이지 구현",
        description: "전체 업무 현황을 확인할 수 있는 Dashboard를 구현합니다.",
        status: "IN_PROGRESS",
        priority: "HIGH",
        dueDate: "2026-05-27",
        createdAt: "2026-05-26",
    },
    {
        id: "task-3",
        projectId: "ai-task-manager",
        title: "TaskCard 컴포넌트 분리",
        description: "태스크 정보를 카드 형태로 표시하는 컴포넌트를 작성합니다.",
        status: "TODO",
        priority: "MEDIUM",
        dueDate: "2026-05-28",
        createdAt: "2026-05-26",
    },
];