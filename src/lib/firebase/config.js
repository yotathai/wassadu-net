import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoGGcHj6Z5L6usvno1zuUT0zHXN_h5Jnc",
  authDomain: "wassadu-net.firebaseapp.com",
  projectId: "wassadu-net",
  storageBucket: "wassadu-net.firebasestorage.app",
  messagingSenderId: "404578989189",
  appId: "1:404578989189:web:23b785817d491ee93165ec",
  measurementId: "G-VQ2D2M4PNW"
};

// Initialize Firebase only if it hasn't been initialized yet
// This prevents Next.js from throwing errors in development when hot-reloading
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
