import { useEffect, useState } from "react";

import { generateAssistantResponse } from "@/lib/chat/chatService";
import { observeAuthState } from "@/lib/firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import {
  createConversation,
  loadConversations,
  loadLatestConversation,
  loadMessages,
  saveMessage,
  updateConversationTitle,
  type StoredConversation,
} from "@/lib/firebase/firestore";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [conversations, setConversations] = useState<StoredConversation[]>(
    [],
  );
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);

  async function refreshConversations(uid: string) {
    const loadedConversations = await loadConversations(uid);
    setConversations(loadedConversations);

    return loadedConversations;
  }

  async function selectConversation(
    uid: string,
    selectedConversationId: string,
  ) {
    if (isLoading) {
      return;
    }

    setIsLoadingHistory(true);

    try {
      const storedMessages = await loadMessages(
        uid,
        selectedConversationId,
      );

      setConversationId(selectedConversationId);

      setMessages(
        storedMessages.map((message, index) => ({
          id: index + 1,
          role: message.role,
          content: message.content,
        })),
      );
    } catch (error) {
      console.error("Erro ao carregar conversa:", error);
    } finally {
      setIsLoadingHistory(false);
    }
  }

  async function newConversation() {
    if (isLoading) {
      return;
    }

    setConversationId(null);
    setMessages([]);
  }

  useEffect(() => {
    const unsubscribe = observeAuthState(async (user) => {
      if (!user) {
        setIsLoadingHistory(false);
        return;
      }

      try {
        const loadedConversations = await refreshConversations(user.uid);

        if (loadedConversations.length === 0) {
          setConversationId(null);
          setMessages([]);
          return;
        }

        const latestConversationId = await loadLatestConversation(user.uid);

        if (!latestConversationId) {
          return;
        }

        const storedMessages = await loadMessages(
          user.uid,
          latestConversationId,
        );

        setConversationId(latestConversationId);

        setMessages(
          storedMessages.map((message, index) => ({
            id: index + 1,
            role: message.role,
            content: message.content,
          })),
        );
      } catch (error) {
        console.error("Erro ao carregar histórico da Lumy:", error);
      } finally {
        setIsLoadingHistory(false);
      }
    });

    return () => unsubscribe();
  }, []);

  async function sendMessage(content: string) {
    if (isLoading) {
      return;
    }

    const user = auth.currentUser;

    if (!user) {
      return;
    }

    const newMessage: Message = {
      id: Date.now(),
      role: "user",
      content,
    };

    const updatedMessages = [...messages, newMessage];

    setMessages(updatedMessages);
    setIsLoading(true);

    const assistantMessageId = Date.now() + 1;

    try {
      let currentConversationId = conversationId;

      if (!currentConversationId) {
        currentConversationId = await createConversation(user.uid);
        setConversationId(currentConversationId);

        const title = generateConversationTitle(content);

        await updateConversationTitle(
          user.uid,
          currentConversationId,
          title,
        );
      }

      await saveMessage(user.uid, currentConversationId, {
        role: "user",
        content,
      });

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: assistantMessageId,
          role: "assistant",
          content: "",
        },
      ]);

      let assistantContent = "";

      await generateAssistantResponse(
        updatedMessages.map(({ role, content }) => ({
          role,
          content,
        })),
        (chunk) => {
          assistantContent += chunk;

          setMessages((currentMessages) =>
            currentMessages.map((message) =>
              message.id === assistantMessageId
                ? {
                    ...message,
                    content: assistantContent,
                  }
                : message,
            ),
          );
        },
      );

      if (assistantContent) {
        await saveMessage(user.uid, currentConversationId, {
          role: "assistant",
          content: assistantContent,
        });
      }

      await refreshConversations(user.uid);
    } catch (error) {
      console.error("Erro ao obter resposta da Lumy:", error);

      setMessages((currentMessages) =>
        currentMessages.map((message) =>
          message.id === assistantMessageId
            ? {
                ...message,
                content:
                  "Tive um problema para responder agora. Podemos tentar novamente?",
              }
            : message,
        ),
      );
    } finally {
      setIsLoading(false);
    }
  }

  return {
    messages,
    isLoading,
    isLoadingHistory,
    conversationId,
    conversations,
    sendMessage,
    selectConversation,
    newConversation,
  };
}

function generateConversationTitle(content: string) {
  const text = content
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  if (!text) {
    return "Nova conversa";
  }

  const titleRules = [
    {
      keywords: ["faculdade", "faculdade", "prova", "provas", "estudo", "estudar"],
      title: "Estudos e faculdade",
    },
    {
      keywords: ["trabalho", "emprego", "estágio", "estagio", "entrevista"],
      title: "Trabalho e carreira",
    },
    {
      keywords: ["ansioso", "ansiedade", "preocupado", "preocupação"],
      title: "Ansiedade e preocupações",
    },
    {
      keywords: ["triste", "tristeza", "mal", "desanimado", "desânimo"],
      title: "Como estou me sentindo",
    },
    {
      keywords: ["família", "familia", "pais", "mãe", "mae", "pai"],
      title: "Questões familiares",
    },
    {
      keywords: ["amigo", "amigos", "amizade"],
      title: "Amizades e relações",
    },
    {
      keywords: ["namorado", "namorada", "relacionamento", "término", "termino"],
      title: "Relacionamentos",
    },
    {
      keywords: ["sono", "dormir", "insônia", "insonia"],
      title: "Sono e descanso",
    },
    {
      keywords: ["rotina", "organizar", "organização", "organizacao"],
      title: "Organização da rotina",
    },
  ];

  for (const rule of titleRules) {
    const matches = rule.keywords.some((keyword) =>
      text.includes(keyword),
    );

    if (matches) {
      return rule.title;
    }
  }

  const words = content
    .replace(/[.!?]+/g, "")
    .split(/\s+/)
    .filter(Boolean);

  if (words.length <= 6) {
    return content.trim();
  }

  return `${words.slice(0, 6).join(" ")}...`;
}