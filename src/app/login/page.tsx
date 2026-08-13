"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { Logo } from "@/components/ui/Logo";
import {
  login,
  loginWithGoogle,
} from "@/lib/firebase/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || !password) {
      setError("Preencha seu e-mail e sua senha.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      await login(email.trim(), password);
      router.push("/chat");
    } catch {
      setError("E-mail ou senha incorretos.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGoogleLogin() {
    setError("");
    setIsLoading(true);

    try {
      await loginWithGoogle();
      router.push("/chat");
    } catch {
      setError("Não foi possível entrar com o Google.");
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
              Bem-vindo à Lumy
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#71837E]">
              Entre para continuar sua conversa em um espaço feito para
              você.
            </p>
          </div>

          <div className="rounded-3xl border border-[#DCEAE5] bg-white p-6 shadow-sm sm:p-8">
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#D5E4DF] bg-white px-4 py-3 text-sm font-semibold text-[#304943] transition-colors hover:bg-[#F7FAF9] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className="text-base font-bold">G</span>
              Continuar com Google
            </button>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#E5EEEB]" />
              <span className="text-xs text-[#98A7A3]">ou</span>
              <div className="h-px flex-1 bg-[#E5EEEB]" />
            </div>

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
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  disabled={isLoading}
                  placeholder="Sua senha"
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
                {isLoading ? "Entrando..." : "Entrar"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[#71837E]">
              Ainda não tem uma conta?{" "}
              <a
                href="/cadastro"
                className="font-semibold text-[#3F8F7D] transition-colors hover:text-[#347A6B]"
              >
                Criar conta
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