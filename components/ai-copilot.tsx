"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Brain, Send } from "lucide-react";

export function AICopilot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(
    "Ask the copilot what to build, sell, or optimize next."
  );

  const handleAsk = () => {
    if (!question.trim()) {
      setAnswer("Type a question first.");
      return;
    }
    setAnswer(
      "AI Recommendation: Launch CDL Alpha School SaaS first with Stripe checkout, student dashboard, admin CRM, and TikTok lead funnel. Then package the AI sales + investor dashboard as the expansion layer. Next action: connect domain, Stripe, and lead form."
    );
  };

  return (
    <Card className="border-border bg-card/50 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-bold">
          <Brain className="h-5 w-5" />
          AI Copilot Demo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="min-h-[100px] text-muted-foreground leading-relaxed">
          {answer.startsWith("AI Recommendation:") ? (
            <>
              <span className="font-bold text-foreground">AI Recommendation:</span>{" "}
              {answer.replace("AI Recommendation: ", "")}
            </>
          ) : (
            answer
          )}
        </div>
        <div className="mt-4 flex gap-3">
          <Input
            placeholder="Example: What should CDL Alpha launch first?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAsk()}
            className="flex-1 rounded-xl border-border bg-background"
          />
          <Button
            onClick={handleAsk}
            className="rounded-xl px-5 font-extrabold"
          >
            <Send className="mr-2 h-4 w-4" />
            Ask
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
