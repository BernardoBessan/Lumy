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

    const stream = await ai.models.generateContentStream({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction: LUMY_SYSTEM_INSTRUCTION,
      },
    });

    const encoder = new TextEncoder();

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.text;

            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }

          controller.close();
        } catch (error) {
          console.error("Erro durante o streaming da Lumy:", error);
          controller.error(error);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Erro ao gerar resposta:", error);

    return Response.json(
      { error: "Não foi possível gerar uma resposta." },
      { status: 500 },
    );
  }
}