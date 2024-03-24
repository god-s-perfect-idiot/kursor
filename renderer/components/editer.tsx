export default function Editer ({
    className = ''
}: {
    className?: string;
}) {
  return <div className={`bg-[#f13c34] ${className}`}>Editer</div>;
}