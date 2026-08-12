type ChatTypingIndicatorProps = {
  visible: boolean;
};

export function ChatTypingIndicator({
  visible,
}: ChatTypingIndicatorProps) {
  if (!visible) {
    return null;
  }

  return (
    <div
      className="flex items-center px-6 py-4"
      aria-label="Lumy está respondendo"
    >
      <div className="flex h-10 items-center gap-1 rounded-2xl border border-[#DCEAE5] bg-[#F9FCFB] px-4">
        <span
          className="h-2.5 w-2.5 rounded-full bg-[#3F8F7D] animate-[lumy-breathe_1.2s_ease-in-out_infinite]"
        />

        <span
          className="h-2.5 w-2.5 rounded-full bg-[#3F8F7D] animate-[lumy-breathe_1.2s_ease-in-out_0.2s_infinite]"
        />

        <span
          className="h-2.5 w-2.5 rounded-full bg-[#3F8F7D] animate-[lumy-breathe_1.2s_ease-in-out_0.4s_infinite]"
        />
      </div>
    </div>
  );
}