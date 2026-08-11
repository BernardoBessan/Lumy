import { Logo } from "@/components/ui/Logo";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7FAF9] text-[#18322D]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 sm:px-8 lg:px-12">
        <Header />

        <Hero />

        <footer className="py-6 text-center text-xs text-[#8A9A95]">
          Feito para tornar o cuidado emocional mais acessível.
        </footer>
      </div>
    </main>
  );
}