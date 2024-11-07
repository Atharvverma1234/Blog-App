// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-d245f.firebaseapp.com",
  projectId: "blog-app-d245f",
  storageBucket: "blog-app-d245f.appspot.com",
  messagingSenderId: "800719029983",
  appId: "1:800719029983:web:bf6179ed3797140b7dcb6a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);