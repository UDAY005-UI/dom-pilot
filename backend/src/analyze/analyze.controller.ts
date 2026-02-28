import { Body, Controller, Post } from "@nestjs/common";
import { AnalyzeService } from "./analyze.service";
import { AnalyzeRequestDto } from "./dto/analyze-request.dto";

@Controller("analyze")
export class AnalyzeController {
  constructor(private readonly analyzeService: AnalyzeService) {}

  @Post()
  async analyze(@Body() dto: AnalyzeRequestDto) {
    return this.analyzeService.analyze(dto);
  }
}