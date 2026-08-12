import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const message = body.message;

  if (!message || typeof message !== "string") {
    return NextResponse.json(
      { error: "Mensagem inválida." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message: "Entendo. Quer me contar um pouco mais sobre o que aconteceu?",
  });
}