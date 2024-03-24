import { useState } from "react";
import LineCounts from "../fragments/lineCounts";

export default function Editor({ className = "" }: { className?: string }) {
  const [lineCount, setLineCount] = useState(1);
  return (
    <div className={`${className} flex flex-row `}>
      {/* <LineCounts count={lineCount} classNames="code-bg-blue w-[3%]"/> */}
      <textarea
        className="w-[100%] h-full p-4 editor resize-none code-bg-blue"
        placeholder="Here goes your text..."
        onChange={(e) => {
          const lineCount = e.target.value.split("\n").length;
          setLineCount(lineCount);
        }}
      ></textarea>
    </div>
  );
}
