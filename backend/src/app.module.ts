import { Module } from '@nestjs/common';
import { AiModule } from './ai/ai.module';
import { AnalyzeModule } from './analyze/analyze.module';

@Module({
  imports: [AiModule, AnalyzeModule],
})
export class AppModule {}
