// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mestate-43788.firebaseapp.com",
    projectId: "mestate-43788",
    storageBucket: "mestate-43788.firebasestorage.app",
    messagingSenderId: "868477236369",
    appId: "1:868477236369:web:c58201ecb261620ac5bb30"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);