export default function ProgressBar({ title, percentage }: { title: string, percentage: number }): React.JSX.Element {

    return (<>
        <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-blue-700 dark:text-white">{title}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
    </>);
}
