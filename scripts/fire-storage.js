// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

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

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);

// Create a storage reference from our storage service

export { storage, ref, uploadBytes, getDownloadURL };