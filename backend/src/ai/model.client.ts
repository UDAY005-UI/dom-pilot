import axios from "axios";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ModelClient {
  private readonly apiKey = process.env.OPENROUTER_API_KEY;
  private readonly baseUrl = "https://openrouter.ai/api/v1/chat/completions";

  async callModel(prompt: string): Promise<string> {
    const response = await axios.post(
      this.baseUrl,
      {
        model: "openai/gpt-4o-mini", 
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  }
}