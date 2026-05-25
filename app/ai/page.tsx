/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 22:52:41
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 23:24:26
 * @description: 
 * @FilePath: /ai-task-manager/app/ai/page.tsx
 */
import AppLayout from "@/components/layout/AppLayout";

export default function AIPage() {
    return (
        <AppLayout>
            <div className="mb-8">
                <h1 className="mb-2 text-3xl font-bold text-gray-900">AI Assistant</h1>
                <p className="text-gray-600">
                    AI를 활용해 업무 요약과 태스크 추천을 받을 수 있습니다.
                </p>
            </div>

            <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-xl font-semibold text-gray-900">
                    AI 기능 준비 중
                </h2>

                <p className="leading-8 text-gray-600">
                    이후 단계에서 OpenAI API 또는 Claude API를 연동하여 업무 요약,
                    태스크 추천, 한국어 업무 문장 생성 기능을 구현할 예정입니다.
                </p>
            </section>
        </AppLayout>
    );
}