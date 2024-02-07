// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQfL5qbshOvuOqNgb6SF3ERwYGUw8m898",
  authDomain: "gptn-5a97f.firebaseapp.com",
  projectId: "gptn-5a97f",
  storageBucket: "gptn-5a97f.appspot.com",
  messagingSenderId: "217977811327",
  appId: "1:217977811327:web:847fad92262c3a608c2a4a",
  measurementId: "G-XXKHGP4Q64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
