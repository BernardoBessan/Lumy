export function ChatInput() {
  return (
    <div className="border-t border-[#E5EEEB] p-4 sm:p-5">
      <div className="flex items-center gap-3 rounded-2xl border border-[#D5E4DF] bg-[#F9FCFB] p-2 focus-within:border-[#3F8F7D] focus-within:ring-2 focus-within:ring-[#3F8F7D]/10">
        <input
          type="text"
          placeholder="Escreva como você está se sentindo..."
          className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-[#18322D] outline-none placeholder:text-[#94A5A0]"
        />

        <button
          type="button"
          className="rounded-xl bg-[#3F8F7D] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#347A6B]"
        >
          Enviar
        </button>
      </div>

      <p className="mt-3 text-center text-[11px] text-[#98A7A3]">
        A Lumy oferece apoio inicial e não substitui profissionais de saúde.
      </p>
    </div>
  );
}