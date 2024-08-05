// firebase ka sara kam idher hoga

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWVn2WQkCDm76NPcE9k9-WnfcNOOiRFLg",
    authDomain: "product-sell-3b665.firebaseapp.com",
    projectId: "product-sell-3b665",
    storageBucket: "product-sell-3b665.appspot.com",
    messagingSenderId: "45958694272",
    appId: "1:45958694272:web:17e9bfd4572d037cb86d65"
  };

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp, getDocs, onSnapshot };