export default function TitleBar({ className = "" }: { className?: string }) {
  return (
    <header className={`title bg-[#f13c34] ${className}`}>
      <div className="flex flex-row draggable w-full h-full pl-2 items-center">
        <span>myFile.txt</span>
      </div>
    </header>
  );
}
