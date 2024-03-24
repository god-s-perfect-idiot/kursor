export default function TitleBar({ className = "" }: { className?: string }) {
  return (
    <header className={`title ${className} border-b-2 border-b-solid border-[#757475]`}>
      <div className="flex flex-row draggable w-full h-full pl-4 items-center">
        <span className="text-sm">myProject</span>
      </div>
    </header>
  );
}
