import { GoogleGenAI } from "@google/genai";

import { LUMY_SYSTEM_INSTRUCTION } from "@/lib/chat/lumyPrompt";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messages = body.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json(
        { error: "Mensagens inválidas." },
        { status: 400 },
      );
    }

    const contents = messages.map((message) => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [{ text: message.content }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction: LUMY_SYSTEM_INSTRUCTION,
      },
    });

    return Response.json({
      message: response.text,
    });
  } catch (error) {
    console.error("Erro ao gerar resposta:", error);

    return Response.json(
      { error: "Não foi possível gerar uma resposta." },
      { status: 500 },
    );
  }
}