export function LedgerLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="relative inline-block px-3 py-1 font-mono text-xl font-black tracking-tighter text-foreground uppercase">
        {/* TOP LEFT CORNER */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-4 border-white " />

        {/* TOP RIGHT CORNER */}
        <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-4 border-white" />

        {/* BOTTOM LEFT CORNER */}
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-4 border-white" />

        {/* BOTTOM RIGHT CORNER */}
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-4 border-white" />

        {/* THE TEXT */}
        <span className="mx-1">LEDGER</span>
      </span>
    </div>
  );
}
