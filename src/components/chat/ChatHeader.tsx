import { Logo } from "@/components/ui/Logo";

export function ChatHeader() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <Logo size="sm" />

        <span className="text-xl font-semibold tracking-tight text-[#152F2B]">
          Lumy
        </span>
      </div>

      <button
        type="button"
        className="rounded-full px-4 py-2 text-sm font-medium text-[#49635D] transition-colors hover:bg-[#EAF3F0]"
      >
        Sair
      </button>
    </header>
  );
}