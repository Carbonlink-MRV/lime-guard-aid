import { useState } from "react";
import { Bell, AlertTriangle, Syringe, Thermometer } from "lucide-react";

const alerts = [
  {
    id: 1,
    icon: Syringe,
    title: "Stock Depletion Warning",
    message: "AI Prediction: KEMRI Hospital will run out of Polio vaccines in 3 days. Order now?",
    time: "2 min ago",
    type: "critical" as const,
  },
  {
    id: 2,
    icon: Thermometer,
    title: "Cold-Chain Breach",
    message: "Mombasa GH fridge temp reached 9.1°C at 14:32. Vaccines may be compromised.",
    time: "18 min ago",
    type: "critical" as const,
  },
  {
    id: 3,
    icon: AlertTriangle,
    title: "Expiry Alert",
    message: "48 doses of Tetanus Toxoid at Malindi DH expire in 15 days. Consider redistribution.",
    time: "1 hr ago",
    type: "warning" as const,
  },
];

const AIAlerts = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative flex h-10 w-10 items-center justify-center rounded-lg border bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <Bell className="h-5 w-5" />
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
          {alerts.length}
        </span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-12 z-50 w-80 animate-slide-in rounded-xl border bg-card shadow-elevated">
            <div className="border-b px-4 py-3">
              <h3 className="font-display text-sm font-semibold text-card-foreground">AI Alerts</h3>
              <p className="text-[10px] text-muted-foreground">{alerts.length} active notifications</p>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {alerts.map((a) => (
                <div key={a.id} className="border-b p-4 last:border-0 hover:bg-muted/30 transition-colors">
                  <div className="flex gap-3">
                    <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      a.type === "critical" ? "bg-destructive/10 text-destructive" : "bg-warning/10 text-warning"
                    }`}>
                      <a.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-card-foreground">{a.title}</p>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">{a.message}</p>
                      <p className="mt-1 text-[10px] text-muted-foreground">{a.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AIAlerts;
