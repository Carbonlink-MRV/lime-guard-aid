import { useState } from "react";
import { X } from "lucide-react";

interface USSDSimulatorProps {
  onClose: () => void;
}

type Screen = "main" | "report" | "temp" | "confirm";

const USSDSimulator = ({ onClose }: USSDSimulatorProps) => {
  const [screen, setScreen] = useState<Screen>("main");
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (screen === "main") {
      if (input === "1") setScreen("report");
      else if (input === "2") setScreen("temp");
    } else if (screen === "report" || screen === "temp") {
      setScreen("confirm");
    } else {
      setScreen("main");
    }
    setInput("");
  };

  const screens: Record<Screen, string> = {
    main: `Welcome to LIME USSD\n\n1. Report Stock\n2. Check Temperature\n3. Request Supplies\n0. Exit`,
    report: `Report Stock\n\nEnter vaccine code:\n1. MCV (Measles)\n2. OPV (Polio)\n3. BCG\n4. Pentavalent`,
    temp: `Current Temperature\n\nVaccibox VBX-NRB-042\nTemp: 4.2°C ✓\nStatus: NORMAL\n\n0. Back`,
    confirm: `✓ Submitted!\n\nYour report has been\nrecorded successfully.\n\nRef: USR-20260213-047\n\n0. Main Menu`,
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-72 animate-slide-in">
      <div className="overflow-hidden rounded-2xl border bg-card shadow-elevated">
        {/* Phone header */}
        <div className="flex items-center justify-between gradient-hero px-4 py-2.5">
          <span className="text-xs font-medium text-primary-foreground">USSD *384*123#</span>
          <button onClick={onClose}>
            <X className="h-4 w-4 text-primary-foreground/80 hover:text-primary-foreground" />
          </button>
        </div>

        {/* Screen */}
        <div className="bg-muted/30 px-4 py-5">
          <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">
            {screens[screen]}
          </pre>
        </div>

        {/* Input */}
        <div className="flex border-t">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Enter option..."
            className="flex-1 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="gradient-hero px-4 text-sm font-medium text-primary-foreground"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default USSDSimulator;
