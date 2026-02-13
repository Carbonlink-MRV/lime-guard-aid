import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Thermometer, BarChart3, Smartphone, Shield, Activity, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const features = [
  {
    icon: Thermometer,
    title: "IoT Cold-Chain Monitoring",
    description: "Real-time temperature tracking from Vaccibox sensors ensures vaccines stay within the safe 2–8°C range at all times.",
  },
  {
    icon: Smartphone,
    title: "USSD Reporting",
    description: "Nurses in low-connectivity areas can report stock and temperature data via simple USSD menus on any mobile phone.",
  },
  {
    icon: BarChart3,
    title: "AI-Powered Predictions",
    description: "Prophet-based forecasting predicts vaccine stock depletion weeks in advance, enabling proactive ordering and zero wastage.",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description: "Separate views for facility nurses and district health officers ensure everyone sees the data they need.",
  },
  {
    icon: Activity,
    title: "Real-Time Alerts",
    description: "Instant notifications for cold-chain breaches, low stock, and predicted shortages keep your supply chain safe.",
  },
  {
    icon: Zap,
    title: "Offline-First Design",
    description: "Built to work in low-bandwidth environments with data syncing when connectivity returns.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-card/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-hero">
              <Thermometer className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">LIME</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">Log In</Button>
            </Link>
            <Link to="/login">
              <Button variant="hero" size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-16">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="animate-slide-in">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                <Activity className="h-3.5 w-3.5" />
                AI-Driven Vaccine Management
              </div>
              <h1 className="mb-6 font-display text-4xl font-extrabold leading-tight text-foreground lg:text-5xl xl:text-6xl">
                Smarter Vaccines,{" "}
                <span className="text-gradient">Healthier Communities</span>
              </h1>
              <p className="mb-8 max-w-lg text-lg text-muted-foreground">
                LIME combines IoT sensors, USSD reporting, and AI predictions to ensure every vaccine reaches every child — on time, at the right temperature.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/login">
                  <Button variant="hero" size="lg">Get Started</Button>
                </Link>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-elevated">
                <img
                  src={heroImage}
                  alt="LIME Vaccine Management System - cold chain monitoring with vaccine vials and digital sensors"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-display text-3xl font-bold text-foreground">
              End-to-End Vaccine Supply Chain
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From cold-chain sensors at the facility to predictive dashboards at the district level, LIME has every link covered.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border bg-card p-6 shadow-card transition-all hover:shadow-elevated"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:gradient-hero group-hover:text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto flex items-center justify-between px-4 text-sm text-muted-foreground">
          <span>© 2026 LIME. All rights reserved.</span>
          <span>Built for healthier communities in Kenya</span>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
