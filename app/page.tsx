/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 22:40:14
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 23:15:23
 * @description: 
 * @FilePath: /ai-task-manager/app/page.tsx
 */
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="max-w-xl text-center">
        <p className="mb-3 text-sm font-medium text-blue-600">
          AI Task Manager
        </p>

        <h1 className="mb-5 text-4xl font-bold text-gray-900">
          AI 기반 업무 태스크 관리 플랫폼
        </h1>

        <p className="mb-8 leading-8 text-gray-600">
          프로젝트와 태스크를 관리하고, AI를 활용해 업무 요약과 태스크 추천을
          받을 수 있는 웹 서비스입니다.
        </p>

        <Link
          href="/dashboard"
          className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700"
        >
          Dashboard 시작하기
        </Link>
      </div>
    </main>
  );
}