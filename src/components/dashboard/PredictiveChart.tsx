import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine,
} from "recharts";

const data = [
  { week: "W1", actual: 1200, predicted: null },
  { week: "W2", actual: 1050, predicted: null },
  { week: "W3", actual: 980, predicted: null },
  { week: "W4", actual: 870, predicted: null },
  { week: "W5", actual: 750, predicted: 750 },
  { week: "W6", actual: null, predicted: 620 },
  { week: "W7", actual: null, predicted: 480 },
  { week: "W8", actual: null, predicted: 310 },
  { week: "W9", actual: null, predicted: 150 },
  { week: "W10", actual: null, predicted: 0 },
];

const PredictiveChart = () => (
  <div className="rounded-xl border bg-card p-5 shadow-card">
    <div className="mb-4 flex items-center justify-between">
      <div>
        <h3 className="font-display text-base font-semibold text-card-foreground">
          Predictive Insights — Polio (OPV)
        </h3>
        <p className="text-xs text-muted-foreground">
          AI-forecasted vaccine usage and predicted depletion
        </p>
      </div>
      <div className="flex items-center gap-4 text-xs">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-primary" /> Actual
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-warning" /> AI Predicted
        </span>
      </div>
    </div>
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(200, 18%, 90%)" />
        <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="hsl(210, 15%, 46%)" />
        <YAxis tick={{ fontSize: 12 }} stroke="hsl(210, 15%, 46%)" />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(0, 0%, 100%)",
            border: "1px solid hsl(200, 18%, 90%)",
            borderRadius: "8px",
            fontSize: "12px",
          }}
        />
        <ReferenceLine y={200} stroke="hsl(0, 72%, 51%)" strokeDasharray="4 4" label={{ value: "Reorder Level", fill: "hsl(0, 72%, 51%)", fontSize: 11 }} />
        <Line type="monotone" dataKey="actual" stroke="hsl(199, 89%, 38%)" strokeWidth={2.5} dot={{ r: 4 }} connectNulls={false} />
        <Line type="monotone" dataKey="predicted" stroke="hsl(38, 92%, 50%)" strokeWidth={2.5} strokeDasharray="6 3" dot={{ r: 4 }} connectNulls={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default PredictiveChart;
