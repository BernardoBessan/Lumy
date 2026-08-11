import { Logo } from "@/components/ui/Logo";

export function ChatEmptyState() {
  return (
    <div className="flex flex-1 items-center justify-center p-6 sm:p-10">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-5 flex justify-center">
          <Logo size="md" />
        </div>

        <h2 className="text-lg font-semibold text-[#18322D]">
          Olá, eu sou a Lumy.
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#71837E]">
          Este é um espaço para você falar sobre o que está sentindo,
          organizar seus pensamentos e começar uma conversa no seu ritmo.
        </p>
      </div>
    </div>
  );
}