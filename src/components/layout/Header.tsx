import Link from "next/link";

import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <Logo size="md" />

        <span className="text-2xl font-semibold tracking-tight text-[#152F2B]">
          Lumy
        </span>
      </div>

      <Link
        href="/login"
        className="rounded-full px-4 py-2 text-sm font-medium text-[#315D57] transition-colors hover:bg-[#EDF5F2] hover:text-[#2F7D6D] focus:outline-none focus:ring-2 focus:ring-[#3F8F7D] focus:ring-offset-2"
      >
        Entrar
      </Link>
    </header>
  );
}