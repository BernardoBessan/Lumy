"use client";

import type { StoredConversation } from "@/lib/firebase/firestore";

type ChatHistoryProps = {
  conversations: StoredConversation[];
  activeConversationId: string | null;
  onSelect: (conversationId: string) => void;
  onNewConversation: () => void;
};

export function ChatHistory({
  conversations,
  activeConversationId,
  onSelect,
  onNewConversation,
}: ChatHistoryProps) {
  return (
    <aside className="w-full border-b border-[#DCEAE5] bg-white px-4 py-4 sm:px-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[#18322D]">
            Suas conversas
          </p>

          <p className="mt-0.5 text-xs text-[#83948F]">
            Continue de onde parou
          </p>
        </div>

        <button
          type="button"
          onClick={onNewConversation}
          className="rounded-full bg-[#3F8F7D] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#347A6B]"
        >
          Nova conversa
        </button>
      </div>

      {conversations.length > 0 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {conversations.map((conversation) => {
            const isActive = conversation.id === activeConversationId;

            return (
              <button
                key={conversation.id}
                type="button"
                onClick={() => onSelect(conversation.id)}
                className={`min-w-48 rounded-2xl border px-4 py-3 text-left transition-colors ${
                  isActive
                    ? "border-[#BBDDD3] bg-[#EDF7F4]"
                    : "border-[#E2ECE8] bg-white hover:bg-[#F7FAF9]"
                }`}
              >
                <p
                  className={`truncate text-sm font-medium ${
                    isActive ? "text-[#285D53]" : "text-[#49635D]"
                  }`}
                >
                  {conversation.title}
                </p>
              </button>
            );
          })}
        </div>
      )}
    </aside>
  );
}