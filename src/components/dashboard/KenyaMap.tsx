const clinics = [
  { name: "KEMRI Hospital", x: 58, y: 42, status: "ok" as const },
  { name: "Kenyatta NH", x: 55, y: 45, status: "ok" as const },
  { name: "Mombasa GH", x: 72, y: 70, status: "alert" as const },
  { name: "Kisumu DH", x: 28, y: 50, status: "ok" as const },
  { name: "Nakuru PGH", x: 42, y: 48, status: "ok" as const },
  { name: "Garissa RH", x: 75, y: 38, status: "alert" as const },
  { name: "Eldoret TH", x: 32, y: 42, status: "ok" as const },
  { name: "Malindi DH", x: 76, y: 60, status: "alert" as const },
  { name: "Nyeri PGH", x: 48, y: 40, status: "ok" as const },
  { name: "Thika LH", x: 52, y: 43, status: "ok" as const },
];

const KenyaMap = () => (
  <div className="rounded-xl border bg-card p-5 shadow-card">
    <h3 className="mb-1 font-display text-base font-semibold text-card-foreground">
      Facility Map — Kenya
    </h3>
    <p className="mb-4 text-xs text-muted-foreground">
      Green = Normal · Red = Cold-chain breach or low stock
    </p>
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted/50 border">
      {/* Simplified Kenya outline */}
      <svg viewBox="0 0 100 100" className="h-full w-full" fill="none">
        {/* Kenya shape (simplified) */}
        <path
          d="M35 15 L55 12 L78 20 L82 35 L78 55 L75 65 L72 75 L65 82 L55 78 L48 72 L42 68 L35 62 L28 55 L25 45 L28 30 Z"
          fill="hsl(199, 89%, 95%)"
          stroke="hsl(199, 89%, 38%)"
          strokeWidth="0.5"
        />
        {/* Clinics */}
        {clinics.map((c) => (
          <g key={c.name}>
            <circle
              cx={c.x}
              cy={c.y}
              r="2"
              fill={c.status === "ok" ? "hsl(142, 71%, 40%)" : "hsl(0, 72%, 51%)"}
              className="animate-pulse-dot"
            />
            <title>{c.name}</title>
          </g>
        ))}
      </svg>
      {/* Legend overlay */}
      <div className="absolute bottom-2 left-2 rounded-md bg-card/90 px-2 py-1 text-[10px] text-muted-foreground backdrop-blur-sm border">
        {clinics.length} facilities tracked
      </div>
    </div>
  </div>
);

export default KenyaMap;
