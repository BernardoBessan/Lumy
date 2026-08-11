"use client";

import { useState } from "react";

import { ChatEmptyState } from "@/components/chat/ChatEmptyState";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatInput } from "@/components/chat/ChatInput";
import { ChatMessages } from "@/components/chat/ChatMessages";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  function handleSendMessage(content: string) {
    const newMessage: Message = {
      id: Date.now(),
      role: "user",
      content,
    };

    setMessages((currentMessages) => [...currentMessages, newMessage]);

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
    }, 700);
  }

  return (
    <main className="min-h-screen bg-[#F7FAF9] text-[#18322D]">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 sm:px-8">
        <ChatHeader />

        <section className="flex flex-1 flex-col py-8">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#5D8A80]">
              Seu espaço de conversa
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#18322D] sm:text-4xl">
              Converse com a Lumy
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#60736E] sm:text-base">
              Você pode começar contando como está se sentindo ou o que está
              passando pela sua cabeça.
            </p>
          </div>

          <div className="flex flex-1 flex-col overflow-hidden rounded-3xl border border-[#DCEAE5] bg-white shadow-sm">
            {messages.length === 0 ? (
              <ChatEmptyState />
            ) : (
              <ChatMessages messages={messages} />
            )}

            <ChatInput onSend={handleSendMessage} />
          </div>
        </section>
      </div>
    </main>
  );
}