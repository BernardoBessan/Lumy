import { useState } from "react";

import { generateAssistantResponse } from "@/lib/chat/chatService";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function sendMessage(content: string) {
    if (isLoading) {
      return;
    }

    const newMessage: Message = {
      id: Date.now(),
      role: "user",
      content,
    };

    const updatedMessages = [...messages, newMessage];

    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const assistantContent = await generateAssistantResponse(
        updatedMessages.map(({ role, content }) => ({
          role,
          content,
        })),
      );

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: assistantContent,
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        assistantMessage,
      ]);
    } catch (error) {
      console.error("Erro ao obter resposta da Lumy:", error);

      const errorMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "Tive um problema para responder agora. Podemos tentar novamente?",
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        errorMessage,
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    messages,
    isLoading,
    sendMessage,
  };
}