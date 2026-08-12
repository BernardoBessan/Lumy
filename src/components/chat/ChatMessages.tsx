"use client";

import { useEffect, useRef } from "react";

import { ChatTypingIndicator } from "@/components/chat/ChatTypingIndicator";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

type ChatMessagesProps = {
  messages: Message[];
  isLoading: boolean;
};

export function ChatMessages({
  messages,
  isLoading,
}: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  if (messages.length === 0 && !isLoading) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      <div className="flex flex-col gap-4 p-4 sm:p-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 sm:max-w-[70%] ${
                message.role === "user"
                  ? "rounded-br-md bg-[#3F8F7D] text-white"
                  : "rounded-bl-md border border-[#DCEAE5] bg-[#F7FAF9] text-[#49635D]"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        <ChatTypingIndicator visible={isLoading} />

        <div ref={bottomRef} />
      </div>
    </div>
  );
}