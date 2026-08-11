export async function generateAssistantResponse(
  message: string,
): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return "Entendo. Quer me contar um pouco mais sobre o que aconteceu?";
}