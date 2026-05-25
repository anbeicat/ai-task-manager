interface StatCardProps {
    title: string;
    value: number;
    description: string;
}

export default function StatCard({ title, value, description }: StatCardProps) {
    return (
        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="mb-2 text-sm text-gray-500">{title}</p>
            <p className="mb-2 text-3xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </article>
    );
}