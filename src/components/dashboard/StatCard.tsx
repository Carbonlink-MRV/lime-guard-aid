import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "warning";
  icon: LucideIcon;
}

const changeColors = {
  positive: "text-success",
  negative: "text-destructive",
  warning: "text-warning",
};

const iconBgColors = {
  positive: "bg-success/10 text-success",
  negative: "bg-destructive/10 text-destructive",
  warning: "bg-warning/10 text-warning",
};

const StatCard = ({ title, value, change, changeType, icon: Icon }: StatCardProps) => (
  <div className="rounded-xl border bg-card p-5 shadow-card transition-all hover:shadow-elevated">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="mt-1 font-display text-2xl font-bold text-card-foreground">{value}</p>
        <p className={`mt-1 text-xs font-medium ${changeColors[changeType]}`}>{change}</p>
      </div>
      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBgColors[changeType]}`}>
        <Icon className="h-5 w-5" />
      </div>
    </div>
  </div>
);

export default StatCard;
