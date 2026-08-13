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
    isLoadingHistory,
    conversationId,
    conversations,
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
    <main className="h-screen overflow-hidden bg-[#F7FAF9] text-[#18322D]">
      <div className="flex h-full w-full">
        {/* Sidebar */}
        <div className="hidden h-full w-64 shrink-0 border-r border-[#DCEAE5] bg-white sm:flex sm:flex-col">
          <ChatHistory
            conversations={conversations}
            activeConversationId={conversationId}
            onSelect={(selectedConversationId) =>
              selectConversation(user.uid, selectedConversationId)
            }
            onNewConversation={newConversation}
          />
        </div>

        {/* Área principal */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="shrink-0 border-b border-[#E5EEEB] px-4 sm:px-6">
            <ChatHeader />
          </div>

          <section className="flex min-h-0 flex-1 flex-col">
            <div className="flex min-h-0 flex-1 flex-col">
              {isLoadingHistory ? (
                <div className="flex flex-1 items-center justify-center">
                  <p className="text-sm text-[#83948F]">
                    Carregando conversa...
                  </p>
                </div>
              ) : messages.length === 0 ? (
                <ChatEmptyState />
              ) : (
                <ChatMessages
                  messages={messages}
                  isLoading={isLoading}
                />
              )}

              <ChatInput
                onSend={sendMessage}
                disabled={isLoading || isLoadingHistory}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}