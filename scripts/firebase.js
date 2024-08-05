// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWVn2WQkCDm76NPcE9k9-WnfcNOOiRFLg",
  authDomain: "product-sell-3b665.firebaseapp.com",
  projectId: "product-sell-3b665",
  storageBucket: "product-sell-3b665.appspot.com",
  messagingSenderId: "45958694272",
  appId: "1:45958694272:web:17e9bfd4572d037cb86d65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
