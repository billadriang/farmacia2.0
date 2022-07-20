


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXovUu7C_ZjTF5lWGFXe3jubvcOCIqUmY",
  authDomain: "farmacia-4beb9.firebaseapp.com",
  projectId: "farmacia-4beb9",
  storageBucket: "farmacia-4beb9.appspot.com",
  messagingSenderId: "714308254853",
  appId: "1:714308254853:web:5ee77f3278c7dc0496bdec",
  measurementId: "G-0CXRET5N0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);