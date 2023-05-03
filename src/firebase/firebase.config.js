// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFjPvAH41E3ybRXk0TpvQ0ptmouAySU_g",
  authDomain: "foodies-heaven-auth.firebaseapp.com",
  projectId: "foodies-heaven-auth",
  storageBucket: "foodies-heaven-auth.appspot.com",
  messagingSenderId: "721804145773",
  appId: "1:721804145773:web:58ffd3969067ea4542fb64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
