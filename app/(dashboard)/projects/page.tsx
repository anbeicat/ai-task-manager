/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 22:52:04
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 23:22:21
 * @description: 
 * @FilePath: /ai-task-manager/app/projects/page.tsx
 */
import ProjectCard from "@/components/project/ProjectCard";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="mb-2 text-3xl font-bold text-gray-900">Projects</h1>
                <p className="text-gray-600">업무 프로젝트를 관리합니다.</p>
            </div>

            <section className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </section>
        </>
    );
}