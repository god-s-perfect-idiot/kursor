export default function TitleBar({ className = "" }: { className?: string }) {
  return (
    <header className={`title bg-[#f13c34] ${className}`}>
      <div className="flex flex-row draggable w-full h-full justify-between">
        <span>TitleBar</span>
        {/* <div className="flex flex-row gap-1 text-xl items-center justify-center controls">
          <div className="flex items-center justify-center w-8 h-8">
            <button>_</button>
          </div>
          <div className="flex items-center justify-center w-8 h-8">
            <button>[=]</button>
          </div>
          <div className="flex items-center justify-center w-8 h-8">
            <button>x</button>
          </div>
        </div> */}
      </div>
    </header>
  );
}
