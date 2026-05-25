import AppLayout from "@/components/layout/AppLayout";
import StatCard from "@/components/dashboard/StatCard";
import { projects, tasks } from "@/lib/data";

export default function DashboardPage() {
    const totalTasks = tasks.length;
    const doneTasks = tasks.filter((task) => task.status === "DONE").length;
    const inProgressTasks = tasks.filter(
        (task) => task.status === "IN_PROGRESS",
    ).length;
    const activeProjects = projects.filter(
        (project) => project.status === "ACTIVE",
    ).length;

    return (
        <AppLayout>
            <div className="mb-8">
                <h1 className="mb-2 text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">
                    프로젝트와 태스크 진행 상황을 한눈에 확인합니다.
                </p>
            </div>

            <section className="grid gap-6 md:grid-cols-4">
                <StatCard
                    title="전체 태스크"
                    value={totalTasks}
                    description="등록된 전체 업무"
                />
                <StatCard
                    title="진행 중"
                    value={inProgressTasks}
                    description="현재 진행 중인 업무"
                />
                <StatCard
                    title="완료"
                    value={doneTasks}
                    description="완료된 업무"
                />
                <StatCard
                    title="활성 프로젝트"
                    value={activeProjects}
                    description="진행 중인 프로젝트"
                />
            </section>
        </AppLayout>
    );
}