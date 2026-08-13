import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhMQpm3Aw8rdvvF5EItNDjNJ5faEZQf8o",
  authDomain: "lumy-ia.firebaseapp.com",
  projectId: "lumy-ia",
  storageBucket: "lumy-ia.firebasestorage.app",
  messagingSenderId: "188441163855",
  appId: "1:188441163855:web:8b7cc7687a03a1acaa123a",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);