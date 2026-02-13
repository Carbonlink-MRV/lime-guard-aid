import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Thermometer, LayoutDashboard, Package, LogOut, Plus, Search, Menu, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const vaccineData = [
  { name: "Measles (MCV)", batch: "MCV-2024-A12", qty: 1200, expiry: "2026-08-15", status: "In Stock" as const },
  { name: "Polio (OPV)", batch: "OPV-2024-B08", qty: 85, expiry: "2026-04-20", status: "Low Stock" as const },
  { name: "BCG", batch: "BCG-2024-C03", qty: 2400, expiry: "2026-12-01", status: "In Stock" as const },
  { name: "Pentavalent (DPT-HepB-Hib)", batch: "PV-2024-D15", qty: 300, expiry: "2026-03-10", status: "Expiring Soon" as const },
  { name: "Rotavirus", batch: "RV-2024-E22", qty: 45, expiry: "2026-06-30", status: "Low Stock" as const },
  { name: "Pneumococcal (PCV13)", batch: "PCV-2024-F09", qty: 1800, expiry: "2027-01-15", status: "In Stock" as const },
  { name: "Yellow Fever", batch: "YF-2024-G01", qty: 600, expiry: "2026-05-01", status: "In Stock" as const },
  { name: "Tetanus Toxoid (TT)", batch: "TT-2024-H18", qty: 20, expiry: "2026-02-28", status: "Expiring Soon" as const },
];

const statusStyles = {
  "In Stock": "bg-success/10 text-success border-success/20",
  "Low Stock": "bg-warning/10 text-warning border-warning/20",
  "Expiring Soon": "bg-destructive/10 text-destructive border-destructive/20",
};

const Inventory = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = vaccineData.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase())
  );

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
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            to="/inventory"
            className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2.5 text-sm font-medium text-accent-foreground"
          >
            <Package className="h-4 w-4" />
            Inventory
          </Link>
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

      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-foreground/20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <main className="flex-1 overflow-auto">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-card/80 px-4 backdrop-blur-md lg:px-6">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Menu className="h-5 w-5 text-foreground" />
            </button>
            <div>
              <h1 className="font-display text-lg font-bold text-foreground">Vaccine Inventory</h1>
              <p className="text-xs text-muted-foreground">KEMRI Health Facility · Nurse View</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="hero" size="sm">
              <Plus className="h-4 w-4" />
              Add Stock
            </Button>
            <Button variant="outline" size="sm">Report Usage</Button>
          </div>
        </header>

        <div className="p-4 lg:p-6">
          {/* Search */}
          <div className="relative mb-6 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search vaccines..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-xl border bg-card shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Vaccine</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Batch No.</th>
                    <th className="px-4 py-3 text-right font-semibold text-foreground">Quantity</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Expiry</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((v) => (
                    <tr key={v.batch} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground">{v.name}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{v.batch}</td>
                      <td className="px-4 py-3 text-right tabular-nums text-foreground">{v.qty.toLocaleString()}</td>
                      <td className="px-4 py-3 text-muted-foreground">{v.expiry}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[v.status]}`}>
                          {v.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inventory;
