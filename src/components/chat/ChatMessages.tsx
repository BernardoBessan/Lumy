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
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8">
        {messages.map((message) => {
          const isUser = message.role === "user";

          return (
            <div
              key={message.id}
              className={`flex ${
                isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={
                  isUser
                    ? "max-w-[85%] rounded-2xl rounded-br-md bg-[#3F8F7D] px-4 py-3 text-sm leading-6 text-white shadow-sm sm:max-w-[70%]"
                    : "max-w-[85%] px-1 py-1 text-sm leading-7 text-[#49635D] sm:max-w-[75%] sm:text-[15px]"
                }
              >
                {message.content}
              </div>
            </div>
          );
        })}

        <ChatTypingIndicator visible={isLoading} />

        <div ref={bottomRef} />
      </div>
    </div>
  );
}