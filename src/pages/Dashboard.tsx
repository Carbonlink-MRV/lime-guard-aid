import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Syringe, AlertTriangle, TrendingDown, Bell, Thermometer,
  LayoutDashboard, Package, LogOut, MapPin, Menu, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/dashboard/StatCard";
import PredictiveChart from "@/components/dashboard/PredictiveChart";
import KenyaMap from "@/components/dashboard/KenyaMap";
import IoTWidget from "@/components/dashboard/IoTWidget";
import USSDSimulator from "@/components/dashboard/USSDSimulator";
import AIAlerts from "@/components/dashboard/AIAlerts";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showUSSD, setShowUSSD] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform border-r bg-card transition-transform duration-200 lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center gap-2 border-b px-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-hero">
            <Thermometer className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-foreground">LIME</span>
          <button onClick={() => setSidebarOpen(false)} className="ml-auto lg:hidden">
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
        <nav className="space-y-1 p-3">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2.5 text-sm font-medium text-accent-foreground"
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            to="/inventory"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <Package className="h-4 w-4" />
            Inventory
          </Link>
          <button
            onClick={() => setShowUSSD(!showUSSD)}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <MapPin className="h-4 w-4" />
            USSD Simulator
          </button>
        </nav>
        <div className="absolute bottom-0 w-full border-t p-3">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-foreground/20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {/* Top bar */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-card/80 px-4 backdrop-blur-md lg:px-6">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Menu className="h-5 w-5 text-foreground" />
            </button>
            <div>
              <h1 className="font-display text-lg font-bold text-foreground">District Dashboard</h1>
              <p className="text-xs text-muted-foreground">Nairobi County · District Health Officer</p>
            </div>
          </div>
          <AIAlerts />
        </header>

        <div className="p-4 lg:p-6 space-y-6">
          {/* Stat cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Total Vaccines"
              value="24,850"
              change="+2.4%"
              changeType="positive"
              icon={Syringe}
            />
            <StatCard
              title="Active Alerts"
              value="3"
              change="Cold-chain breaches"
              changeType="negative"
              icon={AlertTriangle}
            />
            <StatCard
              title="Predicted Stock-outs"
              value="5"
              change="Next 14 days"
              changeType="warning"
              icon={TrendingDown}
            />
            <StatCard
              title="Facilities Reporting"
              value="47/52"
              change="90.4% coverage"
              changeType="positive"
              icon={Bell}
            />
          </div>

          {/* Map + IoT */}
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <KenyaMap />
            </div>
            <IoTWidget />
          </div>

          {/* Predictive chart */}
          <PredictiveChart />
        </div>
      </main>

      {/* USSD Simulator */}
      {showUSSD && <USSDSimulator onClose={() => setShowUSSD(false)} />}
    </div>
  );
};

export default Dashboard;
