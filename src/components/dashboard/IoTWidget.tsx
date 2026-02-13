import { Thermometer, CheckCircle, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

const IoTWidget = () => {
  const [temp, setTemp] = useState(4.2);
  const [lastUpdated, setLastUpdated] = useState("Just now");

  useEffect(() => {
    const interval = setInterval(() => {
      const newTemp = 3.5 + Math.random() * 2;
      setTemp(parseFloat(newTemp.toFixed(1)));
      setLastUpdated("Just now");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const isNormal = temp >= 2 && temp <= 8;

  return (
    <div className="rounded-xl border bg-card p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-base font-semibold text-card-foreground">
          Vaccibox IoT Feed
        </h3>
        <span className="text-[10px] text-muted-foreground">{lastUpdated}</span>
      </div>

      <div className="flex flex-col items-center py-6">
        <div className={`flex h-20 w-20 items-center justify-center rounded-full ${isNormal ? "bg-success/10" : "bg-destructive/10"}`}>
          <Thermometer className={`h-10 w-10 ${isNormal ? "text-success" : "text-destructive"}`} />
        </div>
        <p className="mt-4 font-display text-4xl font-bold text-card-foreground">{temp}°C</p>
        <div className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
          isNormal
            ? "bg-success/10 text-success"
            : "bg-destructive/10 text-destructive"
        }`}>
          {isNormal ? <CheckCircle className="h-3 w-3" /> : <AlertTriangle className="h-3 w-3" />}
          {isNormal ? "Normal Range (2–8°C)" : "Temperature Alert!"}
        </div>
      </div>

      <div className="mt-4 space-y-2 text-xs">
        <div className="flex justify-between border-t pt-2 text-muted-foreground">
          <span>Facility</span>
          <span className="font-medium text-foreground">KEMRI Hospital</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Device ID</span>
          <span className="font-mono text-foreground">VBX-NRB-042</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Battery</span>
          <span className="font-medium text-success">87%</span>
        </div>
      </div>
    </div>
  );
};

export default IoTWidget;
