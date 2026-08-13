"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { User } from "firebase/auth";

import { ChatEmptyState } from "@/components/chat/ChatEmptyState";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatHistory } from "@/components/chat/ChatHistory";
import { ChatInput } from "@/components/chat/ChatInput";
import { ChatMessages } from "@/components/chat/ChatMessages";
import { observeAuthState } from "@/lib/firebase/auth";
import { useChat } from "@/hooks/useChat";

export default function ChatPage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  const {
    messages,
    isLoading,
    conversations,
    conversationId,
    sendMessage,
    selectConversation,
    newConversation,
  } = useChat();

  useEffect(() => {
    const unsubscribe = observeAuthState((currentUser) => {
      if (!currentUser) {
        router.replace("/login");
        return;
      }

      setUser(currentUser);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (authLoading || !user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7FAF9] text-[#18322D]">
        <p className="text-sm text-[#71837E]">
          Carregando...
        </p>
      </main>
    );
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
            <ChatHistory
              conversations={conversations}
              activeConversationId={conversationId}
              onSelect={(selectedConversationId) =>
                selectConversation(user.uid, selectedConversationId)
              }
              onNewConversation={newConversation}
            />

            {messages.length === 0 ? (
              <ChatEmptyState />
            ) : (
              <ChatMessages
                messages={messages}
                isLoading={isLoading}
              />
            )}

            <ChatInput
              onSend={sendMessage}
              disabled={isLoading}
            />
          </div>
        </section>
      </div>
    </main>
  );
}