import { useState } from "react";

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

    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "Entendo. Quer me contar um pouco mais sobre o que aconteceu?",
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        assistantMessage,
      ]);

      setIsLoading(false);
    }, 1200);
  }

  return {
    messages,
    isLoading,
    sendMessage,
  };
}