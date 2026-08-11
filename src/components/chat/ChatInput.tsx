"use client";

import { FormEvent, useState } from "react";

type ChatInputProps = {
  onSend: (content: string) => void;
};

export function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const content = message.trim();

    if (!content) {
      return;
    }

    onSend(content);
    setMessage("");
  }

  return (
    <div className="border-t border-[#E5EEEB] p-4 sm:p-5">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 rounded-2xl border border-[#D5E4DF] bg-[#F9FCFB] p-2 focus-within:border-[#3F8F7D] focus-within:ring-2 focus-within:ring-[#3F8F7D]/10"
      >
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Escreva como você está se sentindo..."
          className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-[#18322D] outline-none placeholder:text-[#94A5A0]"
        />

        <button
          type="submit"
          className="rounded-xl bg-[#3F8F7D] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#347A6B]"
        >
          Enviar
        </button>
      </form>

      <p className="mt-3 text-center text-[11px] text-[#98A7A3]">
        A Lumy oferece apoio inicial e não substitui profissionais de saúde.
      </p>
    </div>
  );
}