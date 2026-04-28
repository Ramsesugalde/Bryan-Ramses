import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

const deals = [
  { name: "CDL Alpha School SaaS", score: 94 },
  { name: "VC Operating System", score: 89 },
  { name: "AI Sales Center", score: 91 },
  { name: "Investor Portal", score: 87 },
];

export function DealPipeline() {
  return (
    <Card className="border-border bg-card/50 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-bold">
          <BarChart3 className="h-5 w-5" />
          Deal + Growth Pipeline
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {deals.map((deal) => (
          <div
            key={deal.name}
            className="flex items-center justify-between rounded-2xl border border-border bg-secondary/50 px-4 py-3"
          >
            <span className="font-semibold">{deal.name}</span>
            <span className="font-black text-success">Score {deal.score}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
