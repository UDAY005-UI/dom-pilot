import { Injectable, BadRequestException } from "@nestjs/common";
import { ModelClient } from "./model.client";
import { PromptBuilderService } from "./prompt-builder.service";
import { AiSuggestion } from "../../../shared/types/ai-response";

@Injectable()
export class AiService {
  constructor(
    private readonly modelClient: ModelClient,
    private readonly promptBuilder: PromptBuilderService
  ) {}

  async generateAnalysis(message: string): Promise<AiSuggestion> {
    const prompt = this.promptBuilder.buildPrompt(message);

    const rawResponse = await this.modelClient.callModel(prompt);

    let parsed: AiSuggestion;

    try {
      parsed = JSON.parse(rawResponse);
    } catch (err) {
      throw new BadRequestException("Invalid JSON returned from AI");
    }

    return parsed;
  }
}