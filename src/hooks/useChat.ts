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

  function sendMessage(content: string) {
    if (isLoading) {
      return;
    }

    const newMessage: Message = {
      id: Date.now(),
      role: "user",
      content,
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      newMessage,
    ]);

    setIsLoading(true);

    generateAssistantResponse(content)
      .then((assistantContent) => {
        const assistantMessage: Message = {
          id: Date.now() + 1,
          role: "assistant",
          content: assistantContent,
        };

        setMessages((currentMessages) => [
          ...currentMessages,
          assistantMessage,
        ]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return {
    messages,
    isLoading,
    sendMessage,
  };
}