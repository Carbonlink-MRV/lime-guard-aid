import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Thermometer, User, ShieldCheck } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<"nurse" | "officer">("nurse");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "officer") {
      navigate("/dashboard");
    } else {
      navigate("/inventory");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left panel */}
      <div className="hidden w-1/2 gradient-hero lg:flex lg:flex-col lg:items-center lg:justify-center lg:p-12">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/20 backdrop-blur-sm">
          <Thermometer className="h-8 w-8 text-primary-foreground" />
        </div>
        <h1 className="mt-6 font-display text-4xl font-bold text-primary-foreground">LIME</h1>
        <p className="mt-3 max-w-md text-center text-lg text-primary-foreground/80">
          AI-Driven Vaccine Management for healthier communities across Kenya.
        </p>
      </div>

      {/* Right panel */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-hero">
              <Thermometer className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">LIME</span>
          </div>

          <h2 className="mb-2 font-display text-2xl font-bold text-foreground">Welcome back</h2>
          <p className="mb-8 text-muted-foreground">Sign in to access your dashboard</p>

          {/* Role selector */}
          <div className="mb-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setRole("nurse")}
              className={`flex items-center gap-2 rounded-lg border-2 p-3 text-left text-sm font-medium transition-all ${
                role === "nurse"
                  ? "border-primary bg-accent text-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/30"
              }`}
            >
              <User className="h-4 w-4" />
              <div>
                <div className="font-semibold">Nurse</div>
                <div className="text-xs text-muted-foreground">Facility Manager</div>
              </div>
            </button>
            <button
              type="button"
              onClick={() => setRole("officer")}
              className={`flex items-center gap-2 rounded-lg border-2 p-3 text-left text-sm font-medium transition-all ${
                role === "officer"
                  ? "border-primary bg-accent text-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/30"
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              <div>
                <div className="font-semibold">Officer</div>
                <div className="text-xs text-muted-foreground">District Health</div>
              </div>
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@health.go.ke"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1.5"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Sign In
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Demo: click Sign In with any credentials
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
