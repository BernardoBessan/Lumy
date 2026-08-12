import { Logo } from "@/components/ui/Logo";

export function ChatHeader() {
  return (
    <header className="flex items-center justify-between py-5 sm:py-6">
      <div className="flex items-center gap-3">
        <Logo size="sm" />

        <div className="flex flex-col">
          <span className="text-lg font-semibold tracking-tight text-[#152F2B]">
            Lumy
          </span>

          <span className="text-xs text-[#7A8D87]">
            Seu espaço de conversa
          </span>
        </div>
      </div>

      <button
        type="button"
        className="rounded-full px-4 py-2 text-sm font-medium text-[#60736E] transition-colors hover:bg-[#EAF3F0] hover:text-[#18322D]"
      >
        Sair
      </button>
    </header>
  );
}