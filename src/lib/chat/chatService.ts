type Message = {
  role: "user" | "assistant";
  content: string;
};

export async function generateAssistantResponse(
  messages: Message[],
  onChunk: (chunk: string) => void,
): Promise<void> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ messages }),
  });

  if (!response.ok) {
    throw new Error("Não foi possível obter uma resposta da Lumy.");
  }

  if (!response.body) {
    throw new Error("A resposta da Lumy não possui conteúdo.");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      const chunk = decoder.decode(value, {
        stream: true,
      });

      if (chunk) {
        onChunk(chunk);
      }
    }

    const remainingText = decoder.decode();

    if (remainingText) {
      onChunk(remainingText);
    }
  } finally {
    reader.releaseLock();
  }
}