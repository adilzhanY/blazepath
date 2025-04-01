// Import the functions you need from the SDKs you need
import {
  initializeApp,
  getApp,
  getApps,
} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAE5wGZD5_pyKFq7jAorXcTkpWI0QhGwIc",
  authDomain: "blazepath-71fe8.firebaseapp.com",
  projectId: "blazepath-71fe8",
  storageBucket: "blazepath-71fe8.firebasestorage.app",
  messagingSenderId: "493998897681",
  appId: "1:493998897681:web:522d425b4b10af205acfb0",
  measurementId: "G-DCX8EEPH5M",
};

// Initialize Firebase
const app = !getApps.length
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
