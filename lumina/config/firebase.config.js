// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "lumina-e1e2a.firebaseapp.com",
  projectId: "lumina-e1e2a",
  storageBucket: "lumina-e1e2a.firebasestorage.app",
  messagingSenderId: "547581623796",
  appId: "1:547581623796:web:33ee698b163c820b82cda1"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};