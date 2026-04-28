import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Megaphone, TrendingUp } from "lucide-react";

const modules = [
  {
    icon: Bot,
    title: "AI Sales Closer",
    description:
      "Qualifies leads, handles objections, sends checkout links, and pushes demos.",
  },
  {
    icon: Megaphone,
    title: "Marketing Engine",
    description:
      "Creates TikTok, Instagram, LinkedIn, and email campaigns for demand generation.",
  },
  {
    icon: TrendingUp,
    title: "Analytics Brain",
    description:
      "Tracks CAC, LTV, churn, MRR, retention, and conversion performance.",
  },
];

export function ModulesGrid() {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {modules.map((mod) => (
        <Card
          key={mod.title}
          className="border-border bg-card/50 backdrop-blur-xl"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg font-bold">
              <mod.icon className="h-5 w-5" />
              {mod.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{mod.description}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
