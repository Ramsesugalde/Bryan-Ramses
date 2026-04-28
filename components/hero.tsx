import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-16 text-center md:py-20">
      <h1 className="text-balance text-4xl font-black leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
        Autonomous AI Growth + Sales Machine
      </h1>
      <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
        A functional investor-grade SaaS preview for CDL Alpha: landing page, metrics dashboard, AI copilot mockup, growth engine, and sales pipeline.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button size="lg" className="rounded-2xl px-6 font-extrabold">
          Open Dashboard
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-2xl px-6 font-extrabold"
        >
          Try AI Copilot
        </Button>
      </div>
    </section>
  );
}
