import type { SelectHTMLAttributes } from "react";

interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: SelectOption[];
}

export default function Select({
    label,
    id,
    options,
    className = "",
    ...props
}: SelectProps) {
    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-700">
                {label}
            </label>

            <select
                id={id}
                className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${className}`}
                {...props}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}