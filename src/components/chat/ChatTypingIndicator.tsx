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
    <div className="flex items-center px-6 py-4">
      <div className="flex h-10 w-14 items-center justify-center rounded-2xl border border-[#DCEAE5] bg-[#F9FCFB]">
        <span
          className="h-3 w-3 rounded-full bg-[#3F8F7D] animate-[lumy-breathe_1.2s_ease-in-out_infinite]"
          aria-label="Lumy está respondendo"
        />
      </div>
    </div>
  );
}