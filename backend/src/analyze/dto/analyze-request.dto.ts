import { IsString } from "class-validator";

export class AnalyzeRequestDto {
  @IsString()
  message: string;
}