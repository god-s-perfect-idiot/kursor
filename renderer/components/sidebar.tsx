export default function Sidebar ({
    className = ''
}: {
    className?: string;
}) {
  return <div className={`bg-[#b3c90a] ${className}`}>Sidebar</div>;
}