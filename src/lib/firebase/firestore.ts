import {
  addDoc,
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase/firebase";

type MessageRole = "user" | "assistant";

export type StoredMessage = {
  id: string;
  role: MessageRole;
  content: string;
};

export async function createConversation(
  uid: string,
  title = "Nova conversa",
) {
  const conversationRef = await addDoc(
    collection(db, "users", uid, "conversations"),
    {
      title,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
  );

  return conversationRef.id;
}

export async function saveMessage(
  uid: string,
  conversationId: string,
  message: {
    role: MessageRole;
    content: string;
  },
) {
  const messagesRef = collection(
    db,
    "users",
    uid,
    "conversations",
    conversationId,
    "messages",
  );

  await addDoc(messagesRef, {
    role: message.role,
    content: message.content,
    createdAt: serverTimestamp(),
  });

  await updateDoc(
    doc(db, "users", uid, "conversations", conversationId),
    {
      updatedAt: serverTimestamp(),
    },
  );
}

export async function loadLatestConversation(uid: string) {
  const conversationsRef = collection(
    db,
    "users",
    uid,
    "conversations",
  );

  const conversationsQuery = query(
    conversationsRef,
    orderBy("updatedAt", "desc"),
    limit(1),
  );

  const snapshot = await getDocs(conversationsQuery);

  if (snapshot.empty) {
    return null;
  }

  return snapshot.docs[0].id;
}

export async function loadMessages(
  uid: string,
  conversationId: string,
): Promise<StoredMessage[]> {
  const messagesRef = collection(
    db,
    "users",
    uid,
    "conversations",
    conversationId,
    "messages",
  );

  const messagesQuery = query(
    messagesRef,
    orderBy("createdAt", "asc"),
  );

  const snapshot = await getDocs(messagesQuery);

  return snapshot.docs.map((message) => {
    const data = message.data();

    return {
      id: message.id,
      role: data.role as MessageRole,
      content: data.content as string,
    };
  });
}

export type StoredConversation = {
  id: string;
  title: string;
};

export async function loadConversations(
  uid: string,
): Promise<StoredConversation[]> {
  const conversationsRef = collection(
    db,
    "users",
    uid,
    "conversations",
  );

  const conversationsQuery = query(
    conversationsRef,
    orderBy("updatedAt", "desc"),
  );

  const snapshot = await getDocs(conversationsQuery);

  return snapshot.docs.map((conversation) => {
    const data = conversation.data();

    return {
      id: conversation.id,
      title: (data.title as string) || "Nova conversa",
    };
  });
}

export async function updateConversationTitle(
  uid: string,
  conversationId: string,
  title: string,
) {
  await updateDoc(
    doc(db, "users", uid, "conversations", conversationId),
    {
      title,
      updatedAt: serverTimestamp(),
    },
  );
}