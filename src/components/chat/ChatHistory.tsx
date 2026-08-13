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
    <aside className="flex h-full w-full flex-col bg-white">
      <div className="p-4">
        <button
          type="button"
          onClick={onNewConversation}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#3F8F7D] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#347A6B]"
        >
          <span className="text-lg leading-none">+</span>
          Nova conversa
        </button>
      </div>

      <div className="px-4 pb-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#83948F]">
          Conversas
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto px-4 pb-4 sm:flex-1 sm:flex-col sm:overflow-x-visible sm:overflow-y-auto">
        {conversations.length === 0 ? (
          <p className="py-3 text-xs leading-5 text-[#98A7A3]">
            Suas conversas aparecerão aqui.
          </p>
        ) : (
          conversations.map((conversation) => {
            const isActive =
              conversation.id === activeConversationId;

            return (
              <button
                key={conversation.id}
                type="button"
                onClick={() => onSelect(conversation.id)}
                className={`min-w-48 rounded-xl px-3 py-2.5 text-left transition-colors sm:min-w-0 ${
                  isActive
                    ? "bg-[#EDF7F4] text-[#285D53]"
                    : "text-[#60736E] hover:bg-[#F7FAF9] hover:text-[#285D53]"
                }`}
              >
                <p className="truncate text-sm font-medium">
                  {conversation.title}
                </p>
              </button>
            );
          })
        )}
      </div>
    </aside>
  );
}