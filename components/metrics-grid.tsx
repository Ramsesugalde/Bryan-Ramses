import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  { label: "MRR", value: "$64.3K" },
  { label: "Leads Generated", value: "18,420" },
  { label: "Conversion Rate", value: "9.8%" },
  { label: "AI Score Avg", value: "86" },
];

export function MetricsGrid() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card
          key={metric.label}
          className="border-border bg-card/50 backdrop-blur-xl"
        >
          <CardContent className="pt-6">
            <span className="text-sm text-muted-foreground">{metric.label}</span>
            <div className="mt-2 text-3xl font-black">{metric.value}</div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
