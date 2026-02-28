import { Injectable } from "@nestjs/common";

@Injectable()
export class PromptBuilderService {
  buildPrompt(message: string): string {
    return `
You are a DOM debugging assistant.

User issue:
${message}

Return ONLY valid JSON in this exact format:

{
  "summary": "short explanation",
  "rootCause": "probable cause",
  "fixes": ["fix 1", "fix 2"],
  "severity": "low|medium|high"
}

Do not include markdown.
Do not include explanations.
Return only JSON.
`;
  }
}