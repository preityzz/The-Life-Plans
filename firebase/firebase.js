
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCbUpQLmDNa7sfK96Xld1dcQtWQ2sBtAaY",
  authDomain: "fir-todo-app-e7c7b.firebaseapp.com",
  projectId: "fir-todo-app-e7c7b",
  storageBucket: "fir-todo-app-e7c7b.appspot.com",
  messagingSenderId: "1004815383246",
  appId: "1:1004815383246:web:f4a23f24753b83abb52e9f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);