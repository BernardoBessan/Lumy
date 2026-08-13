"use client";

import type { StoredConversation } from "@/lib/firebase/firestore";

type ChatHistoryProps = {
  conversations: StoredConversation[];
  activeConversationId: string | null;
  onSelect: (conversationId: string) => void;
  onNewConversation: () => void;
  onDelete: (conversationId: string) => void;
};

export function ChatHistory({
  conversations,
  activeConversationId,
  onSelect,
  onNewConversation,
  onDelete,
}: ChatHistoryProps) {
  function handleDelete(
    event: React.MouseEvent,
    conversationId: string,
  ) {
    event.stopPropagation();

    const confirmed = window.confirm(
      "Tem certeza que deseja excluir esta conversa?",
    );

    if (!confirmed) {
      return;
    }

    onDelete(conversationId);
  }

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
              <div
                key={conversation.id}
                className={`group flex min-w-48 items-center rounded-xl transition-colors sm:min-w-0 ${
                  isActive
                    ? "bg-[#EDF7F4] text-[#285D53]"
                    : "text-[#60736E] hover:bg-[#F7FAF9] hover:text-[#285D53]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => onSelect(conversation.id)}
                  className="min-w-0 flex-1 px-3 py-2.5 text-left"
                >
                  <p className="truncate text-sm font-medium">
                    {conversation.title}
                  </p>
                </button>

                <button
                  type="button"
                  onClick={(event) =>
                    handleDelete(event, conversation.id)
                  }
                  aria-label={`Excluir conversa ${conversation.title}`}
                  className="mr-1 hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#98A7A3] transition-colors hover:bg-[#EAF3F0] hover:text-[#C05A5A] group-hover:flex"
                >
                  <span className="text-base leading-none">
                    ×
                  </span>
                </button>
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
}