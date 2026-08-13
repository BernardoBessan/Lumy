"use client";

import type { StoredConversation } from "@/lib/firebase/firestore";

type ChatHistoryProps = {
  conversations: StoredConversation[];
  activeConversationId: string | null;
  onSelect: (conversationId: string) => void;
  onNewConversation: () => void;
  onDelete: (conversationId: string) => void;
  onClose?: () => void;
};

export function ChatHistory({
  conversations,
  activeConversationId,
  onSelect,
  onNewConversation,
  onDelete,
  onClose,
}: ChatHistoryProps) {
  return (
    <aside className="flex h-full w-full flex-col bg-white">
      <div className="flex items-center gap-2 p-4">
        <button
          type="button"
          onClick={onNewConversation}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#3F8F7D] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#347A6B]"
        >
          <span className="text-lg leading-none">+</span>
          Nova conversa
        </button>

        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar barra lateral"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#60736E] transition-colors hover:bg-[#EAF3F0] hover:text-[#18322D] sm:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="16"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.8"
            />

            <path
              d="M9 4V20"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        </button>
      </div>

      <div className="px-4 pb-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#83948F]">
          Conversas
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 pb-4">
        {conversations.length === 0 ? (
          <p className="py-3 text-xs leading-5 text-[#98A7A3]">
            Suas conversas aparecerão aqui.
          </p>
        ) : (
          conversations.map((conversation) => {
            const isActive =
              conversation.id === activeConversationId;

            return (
              <div
                key={conversation.id}
                className={`group flex items-center gap-1 rounded-xl transition-colors ${
                  isActive
                    ? "bg-[#EDF7F4]"
                    : "hover:bg-[#F7FAF9]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => onSelect(conversation.id)}
                  className={`min-w-0 flex-1 px-3 py-2.5 text-left ${
                    isActive
                      ? "text-[#285D53]"
                      : "text-[#60736E] hover:text-[#285D53]"
                  }`}
                >
                  <p className="truncate text-sm font-medium">
                    {conversation.title}
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => onDelete(conversation.id)}
                  aria-label={`Excluir conversa ${conversation.title}`}
                  className="mr-2 hidden h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[#98A7A3] transition-colors hover:bg-[#FCEEEE] hover:text-[#C76B6B] group-hover:flex"
                >
                  ×
                </button>
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
}