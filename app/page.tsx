import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { MetricsGrid } from "@/components/metrics-grid";
import { DealPipeline } from "@/components/deal-pipeline";
import { FundraisingStatus } from "@/components/fundraising-status";
import { ModulesGrid } from "@/components/modules-grid";
import { AICopilot } from "@/components/ai-copilot";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at top left, #3b0b0b, #050505 42%), #050505",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 pb-12">
        <Navigation />
        <Hero />
        <MetricsGrid />

        {/* Two-column layout */}
        <section className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <DealPipeline />
          <FundraisingStatus />
        </section>

        <section className="mt-5">
          <ModulesGrid />
        </section>

        <section className="mt-5">
          <AICopilot />
        </section>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          Demo file ready for local preview - Deploy the production repo to Vercel for a public link
        </footer>
      </div>
    </div>
  );
}
