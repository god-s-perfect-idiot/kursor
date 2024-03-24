export default function LineCounts({
    count,
    classNames = ""
}: {
    count: number;
    classNames?: string;
}) {
    return (
        <div className={`flex-col flex h-full py-4 line-count ${classNames}`}>
            {Array.from({ length: count }).map((_, i) => (
                <p key={i}>
                    {i + 1}
                </p>
            ))}
        </div>
    )
};