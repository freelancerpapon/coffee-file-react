// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDspCzsn0tHk75bwpQlYYd0O4-2fHdhjVA",
  authDomain: "coffee-store-project-f4ccd.firebaseapp.com",
  projectId: "coffee-store-project-f4ccd",
  storageBucket: "coffee-store-project-f4ccd.appspot.com",
  messagingSenderId: "1050198613743",
  appId: "1:1050198613743:web:5284dcda51039ca885851a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;