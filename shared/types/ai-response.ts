export interface AiSuggestion {
  summary: string;
  rootCause?: string;
  fixes: string[];
  severity: "low" | "medium" | "high";
}