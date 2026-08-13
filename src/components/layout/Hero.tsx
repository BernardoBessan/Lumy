import Link from "next/link";

import { Logo } from "@/components/ui/Logo";

export function Hero() {
  return (
    <section className="flex flex-1 items-center justify-center py-10 lg:py-14">
      <div className="w-full max-w-3xl text-center">
        <div className="mx-auto mb-8">
          <Logo size="lg" />
        </div>

        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#5D8A80]">
          Seu espaço de cuidado
        </p>

        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#18322D] sm:text-5xl lg:text-6xl">
          Um espaço para você
          <span className="text-[#3F8F7D]"> se ouvir.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#60736E] sm:text-lg sm:leading-8">
          Converse, organize seus pensamentos e acompanhe sua jornada
          emocional com mais clareza, no seu ritmo.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/login"
            className="w-full rounded-full bg-[#3F8F7D] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#347A6B] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#3F8F7D] focus:ring-offset-2 sm:w-auto"
          >
            Começar agora
          </Link>

          <button
            type="button"
            className="w-full rounded-full border border-[#D5E4DF] bg-white px-7 py-3.5 text-sm font-semibold text-[#49635D] transition-colors hover:bg-[#F2F7F5] sm:w-auto"
          >
            Conhecer a Lumy
          </button>
        </div>

        <p className="mt-8 text-xs text-[#83948F]">
          A Lumy é uma ferramenta de apoio e não substitui profissionais de
          saúde.
        </p>
      </div>
    </section>
  );
}