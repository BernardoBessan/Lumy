import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatEmptyState } from "@/components/chat/ChatEmptyState";
import { ChatInput } from "@/components/chat/ChatInput";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-[#F7FAF9] text-[#18322D]">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 sm:px-8">
        <ChatHeader />

        <section className="flex flex-1 flex-col py-8">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#5D8A80]">
              Seu espaço de conversa
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#18322D] sm:text-4xl">
              Converse com a Lumy
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#60736E] sm:text-base">
              Você pode começar contando como está se sentindo ou o que está
              passando pela sua cabeça.
            </p>
          </div>

          <div className="flex flex-1 flex-col rounded-3xl border border-[#DCEAE5] bg-white shadow-sm">
            <ChatEmptyState />
            <ChatInput />
          </div>
        </section>
      </div>
    </main>
  );
}