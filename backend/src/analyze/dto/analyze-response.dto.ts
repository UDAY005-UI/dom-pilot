import { AiSuggestion } from "@shared/types/ai-response";

export class AnalyzeResponseDto implements AiSuggestion {
  summary: string;
  rootCause?: string;
  fixes: string[];
  severity: "low" | "medium" | "high";
}