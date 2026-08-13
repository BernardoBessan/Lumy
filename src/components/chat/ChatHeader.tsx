"use client";

import { useRouter } from "next/navigation";

import { Logo } from "@/components/ui/Logo";
import { logout } from "@/lib/firebase/auth";

type ChatHeaderProps = {
  onOpenSidebar: () => void;
};

export function ChatHeader({
  onOpenSidebar,
}: ChatHeaderProps) {
  const router = useRouter();

  async function handleLogout() {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  }

  return (
    <header className="flex items-center justify-between py-5 sm:py-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenSidebar}
          aria-label="Abrir conversas"
          className="flex h-9 w-9 items-center justify-center rounded-xl text-[#60736E] transition-colors hover:bg-[#EAF3F0] hover:text-[#18322D] sm:hidden"
        >
          <span className="text-xl leading-none">☰</span>
        </button>

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
        onClick={handleLogout}
        className="rounded-full px-4 py-2 text-sm font-medium text-[#60736E] transition-colors hover:bg-[#EAF3F0] hover:text-[#18322D]"
      >
        Sair
      </button>
    </header>
  );
}