import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
/*import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { initialMessage } from "../../chatbot/lib/data";

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
  compatibility: "strict",
});

export const runtime = "edge";

export async function POST(req) {
  const { messages } = await req.json();

  const stream = await streamText({
    model: openai("gpt-4o-mini"),
    messages: [initialMessage, ...messages],
    temperature: 1,
  });

  return stream?.toDataStreamResponse();
}
*/
