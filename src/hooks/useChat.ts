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

    const assistantMessageId = Date.now() + 1;

    try {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: assistantMessageId,
          role: "assistant",
          content: "",
        },
      ]);

      let assistantContent = "";

      await generateAssistantResponse(
        updatedMessages.map(({ role, content }) => ({
          role,
          content,
        })),
        (chunk) => {
          assistantContent += chunk;

          setMessages((currentMessages) =>
            currentMessages.map((message) =>
              message.id === assistantMessageId
                ? {
                    ...message,
                    content: assistantContent,
                  }
                : message,
            ),
          );
        },
      );
    } catch (error) {
      console.error("Erro ao obter resposta da Lumy:", error);

      setMessages((currentMessages) =>
        currentMessages.map((message) =>
          message.id === assistantMessageId
            ? {
                ...message,
                content:
                  "Tive um problema para responder agora. Podemos tentar novamente?",
              }
            : message,
        ),
      );
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