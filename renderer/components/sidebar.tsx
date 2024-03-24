export default function Sidebar ({
    className = ''
}: {
    className?: string;
}) {
  return (
    <div className={`${className} py-4 px-2 mt-2`}>
      Sidebar
    </div>
  );
}