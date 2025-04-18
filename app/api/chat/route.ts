import { streamText, Message } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { initialMessage } from "@/app/chatbot/lib/data";

const google = createGoogleGenerativeAI({
  apiKey:
    process.env.GOOGLE_API_KEY || "AIzaSyBP3mrM0f4xKFFgJVp_T3q5oOFzO20buiU",
});

export const runtime = "edge";

const generateId = () => Math.random().toString(36).slice(2, 15);

const googlePrompt = (messages: Message[]): Message[] => [
  {
    id: generateId(),
    role: "user",
    content: initialMessage.content,
  },
  ...messages.map((message) => ({
    id: message.id || generateId(),
    role: message.role,
    content: message.content,
  })),
];

export async function POST(request: Request) {
  const { messages } = await request.json();
  const stream = await streamText({
    model: google("gemini-1.5-pro"),
    messages: googlePrompt(messages),
    temperature: 0.7,
  });
  return stream?.toDataStreamResponse();
}
