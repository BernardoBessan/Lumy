"use client";

import { useEffect, useRef, useState } from "react";

type ChatInputProps = {
  onSend: (content: string) => void;
  disabled?: boolean;
};

export function ChatInput({
  onSend,
  disabled = false,
}: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const canSend = value.trim().length > 0 && !disabled;

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) {
      return;
    }

    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 128)}px`;
  }, [value]);

  function handleSubmit() {
    if (!canSend) {
      return;
    }

    onSend(value.trim());
    setValue("");

    requestAnimationFrame(() => {
      textareaRef.current?.focus();
    });
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div className="border-t border-[#E5EEEB] bg-white px-4 py-4 sm:px-6 sm:py-5">
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex items-end gap-2 rounded-2xl border border-[#D5E4DF] bg-[#F9FCFB] p-2 transition-all focus-within:border-[#3F8F7D] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#3F8F7D]/10">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            rows={1}
            placeholder="Escreva como você está se sentindo..."
            className="max-h-32 min-h-10 min-w-0 flex-1 resize-none overflow-y-auto bg-transparent px-3 py-2 text-sm leading-6 text-[#18322D] outline-none placeholder:text-[#94A5A0] disabled:cursor-not-allowed disabled:opacity-60"
          />

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSend}
            aria-label="Enviar mensagem"
            className="flex h-10 shrink-0 items-center justify-center rounded-xl bg-[#3F8F7D] px-4 text-sm font-semibold text-white transition-all hover:bg-[#347A6B] active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100"
          >
            Enviar
          </button>
        </div>

        <p className="mt-3 text-center text-[11px] text-[#98A7A3]">
          Enter para enviar · Shift + Enter para quebrar linha
        </p>

        <p className="mt-1 text-center text-[11px] text-[#98A7A3]">
          A Lumy oferece apoio inicial e não substitui profissionais de saúde.
        </p>
      </div>
    </div>
  );
}