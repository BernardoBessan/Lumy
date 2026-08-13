"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { Logo } from "@/components/ui/Logo";
import { createAccount } from "@/lib/firebase/auth";

export default function CadastroPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || !password || !confirmPassword) {
      setError("Preencha todos os campos.");
      return;
    }

    if (password.length < 6) {
      setError("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      await createAccount(email.trim(), password);
      router.push("/chat");
    } catch (error) {
      console.error("Erro ao criar conta:", error);

      setError(
        "Não foi possível criar sua conta. Verifique os dados e tente novamente.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F7FAF9] text-[#18322D]">
      <div className="mx-auto flex min-h-screen w-full max-w-md items-center justify-center px-6 py-10">
        <div className="w-full">
          <div className="mb-8 text-center">
            <div className="mb-5 flex justify-center">
              <Logo size="md" />
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-[#18322D]">
              Crie sua conta
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#71837E]">
              Crie seu espaço na Lumy e comece a conversar no seu ritmo.
            </p>
          </div>

          <div className="rounded-3xl border border-[#DCEAE5] bg-white p-6 shadow-sm sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#49635D]"
                >
                  E-mail
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={isLoading}
                  placeholder="seu@email.com"
                  className="w-full rounded-xl border border-[#D5E4DF] bg-[#F9FCFB] px-4 py-3 text-sm text-[#18322D] outline-none transition-colors placeholder:text-[#94A5A0] focus:border-[#3F8F7D] focus:ring-2 focus:ring-[#3F8F7D]/10 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-[#49635D]"
                >
                  Senha
                </label>

                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  disabled={isLoading}
                  placeholder="Crie uma senha"
                  className="w-full rounded-xl border border-[#D5E4DF] bg-[#F9FCFB] px-4 py-3 text-sm text-[#18322D] outline-none transition-colors placeholder:text-[#94A5A0] focus:border-[#3F8F7D] focus:ring-2 focus:ring-[#3F8F7D]/10 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="mb-2 block text-sm font-medium text-[#49635D]"
                >
                  Confirmar senha
                </label>

                <input
                  id="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(event.target.value)
                  }
                  disabled={isLoading}
                  placeholder="Digite a senha novamente"
                  className="w-full rounded-xl border border-[#D5E4DF] bg-[#F9FCFB] px-4 py-3 text-sm text-[#18322D] outline-none transition-colors placeholder:text-[#94A5A0] focus:border-[#3F8F7D] focus:ring-2 focus:ring-[#3F8F7D]/10 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl bg-[#FFF5F3] px-4 py-3 text-sm leading-5 text-[#A05246]"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-[#3F8F7D] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#347A6B] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? "Criando conta..." : "Criar conta"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[#71837E]">
              Já tem uma conta?{" "}
              <a
                href="/login"
                className="font-semibold text-[#3F8F7D] transition-colors hover:text-[#347A6B]"
              >
                Entrar
              </a>
            </p>
          </div>

          <p className="mt-6 text-center text-[11px] leading-5 text-[#98A7A3]">
            A Lumy oferece apoio inicial e não substitui profissionais
            de saúde.
          </p>
        </div>
      </div>
    </main>
  );
}