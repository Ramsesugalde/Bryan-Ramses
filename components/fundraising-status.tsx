import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DollarSign } from "lucide-react";

export function FundraisingStatus() {
  return (
    <Card className="border-border bg-card/50 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-bold">
          <DollarSign className="h-5 w-5" />
          Fundraising Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <span className="text-sm text-muted-foreground">Round Fill</span>
        <div className="mt-2 text-4xl font-black">74%</div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-gold"
            style={{ width: "74%" }}
          />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Investor closing automation active: intent scoring, follow-ups, term sheet workflow.
        </p>
      </CardContent>
    </Card>
  );
}
