// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "crud-3b995.firebaseapp.com",
  projectId: "crud-3b995",
  storageBucket: "crud-3b995.appspot.com",
  messagingSenderId: "967680763639",
  appId: "1:967680763639:web:19e4203a88ac16089015f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);