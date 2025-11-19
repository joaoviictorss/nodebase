import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import prisma from "@/lib/db";
import { inngest } from "./client";

const google = createGoogleGenerativeAI();

export const executeAi = inngest.createFunction(
  { id: "execute" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    const { steps } = await step.ai.wrap("gemini-generate-text", generateText, {
      model: google("gemini-2.5-flash"),
      system:
        "Você é um assistente de IA que responde perguntas de forma clara e objetiva.",
      prompt: event.data.prompt,
    });

    return steps;
  }
);
