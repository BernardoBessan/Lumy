import { Logo } from "@/components/ui/Logo";

export function ChatEmptyState() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-12 sm:px-10">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF3F0]">
          <Logo size="md" />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5D8A80]">
          Seu espaço de conversa
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#18322D] sm:text-3xl">
          Olá, eu sou a Lumy.
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#71837E] sm:text-[15px]">
          Você pode começar contando o que está acontecendo, como está se
          sentindo ou simplesmente dizendo o que está passando pela sua
          cabeça.
        </p>

        <p className="mt-5 text-xs text-[#98A7A3]">
          Converse no seu ritmo.
        </p>
      </div>
    </div>
  );
}