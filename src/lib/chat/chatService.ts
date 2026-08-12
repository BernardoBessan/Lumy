type Message = {
  role: "user" | "assistant";
  content: string;
};

export async function generateAssistantResponse(
  messages: Message[],
): Promise<string> {
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

  const data = await response.json();

  return data.message;
}