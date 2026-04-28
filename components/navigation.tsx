import { Truck } from "lucide-react";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between py-5">
      <div className="flex items-center gap-2 font-black tracking-tight">
        <Truck className="h-6 w-6" />
        <span>CDL Alpha</span>
        <span className="text-muted-foreground font-medium">AI SaaS Empire OS</span>
      </div>
      <div className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
        Live demo preview
      </div>
    </nav>
  );
}
