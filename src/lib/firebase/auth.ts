import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";

import { auth } from "@/lib/firebase/firebase";

const googleProvider = new GoogleAuthProvider();

export async function createAccount(
  email: string,
  password: string,
) {
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  return credential.user;
}

export async function login(
  email: string,
  password: string,
) {
  const credential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );

  return credential.user;
}

export async function loginWithGoogle() {
  const credential = await signInWithPopup(
    auth,
    googleProvider,
  );

  return credential.user;
}

export async function logout() {
  await signOut(auth);
}

export function observeAuthState(
  callback: (user: User | null) => void,
) {
  return onAuthStateChanged(auth, callback);
}