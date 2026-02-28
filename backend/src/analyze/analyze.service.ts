import { Injectable } from "@nestjs/common";
import { AiService } from "../ai/ai.service";
import { AnalyzeRequestDto } from "./dto/analyze-request.dto";

@Injectable()
export class AnalyzeService {
  constructor(private readonly aiService: AiService) {}

  async analyze(dto: AnalyzeRequestDto) {
    return this.aiService.generateAnalysis(dto.message);
  }
}