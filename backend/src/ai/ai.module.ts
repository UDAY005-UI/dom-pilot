import { Module } from "@nestjs/common";
import { AiService } from "./ai.service";
import { ModelClient } from "./model.client";
import { PromptBuilderService } from "./prompt-builder.service";

@Module({
  providers: [AiService, ModelClient, PromptBuilderService],
  exports: [AiService],
})
export class AiModule {}