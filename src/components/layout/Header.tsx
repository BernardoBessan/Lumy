import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Logo size="md" />

        <span className="text-2xl font-semibold tracking-tight text-[#152F2B]">
          Lumy
        </span>
      </div>

      <button
        type="button"
        className="text-base font-medium text-[#315D57] transition hover:text-[#2F7D6D]"
      >
        Entrar
      </button>
    </header>
  );
}